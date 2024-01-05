import React, { useState } from "react";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { FaCaretRight } from "react-icons/fa";

import { useCursorVariant } from "@/config";
import Link from "next/link";

const variantsP: Variants = {
  hidden: {
    width: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  visible: {
    width: "100%",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const variantsIcon: Variants = {
  small: {
    fontSize: "16px",
    transform: "translate(0px)",
  },
  big: {
    fontSize: "20px",
    transform: "translate(4px, -2px)",
  },
};

function Hvq() {
  const [isMOver, setIsMOver] = useState(false);

  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <div className="container text-center py-20">
      <p className="font-graphikLight">Suport</p>
      <h5 className="text-5xl font-pro py-10">Aveți Întrebări?</h5>
      <p className="w-2/5 mx-auto mb-10">
        Suntem aici să ne asigurăm că profitați cât mai mult de experiența
        Embassy Network. Vă rugăm contactați echipa pentru orice întrebări, sau
        pentru a obține ajutor de la echipa noastră.
      </p>
      <Link
        href="/contact"
        className="flex justify-center text-black pt-3 gap-1 relative w-auto"
      >
        <AnimatePresence mode="wait">
          <div
            className="flex justify-center gap-1 cursor-pointer"
            onMouseEnter={() => {
              setIsMOver(true);
              sellEnter();
            }}
            onMouseLeave={() => {
              setIsMOver(false);
              sellLeave();
            }}
          >
            <div className="w-auto relative">
              {isMOver ? (
                <motion.div
                  variants={variantsP}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blueEmb"
                ></motion.div>
              ) : (
                <motion.div
                  variants={variantsP}
                  initial="hidden"
                  animate="hidden"
                  exit="hidden"
                  className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blueEmb"
                ></motion.div>
              )}
              <p className="font-graphik">Contactați-ne</p>
            </div>{" "}
            {isMOver ? (
              <motion.div
                variants={variantsIcon}
                initial="small"
                animate="big"
                exit="small"
              >
                <FaCaretRight className="text-blueEmb mt-[3px]" />
              </motion.div>
            ) : (
              <motion.div
                variants={variantsIcon}
                initial="small"
                animate="small"
                exit="small"
              >
                <FaCaretRight className="text-blueEmb mt-[3px]" />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </Link>
    </div>
  );
}

export default Hvq;
