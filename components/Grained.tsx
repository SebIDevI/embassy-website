import React, { useEffect, useState } from "react";
import Body from "./Body";

interface GrainedOptions {
  animate: boolean;
  patternWidth: number;
  patternHeight: number;
  grainOpacity: number;
  grainDensity: number;
  grainWidth: number;
  grainHeight: number;
  grainChaos: number;
  grainSpeed: number;
}

declare global {
  interface Window {
    grained: (ele: string, opt: GrainedOptions) => void;
  }
}

function GrainedEffect({ ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const element = document.getElementById("your-element-id");
    const body = document.body;
    const html = document.documentElement;
    const footer = document.querySelector("#footer");
    const height = Math.max(
      body.scrollHeight - footer?.scrollHeight!,
      body.offsetHeight - footer?.clientHeight!,
      html.clientHeight - footer?.clientHeight!,
      html.scrollHeight - footer?.scrollHeight!,
      html.offsetHeight - footer?.scrollHeight!
    );

    if (!element) {
      console.error("Grained: cannot find the element with id your-element-id");
      return;
    }

    const elementId = element.id;

    // set style for parent
    if (element.style.position !== "absolute") {
      element.style.position = "absolute";
      element.style.height = height + "px";
      element.style.zIndex = "-10";
    }
    element.style.overflow = "hidden";

    const prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];

    // default option values
    const options: GrainedOptions = {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.06,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
      grainChaos: 0.5,
      grainSpeed: 20,
    };

    const noise = generateNoise();

    let animation = "";
    const keyFrames = [
      "0%:-10%,10%",
      "10%:-25%,0%",
      "20%:-30%,10%",
      "30%:-30%,30%",
      "40%::-20%,20%",
      "50%:-15%,10%",
      "60%:-20%,20%",
      "70%:-5%,20%",
      "80%:-25%,5%",
      "90%:-30%,25%",
      "100%:-10%,10%",
    ];

    prefixes.forEach((prefix) => {
      animation += `@${prefix}keyframes grained{`;
      keyFrames.forEach((keyFrame) => {
        const [keyVal, transformValue] = keyFrame.split(":");
        animation += `${keyVal}{`;
        animation += `${prefix}transform:translate(${transformValue});`;
        animation += "}";
      });
      animation += "}";
    });

    // add animation keyframe
    const animationAdded = document.getElementById("grained-animation");
    if (animationAdded) {
      animationAdded.parentElement?.removeChild(animationAdded);
    }
    let style = document.createElement("style");
    style.type = "text/css";
    style.id = "grained-animation";
    style.innerHTML = animation;
    document.body.appendChild(style);

    // add customized style
    const styleAdded = document.getElementById(
      `grained-animation-${elementId}`
    );
    if (styleAdded) {
      styleAdded.parentElement?.removeChild(styleAdded);
    }

    style = document.createElement("style");
    style.type = "text/css";
    style.id = `grained-animation-${elementId}`;
    document.body.appendChild(style);

    let rule = `background-image: url(${noise});`;
    rule += `position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;`;
    prefixes.forEach((prefix) => {
      if (options.animate) {
        rule += `${prefix}animation-name:grained;`;
        rule += `${prefix}animation-iteration-count: infinite;`;
        rule += `${prefix}animation-duration: ${options.grainChaos}s;`;
        rule += `${prefix}animation-timing-function: steps(${options.grainSpeed}, end);`;
      }
    });

    // selector element to add grains
    const selectorElement = `#${elementId}::before`;

    addCSSRule(style.sheet!, selectorElement, rule);

    // Function to generate noise
    function generateNoise() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = options.patternWidth;
      canvas.height = options.patternHeight;

      for (let w = 0; w < options.patternWidth; w += options.grainDensity) {
        for (let h = 0; h < options.patternHeight; h += options.grainDensity) {
          const rgb = (Math.random() * 256) | 0;
          ctx!.fillStyle = `rgba(${rgb}, ${rgb}, ${rgb}, ${options.grainOpacity})`;
          ctx!.fillRect(w, h, options.grainWidth, options.grainHeight);
        }
      }

      return canvas.toDataURL("image/png");
    }

    function addCSSRule(sheet: CSSStyleSheet, selector: string, rules: string) {
      let ins = "";
      if (selector.length) {
        ins = `${selector}{${rules}}`;
      } else {
        ins = rules;
      }

      if ("insertRule" in sheet) {
        (sheet as CSSStyleSheet).insertRule(ins, 0);
      } else if ("addRule" in sheet) {
        (sheet as CSSStyleSheet).addRule(selector, rules, 0);
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`absolute w-full h-full top-0 left-0 ${
            props.theme == "dark"
              ? "bg-[#171717]"
              : props.theme == "blue"
              ? "bg-fixed bg-[radial-gradient(circle_at_top_left,#351fba,#18285c);]"
              : "bg-white"
          } -z-10 scroll-smooth`}
        ></div>
      )}
      <div
        id="your-element-id"
        className={`w-full absolute top-0 left-0 mb-96 ${
          props.theme == "dark"
            ? "bg-[#171717]"
            : props.theme == "blue"
            ? "bg-fixed bg-[radial-gradient(circle_at_top_left,#351fba,#18285c);]"
            : "bg-white"
        }`}
      >
        {/* <Body /> */}
      </div>
    </>
  );
}

export default GrainedEffect;
