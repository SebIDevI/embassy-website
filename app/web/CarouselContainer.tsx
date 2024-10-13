import React from "react";
import { Carwsel } from "./Carwsel";
import osteopath from "@/public/osteopath-firstPage.png";
import pirelli from "@/public/pirelli-website.jpeg";
import rhyminem from "@/public/rhyminem.png";

function CarouselContainer() {
  const imgs = [pirelli, osteopath, rhyminem];

  return (
    <div className="md:w-full mx-auto md:mx-0 flex items-center flex-col justify-center gap-10">
      <Carwsel />
      {/* <div className="grid grid-cols-3 grid-rows-6 h-80 w-full gap-4">
        <div className="w-full h-full bg-gray-200"></div>
        <div className="w-full h-full bg-gray-200 row-span-2"></div>
        <div className="w-full h-full bg-gray-200"></div>
        <div className="w-full h-full bg-gray-200 row-span-2"></div>
        <div className="w-full h-full bg-gray-200 row-span-2"></div>
        <div className="w-full h-full bg-gray-200"></div>
        <div className="w-full h-full bg-gray-200"></div>
        <div className="w-full h-full bg-gray-200"></div>
        <div className="w-full h-full bg-gray-200"></div>
      </div> */}
    </div>
  );
}

export default CarouselContainer;
