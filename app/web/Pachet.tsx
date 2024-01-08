"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

import p1 from "@/public/WebDev 1.png";
import p2 from "@/public/WebDev 2.png";
import p3 from "@/public/WebDev 3.png";

import anim3 from "@/public/lottie/anim3.json";
import LottieControl from "@/components/lottie/page";

const tt = [
  {
    titlu: "Fiecare functionalitate este realizata dupa nevoile clientului",
  },
  {
    titlu: "Creare baze de date",
  },
  {
    titlu: "Sisteme complexe si personalizate de gestiune a stocurilor",
  },
  //   ==============================================================================
  {
    titlu: "Rapoarte si analize constante",
  },
  {
    titlu:
      "Website-ul fiind construit de la 0, ne ocupam cu atenție de fiecare detaliu",
  },
  {
    titlu: "Nu lucram cu template-uri",
  },
];

function Pachet() {
  return (
    <>
      <div className="mb-14 text-slate-200">
        <div className="flex md:flex-row gap-4 flex-col items-center sm:px-10 px-2 md:px-0 md:gap-10 mt-10 text-base">
          <div className="md:min-w-[25%] md:pe-5 min-w-[50%]">
            <ul>
              {tt.map((e, i) =>
                i < 3 ? (
                  <li className="py-4 flex items-start gap-2" key={i}>
                    <div>
                      <FaArrowDown className="text-blue-500 mt-[4px]" />
                    </div>
                    <span>{e.titlu}</span>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="w-1/2 h-full md:block hidden relative aspect-square">
            {/* <Image
            src={p1}
            alt="Picture1"
            className="absolute top-0 left-0 w-3/4 h-3/4 -z-10"
          />
          <Image
            src={p2}
            alt="Picture2"
            className="absolute top-1/4 right-0 w-1/2 h-1/2 z-10"
          />
          <Image
            src={p3}
            alt="Picture3"
            className="absolute bottom-0 left-1/2 w-1/2 h-1/2 -translate-x-1/2 z-0"
          /> */}
            <LottieControl animationData={anim3} />
          </div>
          <div className="md:min-w-[25%] md:ps-5 min-w-[50%]">
            <ul>
              {tt.map((e, i) =>
                i >= 3 ? (
                  <li className="py-4 flex items-start gap-2" key={i}>
                    <div>
                      <FaArrowDown className="text-blue-500 mt-[4px]" />
                    </div>
                    <span>{e.titlu}</span>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-full mx-auto border my-10 mb-20 opacity-50" />
    </>
  );
}

export default Pachet;
