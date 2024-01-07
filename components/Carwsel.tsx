import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ButtonAnim } from "./ButtonAnim";

export function Carwsel() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  return (
    <div className="container">
      <Carousel
        plugins={[plugin.current]}
        className="lg:w-full w-4/5 mx-auto xl:max-w-6xl lg:max-w-4xl md:max-w-xl mb-10 mt-5"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <div className="bg-white">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <div className="flex md:flex-row flex-col items-center justify-center gap-2 h-full relative">
                    <div className="md:w-1/2 h-full min-h-[500px] aspect-square relative">
                      <div className="h-full w-full bg-blue-300 absolute top-0 left-0"></div>
                    </div>
                    <div className="md:w-1/2 px-5 py-10">
                      <p className="text-sm font-graphikLight font-bold">
                        Blog
                      </p>
                      <h5 className="text-4xl font-pro py-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Placeat!
                      </h5>
                      <p className="py-4 text-sm text-slate-500 font-graphikLight font-bold">
                        By Embassy Blog team - Ian 02, 2024
                      </p>
                      <p className="text-sm my-3 font-graphikLight font-bold line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati optio autem deserunt, nulla laudantium fugit
                        suscipit incidunt harum voluptate accusamus consectetur
                        numquam est minus non rem, doloremque, quas magnam amet.
                      </p>
                      <div className="flex">
                        <ButtonAnim
                          color1="blueEmb"
                          color2="blueEmbDark"
                          link="/"
                          className="p-2 px-6 mt-10 text-base"
                        >
                          Read more
                        </ButtonAnim>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
