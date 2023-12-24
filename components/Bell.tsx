import React, { useState, useEffect } from "react";

import { FaBell } from "react-icons/fa";

import { motion, AnimatePresence, Variants } from "framer-motion";

import { useCursorVariant } from "@/config";
import Link from "next/link";

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
    <div className="text-2xl flex w-1/3 relative items-center justify-center">
      <div
        className={`relative after:w-3 after:border-2 after:border-${color} after:h-3 after:rounded-full after:bg-red-500 after:block after:absolute after:top-1/2 after:left-1/2 after:-translate-y-full notification-div`}
      >
        <FaBell
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
          onClick={() => (bell ? setBell(false) : setBell(true))}
          className="cursor-pointer"
        />
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
             notification-div text-center absolute top-[150%] right-0 border-2 border-gray-500 rounded-3xl bg-slate-100 w-[150%]`}
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
      <Link
        href={"/contact"}
        className="text-sm p-1 text-white px-4 bg-blue-700 rounded-lg mx-4"
        onMouseEnter={() => sellEnter()}
        onMouseLeave={() => sellLeave()}
      >
        Contact
      </Link>
    </div>
  );
};
