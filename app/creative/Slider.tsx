import React, { useRef } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

function Slider() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };
  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-full bg-slate-800 max-w-[60vw] mt-10 rounded-xl flex text-slate-50 items-end">
      <div onClick={scrollLeft} className="cursor-pointer">
        <FaCaretLeft />
      </div>
      <div
        ref={containerRef}
        className="relative overflow-x-scroll overflow-y-clip text-slate-50 text-xl snap-mandatory snap-x thumb scroll-smooth"
        style={{ scrollSnapPointsY: "repeat(200%)" }}
      >
        {/* <div className="absolute w-full flex justify-between top-1/2 -translate-y-1/2"> */}
        {/* </div> */}
        <div className="h-full w-[200%] flex">
          {[1, 2].map((e, i) => (
            <div key={i} className="p-20 w-full snap-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nihil laboriosam perferendis consectetur est fugit earum, aliquid,
              facilis exercitationem, ipsam dolorem incidunt minima vel. Fugit
              facilis obcaecati sapiente consequuntur nostrum reprehenderit
              ipsum quisquam deserunt quis! Suscipit nesciunt harum eaque, vitae
              illum dolor, veritatis ut temporibus blanditiis in officiis unde
              consequatur. {e}
            </div>
          ))}
        </div>
      </div>
      <div onClick={scrollRight} className="cursor-pointer">
        <FaCaretRight />
      </div>
    </div>
  );
}

export default Slider;
