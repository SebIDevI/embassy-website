"use client";

import React from "react";

import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import img from "@/public/img-caract.png";

const text = [
  "Soluții Personalizate",
  "Funcționalități Avansate",
  "Performanță și Viteză",
  "Estetică Modernă",
  "Interactivitate și Angajament",
  "Adaptabilitate și Coerență",
  "Strategii Personalizate",
  "Analize Periodice",
  "Conținut Optimizat",
];

function Caracteristici() {
  return (
    <div className="container mt-20">
      <h4 className="sm:text-4xl text-2xl font-pro my-10 md:text-start text-center">
        Caracteristici
      </h4>
      {text.map((e, i) =>
        i % 3 == 0 ? (
          <div
            key={i}
            className={`flex items-center flex-col mb-10 ${
              (i / 3) % 2 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <ul
              className={`md:w-1/2 flex flex-col justify-center gap-8 mb-6 md:mb-0 ${
                (i / 3) % 2 ? "md:justify-end" : ""
              }`}
            >
              <li
                className={`flex gap-2 items-center justify-center ${
                  (i / 3) % 2 ? "md:justify-start md:flex-row-reverse" : ""
                }`}
              >
                <FaArrowDown className="text-blue-500" /> {text[i]}
              </li>
              <li
                className={`flex gap-2 items-center justify-center ${
                  (i / 3) % 2 ? "md:justify-start md:flex-row-reverse" : ""
                }`}
              >
                <FaArrowDown className="text-blue-500" /> {text[i + 1]}
              </li>
              <li
                className={`flex gap-2 items-center justify-center ${
                  (i / 3) % 2 ? "md:justify-start md:flex-row-reverse" : ""
                }`}
              >
                <FaArrowDown className="text-blue-500" /> {text[i + 2]}
              </li>
            </ul>
            <div
              className={`sm:w-1/2 w-full flex items-center justify-center ${
                (i / 3) % 2 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <Image
                src={img}
                alt="Imagine Caracteristici"
                className="md:w-2/3 w-full"
              />
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Caracteristici;
