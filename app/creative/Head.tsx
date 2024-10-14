import React from "react";
import LottieControl from "@/components/lottie/page";
import animationData from "@/public/lottie/anim1.json";

function Head() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto text-white mt-40 md:mt-0">
        <div className="flex flex-col md:flex-row items-center md:mt-40">
          <div className="w-full font-graphik px-1 mb-10 md:mb-0">
            <p className="font-graphikExtralight 2xl:text-2xl lg:text-xl text-lg mb-5">
              <span className="font-graphik">Embassy</span> Creative
            </p>

            <div className="py-2">
              <h4 className="lg:text-5xl text-4xl font-proBlack overflow-hidden bg-transparent my-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-3">
                  Cele mai bune unelte pentru a transforma
                </span>
              </h4>
              <h4 className="lg:text-5xl text-4xl font-proBlack overflow-hidden bg-transparent my-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-5">
                  ideile in povesti vizuale
                </span>
              </h4>
              <h4 className="lg:text-5xl text-4xl font-proBlack overflow-hidden bg-transparent my-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-7">
                  pe social media
                </span>
              </h4>
            </div>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              Embassy Network si crearea de continut premium sunt sinonime de
              mai bine de 6 ani de zile. Prezenta in online a oricarui business
              a devenit cruciala in ultimii ani. Dar nu oricum. Hai sa vedem cum
              iti putem contura povestea.
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
