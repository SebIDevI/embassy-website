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
    Autoplay({ delay: 9000, stopOnInteraction: false })
  );

  const datas = [
    {
      title:
        "Chiar și un simplu clip cu o mașină poate prinde viață în viziunea noastră!",
      text: "Pachetul Embassy Creative poate oferi viață bussiness-ului tău printr-o identitate unică pe care o creăm pe social media. Pentru noi calitatea este imperativă.",
      img: "../G Cars Animation.mp4",
      dtt: "By Embassy Blog team - Iunie 11, 2023",
      link: "/creative",
      btnTxt: "Citește mai mult",
    },
    {
      title: "Ne place să experimentăm lucruri noi!",
      text: "Mereu încercăm să ieșim din zona de comfort. Astfel a luat naștere propriul nostru proiect, @chiropractor.ro unde promovăm chiropracticieni din toată țara.",
      img: "../Clip_4.mp4",
      dtt: "By Embassy Blog team - Ian 08, 2024",
      link: "https://www.instagram.com/chiropractor.ro",
      btnTxt: "Chiropractor.ro",
    },
    {
      title: "Implicare în proiecte de caritate",
      text: "Ne-am simțit onorați să surprindem emoția evenimentului prin obiectivele camerelor noastre, dar și să asigurăm graficile pentru steaguri/tricouri/banner etc.",
      img: "../Clip_4.mp4",
      dtt: "By Embassy Blog team - Iunie 07, 2023",
      link: "/desprenoi",
      btnTxt: "Despre noi",
    },
    {
      title: "De la idee și concept la propriul tău brand!",
      text: "Fie că vorbim de logo, setup al paginilor de social media, creare de content sau website, Embassy Network îți asigură pachetul complet, totul personalizat pentru bussiness-ul tău.",
      img: "../G Cars Animation.mp4",
      dtt: "By Embassy Blog team - Sep 21, 2023",
      link: "/creative",
      btnTxt: "Creative",
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
                        {index == 3 ? (
                          <div className="w-full h-full bg-[url('/prezentare3.png')] bg-cover bg-center"></div>
                        ) : index == 2 ? (
                          <div className="w-full h-full bg-[url('/BeFunky-collage.jpg')] bg-cover bg-center"></div>
                        ) : (
                          <video
                            loop
                            muted
                            autoPlay
                            playsInline
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
                      {/* <p className="text-sm font-graphikLight font-bold">
                        Blog
                      </p> */}
                      <h5 className="sm:text-4xl text-2xl font-pro py-2">
                        {e.title}
                      </h5>
                      <p className="py-4 text-sm text-slate-500 font-graphikLight font-bold">
                        {e.dtt}
                      </p>
                      <p className="text-sm my-3 font-graphik">{e.text}</p>
                      <div className="flex">
                        <ButtonAnim
                          color1="blueEmb"
                          color2="blueEmbDark"
                          link={e.link}
                          className="p-2 px-6 mt-10 sm:text-base text-sm"
                        >
                          {e.btnTxt}
                        </ButtonAnim>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className="bg-blueEmb hover:bg-blueEmbDark text-[#f2f2f2] hover:text-white md:top-1/2 top-1/4" />
        <CarouselNext className="bg-blueEmb hover:bg-blueEmbDark text-[#f2f2f2] hover:text-white md:top-1/2 top-1/4" />
      </Carousel>
    </div>
  );
}
