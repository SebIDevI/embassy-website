import ContactForm from "@/components/ContactForm";
import React from "react";

function Head() {
  return (
    <div className="container mt-40">
      <p className="font-graphikLight text-center mt-10 mb-4">Interesat?</p>
      <h4 className="font-pro text-center mb-10 text-4xl overflow-hidden">
        <span className="translate-y-full inline-block animate-ttlSld delay-8">
          Contactează echipa noastră de vânzări
        </span>
      </h4>
      <ContactForm />
    </div>
  );
}

export default Head;
