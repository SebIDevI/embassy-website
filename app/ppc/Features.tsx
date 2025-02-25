import React, { useRef } from "react";
import Image from "next/image";

import roundArr from "@/public/arrows/round2.svg";
import mana from "@/public/mana aia buna raw.png";

import { FaCircle } from "react-icons/fa";

import { motion, useScroll, useTransform } from "framer-motion";
import { TtlSlide } from "@/components/TtlSlide";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const y = useTransform(scrollYProgress, (latest) => 300 + latest * -300);

  return (
    <div ref={ref} className="md:w-1/2 relative rounded-md hidden md:block">
      <motion.div className="absolute -top-[300px]" style={{ translateY: y }}>
        <Image
          src={mana}
          alt={"Mână embassy"}
          className="max-h-[700px] w-auto px-10"
        />
      </motion.div>
    </div>
  );
}

function Features() {
  return (
    <>
      {/* <h4 className="font-proBlack text-5xl py-10">Features</h4> */}
      <TtlSlide className="font-proBlack text-5xl px-0 mx-0 mb-10">
        Features
      </TtlSlide>
      <div className="md:flex justify-between items-center">
        <ul className="md:w-1/2 flex flex-col gap-4 text-2xl">
          <li className="flex gap-1 items-center">
            <FaCircle className="p-2 text-slate-800" /> Pachet & Strategii
            Complete
          </li>
          <li className="flex gap-1 items-center">
            <FaCircle className="p-2 text-slate-800" /> Utilizarea Eficientă a
            Tool-urilor
          </li>
          <li className="flex gap-1 items-center">
            <FaCircle className="p-2 text-slate-800" /> Eficiență în Scalare
          </li>
          <li className="flex gap-1 items-center">
            <FaCircle className="p-2 text-slate-800" /> Rapoarte lunare
          </li>
          <li className="flex gap-1 items-center">
            <FaCircle className="p-2 text-slate-800" /> Proces &quot;Online
            Setup&quot;
          </li>
          <div className="flex sm:items-center justify-center">
            <div className="sm:w-1/3 w-1/4 flex sm:mt-0 mt-6 items-center justify-center h-full">
              <Image
                src={roundArr}
                alt={"Round Arrow"}
                className="sm:w-1/3 w-full"
              />
            </div>
            <ul className="sm:w-2/3 3/4 flex flex-col gap-2 pt-5 text-lg">
              <li className="flex items-center gap-1">
                <FaCircle className="p-[6px] text-gray-500 opacity-50" /> Logo
                Creation
              </li>
              <li className="flex items-center gap-1">
                <FaCircle className="p-[6px] text-gray-500 opacity-50" /> Google
                Business SETUP
              </li>
              <li className="flex items-center gap-1">
                <FaCircle className="p-[6px] text-gray-500 opacity-50" /> Social
                Media Accounts SETUP
              </li>
            </ul>
          </div>
        </ul>
        <Item />
      </div>
    </>
  );
}

export default Features;
