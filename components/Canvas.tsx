"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) {
      console.error("Canvas 2D context is not available.");
      return;
    }

    const frameCount = 76;

    const currentFrame = (index: number) =>
      `./peleu/${(index + 1).toString()}.png`;

    const images: HTMLImageElement[] = [];
    // const imagesRev: HTMLImageElement[] = [];
    let ball = { frame: 0 };

    // Load all images and render when they're all loaded
    const loadImages = () => {
      let imagesLoaded = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          imagesLoaded++;

          if (imagesLoaded === frameCount) {
            // All images are loaded, now you can render
            setIsLoading(false); //hide the loading animation
            render();
          }
        };

        images.push(img);
      }
    };
    // const loadImagesRev = () => {
    //   let imagesLoaded = 0;

    //   for (let i = frameCount - 1; i > -1; i--) {
    //     const img = new Image();
    //     img.src = currentFrame(i);
    //     img.onload = () => {
    //       imagesLoaded++;

    //       if (imagesLoaded === frameCount) {
    //         // All images are loaded, now you can render
    //         setIsLoading(false); //hide the loading animation
    //         renderRev();
    //       }
    //     };

    //     imagesRev.push(img);
    //   }
    // };

    gsap.to(ball, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 2.4,
      // scrollTrigger: {
      //   scrub: true,
      //   end: "50%",
      // },
      onUpdate: render,
    });
    // gsap.to(ball, {
    //   frame: frameCount > 76 ? 75 : frameCount - 1,
    //   snap: "frame",
    //   ease: "none",
    //   scrollTrigger: {
    //     scrub: true,
    //     end: "50%",
    //   },
    //   onUpdate: renderRev,
    // });

    loadImages();

    function render() {
      if (!context) return;

      canvas!.width = images[0].width;
      canvas!.height = images[0].height;

      context.clearRect(0, 0, canvas!.width, canvas!.height);
      context.drawImage(images[ball.frame], 0, 0);
    }

    // loadImagesRev();

    // console.log(imagesRev);

    // function renderRev() {
    //   if (!context || imagesRev.length === 0) return;

    //   canvas!.width = imagesRev[0].width;
    //   canvas!.height = imagesRev[0].height;

    //   context.clearRect(0, 0, canvas!.width, canvas!.height);
    //   context.drawImage(imagesRev[ball.frame], 0, 0);
    // }
  }, []);

  return (
    <>
      {/* Display a loading animation or message while the images are loading */}
      {/* <div className={`loading-animation h-full ${isLoading ? "" : "hidden"}`}>
        <div className="waves h-full flex justify-center items-center">
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-1"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-2"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-3"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-4"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-5"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-6"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-7"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-8"></div>
          <div className="w-[2px] h-[5%] bg-[linear-gradient(45deg,#005691,#004A7C)] m-[2px] animate-wave rounded-3xl scale-0 delay-9"></div>
        </div>
      </div> */}
      <canvas
        ref={canvasRef}
        className={`canvas w-full ${isLoading ? "hidden" : ""}`}
      ></canvas>
    </>
  );
}

export default Canvas;
