import React from "react";
import LottieControl from "@/components/lottie/page";
import animationData from "@/public/lottie/anim9.json";

function Head() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto text-black mt-28 md:mt-0">
        <div className="flex flex-col md:flex-row items-center md:mt-20">
          <div className="w-full font-graphik px-1 mb-10 md:mb-0">
            <div className="py-2">
              <h4 className="2xl:text-7xl lg:text-5xl text-4xl font-proBlack overflow-hidden bg-transparent my-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-3">
                  Povestea
                </span>
              </h4>
              <h4 className="2xl:text-7xl lg:text-5xl text-4xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-[200%] animate-ttlSld uppercase inline-block delay-5">
                  Embassy
                </span>
              </h4>
            </div>
            <p className="pt-10 lg:text-base text-sm font-graphik w-4/5">
              Embassy este o echipă tânără care contribuie la digitalizarea
              business urilor din diferite nise. <br />
              Pornind de la clipuri virale pe social media realizate pentru
              proiecte personale, Embassy ofera astazi servicii de digital
              marketing, foto/video, strategie, web development and more.
            </p>
          </div>
          <div className="w-full">
            <div className="w-full h-auto aspect-square rounded-xl mx-auto">
              <LottieControl animationData={animationData} />
            </div>
          </div>
        </div>
        <hr className="w-full mx-auto border-2 mt-10" />
      </div>
    </>
  );
}

export default Head;
