// app/components/Testimonials.jsx  (Next.js 13+)
// or components/Testimonials.jsx for pages router
"use client";
import HeroSection from "@/components/pages/testimonials/HeroSection";
import Link from "next/link";
import React from "react";
import { useModal } from "@/app/context/ModalContext";

const people = [
  {
    name: "Aryan Arjun Kedar",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002775.png",
  },
  {
    name: "Sanket Tiwade",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002776 (1).png",
  },
  {
    name: "Palash A Ranvir ",
    role: "MERN Stack Developer",
    img: "/testimonials/Frame 1000002776 (2).png",
  },

  {
    name: "Vivek Talwekar",
    role: "Python Developer",
    img: "/testimonials/Frame 1000002776 (4).png",
  },
  {
    name: "Vikrant Shivkumar Pali",
    role: "Python Developer",
    img: "/testimonials/Frame 1000002776 (5).png",
  },
  {
    name: "Nikhil Jawalkar ",
    role: "Frontend Developer",
    img: "/testimonials/Frame 1000002776 (6).png",
  },
  {
    name: "Meenal Botadkar",
    role: " Data Operations Analyst",
    img: "/testimonials/Frame 1000002776.png",
  },
  {
    name: "Shubham Ghode",
    role: " Backend Developer",
    img: "/testimonials/Frame 1000002777 (1).png",
  },
  {
    name: "Amruta Milind Paithankar",
    role: "Power BI Consultant",
    img: "/testimonials/Frame 1000002777 (2).png",
  },
  {
    name: "Vanashree Lonare  ",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002777 (3).png",
  },
  {
    name: "Mahendra Ambule",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002777 (4).png",
  },
  {
    name: "Nikhita Mate",
    role: "Data Operations Analyst",
    img: "/testimonials/Frame 1000002777 (5).png",
  },
  {
    name: "Sarthaki Chikhale",
    role: "Java Engineer",
    img: "/testimonials/Frame 1000002777.png",
  },
  {
    name: "Shubham P Urkude ",
    role: "Frontend Developer",
    img: "/testimonials/Frame 1000002778 (1).png",
  },
  {
    name: "Dharmik Bhuva",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002778.png",
  },
  {
    name: "Monali Sah ",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002779 (1).png",
  },
  {
    name: "Aryan Shende ",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002779 (2).png",
  },
  {
    name: "Prachee Rahim Meshram ",
    role: "Data Operations Analyst",
    img: "/testimonials/Frame 1000002779 (3).png",
  },
  {
    name: "Shruti Niranjan Dhole ",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002779 (4).png",
  },
  {
    name: "Rupesh Babanrao Deotale ",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002779 (5).png",
  },
  {
    name: "Nayan Kundan Gour ",
    role: "Java Developer",
    img: "/testimonials/Frame 1000002779.png",
  },
];

export default function Testimonials() {
  const { openModal } = useModal();
  return (
    <section className="relative w-full bg-black text-white">
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Left block: heading + copy + CTA */}
        <div className="max-w-4xl">
          <h2 className=" text-[64px] font-['Graphikthin'] leading-[74px] tracking-tight text-white/95">
            Real stories. Real transformations. Real results.
          </h2>
          <p className="mt-4 text-sm font-['Graphikthin'] max-w-3xl sm:text-[16px] text-neutral-300">
            Behind every testimonial is a journey of persistence, mentorship,
            and growth - proof that the right guidance can change everything.
          </p>

          <button
            onClick={openModal}
            className="w-[128px] mt-12 mb-20 font-['Graphikmid'] h-[40px] widescreen:h-auto widescreen:py-[12px] widescreen:py-[16px] border[#30E29D] bg-[#30E29D] text-[#292929] transition-all border[1px] rounded-lg   text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
          >
            Enroll Now
          </button>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, i) => (
            <article
              key={i}
              className="rounded-xl border border-white/10 bg-neutral-900/70 p-5 sm:p-4 backdrop-blur-lg ring-1 ring-white/5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-20 w-20 rounded-full object-cover ring-1 ring-white/10"
                />
                <div>
                  <h3 className="text-[24px] font-['Graphikthin'] font-normal text-[#E5E5E5] ">
                    {p.name}
                  </h3>
                  <p className="text-[16px] text-[#BFBFBF]">{p.role}</p>
                </div>
              </div>

              <p className="mt-4 text-[16px] leading-6 text-[#E0E0E0] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </article>
          ))}
        </div>

        <HeroSection />
      </div>
    </section>
  );
}
