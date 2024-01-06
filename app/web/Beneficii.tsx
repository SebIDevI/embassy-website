"use client";

import { TtlSlide } from "@/components/TtlSlide";
import React from "react";

function Beneficii() {
  return (
    <div className=" mx-auto text-center my-10 text-sm font-graphikLight">
      <TtlSlide className="uppercase">
        De la idee și concept la website
      </TtlSlide>
      <p className="w-2/3 mx-auto mb-20">
        Fie ca vorbim de website-uri de prezentare, shop-uri online sau
        portaluri, <b className="font-graphik">Embassy</b> WebExp este varianta
        personalizată pentru afacerea ta. WebDev nu este doar un serviciu; este
        o călătorie personalizată în universul digital, unde fiecare linie de
        cod, fiecare element de design și fiecare strategie SEO sunt personal
        adaptate pentru a transpune viziunea unică a afacerii tale într-o
        experiență online remarcabilă.
      </p>
      <p>Beneficii cheie </p>
      <TtlSlide>Beneficii WebExp</TtlSlide>
    </div>
  );
}

export default Beneficii;
