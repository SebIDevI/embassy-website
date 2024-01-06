"use client";

import React from "react";

import animationData from "@/public/lottie/anim2.json";
import LottieControl from "@/components/lottie/page";

function Head() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto text-slate-200">
        <div className="flex flex-col md:flex-row items-center xl:px-40 py-40 md:mt-20">
          <div className="md:w-2/3 w-full font-graphik px-10 mb-10 md:mb-0">
            <p className="font-graphikExtralight 2xl:text-5xl lg:text-3xl text-2xl mb-5">
              <span className="font-graphik">Embassy</span> WebExp
            </p>
            <div className="py-2">
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-[200%] animate-ttlSld inline-block delay-3">
                  Fiecare linie de cod devine o poveste,
                </span>
              </h4>
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-[200%] animate-ttlSld inline-block delay-4">
                  fiecare design devine o expresie,
                </span>
              </h4>
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-[200%] animate-ttlSld inline-block delay-5">
                  iar fiecare strategie SEO devine un ghid.
                </span>
              </h4>
            </div>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              De la shop-uri online pana la website-uri de prezentare, de la
              integrarea de plati, pana la conexiuni avansate de gestionare de
              stocuri si baze de date, <b className="font-graphik">Embassy</b>{" "}
              WebExp este aici pentru a va contura website-ul asa cum doriti.
            </p>
          </div>
          <div className="w-1/3">
            <div className="w-full h-auto aspect-square rounded-xl mx-auto">
              <LottieControl animationData={animationData} />
            </div>
          </div>
        </div>
        {/* <hr className="w-[90vw] mx-auto border-2" /> */}
      </div>
    </>
  );
}

export default Head;
