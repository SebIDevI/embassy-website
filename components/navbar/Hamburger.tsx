import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

import Image from "next/image";

import logo from "@/public/logoBlack.png";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Hamburger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="absolute top-0 right-0 bottom-0 lg:w-96 w-full h-[88vh] z-[100]"
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div
        className="absolute top-0 right-0 bottom-0 lg:w-96 w-screen h-[100vh] bg-blueEmb -z-10"
        variants={sidebar}
      />
      <Navigation />
    </motion.nav>
  );
};
