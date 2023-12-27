import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useState } from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => {
  const [isVisible, changeIsVisible] = useCycle(false, true);

  const handleTransitionEnd = () => {
    changeIsVisible();
  };

  return (
    <motion.ul
      variants={variants}
      onTransitionEnd={handleTransitionEnd}
      className={`px-10 absolute top-24 w-full h-full overflow-y-scroll`}
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

const itemIds = [0, 1, 2, 3, 4];
