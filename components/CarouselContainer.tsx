import React from "react";
import { Carwsel } from "./Carwsel";
import { TtlSlide } from "./TtlSlide";
import Image from "next/image";
import colaj from "@/public/colaj.gif";

function CarouselContainer() {
  return (
    <div
      className="w-full flex items-center flex-col justify-center gap-10 bg-white py-20"
      id="proiecte"
    >
      <div className="my-10">
        <div className="container">
          <p className="font-pro text-4xl max-w-[960px] mx-auto">
            Branding? Grafică 3D? Motion Graphics? <br />
          </p>
          <p className="text-2xl font-normal leading-2 mb-10 mt-2">
            La Embassy Network avem orice unealtă de comunicare în marketing
          </p>
          <video
            loop
            muted
            autoPlay
            playsInline
            controls={false}
            className="mb-20"
            preload={"auto"}
            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
            disablePictureInPicture
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={"../colaj.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <TtlSlide className="md:text-5xl text-3xl text-center -my-4">
          Caracteristicile care fac Embassy Network
        </TtlSlide>
        <TtlSlide
          delay={0.3}
          className="md:text-5xl text-3xl text-center -my-4"
        >
          Opțiunea #1
        </TtlSlide>
      </div>
      {/* <p className="font-pro text-5xl text-center leading-snug">
        Caracteristicile care fac Embassy Network <br /> Opțiunea #1
      </p> */}
      <div className="container">
        <hr className="w-full mx-auto border-2 rounded-lg" />
      </div>
      <Carwsel />
    </div>
  );
}

export default CarouselContainer;
