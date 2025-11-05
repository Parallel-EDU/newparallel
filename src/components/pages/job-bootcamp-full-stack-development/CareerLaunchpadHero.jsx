// app/components/CareerLaunchpadHero.js

"use client";

import { useModal } from "@/app/context/ModalContext";
import Link from "next/link";

export default function CareerLaunchpadHero() {
  const features = [
    {
      title: "DSA & System Design Mastery",
      desc: "Build strong fundamentals and solve real-world problems confidently",
    },
    {
      title: "Hands-On AI Projects",
      desc: "Apply GenAI tools to automate, analyze and innovate in projects",
    },
    {
      title: "Portfolio of 10+ Projects",
      desc: "Showcase deployable, industry-ready applications to employers",
    },
    {
      title: "1:1 Mentorship & Code Reviews",
      desc: "Personalized guidance from experienced engineers on every step",
    },
    {
      title: "Communication & Interview Skills",
      desc: "Prepare for technical and HR interviews with confidence",
    },
    {
      title: "Internships & Real-World Projects",
      desc: "Gain practical experience while learning",
    },
    {
      title: "Backend Track Choice",
      desc: "NodeJS / Spring Boot – pick your path based on career goals",
    },
    {
      title: "Placement Assistance Until You’re Hired",
      desc: "Resume building, mock interviews, referrals, and interview coaching",
    },
  ];

  const { openModal } = useModal();

  return (
    <section
      style={{
        background: `linear-gradient(70deg, rgb(46 42 243 / 19%) 0%, rgba(0, 0, 0, 0) 30%), linear-gradient(0.97deg, rgba(0, 0, 0, 0) 1.71%, #000000 20.96%)`,
        backdropFilter: `blur(115.2px)`,
        WebkitBackdropFilter: `blur(115.2px)`, // For Safari support
      }}
      className="mi-screen overflow-visible carrer-bg pt-40 flex flex-col items-center justify-center  px-4 py-12"
    >
      <div className="max-w-7xl w-full text-left">
        <span
          style={{
            background:
              "linear-gradient(90deg,  #30E29D   0%, #201DA7 147.01%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="font-medium text-[16px] mb-3 tracking-wide"
        >
          Why Choose Parallel
        </span>
        <h1 className="text-white py-6 font-['Graphikthin'] text-5xl sm:text-[64px]">
          Not just coding. a complete <br />
          career launchpad
        </h1>
        <p className="text-[#E0E0E0] text-[20px] mb-2 max-w-[800px]">
          Hands-on learning, mentorship, AI-powered projects, and placement
          support make you job-ready from day one.
        </p>
      </div>
      {/* Features Table */}
      <div className="w-full max-w-7xl mt-[56px]">
        <div className="bg[#20202a] bg-opacity-90 space-y-2 rounded-xl shadow-lg overflow-hidden">
          {features.map((item, i) => (
            <div
              key={i}
              className={
                "flex font-['Graphikthin']  flex-col sm:flex-row justify-between gap-0   transition-colors " +
                (i !== 0 ? "bordert border[#323247] " : "") +
                "hover:bg[#232144]"
              }
            >
              <div
                style={{
                  background:
                    "linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
                }}
                className="font-medium text-[24px] px-4 py-[20px] text-left text-white sm:w-[40%] w-full bg[#FFFFFF0D] "
              >
                {item.title}
              </div>
              <div className="text- text-[24px]  px-4 py-[20px] bg-[#FFFFFF0D] text-[#E0E0E0] text-left sm:w-[70%] w-full mt-1 sm:mt-0">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-[56px]">
        <button
          onClick={openModal}
          className="group rounded-[8px] font-['Graphikmid'] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[12px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10] hoveext-white"
        >
          Join The Next Cohort
        </button>
      </div>
      {/* <button className="mt-10 bg-transparent border border-[#46F6B7] rounded-lg px-6 py-3 text-[#46F6B7] hover:bg-[#171d20] transition-colors font-medium tracking-wide">
        Join The Next Cohort
      </button> */}
    </section>
  );
}
