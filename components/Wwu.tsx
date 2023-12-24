import React from "react";

function Wwu() {
  return (
    <div className="px-5 mt-40 py-12 bg-black text-white">
      <hr className="w-1/12 mx-auto mb-9 border-white" />
      <h4 className="text-4xl text-center font-extrabold">
        Intrested in working with us?
      </h4>
      <p className="text-center text-2xl mb-12">
        Here&apos;s how it looks like
      </p>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-row items-start justify-between lg:w-1/3 gap-3 relative">
          <div className="rounded-full px-4 py-1 mt-2 font-extrabold bg-[linear-gradient(300deg,#004A7C,#fff)]">
            <p className="text-3xl">1</p>
          </div>
          <div className="z-10">
            <h5 className="font-extrabold text-2xl pb-3">
              Watch our free case study video. See if you qualify.
            </h5>
            <p>
              Watch our free case study video to make sure you and we can work
              together – click here now to find out.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between lg:w-1/3 gap-3 relative">
          <div className="rounded-full px-4 py-1 mt-2 font-extrabold bg-[linear-gradient(300deg,#004A7C,#fff)]">
            <p className="text-3xl">2</p>
          </div>
          <div className="z-10">
            <h5 className="font-extrabold text-2xl pb-3">
              Schedule your marketing strategy session.
            </h5>
            <p>
              You then book a call using the online calendar that&apos;s
              presented to you. We&apos;ll present our strategy to you.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between lg:w-1/3 gap-3 relative">
          <div className="rounded-full px-4 py-1 mt-2 font-extrabold bg-[linear-gradient(300deg,#004A7C,#fff)]">
            <p className="text-3xl">3</p>
          </div>
          <div className="z-10">
            <h5 className="font-extrabold text-2xl pb-3">
              Onboarding & campaign launch within 7 days.
            </h5>
            <p>
              That’s basically it. We watch your ads like hawks. There’s no time
              better than now – so click here and let’s start.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wwu;
