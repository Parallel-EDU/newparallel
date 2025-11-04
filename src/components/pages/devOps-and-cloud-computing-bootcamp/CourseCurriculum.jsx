"use client";

import { useEffect, useRef, useState } from "react";

const coursePhasesData = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Linux, Networking & Git Foundations",
    duration: "4-6 Weeks",
    description:
      "Start your journey by mastering the core building blocks of web development and version control. This stage ensures holistic understanding before diving into frameworks.",
    checkpoints: [
      "Learn HTML5 and CSS3 to design responsive, accessible layouts",
      "Master JavaScript (ES6+) fundamentals and DOM manipulation",
      "Explore Git and GitHub for version control and collaboration workflows",
    ],
    logos: ["VS Code", "Git", "GitHub", "Chrome DevTools"],
    bgColor: "#30E29D",
    borderColor: "#2dd4bf",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Frontend Development",
    duration: "5-7 Weeks",
    description:
      "Transition into creating dynamic, interactive, and mobile-friendly user interfaces using industry-standard technologies.",
    checkpoints: [
      "Dive deep into React.js, covering hooks, routing, state management (Redux), and component testing using Jest/Cypress",
      "Implement API integrations to build data-driven UIs",
    ],
    logos: ["React", "TypeScript", "Tailwind", "Redux"],
    bgColor: "#0f766e",
    borderColor: "#14b8a6",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Backend Development",
    duration: "6-8 Weeks",
    description:
      "Learn server-side development, database management, and API creation using industry-leading technologies.",
    checkpoints: [
      "Master Node.js and Express.js for building robust backend services",
      "Design and manage relational databases with SQL",
      "Build RESTful APIs and understand authentication/authorization",
    ],
    logos: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    bgColor: "#155e75",
    borderColor: "#06b6d4",
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Data Structures, Algorithms & System Design",
    duration: "8-10 Weeks",
    description:
      "Build strong fundamentals in computer science concepts essential for solving complex problems and scaling systems.",
    checkpoints: [
      "Master arrays, linked lists, trees, graphs, and advanced data structures",
      "Solve algorithm problems using dynamic programming and greedy approaches",
      "Understand system design principles and microservices architecture",
    ],
    logos: ["LeetCode", "DSA", "System Design", "Algorithms"],
    bgColor: "#0c4a6e",
    borderColor: "#0284c7",
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Capstone Project & Internship",
    duration: "4-6 Weeks",
    description:
      "Apply all your learnings by building a full-stack project and gaining real-world experience.",
    checkpoints: [
      "Build a complete full-stack application integrating frontend, backend, and database",
      "Deploy your project and maintain it in production",
      "Prepare portfolio and conduct mock interviews",
    ],
    logos: ["GitHub", "Vercel", "AWS", "Docker"],
    bgColor: "#1e1b4b",
    borderColor: "#818cf8",
  },
  {
    id: 6,
    phase: "Phase 6",
    title: "Interview Prep & Placement",
    duration: "4-6 Weeks",
    description:
      "Get job-ready with intensive interview preparation and placement support.",
    checkpoints: [
      "Practice coding interviews and system design questions",
      "Develop communication and behavioral skills",
      "Get 1-on-1 mentoring from industry professionals",
    ],
    logos: ["Interview", "Placement", "Mentoring", "Career"],
    bgColor: "#2d1b69",
    borderColor: "#a78bfa",
  },
];

export default function CourseCurriculum() {
  const [activePhase, setActivePhase] = useState(1);
  const [scrollPhase, setScrollPhase] = useState(1);
  const rightSectionRef = useRef(null);
  const phaseRefsRef = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      if (!rightSectionRef.current) return;

      const phaseElements = Object.entries(phaseRefsRef.current);
      let currentPhase = 1;

      for (const [phaseId, element] of phaseElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            currentPhase = Number.parseInt(phaseId);
          }
        }
      }

      setScrollPhase(currentPhase);
    };

    const scrollContainer = rightSectionRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handlePhaseClick = (phaseId) => {
    setActivePhase(phaseId);
    const element = phaseRefsRef.current[phaseId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
          Course curriculum
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pb-16">
        <div className="flex items-start gap-6 lg:gap-8">
          {/* Left Section - Phase Navigation */}
          <div className="lg:col-span-1 w-[30%] max-lg:w-full">
            <div className="space-y-3">
              {coursePhasesData.map((coursePhase) => (
                <div
                  key={coursePhase.id}
                  //   onClick={() => handlePhaseClick(coursePhase.id)}
                  className=" p-4 rounded-lg cursor-pointer transition-all duration-300 py-7 h[100px]"
                  style={{
                    background:
                      scrollPhase === coursePhase.id
                        ? "linear-gradient(89.66deg, #30E29D -124.78%, rgba(48,226,157,0) 105.61%)"
                        : "transparent",
                    borderLeft:
                      scrollPhase === coursePhase.id
                        ? "0px solid transparent"
                        : "none",
                    borderImage:
                      scrollPhase === coursePhase.id
                        ? "linear-gradient(89.61deg, #30E29D -19.63%, rgba(0,0,0,0) 97.66%) 1"
                        : "none",
                  }}
                >
                  <div className="text-xs font-light  text-gray-400 mb-1 font-['Graphikthin']">
                    {coursePhase.phase}
                  </div>
                  <div className="text-[22px] font-['Graphikthin'] text-[#E0E0E0] font-normal hover:text-white transition-colors">
                    {coursePhase.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Phase Content */}
          <div
            ref={rightSectionRef}
            className="lg:col-span-2 bg-[#FFFFFF14] rounded-2xl p-4  w-[70%] h-96 lg:h-[600px] overflow-y-auto pr-4 space-y-6"
            style={{
              scrollBehavior: "smooth",
            }}
          >
            {coursePhasesData.map((coursePhase) => (
              <div
                key={coursePhase.id}
                ref={(el) => {
                  if (el) phaseRefsRef.current[coursePhase.id] = el;
                }}
                className="bg-[#000000] w-full from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                {/* Phase Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl sm:text-[24px] text-[#E0E0E0] font-['Graphikthin'] font-normal mb-2">
                      {coursePhase.phase} : {coursePhase.title}
                    </h2>
                    <p className="text-[#FFFFFFCC] font-['Graphikthin'] text-sm sm:text-base leading-relaxed max-w-2xl">
                      {coursePhase.description}
                    </p>
                  </div>
                  <div className="flex text-[20px] items-center gap-2 text-[#FFFFFFCC] whitespace-nowrap ml-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2V6M8 2V6M3 10H21M11 14H16M8 14H8.00898M13 18H8M16 18H15.991M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
                        stroke="url(#paint0_linear_2989_8784)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2989_8784"
                          x1="1"
                          y1="-2.5"
                          x2="23.8244"
                          y2="34.2456"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#201DA7" />
                          <stop offset="1" stop-color="#30E29D" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span className="text-sm sm:text-base font-normal font-['Graphikthin']">
                      {coursePhase.duration}
                    </span>
                  </div>
                </div>

                {/* Checkpoints */}
                <div className="space-y-3 mb-8">
                  {coursePhase.checkpoints.map((checkpoint, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="text-green-400 mt-0.5 flex-shrink-0">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.54961 18.0016L3.84961 12.3016L5.27461 10.8766L9.54961 15.1516L18.7246 5.97656L20.1496 7.40156L9.54961 18.0016Z"
                            fill="#30E29D"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm sm:text-base font-['Graphikthin']">
                        {checkpoint}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Animated Logo Marquee */}
                <div className="relative overflow-hidden">
                  <div className="flex gap-4 animate-marquee">
                    {/* First set */}
                    {coursePhase.logos.map((logo, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full whitespace-nowrap border border-slate-600 hover:border-slate-500 transition-colors"
                      >
                        <div
                          className="w-6 h-6 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${coursePhase.borderColor}, ${coursePhase.bgColor})`,
                          }}
                        />
                        <span className="text-sm font-medium">{logo}</span>
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {coursePhase.logos.map((logo, idx) => (
                      <div
                        key={`dup-${idx}`}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full whitespace-nowrap border border-slate-600 hover:border-slate-500 transition-colors"
                      >
                        <div
                          className="w-6 h-6 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${coursePhase.borderColor}, ${coursePhase.bgColor})`,
                          }}
                        />
                        <span className="text-sm font-medium">{logo}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-900 via-transparent to-slate-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex justify-center">
        <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300">
          Join The Next Cohort
        </button>
      </div>

      <style jsx>{`
        /* Scrollbar Styling */
        div::-webkit-scrollbar {
          width: 8px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.5);
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.6);
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.8);
        }
      `}</style>
    </div>
  );
}
