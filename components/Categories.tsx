import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FirstAid from "@/public/First Aid.png";
import bone from "@/public/bone.png";
import car from "@/public/car.png";

import { motion, AnimatePresence, useCycle, Variants } from "framer-motion";
import { useCursorVariant } from "@/config";
import Link from "next/link";

function Categories() {
  const [isInTopHalf, setIsInTopHalf] = useState(true);

  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const containerRef3 = useRef<HTMLDivElement>(null);

  const comingSoon: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleScroll = () => {
    const refs = [containerRef1, containerRef2, containerRef3];

    refs.forEach((ref, index) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInTopHalf = rect.top + rect.height / 2 < window.innerHeight / 2;
        // Use isInTopHalf to conditionally apply a different class
        // For example, you can set a state variable or add/remove a class
        if (isInTopHalf) {
          setIsInTopHalf(true);
        } else setIsInTopHalf(false);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef1.current &&
        !containerRef1.current.contains(event.target as Node)
      ) {
        setIsClicked1(false);
      }

      if (
        containerRef2.current &&
        !containerRef2.current.contains(event.target as Node)
      ) {
        setIsClicked2(false);
      }

      if (
        containerRef3.current &&
        !containerRef3.current.contains(event.target as Node)
      ) {
        setIsClicked3(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsClicked1, setIsClicked2, setIsClicked3]);

  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="min-w-full lg:h-24 py-10 bg-white lg:sticky top-10 lg:top-[88px] z-30 border-t-4 border-t-[#2770a13e]">
      <div className="h-full container flex flex-col font-pro lg:flex-row justify-around items-center gap-10">
        <div
          className="relative"
          ref={containerRef1}
          onClick={() => setIsClicked1(!isClicked1)}
        >
          <AnimatePresence mode="wait">
            {isClicked1 && (
              <motion.div
                variants={comingSoon}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={`absolute ${
                  !isInTopHalf ? "-top-4" : "-bottom-4"
                } left-1/2 -translate-x-1/2 ${
                  !isInTopHalf ? "-translate-y-full" : "translate-y-full"
                } w-full h-auto bg-slate-50 flex items-center justify-center border-black ${
                  !isInTopHalf ? "border-b-[1px]" : "border-t-[1px]"
                }`}
              >
                <div
                  className={`absolute w-4 h-4 ${
                    !isInTopHalf ? "-bottom-[1px]" : "-top-[1px]"
                  } rotate-45 left-1/2 -translate-x-1/2 ${
                    !isInTopHalf ? "translate-y-1/2" : "-translate-y-1/2"
                  } bg-slate-50 ${
                    !isInTopHalf ? "border-b-[1px]" : "border-t-[1px]"
                  } ${
                    !isInTopHalf ? "border-r-[1px]" : "border-l-[1px]"
                  } border-black`}
                ></div>
                <p className="uppercase italic text-lg text-center font-graphik px-4 py-2">
                  Coming soon
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <h3
            onMouseEnter={sellEnter}
            onMouseLeave={sellLeave}
            className="cursor-pointer ps-12 bg-[#E8F1F5] rounded-2xl p-3 uppercase font-bold text-md"
          >
            Automotive
          </h3>
          <div
            onMouseEnter={sellEnter}
            onMouseLeave={sellLeave}
            className="cursor-pointer absolute h-[175%] w-auto top-1/2 -translate-y-1/2 -translate-x-1/2"
          >
            <Image src={car} alt="Car" className="h-full w-auto" />
          </div>
        </div>
        <Link
          href={"/clienti/chiropracticieni"}
          className="relative"
          onClick={() => setIsClicked2(!isClicked2)}
        >
          <h3
            onMouseEnter={sellEnter}
            onMouseLeave={sellLeave}
            className="cursor-pointer ps-12 bg-[#E8F1F5] rounded-2xl p-3 uppercase font-bold text-md"
          >
            Chiropracticieni
          </h3>
          <div
            onMouseEnter={sellEnter}
            onMouseLeave={sellLeave}
            className="cursor-pointer absolute h-[175%] w-auto top-1/2 -translate-y-1/2 -translate-x-1/3"
          >
            <Image src={bone} alt="Bone" className="h-full w-auto" />
          </div>
        </Link>
        <Link href="/creative" className="relative">
          <h3
            onMouseEnter={sellEnter}
            onMouseLeave={sellLeave}
            className="cursor-pointer ps-12 bg-[#E8F1F5] rounded-2xl p-3 uppercase font-bold text-md"
          >
            Alte Bussiness-uri
          </h3>
          <div
            onMouseEnter={sellEnter}
            onMouseLeave={sellLeave}
            className="cursor-pointer absolute h-[175%] w-auto top-1/2 -translate-y-1/2 -translate-x-1/2"
          >
            <Image src={FirstAid} alt="First Aid" className="h-full w-auto" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Categories;
