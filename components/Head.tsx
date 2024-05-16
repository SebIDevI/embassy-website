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
    // bg: bg-[linear-gradient(90deg,#e8f1f5,#fafafa_100%)]
    <section className="h-[100vh] min-h-[850px] lg:block flex items-center justify-center relative lg:pt-10 bg-[#e8f1f5]">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center container">
        <div className="font-extrabold text-2xl w-full text-center lg:text-left lg:text-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl text-blueEmb font-pro overflow-hidden">
            <span className="translate-y-[200%] py-4 inline-block animate-ttlSld delay-7">
              Embassy
            </span>
          </h1>
          <h3 className="my-5 mb-7 font-pro overflow-hidden">
            <span className="translate-y-[200%] py-2 inline-block animate-ttlSld delay-9">
              Un Domino Digital
            </span>
          </h3>
          <div className="flex lg:justify-start justify-center">
            <div
              onMouseEnter={() => sellEnter()}
              onMouseLeave={() => sellLeave()}
            >
              <ButtonAnim
                color1="blueEmb"
                color2="blueEmbDark"
                link="#proiecte"
                className="py-3 px-9 text-base sm:text-lg font-graphikThin"
              >
                Proiectele noastre
              </ButtonAnim>
            </div>
          </div>
        </div>
        <div className="w-full lg:h-[90vh] flex justify-center items-center">
          <div className="w-full h-full max-w-[350px] lg:max-w-none flex items-center relative">
            <Canvas />
            {/* <video
              muted
              autoPlay
              playsInline
              controls={false}
              controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
              disablePictureInPicture
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source
                src="../embassy triangle animation +BG.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
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
