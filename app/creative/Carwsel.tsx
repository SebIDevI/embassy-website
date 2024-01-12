import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ButtonAnim } from "@/components/ButtonAnim";
import vali from "@/public/slider_creative/vali.jpg";
import coze1 from "@/public/slider_creative/coze1.png";

import Image from "next/image";

const imgs = [
  coze1,
  vali,
  "/slider_creative/clip1.mp4",
  "/slider_creative/clip2.mp4",
];

export function Carwsel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-4/5 xl:max-w-6xl lg:max-w-4xl md:max-w-xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="bg-transparent">
        <CarouselContent>
          {imgs.map((e, index) =>
            index <= 1 ? (
              <CarouselItem key={index}>
                <Image
                  src={e}
                  alt="Website Image"
                  className="rounded-xl w-full h-full"
                />
              </CarouselItem>
            ) : (
              <CarouselItem key={index}>
                <div className="h-full aspect-square rounded-xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    controls={false}
                    controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                    disablePictureInPicture
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  >
                    <source src={e as string} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
