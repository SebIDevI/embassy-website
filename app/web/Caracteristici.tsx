"use client";

import React from "react";

import { FaArrowDown, FaCheck } from "react-icons/fa";
import Image from "next/image";
import img from "@/public/img-caract.png";
import p1 from "@/public/WebDev 1.png";
import p2 from "@/public/WebDev 2.png";
import p3 from "@/public/WebDev 3.png";
import pirelli from "@/public/pirelli-website.jpeg";
import rhyminem from "@/public/rhyminem.png";
import CarouselContainer from "./CarouselContainer";
import { TtlSlide } from "@/components/TtlSlide";

const text = [
  "Tehnologii Moderne",
  "Funcționalități Avansate",
  "Performanță și Viteză",
  "Estetică Modernă",
  "Interactivitate și Angajament",
  "Soluții Personalizate",
  "Analize Periodice",
  "Conținut Optimizat",
];

const imgs = [pirelli, rhyminem, p3];

function Caracteristici() {
  return (
    <div className="mt-20 text-slate-200">
      <TtlSlide className="md:text-center text-center">Caracteristici</TtlSlide>
      <div className={`w-full relative mb-10`}>
        <ul className="p-5 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-base z-10 items-center">
          {text.map((e, i) => (
            <li
              key={i}
              className={`flex gap-2 items-center text-center justify-center`}
            >
              <FaCheck className="text-green-500 -mt-1" /> {e}
            </li>
          ))}
        </ul>
        <div className="z-0 sm:overflow-hidden lg:w-full w-full mx-auto mt-10 dark">
          <CarouselContainer />
        </div>
      </div>
    </div>
  );
}

export default Caracteristici;
