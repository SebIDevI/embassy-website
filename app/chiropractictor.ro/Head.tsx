import React from "react";

import ChiropractorLogo from "@/public/chiro logo.png";
import Link from "next/link";
import { useCursorVariant } from "@/config";
import Image from "next/image";

function Head() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <>
      <div className="min-h-[60vh]">
        <div className="flex flex-col gap-10 md:flex-row items-center md:mt-40 mt-28">
          <div className="md:w-1/2 w-full font-graphik mb-10 md:mb-0">
            <h4 className="2xl:text-7xl lg:text-5xl text-4xl font-proBlack py-2">
              Chiropractor.ro
            </h4>
            <p className="py-10 lg:text-base text-sm font-graphik">
              Chiropractor.ro reprezinta un proiect unic pe piata din Romania
              care, prin intermediul social media, creste exponential
              vizibilitatea asupra expertilor din domeniul de chiropractica,
              fizioterapie si nu numai.
            </p>
            <Link
              href="/contact"
              className="bg-green-400 p-4 px-6 rounded-lg text-white"
              onMouseEnter={() => sellEnter()}
              onMouseLeave={() => sellLeave()}
            >
              Alătură-te proiectului
            </Link>
          </div>
          <div className="md:w-1/2 w-3/4">
            <div className="w-full h-auto aspect-square rounded-xl mx-auto">
              <Image src={ChiropractorLogo} alt="Logo Chiropractor.ro" />
            </div>
          </div>
        </div>
        <hr className="w-full mx-auto border-2 opacity-50 my-20" />
      </div>
    </>
  );
}

export default Head;
