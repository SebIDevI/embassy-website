import React from "react";
import LottieControl from "@/components/lottie/page";
import animationData from "@/public/lottie/anim1.json";
import { TtlSlide } from "@/components/TtlSlide";
import Image from "next/image";

import vali from "@/public/vali-dsp.png";
import coze from "@/public/coze-dsp.png";
import sebi from "@/public/sebi-dspr.jpg";

function Valori() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto text-black">
        <div className="flex flex-col md:flex-row items-center md:mt-28">
          <div className="w-full font-graphik px-1 mb-10 md:mb-0">
            <div className="py-2">
              <TtlSlide className="mx-0 my-2 2xl:text-7xl lg:text-5xl text-4xl font-proBlack">
                Valori
              </TtlSlide>
            </div>
            <div className="pt-10 lg:text-base text-sm font-graphik">
              <ul className="list-disc">
                <li>
                  <b className="font-pro">Compatibilitate:</b> Fieacre este
                  diferit, de aceea înainte de a lucra împreună, ne asigurăm că
                  „suntem pe aceeași lungime de undă”.
                </li>
                <li>
                  <b className="font-pro">Creativitate:</b> Creativitatea
                  noastră a condus mereu spre idei și rezultate superioare.
                </li>
                <li>
                  <b className="font-pro">Lucru în echipă:</b> Credem că cele
                  mai bune lucruri sunt create atunci când lucrăm împreună.
                </li>
                <li>
                  <b className="font-pro">Evoluție:</b> Pentru noi nu există
                  lucruri bune și lucruri rele. Există lucruri bune și lucruri
                  din care am învățat și am evoluat.
                </li>
                <li>
                  <b className="font-pro">Adaptabilitate:</b> Fiind o echipă
                  tânără, reușim să ne adaptăm cu succes la orice provocare pe
                  care o întâlnim.
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full aspect-square">
            <div className="relative w-full h-full">
              <div className="absolute top-4 left-1/4 -translate-x-1/4 w-1/2 h-1/2">
                <Image
                  src={vali}
                  alt="Valentin Poza"
                  className="w-auto h-full rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/4 translate-x-1/2 w-1/2 h-1/2 ">
                <Image
                  src={coze}
                  alt="Cosmin Poza"
                  className="w-auto h-full rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute top-full -translate-y-full left-1/2 -translate-x-1/2 w-1/2 h-1/2 border-[25px] border-b-[75px] border-out border-white rounded-lg shadow-xl">
                <Image src={sebi} alt="Sebi Poza" className="w-full h-full" />
              </div>
              {/* <Image src={} alt='Sebi Poza' /> */}
            </div>
          </div>
        </div>
        <hr className="w-full mx-auto border-2 mt-28" />
      </div>
    </>
  );
}

export default Valori;
