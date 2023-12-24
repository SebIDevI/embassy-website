import React from "react";

function Head() {
  return (
    <>
      <div className="min-h-[60vh]">
        <div className="flex items-center px-40 py-40 mt-20">
          <div className="w-1/2 font-graphik px-10">
            <p className="font-graphikExtralight">
              <span className="font-graphik">Embassy</span> PPC
            </p>
            <h4 className="text-7xl font-proBlack py-2">
              Embassy PPC aduce o revoluție în sistemul de achizitie de clienți
              cu un pachet complet.
            </h4>
            <p className="pt-10 text-base font-graphik">
              Embassy PPC redefinește accelerarea afacerii tale cu un pachet
              integral care depășește barierele marketingului digital – de la
              Social Media Management și Content Creation, la Meta/TikTok Ads,
              Email Marketing și campanii pentru Google Reviews. Transformăm
              fiecare clic într-un pas concret către succesul tău.
            </p>
          </div>
          <div className="w-1/2">
            <div className="w-1/2 h-auto aspect-square bg-gray-300 rounded-xl mx-auto"></div>
          </div>
        </div>
        <hr className="w-[90vw] mx-auto border-2 opacity-60" />
      </div>
    </>
  );
}

export default Head;
