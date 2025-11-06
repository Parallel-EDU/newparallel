"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { Linear, gsap } from "gsap";
import style from "@/styles/style.module.css";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Success() {
  const successanimation = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 });
    const width = window.innerWidth;

    if (width > 639 && width < 1900) {
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          successanimation.current,
          { x: -150 },
          { ease: Linear.easeNone, x: -2103, duration: 20 }
        );
    } else if (width < 640) {
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          successanimation.current,
          { x: -150 },
          { ease: Linear.easeNone, x: -1508, duration: 20 }
        );
    } else if (width >= 1900) {
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          successanimation.current,
          { x: -150 },
          { ease: Linear.easeNone, x: -2488, duration: 20 }
        );
    }
    return () => {
      tl.kill();
    };
  });
  return (
    <div className="overflow-x-hidden w-full py-20 max-xl:px-10 max-md:p-4 ">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-2">
        <span
          // style={{
          //   background:
          //     "linear-gradient(90deg,  #30E29D   0%, #201DA7 147.01%)",
          //   WebkitBackgroundClip: "text",
          //   WebkitTextFillColor: "transparent",
          //   backgroundClip: "text",
          // }}
          className="text-[20px] text-[#E5E5E5] opacity-[.8] mb-2"
        >
          Success stories
        </span>

        {/* Heading */}
        <h1 className="text-[#E5E5E5] font-['Graphikthin'] mt-5  tracking-[-0.018em] leading-[1.04] text-[32px] sm:text-[64px] mb-2">
          People benefitting from
          <br className="max-lg:hidden" />
          our new age method of learning.
        </h1>

        {/* Subhead */}
        {/* <p className="mt-2 mb-10 text-[16px] text-[#B7C4D1] font-['Graphikthin'] max-w-[800px]">
          From India’s leading startups to global tech giants, Parallel alumni
          are building real careers and contributing from day one. Over 1800+
          students placed and counting.
        </p> */}
      </div>
      <div
        // ref={successanimation}
        className="flex gap-[20px] max-xpx-10 max-w-7xl mx-auto mt-20 ml20 max-sm:ml-[0px] max-lg:flex-col max-lg:items-center  w[5880px] widescreen:w-[7000px]"
      >
        <div
          className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}
        >
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            <div className="flex gap-[28.36px] max-xl:flex-col">
              <Image
                src="/home/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={74}
                height={64}
                alt="Ravi Teja"
              />
              <div>
                <h1 className="text-[24px]  widestscreen:text-[20px] widescreen:leading-[120%] widescreen:text-[20px]   max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Palash A Ranvir
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[16px] widestscreen:text-[16px] widescreen:leading-[120%] max-sm:text-base   widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  MERN Stack Developer
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[20px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              I cannot believe I got placed in 4 months. I was finding a job for
              almost 1 year.
            </p>
          </div>
        </div>
        <div
          className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}
        >
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px] max-xl:flex-col">
              <Image
                src="/home/Frame 1000002776.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={74}
                height={64}
                alt="Ravi Teja"
              />
              <div>
                <h1 className="text-[24px] widestscreen:text-[20px] widescreen:leading-[120%] widescreen:text-[20px]   max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Meenal Botadkar
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[16px] widestscreen:text-[16px] widescreen:leading-[120%] max-sm:text-base   widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Data Operations Analyst
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[20px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              The fees you take is completely worth it. Your schedule is packed
              with so many things to learn. Career development along with full
              stack is great! I don’t have to go begging for jobs now.
            </p>
          </div>
        </div>
        <div
          className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}
        >
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px] max-xl:flex-col">
              <Image
                src="/home/Frame 1000002776 copy.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={74}
                height={64}
                alt="Ravi Teja"
              />
              <div>
                <h1 className="text-[24px] widestscreen:text-[20px] widescreen:leading-[120%] widescreen:text-[20px]   max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Sanket Tiwade
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[16px] widestscreen:text-[16px] widescreen:leading-[120%] max-sm:text-base   widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  AWS Consultant
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[20px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              A completely hands-on approach. I even got to work on a REAL
              project as a part of their QUICK BATCH program.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center opacity-80 justify-center gap-10 py-[56px]   text-gray-300">
        {/* Average Rating */}
        <div className="flex items-center flex-col gap-3">
          <p className="text-[16px] text-[#FFFFFF]">Average Rating</p>
          <div className="flex items-center gap-3">
            <Star className="text-yellow-400 fill-yellow-400 w-6 h-6" />
            <p className="text-[32px] text-[#FFFFFF]">4.9/5</p>
          </div>
        </div>
        <div className="h-12 w-[1px] bg-[#C9C9C966]" />
        <div className="flex items-start flex-col gap-3">
          <p className="text-[16px] text-[#FFFFFF]">Alumni Testimonials</p>
          <div className="flex items-center gap-3">
            <p className="text-[32px] text-[#FFFFFF]">1800+</p>
          </div>
        </div>

        {/* Divider */}

        {/* Alumni Testimonials */}
        {/* <div>
          <p className="text-sm text-gray-400">Alumni Testimonials</p>
          <p className="text-xl font-semibold text-white">1800+</p>
        </div> */}
      </div>

      <div className="flex justify-center pt-0">
        <Link href={"/testimonials"}>
          <button className="group font-['Graphikmid'] rounded-[8px] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[12px] text-[16px] text-[#30E29D] transition-colors hover:bg-[#22e19d10] hoveext-white">
            Read More Success Stories
          </button>
        </Link>
      </div>
    </div>
  );
}
