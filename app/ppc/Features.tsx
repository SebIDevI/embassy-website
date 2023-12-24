import React from "react";
import Image from "next/image";

import roundArr from "@/public/arrows/round2.svg";

import { FaCircle } from "react-icons/fa";

function Features() {
  return (
    <div className="container">
      <h4 className="font-proBlack text-5xl py-10">Features</h4>
      <div className="flex justify-between items-center">
        <ul className="w-1/2 flex flex-col gap-4 text-2xl">
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
          <div className="flex items-center justify-center">
            <div className="w-1/3 flex items-center justify-center h-full">
              <Image src={roundArr} alt={"Round Arrow"} className="w-1/3" />
            </div>
            <ul className="w-2/3 flex flex-col gap-2 pt-5 text-lg">
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
        <div className="w-1/2 h-full bg-slate-300 rounded-md"></div>
      </div>
    </div>
  );
}

export default Features;
