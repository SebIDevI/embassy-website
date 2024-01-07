import React from "react";
import { Carwsel } from "./Carwsel";
import { TtlSlide } from "@/components/TtlSlide";
import { ButtonAnim } from "@/components/ButtonAnim";

function CarouselContainer() {
  return (
    <>
      <div className="flex w-full items-center">
        <div className="w-full flex items-center flex-col justify-center gap-10 mt-10">
          <Carwsel />
        </div>
        <div className="w-full flex justify-center">
          <div className="ps-5 flex flex-col mx-auto w-full">
            <TtlSlide className="my-0 text-[#fcfcfc] text-6xl mx-0">
              Embassy
            </TtlSlide>
            <TtlSlide delay={0.3} className="my-0 text-[#fcfcfc] text-6xl mx-0">
              In spatele camerelor
            </TtlSlide>
            <p className="text-white py-10">
              Deoarece cel mai important factor pentru noi inainte de a incepe o
              colaborare este conexiunea, va invitam sa cunoasteti echipa
              Embassy si din alt unghi.
            </p>
            <ButtonAnim
              color1="blueEmb"
              color2="blueEmbDark"
              className="px-10 py-3 text-base"
            >
              Despre noi
            </ButtonAnim>
          </div>
        </div>
      </div>
      <hr className="w-full mx-auto border-2 mt-28" />
    </>
  );
}

export default CarouselContainer;
