"use client";

import Head from "@/components/Head";
import Nav from "@/components/Nav";

import { motion } from "framer-motion";
import { spring, useVariants } from "@/config";
import { useRef } from "react";
import { useCursorVariant } from "@/config";
import Sect1 from "@/components/Sect1";
import Slider from "@/components/Slider";
import GrainedEffect from "@/components/Grained";

function Body() {
  return (
    <div className="cursor-default z-[100]">
      <Nav />
      <Head />
      <Slider />
      <Sect1 />
    </div>
  );
}

export default Body;
