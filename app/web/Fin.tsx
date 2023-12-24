"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";

function Fin() {
  return (
    <div className="my-24 container">
      <p className="font-graphikLight text-center">Interesat?</p>
      <h5 className="md:text-5xl text-3xl font-proBlack py-5 text-center">
        Contactează echipa noastră de vânzări
      </h5>
      <ContactForm />
    </div>
  );
}

export default Fin;
