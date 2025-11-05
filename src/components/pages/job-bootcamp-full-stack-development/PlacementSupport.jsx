// app/components/PlacementSupport.jsx (Next.js 13+)
// or /components/PlacementSupport.jsx for pages router

"use client";
import { useModal } from "@/app/context/ModalContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Career Guidance & Placement Assistance",
    icon: "/svgs/Frame 1000002764.svg",
  },
  { title: "Resume Optimization", icon: "/svgs/Frame 1000002764 copy.svg" },
  {
    title: "LinkedIn Profile Optimization",
    icon: "/svgs/Frame 1000002764 (2).svg",
  },
  { title: "Internship Opportunities", icon: "/svgs/Frame 1000002764 (3).svg" },
  {
    title: "Live Mock Interview Sessions",
    icon: "/svgs/Frame 1000002764 (4).svg",
  },
  {
    title: "Mentorship from Industry Experts",
    icon: "/svgs/Frame 1000002764 (5).svg",
  },
  {
    title: "Prompt Engineering and Gen AI Basics",
    icon: "/svgs/Frame 1000002764 (6).svg",
  },
  {
    title: "Access to Alumni Network",
    icon: "/svgs/Frame 1000002764 (7).svg",
  },
];

export default function PlacementSupport() {
  const { openModal } = useModal();
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-[64px] font-['Graphikthin'] tracking-tight font-normal text-white/95">
          Placement <span className="font-['system-ui'] font-[100]">& </span>{" "}
          career support
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl">
          We support you until you land your Full Stack Developer.
        </p>

        {/* Grid */}
        <div className="mt-[71px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#000]">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative rounded-lg bg-neutral-900 p-6 flex flex-col justify-between min-h-[200px] hover:bg-neutral-900 transition"
            >
              <div className="mb-6">
                {/* Icon placeholder box to match screenshot spacing */}
                <div className="inline-flex items-center justify-center rounded[8px]  p-4">
                  {f.icon ? (
                    <Image
                      width={105}
                      height={105}
                      src={f.icon}
                      alt={f.title}
                    />
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-14 w-14 text-emerald-400/90"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2zm1 15h-2v-2h2zm0-4h-2V7h2z"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <h3 className="text-[24px] font-['Graphikthin'] font-thin leading-snug text-[#E0E0E0]">
                {f.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-[75px] flex justify-center">
          <button
            onClick={openModal}
            className="group rounded-[8px] font-['Graphikmid'] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[12px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10] hoveext-white"
          >
            Join The&nbsp;&nbsp;Next Cohort
          </button>
        </div>
      </div>
    </section>
  );
}
