"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const modules = [
  {
    id: 1,
    title: "Module 1: Node Fundamentals  ",
    description: "Modules, Event Loop, File System, Asynchronous Programming",
  },
  {
    id: 2,
    title: "Module 2: Express.js & Middleware",
    description: " REST API development, routing, error handling",
  },
  {
    id: 3,
    title: "Module 3: Database Integration ",
    description: "MongoDB, Mongoose, CRUD operations",
  },
  {
    id: 4,
    title: "Module 4: Authentication & Security ",
    description: "JWT, OAuth, role-based access",
  },
  {
    id: 5,
    title: "Module 5: Testing & Debugging  ",
    description: "Unit testing with Jest, debugging techniques",
  },
  {
    id: 6,
    title: "Module 6: Mini Projects & AI Integration ",
    description: "Integrate AI coding tools for backend automation",
  },
  {
    id: 7,
    title: "Module 7: Internship Project ",
    description:
      "Work on a live Node.js backend project under mentor supervision",
  },
  {
    id: 8,
    title: "Module 8: Career & Placement Prep",
    description:
      "Resume review, mock interviews, portfolio showcase, and job assistance",
  },
];

const technologies = [
  { name: "Jupyter Notebook", color: "/logos/Frame 1000003259.svg" },
  { name: "Seaborn", color: "/logos/Frame 1000003208.svg" },
  { name: "Elasticsearch", color: "/logos/Frame 1000003221.svg", text: "E" },
  { name: "MySQL", color: "/logos/Frame 1000003261.svg" },
  { name: "SQL", color: "/logos/Frame 1000003189.svg" },
  { name: "Django", color: "/logos/Frame 1000003191.svg" },
  { name: "GitHub", color: "/logos/Frame 1000003188.svg" },
  { name: "Git", color: "/logos/Frame 1000003196.svg" },
];

export default function CourseCurriculum() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Course Curriculum Section */}
        <div className="mb-16 md:mb-[56px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl  font-['Graphikthin'] font-light mb-12 md:mb-16">
            Course curriculum
          </h1>

          <div className="relative bg-[#FFFFFF14] rounded-[32px] p-10">
            {/* Vertical dashed line spanning all modules */}

            {/* Each module as a horizontal row */}
            {modules.map((module) => (
              <div
                key={module.id}
                className="flex items-start gap-6 md:gap-8 mb-8 md:mb-12 lg:mb-[20px] max-lg:flex-col"
              >
                {/* Left: Module Name */}
                <div className="w-24 md:w-24 flex-shrink-0 pt-8">
                  <span className="text-base md:text-[16px] font-light text-white">
                    Module {module.id}
                  </span>
                </div>

                {/* Middle: Diamond Icon on line */}
                <div className="w-4 flex-shrink-0 flex justify-center pt-8 z-[90] max-md:hidden">
                  {/* <div className="w-4 h-4 bg-emerald-500 rounded-sm transform rotate-45 relative z-10"></div> */}
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3.95569"
                      width="5.59413"
                      height="5.59413"
                      transform="rotate(45 3.95569 0)"
                      fill="#30E29D"
                    />
                  </svg>
                </div>

                <div className="absolute left-20 max-md:hidden md:left-[11rem] h-[90%] z-[1] top-6 bottom-0 w-[0.99px] border-l-[0.99px] border-dashed border-gray-600"></div>

                {/* Right: Content Card */}
                <div className="flex-1">
                  <div className="p-6 md:px-[16px] pt-[16px] pb-[20px] rounded-2xl bg-[#000000]  transition-all">
                    <h3 className="text-[20px] leading-normal md:text-[24px] font-semibold mb-3 text-[#E0E0E0]">
                      {module.title}
                    </h3>
                    <p className="text-sm md:text-[18px] font-['Graphikmedium'] text-[#FFFFFFCC]">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
      </div>

      <div className="max-xl:px-8">
        <h2 className="lg:text-[28px] max-w-7xl mx-auto text-[#E5E5E5] font-['Graphikmedium'] font-light mb-8 md:mb-12">
          Tools <span className="font-['system-ui'] font-[100]">& </span>{" "}
          Technologies You'll Learn
        </h2>

        {/* Animated Logos Carousel */}
        <div className="relative overflow-hidden py-0 widescreen:max-w-7xl widescreen:mx-auto">
          <div
            className={`flex gap-6 md:gap-8 ${mounted ? "animate-scroll" : ""}`}
          >
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`w-30 h-16 md:w-28 md:h-20 rounded-full  flex items-center justify-center font-bold text-lg md:text-2xl text-white`}
                  >
                    <Image src={tech.color} height={300} width={300} />
                  </div>
                  {/* <span className="text-xs md:text-sm text-gray-400 text-center whitespace-nowrap">
                      {tech.name}
                    </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-[56px]">
          <button className="px-8 md:px-10 py-3 md:py-4 border border-green-500 text-green-500 rounded-lg font-semibold hover:bg-green-500 hover:text-black transition-all text-sm md:text-base">
            Join The Next Cohort
          </button>
        </div>
      </div>
    </div>
  );
}
