import React from "react";
import LottieControl from "@/components/lottie/page";
import animationData from "@/public/lottie/anim8.json";
import { TtlSlide } from "@/components/TtlSlide";

function Viziune() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto text-black">
        <div className="flex flex-col md:flex-row items-center md:mt-28">
          <div className="w-full">
            <div className="w-full h-auto rounded-xl mx-auto">
              <LottieControl animationData={animationData} />
            </div>
          </div>
          <div className="w-full font-graphik px-1 mb-10 md:mb-0">
            <div className="py-2">
              <TtlSlide className="mx-0 my-2 2xl:text-7xl lg:text-5xl text-4xl font-proBlack">
                Viziune
              </TtlSlide>
            </div>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              Viziunea noastră este de a avea o echipă de producție suficient de
              mare astfel încât să aducem pe planșa de social din românia
              propriul nostru content demn de standardele, ideile și așteptările
              Embassy. NEXT LEVEL CONTENT IS COMING.
            </p>
          </div>
        </div>
        <hr className="w-full mx-auto border-2 mt-28" />
      </div>
    </>
  );
}

export default Viziune;
