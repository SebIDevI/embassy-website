import useMouse from "@react-hook/mouse-position";
import { CSSProperties, useCallback, useEffect, useRef } from "react";
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

  const mouseXPosition = useRef(0);
  const mouseYPosition = useRef(0);

  let cursorOpacity = 0;
  if (mouse.clientX !== null) {
    mouseXPosition.current = mouse.clientX;
    cursorOpacity = 1;
  }

  if (mouse.clientY !== null) {
    mouseYPosition.current = mouse.clientY;
    cursorOpacity = 1;
  }

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouseXPosition.current = event.clientX;
    mouseYPosition.current = event.clientY;
  }, []);

  useEffect(() => {
    const element = ref.current as HTMLElement | null;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [handleMouseMove, ref]);
  // console.log(mouse.clientX);
  // console.log(mouse.clientX);

  return {
    default: {
      opacity: cursorOpacity,
      height: 10,
      width: 10,
      fontSize: "20px",
      backgroundColor: "#000",
      mixBlendMode: "normal",
      x: mouseXPosition.current - 5,
      y: mouseYPosition.current - 5,
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
      x: mouseXPosition.current - 15,
      y: mouseYPosition.current - 15,
    },
    sell: {
      opacity: 1,
      backgroundColor: "#EF5151",
      mixBlendMode: "normal" as CSSProperties["mixBlendMode"],
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition.current - 48,
      y: mouseYPosition.current - 48,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 1000,
  damping: 120,
};
