"use client";

import React from "react";

function Head() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto">
        <div className="flex flex-col md:flex-row items-center xl:px-40 py-40 md:mt-20">
          <div className="md:w-2/3 w-full font-graphik px-10 mb-10 md:mb-0">
            <p className="font-graphikExtralight 2xl:text-5xl lg:text-3xl text-2xl mb-5">
              <span className="font-graphik">Embassy</span> WebExp
            </p>
            <div className="py-2">
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-7">
                  Fiecare linie de cod devine o poveste,
                </span>
              </h4>
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-8">
                  fiecare design devine o expresie,
                </span>
              </h4>
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-9">
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
            <div className="w-1/2 h-auto aspect-square bg-gray-300 rounded-xl mx-auto"></div>
          </div>
        </div>
        {/* <hr className="w-[90vw] mx-auto border-2" /> */}
      </div>
    </>
  );
}

export default Head;
