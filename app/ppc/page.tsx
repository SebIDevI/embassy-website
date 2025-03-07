"use client";

import Head from "./Head";
import Nav from "@/components/Nav";
import Image from "next/image";

import { motion } from "framer-motion";
import { spring, useVariants } from "@/config";
import { useRef } from "react";
import { useCursorVariant } from "@/config";
import Features from "./Features";
import GrainedEffect from "@/components/Grained";
import Footer from "@/components/Footer";
import Beneficii from "./Beneficii";
import Arrow from "./Arrow";
import Fin from "./Fin";
function Page() {
  const cursorVariant = useCursorVariant();

  const ref = useRef(null);

  const variants = useVariants(ref);

  return (
    <div ref={ref}>
      <div className="cursor-default font-graphik scroll-smooth mb-[850px] lg:mb-[600px]">
        {!(<GrainedEffect />) && (
          <div className="absolute w-full h-full top-0 left-0 bg-black -z-10"></div>
        )}
        <GrainedEffect />
        <Nav />
        <div className="container">
          <Head />
          <Beneficii />
          <Arrow />
          <Features />
          <Fin />
        </div>
      </div>
      <Footer />
      <motion.div
        variants={variants}
        className="fixed z-50 xl:flex hidden flex-row content-center justify-center top-0 left-0 h-3 w-3 bg-slate-700 rounded-full pointer-events-none text-white text-center text-lg"
        animate={cursorVariant.variant}
        transition={spring}
      >
        <span className="cursorText"></span>
      </motion.div>
    </div>
  );
}

export default Page;
