import React from "react";

function Head() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto">
        <div className="flex flex-col md:flex-row items-center xl:px-40 py-40 md:mt-20">
          <div className="md:w-1/2 w-full font-graphik px-10 mb-10 md:mb-0">
            <p className="font-graphikExtralight">
              <span className="font-graphik">Embassy</span> Creative
            </p>
            <h4 className="2xl:text-7xl lg:text-5xl text-4xl font-proBlack py-2">
              Cele mai bune unelte pentru a transforma ideile in povesti vizuale
              pe social media
            </h4>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              Embassy Network si crearea de continut premium sunt sinonime de
              mai bine de 6 ani de zile. Prezenta in online a oricarui business
              a devenit cruciala in ultimii ani. Dar nu oricum. Hai sa vedem cum
              iti putem contura povestea.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-1/2 h-auto aspect-square bg-gray-300 rounded-xl mx-auto"></div>
          </div>
        </div>
        <hr className="w-[90vw] mx-auto border-2" />
      </div>
    </>
  );
}

export default Head;
