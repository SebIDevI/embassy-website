"use client";

import React, { useState } from "react";

import { motion, AnimatePresence, Variants } from "framer-motion";

import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `relative rounded-full tracking-wider overflow-hidden text-sm p-1 px-4 text-white cursor-pointer`
);

const btnInVars: Variants = {
  initial: {
    transform: "translateY(100%)",
    borderRadius: "100%",
  },
  end: {
    transform: "translateY(0%)",
    borderRadius: "0%",
  },
};
const btnOutVars: Variants = {
  initial: {
    transform: "translateY(-100%)",
    borderRadius: "100%",
  },
  end: {
    transform: "translateY(0%)",
    borderRadius: "0%",
  },
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color1: string;
  color2: string;
  textColor?: string | undefined;
  link?: string;
  className?: string;
}

export const ButtonAnim: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const [isMOver, setIsMOver] = useState(false);

  return props.link ? (
    <Link href={props.link}>
      <AnimatePresence mode="wait">
        <div
          className={cn(buttonVariants(), className, `bg-${props.color1}`)}
          onMouseEnter={() => setIsMOver(true)}
          onMouseLeave={() => setIsMOver(false)}
        >
          {isMOver ? (
            <motion.div
              variants={btnInVars}
              initial="initial"
              animate="end"
              exit="initial"
              className={`w-full h-full absolute top-0 left-0 bg-${props.color2}`}
            ></motion.div>
          ) : (
            <>
              <div
                className={`w-full h-full absolute top-0 left-0 bg-${props.color2}`}
              ></div>
              <motion.div
                variants={btnOutVars}
                initial="initial"
                animate="end"
                exit="initial"
                className={`w-full h-full absolute top-0 left-0 bg-${props.color1}`}
              ></motion.div>
            </>
          )}
          <span className="z-0 text-transparent">{children}</span>
          <span className="w-full text-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
          </span>
        </div>
      </AnimatePresence>
    </Link>
  ) : (
    <button className="flex">
      <AnimatePresence mode="wait">
        <div
          className={cn(buttonVariants(), className, `bg-${props.color1}`)}
          onMouseEnter={() => setIsMOver(true)}
          onMouseLeave={() => setIsMOver(false)}
        >
          {isMOver ? (
            <motion.div
              variants={btnInVars}
              initial="initial"
              animate="end"
              exit="initial"
              className={`w-full h-full absolute top-0 left-0 bg-${props.color2}`}
            ></motion.div>
          ) : (
            <>
              <div
                className={`w-full h-full absolute top-0 left-0 bg-${props.color2}`}
              ></div>
              <motion.div
                variants={btnOutVars}
                initial="initial"
                animate="end"
                exit="initial"
                className={`w-full h-full absolute top-0 left-0 bg-${props.color1}`}
              ></motion.div>
            </>
          )}
          <span className="z-0 text-transparent">{children}</span>
          <span className="w-full h-full flex items-center justify-center z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
          </span>
        </div>
      </AnimatePresence>
    </button>
  );
};
