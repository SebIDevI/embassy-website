import React from "react";

import anim6 from "@/public/lottie/anim6.json";
import LottieControl from "@/components/lottie/page";

function Head() {
  return (
    <>
      <div className="min-h-[60vh]">
        <div className="flex flex-col gap-10 md:flex-row items-center md:mt-40">
          <div className="md:w-1/2 w-full font-graphik mb-10 md:mb-0">
            <p className="font-graphikExtralight 2xl:text-3xl lg:text-xl text-lg mb-5">
              <span className="font-graphik">Embassy</span> PPC
            </p>
            <h4 className="2xl:text-7xl lg:text-5xl text-4xl font-proBlack py-2">
              Embassy PPC aduce o revoluție în sistemul de achizitie de clienți
              cu un pachet complet.
            </h4>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              Embassy PPC redefinește accelerarea afacerii tale cu un pachet
              integral care depășește barierele marketingului digital – de la
              Social Media Management și Creare de Content, la
              Instagram/Facebook/TikTok Ads, Email Marketing și campanii pentru
              Google Reviews. Transformăm fiecare clic într-un pas concret către
              succesul tău.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full h-auto aspect-square rounded-xl mx-auto">
              <LottieControl animationData={anim6} />
            </div>
          </div>
        </div>
        <hr className="w-full mx-auto border-2 opacity-50 my-20" />
      </div>
    </>
  );
}

export default Head;
