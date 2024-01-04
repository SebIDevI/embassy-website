import React from "react";

function Head() {
  return (
    <>
      <div className="md:min-h-[60vh] h-auto">
        <div className="flex flex-col md:flex-row items-center xl:px-40 py-40 md:mt-20">
          <div className="md:w-2/3 w-full font-graphik px-1 mb-10 md:mb-0">
            <p className="font-graphikExtralight 2xl:text-3xl lg:text-xl text-lg mb-5">
              <span className="font-graphik">Embassy</span> Creative
            </p>

            <div className="py-2">
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-5">
                  Cele mai bune unelte pentru a transforma
                </span>
              </h4>
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-7">
                  ideile in povesti vizuale
                </span>
              </h4>
              <h4 className="2xl:text-5xl lg:text-3xl text-2xl font-proBlack overflow-hidden bg-transparent py-2">
                <span className="translate-y-full animate-ttlSld inline-block delay-9">
                  pe social media
                </span>
              </h4>
            </div>
            <p className="pt-10 lg:text-base text-sm font-graphik">
              Embassy Network si crearea de continut premium sunt sinonime de
              mai bine de 6 ani de zile. Prezenta in online a oricarui business
              a devenit cruciala in ultimii ani. Dar nu oricum. Hai sa vedem cum
              iti putem contura povestea.
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <div className="w-1/2 h-auto aspect-square bg-gray-300 rounded-xl mx-auto"></div>
          </div>
        </div>
        <hr className="w-[90vw] mx-auto border-2" />
      </div>
    </>
  );
}

export default Head;
