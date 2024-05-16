import React from "react";

import { motion, Variants } from "framer-motion";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva(
  `font-pro text-4xl my-10 mx-6 overflow-hidden py-2 break-words`
);

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TtlSlide: React.FC<TitleProps> = ({
  children,
  className,
  ...props
}) => {
  const variants: Variants = {
    offscreen: {
      transform: "translateY(200%)",
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        // delay: props.delay ? props.delay : 0.2,
      },
    },
    onscreen: {
      transform: "translateY(0%)",
      transition: {
        ease: "easeInOut",
        duration: 0.4,
        // delay: props.delay ? props.delay : 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <h5 className={cn(titleVariants(), className)}>
        <motion.div className="inline-block w-full" variants={variants}>
          <span>{children}</span>
        </motion.div>
      </h5>
    </motion.div>
  );
};
