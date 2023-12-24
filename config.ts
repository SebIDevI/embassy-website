import useMouse from "@react-hook/mouse-position";
import { CSSProperties } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type cursorState = {
  variant: string;
  changeVariant: (val: string) => void;
};

export const useCursorVariant = create<cursorState>()(
  persist(
    (set) => ({
      variant: "default",
      changeVariant: (val) => set((state) => ({ variant: val })),
    }),
    { name: "cursor-data" }
  )
);

type Variant = {
  opacity: number;
  height?: number;
  width?: number;
  fontSize?: string;
  backgroundColor?: string;
  mixBlendMode: CSSProperties["mixBlendMode"];
  x: number;
  y: number;
  color?: string;
  transition?: {
    type: string;
    mass: number;
    // ... other transition properties
  };
};

type Variants = {
  default: Variant;
  buy: Variant;
  sell: Variant;
};

export const useVariants = (ref: React.MutableRefObject<null>): Variants => {
  const mouse = useMouse(ref, {
    enterDelay: 50,
    leaveDelay: 50,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }
  // console.log(mouse.clientX);
  // console.log(mouse.clientX);

  return {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "20px",
      backgroundColor: "#000",
      mixBlendMode: "normal",
      x: mouseXPosition - 5,
      y: mouseYPosition - 5,
      transition: {
        type: "spring",
        mass: 0.2,
      },
    },
    buy: {
      opacity: 1,
      backgroundColor: "#fff",
      mixBlendMode: "difference" as CSSProperties["mixBlendMode"],
      color: "#000",
      height: 30,
      width: 30,
      fontSize: "32px",
      x: mouseXPosition - 15,
      y: mouseYPosition - 15,
    },
    sell: {
      opacity: 1,
      backgroundColor: "#EF5151",
      mixBlendMode: "normal" as CSSProperties["mixBlendMode"],
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 1000,
  damping: 120,
};
