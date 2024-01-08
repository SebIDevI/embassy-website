import React from "react";
import { Carwsel } from "./Carwsel";

function CarouselContainer() {
  return (
    <div className="md:w-full w-[80%] mx-auto md:mx-0 flex items-center flex-col justify-center gap-10">
      <Carwsel />
    </div>
  );
}

export default CarouselContainer;
