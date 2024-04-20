import React from "react";
import Image from "next/image";

import OsteopathLogo from "@/public/logo osteopath concept black.png";

function Slider() {
  return (
    <>
      <h5 className="text-lg font-graphik text-center uppercase">
        Partener oficial
      </h5>
      <div className="flex justify-center w-full h-[10vh] sm:h-[20vh] min-h-[50px] md:h-[20vh] md:min-h-[200px] relative my-20">
        <div className="w-full h-full overflow-hidden relative flex">
          <div className="flex items-center w-auto h-full absolute left-1/2 top-0 -translate-x-1/2">
            <Image
              src={OsteopathLogo}
              alt="Chiropractor Logo"
              className="md:w-[200px] w-5/6 mx-auto h-auto object-fit md:mx-[40px] filter opacity-80"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
