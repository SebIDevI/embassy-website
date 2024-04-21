import React from "react";

import { FaPlayCircle } from "react-icons/fa";

import { useCursorVariant } from "@/config";
import Link from "next/link";

function Video() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div
      className="flex relative mt-20"
      //   style={{ background: 'url("../public/G Cars Animation.mp4")' }}
    >
      <div className="w-full"></div>
      <div className="w-full z-20 py-20 text-white md:px-0 px-8 break-words">
        <p className="font-graphikq">Studio Showreel 2024</p>
        <h4 className="text-6xl font-proBlack py-2 md:pe-20">
          Discover the power of animation to bring stories to life
        </h4>
        <div className="mt-12">
          <Link href="/creative">
            <button
              onMouseEnter={() => sellEnter()}
              onMouseLeave={() => sellLeave()}
              className="flex items-center gap-2 hover:scale-125 transition-transform ease-in-out duration-500"
            >
              <FaPlayCircle className="text-blue-500" />
              Află mai multe
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000000] z-10"></div>
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          controls={false}
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
          disablePictureInPicture
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="../finall.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
