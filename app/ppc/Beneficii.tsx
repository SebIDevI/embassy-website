import { TtlSlide } from "@/components/TtlSlide";
import { useCursorVariant } from "@/config";
import Link from "next/link";
import React from "react";

function Beneficii() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="mx-auto text-center my-10 mb-28 text-sm font-graphikLight">
      <p>Beneficii Cheie</p>
      <TtlSlide>Afacerea ta la nivelul următor...</TtlSlide>
      <p className="w-2/3 mx-auto">
        Embassy PPC nu este doar un pachet de servicii, este un parteneriat
        activ și angajat pentru succesul tău online. Acesta reprezintă alegerea
        clară pentru afacerile care aspiră la o{" "}
        <b className="font-pro">scalare eficientă</b> în{" "}
        <b className="font-pro">cel mai scurt timp posibil</b>. Cu un pachet
        complet și o strategie cuprinzătoare, Embassy PPC utilizează fiecare
        instrument valabil în mod eficient, oferind nu doar promovare, ci o
        strategie bine pusă la punct pentru o dezvoltare de lungă durată și
        eficientă sub toate aspectele. Spre deosebire de pachetul{" "}
        <Link
          href={"/creative"}
          className="text-blue-700 hover:underline"
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
        >
          Embassy Creative
        </Link>
        , unde ne bazăm pe strategii de creștere organică, pachetul Embassy PPC{" "}
        <b className="font-pro">(pay per click)</b> are la bază{" "}
        <b className="font-pro">promovare plătită</b>
        (Facebook/Instagram/TikTok ads).
        <br />
        <br />
        Iata ce contine pachetul Embassy PPC:
      </p>
    </div>
  );
}

export default Beneficii;
