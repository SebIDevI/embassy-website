import { TtlSlide } from "@/components/TtlSlide";
import { useCursorVariant } from "@/config";
import Link from "next/link";
import React from "react";

function IdeeConcept() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="mx-auto text-center my-10 mb-28 text-sm font-graphikLight">
      {/* <p>Beneficii Cheie</p> */}
      <TtlSlide>De la IDEE și CONCEPT la CIFRE și VÂNZĂRI</TtlSlide>
      <p className="md:w-2/3 w-full mx-auto">
        Chiropractor.ro a luat nastere din dorinta de a crea o comunitate foarte
        nișată, dar și un spațiu comun pentru specialiștii din domeniu unde își
        pot promova serviciile cu scopul de a atrage noi clienți. Toate acestea
        sunt gândite în interesul specialiștilor, noi asigurând partea de
        strategie, filmarea videoclipurilor, prelucrarea acestora și
        managementul postărilor. Singura datorie a specialiștilor este de a
        asigura subiectul de filmare (pacientul) și procedurile pe care le va
        aplica.
        <br />
        Așa de simplu este!
      </p>
    </div>
  );
}

export default IdeeConcept;
