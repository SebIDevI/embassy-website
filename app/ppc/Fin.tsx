"use client";

import React from "react";

import ContactForm from "@/components/ContactForm";

function Fin() {
  return (
    <>
      <div className="flex items-center justify-center gap-20 my-24">
        <hr className="w-1/4 border-black" />
        <p className="text-3xl ">For more details</p>
        <hr className="w-1/4 border-black" />
      </div>
      <div className="my-24 container">
        <p className="font-graphikLight text-center">Interesat?</p>
        <h5 className="text-5xl font-proBlack py-5 text-center break-words">
          Contactează echipa noastră de vânzări
        </h5>
        <ContactForm />
      </div>
    </>
  );
}

export default Fin;
