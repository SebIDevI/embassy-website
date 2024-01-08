import React from "react";
import LottieControl from "@/components/lottie/page";
import animationData from "@/public/lottie/anim10.json";
import { TtlSlide } from "@/components/TtlSlide";

function Misiune() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto text-black">
        <div className="flex flex-col md:flex-row items-center md:mt-28">
          <div className="w-full">
            <div className="w-full h-auto aspect-square rounded-xl mx-auto">
              <LottieControl animationData={animationData} />
            </div>
          </div>
          <div className="w-full font-graphik px-1 mb-10 md:mb-0">
            <div className="py-2">
              <TtlSlide className="mx-0 my-2 2xl:text-7xl lg:text-5xl text-4xl font-proBlack">
                Misiune
              </TtlSlide>
            </div>
            <p className="pt-10 lg:text-base text-sm font-graphik w-4/5">
              Misiunea noastră la Embassy Network este să inovăm crearea de
              conținut pentru bussiness-uri din diferite nișe și nu numai.
              Evoluăm pe piața serviciilor de digital marketing, oferind
              clienților noștri pachete complete de foto/video, strategie,
              campanii PPC, creare de website-uri, SEO etc.
            </p>
          </div>
        </div>
        <hr className="w-full mx-auto border-2 mt-28" />
      </div>
    </>
  );
}

export default Misiune;
