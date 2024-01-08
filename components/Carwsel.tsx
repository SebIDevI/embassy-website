import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ButtonAnim } from "./ButtonAnim";

import prezentare3 from "@/public/prezentare3.png";

export function Carwsel() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  const datas = [
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio autem deserunt, nulla laudantium fugit suscipit incidunt harum voluptate accusamus consectetur numquam est minus non rem, doloremque, quas magnam amet.",
      img: "../G Cars Animation.mp4",
      dtt: "By Embassy Blog team - Ian 02, 2024",
    },
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio autem deserunt, nulla laudantium fugit suscipit incidunt harum voluptate accusamus consectetur numquam est minus non rem, doloremque, quas magnam amet.",
      img: "../Clip_4.mp4",
      dtt: "By Embassy Blog team - Ian 02, 2024",
    },
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio autem deserunt, nulla laudantium fugit suscipit incidunt harum voluptate accusamus consectetur numquam est minus non rem, doloremque, quas magnam amet.",
      img: "../G Cars Animation.mp4",
      dtt: "By Embassy Blog team - Ian 02, 2024",
    },
  ];

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
            {datas.map((e, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <div className="flex md:flex-row flex-col items-center justify-center gap-2 h-full relative">
                    <div className="md:w-1/2 h-full min-h-[500px] w-full md:aspect-square relative">
                      <div className="h-full w-full bg-blue-300 absolute top-0 left-0">
                        {index == 2 ? (
                          <div className="w-full h-full bg-[url('/prezentare3.png')] bg-cover bg-center"></div>
                        ) : (
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
                            <source src={e.img} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    </div>
                    <div className="md:w-1/2 px-5 py-10">
                      <p className="text-sm font-graphikLight font-bold">
                        Blog
                      </p>
                      <h5 className="text-4xl font-pro py-2">{e.title}</h5>
                      <p className="py-4 text-sm text-slate-500 font-graphikLight font-bold">
                        {e.dtt}
                      </p>
                      <p className="text-sm my-3 font-graphikLight font-bold line-clamp-2">
                        {e.text}
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
