import LottieControl from "@/components/lottie/page";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

import anim13 from "@/public/lottie/anim13.json";

const tt = [
  {
    titlu: "Asiguram productia videoclipurilor",
  },
  {
    titlu: "Managementul postarilor",
  },
  {
    titlu: "Evenimente si Conferinte chiropractor.ro (In curand)",
  },
  //   ==============================================================================
  {
    titlu: "Strategie, Feedback si Suport",
  },
  {
    titlu: "Extra-vizibilitate pe toate platformele de social-media",
  },
  {
    titlu: "Rapoarte si analize constante",
  },
];

function Types() {
  return (
    <>
      <div className="mb-14">
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
            <LottieControl animationData={anim13} />
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

export default Types;
