"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

import qs from "@/public/questionMark.png";
import mark from "@/public/ppppggg.png";
import { TtlSlide } from "./TtlSlide";
import embLogo from "@/public/Push-notification-list-iOS-remix1-ezgif.com-crop.gif";

const data = [
  "La Embassy Network, nu suntem doar advertiseri; suntem povestitori. Indiferent de nișa în care activezi, dăm viață brandului tău online prin strategiile noastre.",
  "La Embassy Network, nu suntem pentru toți - și ne place așa. Colaborăm exclusiv cu afaceri premium, selectate cu grijă și pasiune. Spre deosebire de serviciile generice, nu ne risipim.",
  "Profită de puterea Instagram, TikTok, YouTube și Facebook cu noi.",
  "Prioritizăm calitatea în fața cantității, asigurându-ne că afacerea ta atrage și reține clienți valoroși.",
  "Fie ca vorbim de website-uri, Seo sau Productie Foto-Video, creativitatea este asul nostru principal.",
  "Economisesti timp si bani.",
  "Oferim pachete complete de branding pentru a oferi o vizibilitate cat mai mare business-ului tau.",
  "Fie ca vorbim de fotografii profesionale, animatii sau grafice, clientii nostri beneficiaza de exclusivitatea pachetelor Embassy Network.",
];

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });
  const y = useTransform(scrollYProgress, (latest) => 200 + latest * -200);

  return (
    <div
      ref={ref}
      className="w-1/3 h-auto md:flex hidden items-center justify-center relative"
    >
      <motion.div className="absolute top-0" style={{ translateY: y }}>
        <Image
          src={mark}
          alt={"Mark"}
          className="max-h-[700px] w-auto px-10 scale-[1.60] lg:scale-100"
        />
      </motion.div>
      <Image
        src={mark}
        alt={"Mark"}
        className="max-h-[700px] w-auto px-10 scale-[1.60] lg:scale-100 opacity-0"
      />
    </div>
  );
}

function Sect1() {
  return (
    <div className="w-full bg-transparent mb-10">
      <p className="text-center font-extralight text-[#353535] pt-16 pb-8 text-sm">
        {/* de adaugat font subtire ✅ */}
        De ce să lucrezi cu noi?
      </p>
      <TtlSlide className="text-5xl text-center text-slate-900 font-extrabold break-words">
        Avantajele de a lucra cu Embassy
      </TtlSlide>
      <p className="text-center font-extralight text-[#353535] pt-10 text-sm max-w-[80%] mx-auto">
        Embassy este o echipă tânără care contribuie la digitalizarea business
        urilor din diferite nise. Pornind de la clipuri virale pe social media
        realizate pentru proiecte personale, astazi lucram pentru a contura
        povestea brandului tau pe social media
      </p>
      <div className="flex md:flex-row gap-4 flex-col px-0 sm:px-10 md:px-0 md:gap-10 mt-10 text-sm relative">
        <div className="md:w-1/2 w-full md:sticky top-28 h-full flex items-center justify-center">
          {/* <div className="bg-gray-200 rounded-[32px] shadow-md relative overflow-hidden"> */}
          <Image src={embLogo} alt="Embassy Logo" className="z-10 relative" />
          {/* <div className="absolute z-0 w-full h-full top-0 left-0 before:rounded-[45%] before:w-[200%] before:aspect-square before:bg-blue-500 before:absolute before:-top-1/2 before:-left-1/2 before:animate-waterWave after:rounded-[45%] after:w-[200%] after:aspect-square after:bg-blue-400 after:absolute after:-top-1/2 after:-left-1/2 after:animate-waterWave after:delay-1000 after:z-0 before:z-10"></div> */}
          {/* </div> */}
        </div>
        <ul className={`md:w-1/2 w-full flex flex-col gap-5 text-lg`}>
          {data.map((e, i) => (
            <li className="flex gap-4 items-start sm:px-4 px-2" key={i}>
              <div className="shadow-md aspect-square rounded-full px-3 flex items-center justify-center bg-gray-300 text-white font-bold">
                <p className="pt-[1.5px]">{i + 1}</p>
              </div>
              <p className="pt-[4px]">{e}</p>
            </li>
          ))}
          {/* </ul> */}
          {/* <Item /> */}
          {/* <ul className="md:w-1/3 w-full flex flex-col gap-5"> */}
          {/* {data.map((e, i) =>
            i % 2 != 0 ? (
              <li className="flex gap-2 items-start sm:px-4 px-2" key={i}>
                <p className="pt-[2px]">
                  <FaCheck className={"text-blue-600"} />
                </p>
                <p>{e}</p>
              </li>
            ) : (
              ""
            )
          )} */}
        </ul>
      </div>
    </div>
  );
}

export default Sect1;
