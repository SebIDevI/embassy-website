import React from "react";
import Image from "next/image";

import strArr from "@/public/arrows/arrStr.svg";
import roundArr from "@/public/arrows/round2.svg";
import mid from "@/public/ff.png";

import anim4 from "@/public/lottie/anim4.json";
import LottieControl from "@/components/lottie/page";

function Arrow() {
  return (
    <>
      <div className="max-w-6xl font-pro text-xl mx-auto">
        <div className="md:grid hidden grid-cols-5 grid-rows-5 gap-0">
          {/* ----------------------- row 1 ---------------------- */}
          <div className="text-center max-h-20 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 translate-x-1/4 h-full"
            />
          </div>
          <div className="text-center col-span-3">
            <p>Strategii Ads</p>
          </div>
          <div className="text-center max-h-20 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 -translate-x-1/4 h-full rotate-90"
            />
          </div>
          {/* ----------------------- row 2 ---------------------- */}
          <div className="text-center flex items-center justify-center">
            <p>Analiza rezultatelor</p>
          </div>
          <div className="col-span-3 row-span-3">
            <div className="w-auto h-96 aspect-square rounded-xl relative bg-contain mx-12 -scale-x-100">
              <div className="absolute w-full h-full top-0 left-0 -translate-x-[10%] scale-125">
                {/* <Image src={mid} alt="Chart" className="w-full h-full" /> */}
                <LottieControl animationData={anim4} />
              </div>
            </div>
          </div>
          <div className="text-center flex items-center justify-center">
            <p>Creare de content</p>
          </div>
          {/* ----------------------- row 3 ---------------------- */}
          <div className="text-center max-h-20 flex items-center justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="-rotate-[45deg] -scale-y-100 h-full"
            />
          </div>
          <div className="text-center max-h-20 flex items-center justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="rotate-[135deg] -scale-y-100 h-full"
            />
          </div>
          {/* ----------------------- row 4 ---------------------- */}
          <div className="text-center flex items-center justify-center">
            <p>Vânzare</p>
          </div>
          <div className="text-center flex items-center justify-center">
            <p>Implementare Instagram / Facebook / TikTok Ads</p>
          </div>
          {/* ----------------------- row 5 ---------------------- */}
          <div className="text-center  max-h-20 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 -rotate-90 h-full"
            />
          </div>
          <div className="text-center flex items-end">
            <p>Potențiali clienți</p>
          </div>
          <div className="text-center max-h-20 flex items-end justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="-rotate-[135deg] -scale-y-100 h-full translate-y-2/3"
            />
          </div>
          <div className="text-center flex items-end pb-4">
            <p>Testare ads</p>
          </div>
          <div className="text-center  max-h-20 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 rotate-180 h-full"
            />
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center justify-center gap-8">
          <p className="text-center">Strategii Social Media</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Content Creation / Editing</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Meta / TikTok Ads</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Appointment Setting (Optional)</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Email Marketing</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Google Review Campaign</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Database Reactivation Campaign</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Analytics</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Social Media Management</p>
        </div>
      </div>
      <hr className="w-full mx-auto border-2 opacity-50 my-28" />
    </>
  );
}

export default Arrow;
