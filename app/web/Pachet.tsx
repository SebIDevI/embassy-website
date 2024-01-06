"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

import p1 from "@/public/WebDev 1.png";
import p2 from "@/public/WebDev 2.png";
import p3 from "@/public/WebDev 3.png";

const tt = [
  {
    titlu: "Nu lucram cu template-uri",
    text: "Cu o abordare profesională și meticuloasă, adaptăm fiecare element al conținutului nostru la specificul afacerii tale și la nevoile audienței tale țintă. Fie că este vorba de fotografii care surprind esența brandului tău, filme care povestesc povestea ta într-un mod captivant, sau conținut social media care creează o comunitate angajată, suntem aici pentru a transforma viziunea ta în realitate.",
  },
  {
    titlu:
      "Fiecare functionalitate este realizata dupa nevoiile fiecarui client",
    text: "Ne asigurăm că fiecare piesă de conținut reflectă autenticitatea și valorile afacerii tale, iar strategiile noastre sunt personalizate pentru a atinge cu precizie nisa de oameni pe care îți dorești să o atragi. Nu suntem doar creatori de conținut; suntem partenerii tăi în construirea unei prezențe online puternice și memorabile.",
  },
  {
    titlu: "Sisteme complexe si personalizate de gestiune a stocurilor",
    text: "Fie că este vorba de fotografii de produse, portrete de echipă sau imagini care să ilustreze povestea brandului tău, suntem aici pentru a transforma viziunea ta în realitatea captivantă a unei imagini.",
  },
  //   ==============================================================================
  {
    titlu:
      "Website-ul fiind construit de la 0, ne ocupam cu atenție de fiecare detaliu",
    text: "Cu o abordare profesională și inovatoare, ne specializăm în realizarea de conținut video personalizat, adaptat perfect la specificul afacerii tale și la publicul tău țintă. Fie că este vorba de videoclipuri de prezentare, materiale promoționale sau conținut pentru social media, suntem aici pentru a da viață viziunii tale printr-un amestec de imaginație și tehnologie.",
  },
  {
    titlu: "Creare baze de date",
    text: "Cu o abordare meticuloasă și pasiune pentru detalii, ne asigurăm că fiecare proiect este sculptat în conformitate cu identitatea și scopul afacerii tale. Editarea noastră nu se rezumă la simpla corectare a erorilor; suntem acoliți ai creativității care adaugă strălucire și profunzime conținutului tău, transpunându-l într-o formă finală care provoacă impresii puternice și memorabile.",
  },
  {
    titlu: "Rapoarte si analize constante",
    text: "Includerea animației în pachetul nostru complet de servicii nu este doar o opțiune, ci o oportunitate esențială. Animarea adaugă un nivel suplimentar de atracție și angajament, captivând publicul și comunicând mesajul tău într-un mod distinct și memorabil. Este o modalitate eficientă de a sparge monotonia și de a transforma informațiile într-o experiență captivantă pentru audiența ta.<br /><br /> Imaginează-ți o prezentare de produse cu animații care evidențiază caracteristicile cheie sau o campanie social media cu conținut animat care se diferențiază în fluxul constant de informații. Această abordare sinergică, combinând fotografia, filmarea, editarea și animația, reprezintă un avantaj competitiv incontestabil, oferind afacerii tale un instrument puternic și versatil pentru a se impune în peisajul digital.",
  },
];

function Pachet() {
  return (
    <div className="container mb-40">
      <div className="flex md:flex-row gap-4 flex-col items-center px-10 md:px-0 md:gap-10 mt-10 text-base">
        <div className="md:min-w-[25%] md:pe-5 min-w-[50%]">
          <ul>
            {tt.map((e, i) =>
              i < 3 ? (
                <li className="py-4 flex items-start gap-2" key={i}>
                  <div>
                    <FaArrowDown className="text-blue-500 mt-[4px]" />
                  </div>
                  <span>{e.titlu}</span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="w-1/2 h-full md:block hidden relative aspect-square">
          <Image
            src={p1}
            alt="Picture1"
            className="absolute top-0 left-0 w-3/4 h-3/4 -z-10"
          />
          <Image
            src={p2}
            alt="Picture2"
            className="absolute top-1/4 right-0 w-1/2 h-1/2 z-10"
          />
          <Image
            src={p3}
            alt="Picture3"
            className="absolute bottom-0 left-1/2 w-1/2 h-1/2 -translate-x-1/2 z-0"
          />
        </div>
        <div className="md:min-w-[25%] md:ps-5 min-w-[50%]">
          <ul>
            {tt.map((e, i) =>
              i >= 3 ? (
                <li className="py-4 flex items-start gap-2" key={i}>
                  <div>
                    <FaArrowDown className="text-blue-500 mt-[4px]" />
                  </div>
                  <span>{e.titlu}</span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pachet;
