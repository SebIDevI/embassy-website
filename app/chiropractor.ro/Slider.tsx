import React from "react";
import Image from "next/image";

import OsteopathLogo from "@/public/logo osteopath concept black.png";
import KinetoLogo from "@/public/Logo KinetoLin.png";

function Slider() {
  return (
    <>
      <h5 className="text-lg font-graphik text-center uppercase">
        Parteneri oficiali
      </h5>
      <div className="flex justify-center w-full h-[10vh] sm:h-[20vh] min-h-[50px] md:h-[20vh] md:min-h-[200px] relative my-20">
        <div className="w-full h-full relative flex">
          <div className="flex justify-center md:gap-20 gap-5 items-center w-full h-full absolute left-1/2 top-0 -translate-x-1/2">
            <div className="w-auto h-full max-w-[200px] flex justify-center items-center">
              <Image
                src={OsteopathLogo}
                alt="Chiropractor Logo"
                className="max-w-[200px] w-[90%] mx-auto h-auto object-fit md:mx-[40px] filter opacity-80"
              />
            </div>
            <div className="w-auto h-full max-w-[200px] flex justify-center items-center">
              <Image
                src={KinetoLogo}
                alt="Chiropractor Logo"
                className="max-w-[200px] w-[90%] mx-auto h-auto object-fit md:mx-[40px] filter opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
