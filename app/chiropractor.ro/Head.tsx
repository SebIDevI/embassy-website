import React from "react";

import ChiropractorLogo from "@/public/chiro logo.png";
import Link from "next/link";
import { useCursorVariant } from "@/config";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";

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
            <h1>
              <Link
                href={"https://www.chiropractor.ro/"}
                target="_blank"
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
                className="2xl:text-[62px] lg:text-5xl text-4xl font-proBlack my-2 break-words"
              >
                Chiropractor.ro
              </Link>
            </h1>
            <p className="py-10 lg:text-base text-sm font-graphik">
              Chiropractor.ro reprezinta un proiect unic pe piata din Romania
              care, prin intermediul social media, creste exponential
              vizibilitatea asupra expertilor din domeniul de chiropractica,
              fizioterapie si nu numai.
            </p>
            <div className="flex lg:flex-row flex-col gap-4 lg:items-center items-start">
              <Link
                href="/contact"
                className="bg-green-400 hover:bg-green-500 transition-all duration-300 p-3 px-6 rounded-full text-white"
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                Alătură-te proiectului
              </Link>
              <Link
                href="https://www.chiropractor.ro/"
                className="bg-neutral-100 border border-neutral-200 hover:bg-neutral-200 transition-all duration-300 flex p-3 items-center justify-center rounded-full text-black gap-2 pe-4"
                target="_blank"
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                <TbWorld className="text-2xl" /> Accesează proiectul
              </Link>
            </div>
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
