"use client";

import React from "react";
import { FaArrowDown } from "react-icons/fa";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Modal from "./Modal";

const backdrop: Variants = {
  visible: { backdropFilter: "blur(12px)" },
  hidden: { backdropFilter: "blur(0px)" },
};

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
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [titlu, setTitlu] = useState("");

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        titlu={titlu}
        text={text}
      />

      <div className="flex container md:flex-row items-start md:items-center flex-col">
        <div className="md:min-w-[33%] md:pe-10 min-w-[50%]">
          <ul>
            {tt.map((e, i) =>
              i < 3 ? (
                <li
                  className="py-4 flex items-start gap-2"
                  onClick={() => {
                    setShowModal(true);
                    setText(e.text);
                    setTitlu(e.titlu);
                  }}
                  key={i}
                >
                  <div>
                    <FaArrowDown className="text-blue-500 mt-1" />
                  </div>
                  <span>{e.titlu}</span>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="w-1/3 md:block hidden"></div>
        <div className="md:min-w-[33%] md:ps-10 min-w-[50%]">
          <ul>
            {tt.map((e, i) =>
              i >= 3 ? (
                <li
                  className="py-4 flex items-start gap-2"
                  onClick={() => {
                    setShowModal(true);
                    setText(e.text);
                    setTitlu(e.titlu);
                  }}
                  key={i}
                >
                  <div>
                    <FaArrowDown className="text-blue-500 mt-1" />
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
    </>
  );
}

export default Pachet;
