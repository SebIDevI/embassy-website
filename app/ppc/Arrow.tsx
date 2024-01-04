import React from "react";
import Image from "next/image";

import strArr from "@/public/arrows/arrStr.svg";
import roundArr from "@/public/arrows/round2.svg";
import mid from "@/public/ff.jpg";
import mana from "@/public/mana aia buna raw.png";
function Arrow() {
  return (
    <>
      <div className="container max-w-6xl font-pro text-xl">
        <div className="md:grid hidden grid-cols-5 gap-5">
          {/* ----------------------- row 1 ---------------------- */}
          <div className="text-center max-h-40 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 translate-x-1/4 h-1/2"
            />
          </div>
          <div className="text-center col-span-3">
            <p>Strategii Social Media</p>
          </div>
          <div className="text-center max-h-40 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 -translate-x-1/4 h-1/2 rotate-90"
            />
          </div>
          {/* ----------------------- row 2 ---------------------- */}
          <div className="text-center">
            <p>Social Media Management</p>
          </div>
          <div className="col-span-3 row-span-5">
            <div className="w-auto h-full rounded-xl overflow-hidden bg-contain mx-12">
              <Image src={mid} alt="Chart" className="w-full h-full" />
            </div>
          </div>
          <div className="text-center">
            <p>Content Creation / Editing</p>
          </div>
          {/* ----------------------- row 3 ---------------------- */}
          <div className="text-center  max-h-40 flex items-center justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="-rotate-[45deg] -scale-y-100 h-1/2"
            />
          </div>
          <div className="text-center  max-h-40 flex items-center justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="rotate-[135deg] -scale-y-100 h-1/2"
            />
          </div>
          {/* ----------------------- row 4 ---------------------- */}
          <div className="text-center">
            <p>Analytics</p>
          </div>
          <div className="text-center">
            <p>Meta / TikTok Ads</p>
          </div>
          {/* ----------------------- row 5 ---------------------- */}
          <div className="text-center  max-h-40 flex items-center justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="-rotate-[45deg] -scale-y-100 h-1/2"
            />
          </div>
          <div className="text-center  max-h-40 flex items-center justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="rotate-[135deg] -scale-y-100 h-1/2"
            />
          </div>
          {/* ----------------------- row 6 ---------------------- */}
          <div className="text-center">
            <p>Database Reactivation Campaign</p>
          </div>
          <div className="text-center">
            <p>Appointment Setting (Optional)</p>
          </div>
          {/* ----------------------- row 7 ---------------------- */}
          <div className="text-center  max-h-40 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 -rotate-90 h-1/2"
            />
          </div>
          <div className="text-center flex items-end">
            <p>Google Review Campaign</p>
          </div>
          <div className="text-center  max-h-40 flex items-end justify-center">
            <Image
              src={strArr}
              alt={"Round Arrow"}
              className="-rotate-[135deg] -scale-y-100 h-1/3"
            />
          </div>
          <div className="text-center flex items-end pb-4">
            <p>Email Marketing</p>
          </div>
          <div className="text-center  max-h-40 flex items-center justify-center">
            <Image
              src={roundArr}
              alt={"Round Arrow"}
              className="-scale-y-100 rotate-180 h-1/2"
            />
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center justify-center gap-8">
          <p className="text-center">Strategii Social Media</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Content Creation / Editing</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Meta / TikTok Ads</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Appointment Setting (Optional)</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Email Marketing</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Google Review Campaign</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Database Reactivation Campaign</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Analytics</p>
          <Image
            src={strArr}
            alt={"Round Arrow"}
            className="rotate-[135deg] -scale-y-100 h-1/2 max-h-[50px]"
          />
          <p className="text-center">Social Media Management</p>
        </div>
      </div>
      <hr className="w-2/3 mx-auto border-4 my-10 rounded-full border-slate-500" />
    </>
  );
}

export default Arrow;
