import React from "react";
import { Carwsel } from "./Carwsel";
import osteopath from "@/public/osteopath-firstPage.png";
import pirelli from "@/public/pirelli-website.jpeg";
import rhyminem from "@/public/rhyminem.png";
import Image from "next/image";

import img1 from "@/public/web_colaj/chiropractor forum.png";
import img2 from "@/public/web_colaj/dash-platforma.png";
import img3 from "@/public/web_colaj/pirelli comanda.png";
import img4 from "@/public/web_colaj/pirelli cos.png";
import img5 from "@/public/web_colaj/pirelli first page.png";
import img6 from "@/public/web_colaj/pirelli settings.png";

function CarouselContainer() {
  const imgs = [pirelli, osteopath, rhyminem];

  return (
    <div className="md:w-full mx-auto md:mx-0 flex items-center flex-col justify-center gap-10">
      <Carwsel />
      {/* <div className="grid grid-cols-3 grid-rows-6 w-full gap-4">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <Image src={img5} alt="Img1" className="object-cover h-full" />
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-200 row-span-2">
          <Image src={img2} alt="Img2" className="object-cover h-full" />
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-200">
          <Image src={img3} alt="Img3" className="object-cover h-full" />
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-200 row-span-2">
          <Image src={img4} alt="Img4" className="object-cover h-full" />
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-200 row-span-2">
          <Image src={img1} alt="Img5" className="object-cover h-full" />
        </div>
        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-200">
          <Image src={img6} alt="Img6" className="object-cover h-full" />
        </div>
      </div> */}
    </div>
  );
}

export default CarouselContainer;
