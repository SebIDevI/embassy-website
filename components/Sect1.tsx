import React, { useRef } from "react";
import Image from "next/image";
import videoEmb from "@/public/videoEmb.png";
import alergareEmb from "@/public/alergareEmb.png";
import chachingEmb from "@/public/chachingEmb.png";
import { FaCheck } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

import qs from "@/public/questionMark.png";
import mark from "@/public/ppppggg.png";

const data = [
  "La Embassy Network, nu suntem doar advertiseri; suntem povestitori. Indiferent dacă te afli în domeniul Auto, Chiropractic, Healthcare sau o nișă unică, dăm viață brandului tău online prin strategiile noastre.",
  "La Embassy Network, nu suntem pentru toți - și ne place așa. Colaborăm exclusiv cu afaceri premium, selectate cu grijă și pasiune. Spre deosebire de serviciile generice, nu ne risipim; ne focusăm pe nișele pe care le cunoaștem intim.",
  "Profită de puterea Facebook, Instagram și TikTok cu noi.",
  "Prioritizăm calitatea în fața cantității, asigurându-ne că afacerea ta atrage și reține clienți valoroși.",
  "Fie ca vorbim de website-uri, Seo sau productie foto video, creativitatea este asul nostru principal.",
  "Economisesti timp si bani.",
  "Oferim pachete complete pentru a oferi o vizibilitate cat mai mare business-ului tau.",
  "Fie ca vorbim de poze profesionale, animatii sau grafice, clientii nostri beneficiaza de exclusivitatea ",
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
      className="w-1/3 h-auto md:flex hidden items-center justify-center"
    >
      <motion.div style={{ translateY: y }}>
        <Image src={mark} alt={"Mark"} className="max-h-[700px] w-auto px-10" />
      </motion.div>
    </div>
  );
}

function Sect1() {
  return (
    <div className="w-full bg-transparent lg:px-40">
      <p className="text-center font-extralight text-[#353535] pt-16 pb-8 text-sm">
        {/* de adaugat font subtire ✅ */}
        De ce să lucrezi cu noi?
      </p>
      <h3 className="text-center font-pro text-slate-900 text-5xl font-extrabold">
        Avantajele de a lucra cu Embassy
      </h3>
      <p className="text-center font-extralight text-[#353535] pt-10 text-sm max-w-[80%] mx-auto">
        Embassy este o echipă tânără care contribuie la digitalizarea business
        urilor din diferite nise. Pornind de la clipuri virale pe social media
        realizate pentru proiecte personale, astazi lucram pentru a contura
        povestea brandului tau pe social media
      </p>
      <div className="flex md:flex-row gap-4 flex-col px-10 md:px-0 md:gap-10 mt-10 text-sm">
        <ul className={`w-1/3 flex flex-col gap-5`}>
          {data.map((e, i) =>
            i % 2 == 0 ? (
              <li className="flex gap-2 items-start px-4" key={i}>
                <p className="pt-[2px]">
                  <FaCheck className={"text-blue-600"} />
                </p>
                <p>{e}</p>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <Item />
        <ul className="w-1/3 flex flex-col gap-5">
          {data.map((e, i) =>
            i % 2 != 0 ? (
              <li className="flex gap-2 items-start px-4" key={i}>
                <p className="pt-[2px]">
                  <FaCheck className={"text-blue-600"} />
                </p>
                <p>{e}</p>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sect1;
