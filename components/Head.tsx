"use client";

import React from "react";
import Canvas from "./Canvas";
import { useCursorVariant } from "@/config";
import { BsChevronDown } from "react-icons/bs";

function Head() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <section className="h-[100vh] relative px-4 pt-10 bg-[linear-gradient(90deg,#e8f1f5,#fafafa_100%)]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:mx-40">
        <div className="font-extrabold text-2xl w-full text-center lg:text-left lg:text-4xl">
          <h1 className="text-6xl lg:text-9xl text-blueEmb leading-[100%] font-pro">
            Embassy
          </h1>
          <h3 className="py-10 font-pro">Fckin w yo mama since &apos;99</h3>
          <button
            className="relative rounded-full text-lg tracking-wider font-graphikThin px-10 py-3 text-white bg-blueEmb before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[100%] before:-z-[1] before:bg-blue-400 before:translate-y-[100%] before:animate-anim-out-acc hover:before:animate-anim-in-acc"
            onMouseEnter={sellEnter}
            onMouseLeave={sellLeave}
          >
            Proiectele Noastre
          </button>
        </div>
        <div className="w-full lg:h-[90vh]">
          <div className="w-full h-full">
            <Canvas />
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-10 left-0 flex flex-col justify-center items-center animate-floating">
        <p className="font-bold">Scroll to continue</p>
        <BsChevronDown />
      </div>
    </section>
  );
}

export default Head;
