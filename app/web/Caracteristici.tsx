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

const text = [
  "Soluții Personalizate",
  "Funcționalități Avansate",
  "Performanță și Viteză",
  "Estetică Modernă",
  "Interactivitate și Angajament",
  "Adaptabilitate și Coerență",
  // "Strategii Personalizate",
  "Analize Periodice",
  "Conținut Optimizat",
];

const imgs = [pirelli, rhyminem, p3];

function Caracteristici() {
  return (
    <div className="container mt-20">
      <h4 className="sm:text-4xl text-2xl font-pro my-10 md:text-center text-center">
        Caracteristici
      </h4>
      <div className={`w-full relative mb-10`}>
        <ul className="text-black p-5 grid grid-cols-4 gap-8 text-xl z-10 items-center">
          {text.map((e, i) => (
            <li
              key={i}
              className={`flex gap-2 items-center text-center justify-center`}
            >
              <FaCheck className="text-green-500 -mt-1" /> {e}
            </li>
          ))}
        </ul>
        <div className="z-0 rounded-2xl overflow-hidden w-2/3 mx-auto mt-10">
          <CarouselContainer />
        </div>
      </div>
    </div>
  );
}

export default Caracteristici;
