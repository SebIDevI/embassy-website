import React from "react";
import { Carwsel } from "./Carwsel";

function CarouselContainer() {
  return (
    <div
      className="w-full flex items-center flex-col justify-center gap-10 bg-white py-20"
      id="proiecte"
    >
      <p className="font-pro text-5xl text-center leading-snug">
        Caracteristicile care fac Embassy Network <br /> Opțiunea #1
      </p>
      <hr className="my-5 h-[2px] w-full container border-gray-300" />
      <Carwsel />
    </div>
  );
}

export default CarouselContainer;
