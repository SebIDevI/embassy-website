"use client";

import React from "react";

import animationData from "@/public/lottie/anim2.json";
import LottieControl from "@/components/lottie/page";

function Head() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto text-slate-200 mt-40 md:mt-0">
        <div className="flex flex-col md:flex-row items-center md:mt-40">
          <div className="w-full font-graphik mb-10 md:mb-0">
            <p className="font-graphikExtralight 2xl:text-3xl lg:text-xl text-lg mb-5">
              <span className="font-graphik">Embassy</span> WebExp
            </p>
            <div className="py-2">
              <h4 className="2xl:text-6xl lg:text-4xl text-3xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-[200%] animate-ttlSld inline-block delay-3">
                  Fiecare linie de cod devine o poveste,
                </span>
              </h4>
              <h4 className="2xl:text-6xl lg:text-4xl text-3xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-[200%] animate-ttlSld inline-block delay-4">
                  fiecare design devine o expresie,
                </span>
              </h4>
              <h4 className="2xl:text-6xl lg:text-4xl text-3xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-[200%] animate-ttlSld inline-block delay-5">
                  iar fiecare strategie SEO devine un ghid.
                </span>
              </h4>
            </div>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              De la website-uri de prezentare pana la shop-uri online, de la
              integrarea de plati, pana la conexiuni avansate de gestionare de
              stocuri si baze de date, <b className="font-graphik">Embassy</b>{" "}
              WebExp este aici pentru a va contura website-ul asa cum doriti.
            </p>
          </div>
          <div className="w-full">
            <div className="w-full h-auto aspect-square rounded-xl mx-auto">
              <LottieControl animationData={animationData} />
            </div>
          </div>
        </div>
        <hr className="w-full mx-auto border my-10 mb-20 opacity-50" />
      </div>
    </>
  );
}

export default Head;
