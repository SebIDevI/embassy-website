import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import NavBtns from "./NavBtns";
import { Hamburger } from "./navbar/Hamburger";

import logo from "@/public/logoBlack.png";

import { useCursorVariant } from "@/config";
import Bell from "./Bell";

function Nav() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="w-full py-5 lg:px-40 flex justify-between items-center fixed top-0 bg-[#fafafa] z-50">
      <Link
        href="/"
        className="w-1/3 flex items-center justify-start z-[110]"
        onMouseEnter={() => sellEnter()}
        onMouseLeave={() => sellLeave()}
      >
        <Image
          src={logo}
          alt="Logo Embassy"
          className="max-h-12 w-auto z-[110]"
        />
      </Link>
      <ul className="w-full items-start justify-center hidden lg:flex">
        <NavBtns />
      </ul>
      <Bell />
      <div className="text-2xl flex lg:hidden w-1/3 items-center justify-end">
        <Hamburger />
      </div>
    </div>
  );
}

export default Nav;
