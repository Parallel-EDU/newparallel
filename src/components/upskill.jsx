"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useRef } from "react";
import Link from "next/link";

export default function Upskill() {
  const ctaanimation = useRef(null);
  const hoverCTA = () => {
    gsap.to(ctaanimation.current, 0.4, { top: 0, left: 0, rotate: 0 });
  };
  const unhoverCTA = () => {
    gsap.to(ctaanimation.current, 0.4, {
      top: "-150%",
      left: "-80.38px",
      rotate: "-9.21 deg",
    });
  };
  return (
    <div
      onMouseEnter={hoverCTA}
      onMouseLeave={unhoverCTA}
      className="relative overflow-hidden"
    >
      <Link
        href={"/courses/quick-batch"}
        ref={ctaanimation}
        className="py-[157px] max-hamburger:hidden max-sm:py-[20px] max-[317px]:py-[80px] max-[317px]:px-[20px] max-[445px]:py-[50px] rotate-[-9.21deg] left-[-80.38px] top-[-150%] w-[100%] z-30 absolute bg-white flex max-sm:py-0 justify-center"
      >
        <Image
          alt="Contact us"
          src="/Frame 86.png"
          className="max-sm:w-[280px]"
          width={525.14}
          height={139}
        />
      </Link>
      <Link
        href={"/signup"}
        className="py-[157px] z-30 relative max-hamburger:flex hidden max-sm:py-20 max-[317px]:py-[80px] max-[317px]:px-[20px] max-[445px]:py-[50px] w-[100%] z-30 bg-white flex max-sm:py-0 justify-center"
      >
        <Image
          alt="Contact us"
          src="/Frame 86.png"
          className="max-sm:w-[280px]"
          width={525.14}
          height={139}
        />
      </Link>
      <section className="py-[157px] max-hamburger:hidden flex max-sm:py-0 justify-center">
        <h1 className="w-[977.71px] max-lg:w-full max-lg:px-[80px] max-md:px-[40px] max-sm:px-[20px] text-[97.52px] widescreen:text-[107px] widestscreen:text-[117px] widescreen:leading-[120%] widescreen:w-[50%] max-smalllaptop:text-[74px] max-sm:text-[54px] max-smalllaptop:leading-[102%] leading-[94px] tracking-[-3.9px] text-center z-20 text-[#E5E5E5] font-['Graphikthin']">
          Upskilling has never been cheaper.
        </h1>
      </section>
    </div>
  );
}
