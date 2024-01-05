"use client";

import React from "react";
import Canvas from "./Canvas";
import { useCursorVariant } from "@/config";
import { BsChevronDown } from "react-icons/bs";
import { ButtonAnim } from "./ButtonAnim";

function Head() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }
  return (
    <section className="h-[100vh] min-h-[850px] lg:block flex items-center justify-center relative px-4 lg:pt-10 bg-[linear-gradient(90deg,#e8f1f5,#fafafa_100%)]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:mx-40">
        <div className="font-extrabold text-2xl w-full text-center lg:text-left lg:text-4xl">
          <h1 className="text-6xl lg:text-8xl xl:text-9xl text-blueEmb leading-[100%] font-pro overflow-hidden">
            <span className="translate-y-full inline-block animate-ttlSld delay-7">
              Embassy
            </span>
          </h1>
          <h3 className="my-5 mb-7 font-pro overflow-hidden">
            <span className="translate-y-full inline-block animate-ttlSld delay-9">
              Un Domino Strategic
            </span>
          </h3>
          <div
            onMouseEnter={() => sellEnter()}
            onMouseLeave={() => sellLeave()}
          >
            <ButtonAnim
              color1="blueEmb"
              color2="blue-300"
              link="#proiecte"
              className="py-3 px-10 text-lg font-graphikThin"
            >
              Proiectele noastre
            </ButtonAnim>
          </div>
        </div>
        <div className="w-full lg:h-[90vh] flex justify-center items-center">
          <div className="w-full h-full max-w-[350px] lg:max-w-none flex items-center">
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
