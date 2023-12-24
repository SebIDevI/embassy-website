import React from "react";

import { useCursorVariant } from "@/config";

function Fin() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="my-20  flex flex-col gap-10 justify-center items-center">
      <h4 className="font-graphik text-4xl text-center">
        Începe acum alături de <b className="font-pro">Embassy</b>Crative
      </h4>
      <button
        className="bg-green-500 font-graphikLight text-3xl text-white p-2 px-7 rounded-lg"
        onMouseEnter={() => sellEnter()}
        onMouseLeave={() => sellLeave()}
      >
        Contact
      </button>
    </div>
  );
}

export default Fin;
