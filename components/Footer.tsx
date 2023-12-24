import React from "react";
import Image from "next/image";

import logo from "@/public/embLogo.png";
import Link from "next/link";

import { useCursorVariant } from "@/config";

function Footer() {
  const cursorVariant = useCursorVariant();
  function sellEnter() {
    cursorVariant.changeVariant("buy");
  }

  function sellLeave() {
    cursorVariant.changeVariant("default");
  }

  return (
    <div className="bg-black fixed bottom-0 -z-50 w-full text-white flex flex-col items-center justify-center h-[600px] lg:h-[400px] pointer-events-auto">
      {/* <h4 className="py-16 w-4/5 text-center text-4xl font-bold mx-auto">
        We offer a 100% ROI guarantee. If we don&apos;t perform, you don&apos;t
        pay. Simple as that.
      </h4>
      <button className="bg-blueEmbDark mx-auto px-20 py-2 bg-[linear-gradient(to_left,#000000,#004A7C,#000000)]">
        Free case study
      </button>
      <div className="w-2/3 py-10 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="12"
          viewBox="0 0 998 12"
          fill="none"
        >
          <path
            d="M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM986.669 6C986.669 8.94552 989.057 11.3333 992.002 11.3333C994.948 11.3333 997.335 8.94552 997.335 6C997.335 3.05448 994.948 0.666667 992.002 0.666667C989.057 0.666667 986.669 3.05448 986.669 6ZM6 7H992.002V5H6V7Z"
            fill="white"
          />
        </svg>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-10 w-4/5 lg:items-start items-center mt-14">
        <Link
          href={"/"}
          className="lg:w-1/3 flex lg:justify-end justify-center"
          onMouseEnter={() => sellEnter()}
          onMouseLeave={() => sellLeave()}
        >
          <Image src={logo} alt="Logo Embassy" className="w-4/5" />
        </Link>
        <div className="text-center lg:w-1/3">
          <p className="text-2xl uppercase font-bold pb-3">BRANCHES</p>
          <ul>
            <li>
              <Link
                href={"/"}
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                Health & Beauty
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                Chiropractors
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                Automotive
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                New branch
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:text-start text-center lg:w-1/3">
          <p className="text-2xl uppercase font-bold pb-3">CONTACT US</p>
          <ul>
            <li>
              <a
                href={"tel:+40742069699"}
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                📞 +40 742 069 699
              </a>
            </li>
            <li>
              <a
                href="mailto:embassy@agency.ro"
                onMouseEnter={() => sellEnter()}
                onMouseLeave={() => sellLeave()}
              >
                ✉️embassy@agency.ro
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-16 px-4 text-center">
        <p className="text-center font-extralight">
          <Link
            href="#"
            onMouseEnter={() => sellEnter()}
            onMouseLeave={() => sellLeave()}
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            href="#"
            onMouseEnter={() => sellEnter()}
            onMouseLeave={() => sellLeave()}
          >
            GDPR
          </Link>{" "}
          |{" "}
          <Link
            href="#"
            onMouseEnter={() => sellEnter()}
            onMouseLeave={() => sellLeave()}
          >
            Terms
          </Link>
        </p>
        <p className="font-bold pt-2">
          © 2023 embassy-agency.com. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
