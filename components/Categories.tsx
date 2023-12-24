import React from "react";
import Image from "next/image";
import FirstAid from "@/public/First Aid.png";
import bone from "@/public/bone.png";
import car from "@/public/car.png";

function Categories() {
  return (
    <div className="w-full h-24 bg-white md:sticky top-10 lg:top-[88px] z-30 border-t-4 border-t-[#2770a13e]">
      <div className="h-full flex flex-col font-pro lg:flex-row justify-around items-center gap-10">
        <div className="relative">
          <h3 className="ps-12 bg-[#E8F1F5] rounded-2xl p-3 uppercase font-bold text-md">
            Automotive
          </h3>
          <div className="absolute h-[175%] w-auto top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Image src={car} alt="Car" className="h-full w-auto" />
          </div>
        </div>
        <div className="relative">
          <h3 className="ps-12 bg-[#E8F1F5] rounded-2xl p-3 uppercase font-bold text-md">
            Chiropractors
          </h3>
          <div className="absolute h-[175%] w-auto top-1/2 -translate-y-1/2 -translate-x-1/3">
            <Image src={bone} alt="Bone" className="h-full w-auto" />
          </div>
        </div>
        <div className="relative">
          <h3 className="ps-12 bg-[#E8F1F5] rounded-2xl p-3 uppercase font-bold text-md">
            Health & beauty
          </h3>
          <div className="absolute h-[175%] w-auto top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Image src={FirstAid} alt="First Aid" className="h-full w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
