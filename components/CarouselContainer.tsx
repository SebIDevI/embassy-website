import React from "react";
import { Carwsel } from "./Carwsel";
import { TtlSlide } from "./TtlSlide";
import Image from "next/image";
import colaj from "@/public/colaj.gif";

function CarouselContainer() {
  return (
    <div
      className="w-full flex items-center flex-col justify-center gap-10 bg-white py-20"
      id="proiecte"
    >
      <div className="my-10">
        <div className="container">
          <p className="font-pro text-4xl max-w-[960px] mx-auto">
            Branding? Grafică 3D? Motion Graphics? <br />
          </p>
          <p className="text-2xl font-normal leading-2 mb-10 mt-2">
            La Embassy Network avem orice unealtă de comunicare în marketing
          </p>
          <Image
            src={colaj}
            alt="Colaj proiecte Embassy"
            className="mb-20 mx-auto"
          />
        </div>
        <TtlSlide className="md:text-5xl text-3xl text-center -my-4">
          Caracteristicile care fac Embassy Network
        </TtlSlide>
        <TtlSlide
          delay={0.3}
          className="md:text-5xl text-3xl text-center -my-4"
        >
          Opțiunea #1
        </TtlSlide>
      </div>
      {/* <p className="font-pro text-5xl text-center leading-snug">
        Caracteristicile care fac Embassy Network <br /> Opțiunea #1
      </p> */}
      <div className="container">
        <hr className="w-full mx-auto border-2 rounded-lg" />
      </div>
      <Carwsel />
    </div>
  );
}

export default CarouselContainer;
