import React, { useState, useEffect } from "react";

import { FaBell } from "react-icons/fa";

import { motion, AnimatePresence, Variants } from "framer-motion";

import { useCursorVariant } from "@/config";
import Link from "next/link";
import { ButtonAnim } from "./ButtonAnim";

const notif: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

interface BellProp {
  color: string;
}

export const Bell: React.FC<BellProp> = ({ color }) => {
  const [bell, setBell] = useState(false);

  useEffect(() => {
    function handleBodyClick(event: MouseEvent) {
      // Check if the click is outside the notification div
      const isOutsideNotification =
        bell && !(event.target as Element).closest(".notification-div");

      if (isOutsideNotification) {
        setBell(false);
      }
    }

    // Add event listener to the body for handling clicks
    document.body.addEventListener("click", handleBodyClick);

    // Remove the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [bell]);

  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <div className="text-2xl flex md:w-80 w-3/4 relative items-center justify-end">
      <div
        className={`relative after:w-4 after:content-['2'] after:text-white after:text-[10px] after:flex after:justify-center after:items-center after:h-4 after:font-bold after:rounded-full after:bg-red-500 after:absolute after:-top-1 after:-right-1 notification-div`}
        onMouseEnter={() => sellEnter()}
        onMouseLeave={() => sellLeave()}
      >
        <ButtonAnim
          color1="blueEmb"
          color2="blueEmbDark"
          className="text-xl text-center text-white relative px-2 py-2 aspect-square"
        >
          <FaBell
            onClick={() => (bell ? setBell(false) : setBell(true))}
            className="cursor-pointer"
          />
        </ButtonAnim>
      </div>
      <AnimatePresence mode="wait">
        {bell && (
          <motion.div
            onMouseEnter={() => sellEnter()}
            onMouseLeave={() => sellLeave()}
            variants={notif}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`
             notification-div text-center absolute top-[150%] left-0 md:left-auto md:right-0 border-2 border-gray-500 rounded-3xl bg-slate-100 w-full md:w-[150%]`}
          >
            <div className="p-5">
              <h5 className="font-pro text-xl">FREE ONLINE SETUP 🌐</h5>
              <p className="text-sm">
                Ia-ti acum unul din pachetele noastre{" "}
                <b className="font-pro">CREATIVE</b> sau{" "}
                <b className="font-pro">PPC</b> si primesti{" "}
                <b className="font-pro">GRATUIT &quot;Online Setup&quot;</b>{" "}
                Package (Logo, Google Business, Social Media Setup)
              </p>
            </div>
            <hr className="mx-5 border-gray-300" />
            <div className="p-5">
              <h5 className="font-pro text-xl">
                FOLOSEȘTE REDUCEREA SECRETĂ 🤫
              </h5>
              <p className="text-sm">
                Contactează-ne prin oricare din formularele noastre, adaugă la
                finalul mesajului tău #DISCOVERYCALL si vei primi o reducere in
                timpul apelului cu noi
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div onMouseEnter={() => sellEnter()} onMouseLeave={() => sellLeave()}>
        <ButtonAnim
          color1="blueEmb"
          color2="blueEmbDark"
          link="/contact"
          className="ml-3 py-2 px-5"
        >
          Contact
        </ButtonAnim>
      </div>
      {/* <Link
        href={"/contact"}
        className="text-sm p-1 text-white px-4 bg-blue-700 rounded-lg mx-4"
        onMouseEnter={() => sellEnter()}
        onMouseLeave={() => sellLeave()}
      >
        Contact
      </Link> */}
    </div>
  );
};
