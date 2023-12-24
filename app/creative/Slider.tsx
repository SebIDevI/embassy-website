import React from "react";

function Slider() {
  return (
    <div
      className="mx-auto relative overflow-x-scroll overflow-y-clip w-full bg-slate-800 text-slate-50 text-xl max-w-[60vw] snap-mandatory snap-x thumb mt-10 scroll-smooth rounded-xl"
      style={{ scrollSnapPointsY: "repeat(200%)" }}
    >
      <div className="h-full w-[200%] flex">
        {[1, 2].map((e, i) => (
          <div key={i} className="p-20 w-full snap-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nihil
            laboriosam perferendis consectetur est fugit earum, aliquid, facilis
            exercitationem, ipsam dolorem incidunt minima vel. Fugit facilis
            obcaecati sapiente consequuntur nostrum reprehenderit ipsum quisquam
            deserunt quis! Suscipit nesciunt harum eaque, vitae illum dolor,
            veritatis ut temporibus blanditiis in officiis unde consequatur. {e}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
