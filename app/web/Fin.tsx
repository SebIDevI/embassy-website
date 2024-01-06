import ContactForm from "@/components/ContactForm";
import { TtlSlide } from "@/components/TtlSlide";
import React from "react";

function Fin() {
  return (
    <div className="mt-40 text-slate-200 dark">
      <p className="font-graphikLight text-center mt-10 mb-4">Interesat?</p>
      <TtlSlide className="text-center">
        Contactează echipa noastră de vânzări
      </TtlSlide>
      <ContactForm />
    </div>
  );
}

export default Fin;
