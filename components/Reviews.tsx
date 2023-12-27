import React from "react";
import Image from "next/image";

import om1 from "@/public/om1.png";
import om2 from "@/public/om2.png";
import om3 from "@/public/om3.png";

function Reviews() {
  return (
    <div className="bg-black w-full text-white pb-20">
      <div className="mx-auto w-[90%] rounded-3xl bg-[linear-gradient(180deg,#004A7C,#004A7C00)] py-12">
        <h4 className="text-4xl font-extrabold text-center xl:w-1/3 mx-5 xl:mx-auto mb-10">
          Our customer results speak for themselves. Take a look.
        </h4>
        <div className="flex flex-col xl:flex-row gap-20 xl:px-20 px-10">
          <div
            className="xl:w-1/3 p-6 py-4 relative"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18' ry='18' stroke='%23FAFAFAFF' stroke-width='2' stroke-dasharray='4%2c 13%2c 25%2c 20%2c 7%2c 4%2c 13%2c 25' stroke-dashoffset='25' stroke-linecap='square'/%3e%3c/svg%3e\")",
              borderRadius: "18px",
            }}
          >
            <div className="xl:w-1/5 max-w-[100px] w-1/4 absolute xl:top-5 xl:left-0 xl:-translate-x-1/3 top-0 -translate-y-1/3 right-6">
              <Image src={om1} alt="Om1" className="w-full rounded-full" />
            </div>
            <div className="xl:ms-14">
              <p className="font-extrabold text-xl py-4">
                <span className="bg-[linear-gradient(to_left,#fafafa80,#fafafa,#fafafa80)] bg-clip-text text-transparent">
                  Vitality Chiropractic Clinic
                </span>
              </p>
              <p className="pb-4">
                &quot;Our chiropractic clinic was grappling with attracting new
                patients until we crossed paths with Embassy. TikTok Ads
                transformed our outreach game, and our appointments are
                consistently full now.&quot; - <b>Dr. Mitchell </b>
              </p>
            </div>
          </div>
          <div
            className="xl:w-1/3 p-6 py-4 relative"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18' ry='18' stroke='%23FAFAFAFF' stroke-width='2' stroke-dasharray='4%2c 13%2c 25%2c 20%2c 7%2c 4%2c 13%2c 25' stroke-dashoffset='25' stroke-linecap='square'/%3e%3c/svg%3e\")",
              borderRadius: "18px",
            }}
          >
            <div className="xl:w-1/5 max-w-[100px] w-1/4 absolute xl:top-5 xl:left-0 xl:-translate-x-1/3 top-0 -translate-y-1/3 right-6">
              <Image src={om3} alt="Om3" className="w-full rounded-full" />
            </div>
            <div className="xl:ms-14">
              <p className="font-extrabold text-xl py-4">
                <span className="bg-[linear-gradient(to_left,#fafafa80,#fafafa,#fafafa80)] bg-clip-text text-transparent">
                  Serenity Spa Retreat
                </span>
              </p>
              <p className="pb-4">
                &quot;As a spa owner, I was seeking a way to rejuvenate my
                business. Embassy Network&apos;s expertise in Instagram Ads
                brought in a flood of clients looking for wellness treatments,
                and we&apos;re thriving once again.&quot; - <b>Sophia </b>
              </p>
            </div>
          </div>
          <div
            className="xl:w-1/3 p-6 py-4 relative"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18' ry='18' stroke='%23FAFAFAFF' stroke-width='2' stroke-dasharray='4%2c 13%2c 25%2c 20%2c 7%2c 4%2c 13%2c 25' stroke-dashoffset='25' stroke-linecap='square'/%3e%3c/svg%3e\")",
              borderRadius: "18px",
            }}
          >
            <div className="xl:w-1/5 max-w-[100px] w-1/4 absolute xl:top-5 xl:left-0 xl:-translate-x-1/3 top-0 -translate-y-1/3 right-6">
              <Image src={om2} alt="Om2" className="w-full rounded-full" />
            </div>
            <div className="xl:ms-14">
              <p className="font-extrabold text-xl py-4">
                <span className="bg-[linear-gradient(to_left,#fafafa80,#fafafa,#fafafa80)] bg-clip-text text-transparent">
                  MediCare Solutions
                </span>
              </p>
              <p className="pb-4">
                &quot;Running a healthcare business in today&apos;s digital
                world can be daunting. Embassy Network&apos;s mastery of
                Facebook Ads made it easy for us to connect with those in need
                of our specialized medical services. Their strategies are a
                game-changer.&quot; - <b>Dr. Ramirez </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
