import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Modal from "./Modal";

const backdrop: Variants = {
  visible: { backdropFilter: "blur(12px)" },
  hidden: { backdropFilter: "blur(0px)" },
};

import { useCursorVariant } from "@/config";

const tt = [
  {
    titlu: "Crearea de content",
    text: "Cu o abordare profesională și meticuloasă, adaptăm fiecare element al conținutului nostru la specificul afacerii tale și la nevoile audienței tale țintă. Fie că este vorba de fotografii care surprind esența brandului tău, filme care povestesc povestea ta într-un mod captivant, sau conținut social media care creează o comunitate angajată, suntem aici pentru a transforma viziunea ta în realitate.",
  },
  {
    titlu: "Strategii social media",
    text: "Ne asigurăm că fiecare piesă de conținut reflectă autenticitatea și valorile afacerii tale, iar strategiile noastre sunt personalizate pentru a atinge cu precizie nisa de oameni pe care îți dorești să o atragi. Nu suntem doar creatori de conținut; suntem partenerii tăi în construirea unei prezențe online puternice și memorabile.",
  },
  {
    titlu: "Realizare fotografii profesionale",
    text: "Fie că este vorba de fotografii de produse, portrete de echipă sau imagini care să ilustreze povestea brandului tău, suntem aici pentru a transforma viziunea ta în realitatea captivantă a unei imagini.",
  },
  {
    titlu: "Filmare videoclipuri",
    text: "Cu o abordare profesională și inovatoare, ne specializăm în realizarea de conținut video personalizat, adaptat perfect la specificul afacerii tale și la publicul tău țintă. Fie că este vorba de videoclipuri de prezentare, materiale promoționale sau conținut pentru social media, suntem aici pentru a da viață viziunii tale printr-un amestec de imaginație și tehnologie.",
  },
  //   ==============================================================================
  {
    titlu: "Prelucrare/ Editare content",
    text: "Cu o abordare meticuloasă și pasiune pentru detalii, ne asigurăm că fiecare proiect este sculptat în conformitate cu identitatea și scopul afacerii tale. Editarea noastră nu se rezumă la simpla corectare a erorilor; suntem acoliți ai creativității care adaugă strălucire și profunzime conținutului tău, transpunându-l într-o formă finală care provoacă impresii puternice și memorabile.",
  },
  {
    titlu: "Animatie",
    text: "Includerea animației în pachetul nostru complet de servicii nu este doar o opțiune, ci o oportunitate esențială. Animarea adaugă un nivel suplimentar de atracție și angajament, captivând publicul și comunicând mesajul tău într-un mod distinct și memorabil. Este o modalitate eficientă de a sparge monotonia și de a transforma informațiile într-o experiență captivantă pentru audiența ta.<br /><br /> Imaginează-ți o prezentare de produse cu animații care evidențiază caracteristicile cheie sau o campanie social media cu conținut animat care se diferențiază în fluxul constant de informații. Această abordare sinergică, combinând fotografia, filmarea, editarea și animația, reprezintă un avantaj competitiv incontestabil, oferind afacerii tale un instrument puternic și versatil pentru a se impune în peisajul digital.",
  },
  {
    titlu: "Social Media management",
    text: "În cadrul pachetului nostru complet de servicii, Social Media Management-ul devine un element central în crearea și consolidarea relațiilor cu clienții. Ne ocupăm de fiecare detaliu, de la identitatea vizuală la conținutul relevant și interacțiunile personalizate cu audiența ta.",
  },
  {
    titlu: "Analytics",
    text: " Prin monitorizare continuă și analize de performanță, asigurăm o adaptare constantă și optimizare pentru a asigura creșterea continuă.",
  },
];

const backdrop2: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const textVariant: Variants = {
  hidden: {
    height: 33,
    transformOrigin: "center center",
    overflow: "hidden",
    position: "initial",
    backgroundColor: "#fcfcfc00",
    transform: "translate(0%)",
    // padding: "20px",
    zIndex: "10",
    transition: {
      duration: 0.4, // Set the duration of the transition in seconds
      ease: "easeInOut", // Set the easing function (optional)
    },
  },
  visible: {
    height: "auto",
    position: "absolute",
    transformOrigin: "center center",
    transform: "translate(-10px, -25%)",
    backgroundColor: "#fcfcfc",
    // padding: "20px",
    zIndex: "49",
    transition: {
      duration: 0.4, // Set the duration of the transition in seconds
      ease: "easeInOut", // Set the easing function (optional)
    },
  },
};

function Pachet() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [titlu, setTitlu] = useState("");

  const [modal, setModal] = useState(9);

  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <>
      {/* <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        titlu={titlu}
        text={text}
      /> */}

      <div className="flex lg:w-2/3 w-full md:flex-row items-center flex-col mx-auto">
        {/* <div className="md:w-1/3 px-10 min-w-[50%]">
          <ul>
            {tt.map((e, i) =>
              i < 4 ? (
                <li
                  className="py-4 flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    setShowModal(true);
                    setModal(i);
                    setText(e.text);
                    setTitlu(e.titlu);
                  }}
                  onMouseEnter={() => sellEnter()}
                  onMouseLeave={() => sellLeave()}
                  key={i}
                >
                  <FaArrowDown className="text-blue-500" />
                  {e.titlu}
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div> */}
        <div className="md:w-1/3 px-10 min-w-[50%]">
          <ul>
            {tt.map((e, i) =>
              i < 4 ? (
                <li className="relative h-10" key={i}>
                  <AnimatePresence>
                    {modal === i ? (
                      <motion.div
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="rounded-xl"
                      >
                        <div
                          className="m-3"
                          onMouseLeave={() => {
                            setShowModal(false);
                            sellLeave();
                            setModal(9);
                          }}
                        >
                          <button
                            onClick={() => {
                              setShowModal(true);

                              setText(e.text);
                              setTitlu(e.titlu);
                            }}
                            onMouseEnter={() => {
                              setShowModal(true);
                              sellEnter();
                              setModal(i);
                            }}
                            className="flex items-center gap-2 cursor-pointer z-50"
                          >
                            <FaArrowRight
                              className={`text-blue-500 animate-slideX delay-${
                                i + 1
                              }`}
                            />
                            {e.titlu}
                          </button>
                          <p className="pt-4 text-sm">{e.text}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        variants={textVariant}
                        initial="hidden"
                        animate="hidden"
                        exit="hidden"
                        className="rounded-xl"
                      >
                        <div
                          className="m-3"
                          onMouseLeave={() => {
                            setShowModal(false);
                            sellLeave();
                            setModal(9);
                          }}
                        >
                          <button
                            onClick={() => {
                              setShowModal(true);

                              setText(e.text);
                              setTitlu(e.titlu);
                            }}
                            onMouseEnter={() => {
                              setShowModal(true);
                              sellEnter();
                              setModal(i);
                            }}
                            className="flex items-center gap-2 cursor-pointer z-50"
                          >
                            <FaArrowRight
                              className={`text-blue-500 animate-slideX delay-${
                                i + 1
                              }`}
                            />
                            {e.titlu}
                          </button>
                          <p className="pt-4 text-sm">{e.text}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="w-1/3 md:block hidden"></div>
        <AnimatePresence mode="wait">
          {showModal && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-[#00000080] z-30"
              variants={backdrop2}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => {
                setShowModal(false);
                setModal(9);
              }}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className="md:w-1/3 px-10 min-w-[50%]">
          <ul>
            {tt.map((e, i) =>
              i >= 4 ? (
                <li className="relative h-10" key={i}>
                  <AnimatePresence>
                    {modal === i ? (
                      <motion.div
                        variants={textVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="rounded-xl"
                      >
                        <div
                          className="m-3"
                          onMouseLeave={() => {
                            setShowModal(false);
                            sellLeave();
                            setModal(9);
                          }}
                        >
                          <button
                            onClick={() => {
                              setShowModal(true);

                              setText(e.text);
                              setTitlu(e.titlu);
                            }}
                            onMouseEnter={() => {
                              setShowModal(true);
                              sellEnter();
                              setModal(i);
                            }}
                            className="flex items-center gap-2 cursor-pointer z-50"
                          >
                            <FaArrowRight
                              className={`text-blue-500 animate-slideX delay-${
                                i + 1
                              }`}
                            />
                            {e.titlu}
                          </button>
                          <p className="pt-4 text-sm">{e.text}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        variants={textVariant}
                        initial="hidden"
                        animate="hidden"
                        exit="hidden"
                        className="rounded-xl"
                      >
                        <div
                          className="m-3"
                          onMouseLeave={() => {
                            setShowModal(false);
                            sellLeave();
                            setModal(9);
                          }}
                        >
                          <button
                            onClick={() => {
                              setShowModal(true);

                              setText(e.text);
                              setTitlu(e.titlu);
                            }}
                            onMouseEnter={() => {
                              setShowModal(true);
                              sellEnter();
                              setModal(i);
                            }}
                            className="flex items-center gap-2 cursor-pointer z-50"
                          >
                            <FaArrowRight
                              className={`text-blue-500 animate-slideX delay-${
                                i + 1
                              }`}
                            />
                            {e.titlu}
                          </button>
                          <p className="pt-4 text-sm">{e.text}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
