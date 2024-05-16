import { useCursorVariant } from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PDFPrev from "@/public/chiropractor-borsura.png";

function Brosura() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <div className="w-full bg-[#1a1a1a] py-20 md:my-60 my-20">
      <div className="container md:flex flex-row">
        <div className="relative flex md:w-1/2 w-full flex-col justify-center items-center md:justify-start md:items-start">
          <h4 className="text-white font-proBlack text-5xl mb-10 text-center md:text-left">
            Solicită Broșura de Colaborare
          </h4>
          <a
            href="/pdf/Chiropractor.ro Brochure.pdf"
            download
            target="_blank"
            className="bg-green-400 p-3 px-6 rounded-lg text-white inline-block"
            onMouseEnter={() => sellEnter()}
            onMouseLeave={() => sellLeave()}
          >
            Explorează Broșura
          </a>
        </div>
        <div className="md:w-1/2 w-full h-full relative md:my-auto my-20">
          <div className="md:absolute mx-auto md:mx-0 w-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <a
              href="/pdf/Chiropractor.ro Brochure.pdf"
              download
              target="_blank"
            >
              <Image
                src={PDFPrev}
                alt="Broșură Osteopath"
                className="w-full h-full rotate-[20deg] shadow-lg"
              />
            </a>
          </div>
          <div className="absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <a
              href="/pdf/Chiropractor.ro Brochure.pdf"
              download
              target="_blank"
            >
              <Image
                src={PDFPrev}
                alt="Broșură Osteopath"
                className="w-full h-full rotate-12 shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brosura;
