import React from "react";
import Image from "next/image";

// import godpod from "@/public/slider/godpod.jpg";
import globalbox from "@/public/slider/logo globalbox.png";
import cnp from "@/public/slider/hrLogo.png";
// import dus from "@/public/slider/dusss.png";
import history from "@/public/slider/logo.png";
import glob from "@/public/slider/globalFin.png";
import virg from "@/public/slider/virgggg.png";
import cyclon from "@/public/slider/logo_cyclon_200x200.svg";
import tacos from "@/public/slider/LOGO_TB.png";

function Slider() {
  // const imageArray = Array(8).fill(null);
  const imageArray = [
    // godpod,
    globalbox,
    // dus,
    history,
    glob,
    virg,
    cnp,
    cyclon,
    tacos,
  ];

  return (
    <div className="flex justify-center w-full h-[20vh] min-h-[200px] relative my-4">
      <div className="w-full h-full overflow-hidden relative flex">
        <div className="flex items-center w-full h-full animate-slide absolute left-0 top-0">
          {imageArray.map((e, i) => (
            <Image
              key={i}
              src={e}
              alt="Sebdev logo"
              className={`${"w-[200px] h-[200px]"} object-fit mx-[40px] filter ${
                e != virg ? "grayscale contrast-[.5]" : ""
              } opacity-70`}
            />
          ))}
          {imageArray.map((e, i) => (
            <Image
              key={i}
              src={e}
              alt="Sebdev logo"
              className={`${"w-[200px] h-[200px]"} object-fit mx-[40px] filter ${
                e != virg ? "grayscale contrast-[.5]" : ""
              } opacity-70`}
            />
          ))}

          {/* ${
                i % 2 ? "rotate-90" : i % 3 ? "rotate-180" : ""
              } */}
        </div>
      </div>
    </div>
  );
}

export default Slider;
