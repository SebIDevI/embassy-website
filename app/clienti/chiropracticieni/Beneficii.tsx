import { TtlSlide } from "@/components/TtlSlide";
import { useCursorVariant } from "@/config";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

function Beneficii() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="mx-auto text-center my-10 mb-28 text-sm font-graphikLight">
      <p>Beneficii Cheie</p>
      <TtlSlide>Beneficiile Chiropractor.ro</TtlSlide>
      <p className="md:w-2/3 w-full mx-auto">
        Pe langa expunerea pe care o vor avea videoclipurile pe conturile dvs. ,
        bucura-ti-va de extra-vizibilitattea pe care v-o pune la dispozitie
        Chiropractor.ro
      </p>
      <div className="flex justify-center gap-8 my-10 text-3xl">
        <Link
          href="#"
          className="hover:text-red-600 transition"
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
        >
          <FaInstagram />
        </Link>
        <Link
          href="#"
          className="hover:text-red-600 transition"
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
        >
          <FaYoutube />
        </Link>
        <Link
          href="#"
          className="hover:text-gray-900 transition"
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
        >
          <FaTiktok />
        </Link>
        <Link
          href="#"
          className="hover:text-blue-600 transition"
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
        >
          <FaFacebook />
        </Link>
      </div>
    </div>
  );
}

export default Beneficii;
