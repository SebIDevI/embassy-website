"use client";

import Head from "@/components/Head";
import Nav from "@/components/Nav";
import Image from "next/image";

import { motion } from "framer-motion";
import { spring, useVariants } from "@/config";
import { useRef } from "react";
import { useCursorVariant } from "@/config";
import Sect1 from "@/components/Sect1";
import Slider from "@/components/Slider";
import GrainedEffect from "@/components/Grained";
import Categories from "@/components/Categories";
// import Wwu from "@/components/Wwu";
// import Reviews from "@/components/Reviews";
// import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import CarouselContainer from "@/components/CarouselContainer";
import Hvq from "@/components/Hvq";

export default function Home() {
  const cursorVariant = useCursorVariant();

  const ref = useRef(null);

  const variants = useVariants(ref);

  return (
    <div ref={ref}>
      <div className="cursor-default font-graphik scroll-smooth mb-[600px] lg:mb-[400px]">
        <GrainedEffect />
        <Nav />
        <Head />
        <Slider />
        <Categories />
        <div className="container">
          <Sect1 />
          <CarouselContainer />
        </div>
        <Video />
        <Hvq />
        {/* <Wwu /> */}
        {/* <Reviews /> */}
        {/* <Faq /> */}
      </div>
      <Footer />
      <motion.div
        variants={variants}
        className="xl:flex fixed z-50 hidden flex-row content-center justify-center top-0 left-0 h-3 w-3 bg-slate-700 rounded-full pointer-events-none text-white text-center text-lg"
        animate={cursorVariant.variant}
        transition={spring}
      >
        <span className="cursorText"></span>
      </motion.div>
    </div>
  );
}
