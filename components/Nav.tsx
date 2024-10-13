import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import NavBtns from "./NavBtns";
import { Hamburger } from "./navbar/Hamburger";

import logo from "@/public/Embassy_Network_Black_Logovvvv.png";

import { useCursorVariant } from "@/config";
import { Bell } from "./Bell";

function Nav() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="w-full py-5 fixed top-0 left-0 bg-[#fafafa] z-50">
      <div className="flex justify-between items-center container mx-auto">
        <Link
          href="/"
          className="w-1/3 flex items-center justify-start z-[110]"
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
        >
          <Image
            src={logo}
            alt="Logo Embassy"
            className="max-h-8 w-auto z-[110]"
          />
        </Link>
        <ul className="w-1/3 items-start justify-center hidden lg:flex">
          <NavBtns />
        </ul>
        <div className="hidden lg:block">
          <Bell color={"white"} />
        </div>
        <div className="text-2xl flex lg:hidden w-1/3 items-center justify-end">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}

export default Nav;
