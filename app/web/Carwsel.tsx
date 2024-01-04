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
import pirelli from "@/public/pirelli-website.jpeg";
import rhyminem from "@/public/rhyminem.png";
import Image from "next/image";

const imgs = [pirelli, rhyminem];

export function Carwsel() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-4/5 xl:max-w-6xl lg:max-w-4xl md:max-w-xl mb-10"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <div className="bg-transparent">
        <CarouselContent>
          {imgs.map((e, index) => (
            <CarouselItem key={index}>
              <Image
                src={e}
                alt="Website Image"
                className="rounded-xl w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
