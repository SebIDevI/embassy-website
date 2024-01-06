import React from "react";

import { useCursorVariant } from "@/config";
import Link from "next/link";
import { ButtonAnim } from "@/components/ButtonAnim";

function Fin() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="my-20  flex flex-col gap-10 justify-center items-center text-white">
      <h4 className="font-graphik text-4xl text-center">
        Începe acum alături de <b className="font-pro">Embassy</b>Crative
      </h4>
      <div onMouseEnter={() => sellEnter()} onMouseLeave={() => sellLeave()}>
        <ButtonAnim
          color1="blueEmb"
          color2="blue-300"
          link="/contact"
          className="text-xl p-2 px-7 font-graphikLight"
        >
          Contact
        </ButtonAnim>
      </div>
    </div>
  );
}

export default Fin;
