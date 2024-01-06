import React from "react";

function Head() {
  return (
    <>
      <div className="min-h-[60vh]">
        <div className="flex flex-col md:flex-row items-center py-40 md:mt-20">
          <div className="md:w-1/2 w-full font-graphik mb-10 md:mb-0">
            <p className="font-graphikExtralight">
              <span className="font-graphik">Embassy</span> PPC
            </p>
            <h4 className="2xl:text-7xl lg:text-5xl text-4xl font-proBlack py-2">
              Embassy PPC aduce o revoluție în sistemul de achizitie de clienți
              cu un pachet complet.
            </h4>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              Embassy PPC redefinește accelerarea afacerii tale cu un pachet
              integral care depășește barierele marketingului digital – de la
              Social Media Management și Content Creation, la Meta/TikTok Ads,
              Email Marketing și campanii pentru Google Reviews. Transformăm
              fiecare clic într-un pas concret către succesul tău.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-1/2 h-auto aspect-square bg-gray-300 rounded-xl mx-auto"></div>
          </div>
        </div>
        <hr className="w-full mx-auto border-2 opacity-60" />
      </div>
    </>
  );
}

export default Head;
