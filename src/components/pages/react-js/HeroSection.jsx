"use client";

import { useModal } from "@/app/context/ModalContext";
import style from "@/styles/style.module.css";
import Link from "next/link";

export default function HeroSection() {
  const { openModal } = useModal();
  return (
    <section
      className="relative flex page-break flex-col items-center justify-center text-center min-h-[650px] px-6 overflow-hidden"
      // style={{
      //   background: `
      //     linear-gradient(
      //       179.63deg,
      //       #000000 7.03%,
      //       rgba(0, 0, 0, 0.514423) 21.31%,
      //       rgba(0, 0, 0, 0.514423) 53.15%,
      //       rgba(0, 0, 0, 0.514423) 82.77%,
      //       #000000 96.68%
      //     ),
      //     radial-gradient(
      //       58.38% 166.81% at 50% 157.82%,
      //       rgba(27, 212, 79, 1.7) 0%,
      //       rgba(14, 11, 180, 1.43) 73.82%,
      //       rgba(0, 0, 0, 0.43) 100%
      //     )
      //   `,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* <div className="absolute w-[100%] h-[622px] -z[1] top-0 left-0 overflow-hidden">
        <div className={`${style.backgroundbox22223}`}></div>
      </div> */}
      {/* Subtle top line */}
      {/* <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div> */}

      {/* Hero Content */}
      <div className="relative z-[99999] max-w-[1080px] mx-auto">
        <h1 className="text-[64px] leading-tight font-['Graphikthin'] text-white max-md:text-[48px] max-sm:text-[36px]">
          Upskill in React.js, build real-world frontend applications, and land
          your dream job
        </h1>

        {/* <p className="mt-6 text-white/80 text-lg max-sm:text-base">
          Join India’s most practical, results-driven tech bootcamps with
          guaranteed placement support.
        </p> */}

        <div className="z-[99999]">
          <button
            onClick={openModal}
            className="mt-10 border border-[#30E29D] text-[#30E29D]  font-['Graphikmid'] hover:bg-[#30E29D] hover:text-[#292929] px-8 py-[11px] rounded-md text-lg font-medium hover:bg-[#1BD44F]/10 transition-all duration-300"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Subtle bottom line */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div> */}
    </section>
  );
}
