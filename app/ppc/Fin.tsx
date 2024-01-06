"use client";

import React from "react";

import ContactForm from "@/components/ContactForm";
import { TtlSlide } from "@/components/TtlSlide";

function Fin() {
  return (
    <>
      <div className="flex items-center justify-center gap-20 my-24">
        <hr className="w-1/4 border-black" />
        <p className="text-3xl ">For more details</p>
        <hr className="w-1/4 border-black" />
      </div>
      <div className="my-24 container">
        <p className="font-graphikLight text-center mt-10 mb-4">Interesat?</p>
        <TtlSlide className="text-center">
          Contactează echipa noastră de vânzări
        </TtlSlide>
        <ContactForm />
      </div>
    </>
  );
}

export default Fin;
