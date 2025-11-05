"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const coursePhasesData = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Linux, Networking & Git Foundations",
    duration: "4-6 Weeks",
    // description:
    //   "Start your journey by mastering the core building blocks of web development and version control. This stage ensures holistic understanding before diving into frameworks.",
    checkpoints: [
      "Learn essential Linux commands, file systems, and permissions",
      "Understand computer networks, IPs, and firewalls",
      "Master Git & GitHub for version control and collaboration",
    ],
    logos: ["/job/Linux, Networking & Git Foundations.svg"],
    bgColor: "#30E29D",
    borderColor: "#2dd4bf",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Scripting, Automation & GenAI Tools",
    duration: "5-7 Weeks",
    // description:
    //   "Transition into creating dynamic, interactive, and mobile-friendly user interfaces using industry-standard technologies.",
    checkpoints: [
      "Write Bash & Python scripts to automate system tasks",
      "Use AI coding assistants (GitHub Copilot, Cody, ChatGPT Plugins) to auto-generate deployment scripts",
      "Learn Infrastructure as Code (IaC) concepts for repeatable, scalable environments",
    ],
    logos: [
      // "/job/Frame 1000003188 copy.svg",
      // "/job/Frame 1000003191 copy.svg",
      // "/job/Frame 1000003189 copy.svg",
      // "/job/Frame 1000003190 copy.svg",
      "/job/Module 2_ SQL & Data Management.svg",
    ],
    bgColor: "#0f766e",
    borderColor: "#14b8a6",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Continuous Integration (CI) & Continuous Deployment (CD)",
    duration: "6-8 Weeks",
    // description:
    //   "Develop, secure, and scale powerful server-side applications. Choose your preferred backend stack:",
    checkpoints: [
      "Build CI/CD pipelines from scratch",
      "Automate builds, tests, and deployments",
      "Integrate pipelines with Jenkins, GitHub Actions, and Docker Hub",
    ],
    logos: [
      "/job/Continuous Integration (CI) & Continuous Deployment (CD).svg",
    ],
    bgColor: "#155e75",
    borderColor: "#06b6d4",
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Containerization & Orchestration",
    duration: "8-10 Weeks",
    // description:
    //   "Strengthen computational thinking and scalable system design skills",
    checkpoints: [
      "Understand container architecture with Docker",
      "Deploy multi-container apps with Kubernetes",
      "Automate container workflows and scaling",
      "Learn to monitor clusters with Prometheus & Grafana",
    ],
    logos: ["/job/Containerization & Orchestration.svg"],
    bgColor: "#0c4a6e",
    borderColor: "#0284c7",
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "Cloud Computing (AWS + Azure + GCP)",
    duration: "4-6 Weeks",
    // description:
    //   "Bring everything together by building production-grade applications.",
    checkpoints: [
      "Deploy, monitor, and scale applications on the cloud",
      "Explore AWS EC2, S3, Lambda, and CloudFormation",
      "Introduction to Azure DevOps and GCP Compute",
      "AI-enhanced cost optimization and resource monitoring",
    ],
    logos: ["/job/Cloud Computing (AWS + Azure + GCP).svg"],
    bgColor: "#1e1b4b",
    borderColor: "#818cf8",
  },
  {
    id: 6,
    phase: "Phase 6",
    title: "Infrastructure as Code & Automation",
    duration: "4-6 Weeks",
    // description:
    //   "Finish strong with personalized career coaching and real-world readiness.",
    checkpoints: [
      "Manage environments using Terraform and Ansible",
      "Implement auto-scaling and auto-healing systems",
      "Write and deploy IaC templates to automate entire infrastructures",
    ],
    logos: ["/job/Infrastructure as Code & Automation.svg"],
    bgColor: "#2d1b69",
    borderColor: "#a78bfa",
  },
  {
    id: 7,
    phase: "Phase 7",
    title: "Monitoring, Logging & Security",
    duration: "4-6 Weeks",
    // description:
    //   "Finish strong with personalized career coaching and real-world readiness.",
    checkpoints: [
      "Implement end-to-end monitoring of servers, apps, and databases",
      "Learn log aggregation & alerting using ELK stack",
      "Set up security best practices and role-based access control (RBAC)",
      "Placement workshops & referrals ",
    ],
    logos: ["/job/Monitoring, Logging & Security.svg"],
    bgColor: "#2d1b69",
    borderColor: "#a78bfa",
  },
  {
    id: 8,
    phase: "Phase 8",
    title: "Capstone Project & Internship",
    duration: "4-6 Weeks",
    // description:
    //   "Finish strong with personalized career coaching and real-world readiness.",
    checkpoints: [
      "Build a production-grade DevOps pipeline for a real-world app",
      "Integrate CI/CD, Docker, Kubernetes, Terraform, and AWS",
      "Collaborate in an Agile team environment",
      "Get mentorship and code reviews from industry engineers",
    ],
    logos: ["/job/Monitoring, Logging & Security.svg"],
    bgColor: "#2d1b69",
    borderColor: "#a78bfa",
  },
  {
    id: 9,
    phase: "Phase 9",
    title: "Career Readiness & Placement Support",
    duration: "4-6 Weeks",
    // description:
    //   "Finish strong with personalized career coaching and real-world readiness.",
    checkpoints: [
      "Resume, GitHub, and portfolio enhancement",
      "Mock interviews with senior DevOps professionals",
      "Job referrals, hiring drives, and placement workshops",
      "Placement support until you’re hired",
    ],
    logos: ["/job/Monitoring, Logging & Security.svg"],
    bgColor: "#2d1b69",
    borderColor: "#a78bfa",
  },
];

export default function CourseCurriculum() {
  const [scrollPhase, setScrollPhase] = useState(1);
  const phaseRefsRef = useRef({});

  // detect which phase is visible
  useEffect(() => {
    const handleScroll = () => {
      const phaseElements = Object.entries(phaseRefsRef.current);
      let currentPhase = 1;

      for (const [phaseId, element] of phaseElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight / 2) {
            currentPhase = Number(phaseId);
          }
        }
      }
      setScrollPhase(currentPhase);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhaseClick = (phaseId) => {
    const element = phaseRefsRef.current[phaseId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setScrollPhase(phaseId);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
        <h1 className="text-white mt-10 font-['Graphikthin'] text-5xl sm:text-[64px] mb-5">
          Course curriculum
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pb-16">
        <div className="flex items-start gap-6 lg:gap-8">
          {/* Left Section */}
          <div className="lg:w-[30%] w-full sticky top-10 self-start">
            <div className="space-y-3">
              {coursePhasesData.map((coursePhase) => (
                <div
                  key={coursePhase.id}
                  onClick={() => handlePhaseClick(coursePhase.id)}
                  className="py-5 px-6 rounded-lg cursor-pointer transition-all duration-300"
                  style={{
                    background:
                      scrollPhase === coursePhase.id
                        ? "linear-gradient(89.66deg,#30E29D -124.78%,rgba(48,226,157,0) 105.61%)"
                        : "transparent",
                    borderLeft:
                      scrollPhase === coursePhase.id
                        ? "0px solid transparent"
                        : "none",
                    borderImage:
                      scrollPhase === coursePhase.id
                        ? "linear-gradient(89.61deg,#30E29D -19.63%,rgba(0,0,0,0) 97.66%) 1"
                        : "none",
                  }}
                >
                  <div className="text-xs font-light text-gray-400 mb-1 font-['Graphikthin']">
                    {coursePhase.phase}
                  </div>
                  <div className="text-[22px] font-['Graphikthin'] text-[#E0E0E0] font-normal hover:text-white transition-colors">
                    {coursePhase.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - full height scrolls with page */}
          <div className="lg:w-[70%] w-full space-y-6">
            {coursePhasesData.map((coursePhase) => (
              <div
                key={coursePhase.id}
                ref={(el) => (phaseRefsRef.current[coursePhase.id] = el)}
                className="bg-[#000000] rounded-2xl p-6 sm:p-8"
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
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                          <stop stopColor="#201DA7" />
                          <stop offset="1" stopColor="#30E29D" />
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

                {/* Logos */}
                <div className="relative overflow-hidden">
                  <div className="flex gap-4 animatemarquee">
                    {coursePhase.logos.map((logo, idx) => (
                      <div key={idx} className="flex items-center">
                        <Image
                          className="w-[90%] object-cover"
                          src={logo}
                          width={100}
                          height={100}
                          alt="logo"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-7">
        <Link href="/hire-from-us">
          <button className="group font-['Graphikmid'] rounded-[8px] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[14px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10]">
            Join The Next Cohort
          </button>
        </Link>
      </div>
    </div>
  );
}

// export default function CourseCurriculum() {
//   const [activePhase, setActivePhase] = useState(1);
//   const [scrollPhase, setScrollPhase] = useState(1);
//   const rightSectionRef = useRef(null);
//   const phaseRefsRef = useRef({});

//   useEffect(() => {
//     const scrollContainer = rightSectionRef.current;
//     if (!scrollContainer) return;

//     const handleScroll = () => {
//       const phaseElements = Object.entries(phaseRefsRef.current);
//       let currentPhase = 1;

//       for (const [phaseId, element] of phaseElements) {
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const containerRect = scrollContainer.getBoundingClientRect();
//           const visibleHeight = containerRect.height;

//           if (rect.top - containerRect.top < visibleHeight / 2) {
//             currentPhase = Number(phaseId);
//           }
//         }
//       }
//       setScrollPhase(currentPhase);
//     };

//     scrollContainer.addEventListener("scroll", handleScroll);
//     return () => scrollContainer.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle phase click — scroll into view
//   const handlePhaseClick = (phaseId) => {
//     const element = phaseRefsRef.current[phaseId];
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setScrollPhase(phaseId);
//     }
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="max-w-7xl overflow-visible mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
//         <h1 className="text-white mt-10 font-['Graphikthin'] text-5xl sm:text-[64px] font- leading- mb-5">
//           Course curriculum
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pb-16">
//         <div className="flex items-start gap-6 lg:gap-8">
//           {/* Left Section - Phase Navigation */}
//           <div className="lg:col-span-1 w-[30%] max-lg:w-full h-[600px] sticky top-20 overflow-y-scrol">
//             <div className="space-y-3">
//               {coursePhasesData.map((coursePhase) => (
//                 <div
//                   key={coursePhase.id}
//                   onClick={() => handlePhaseClick(coursePhase.id)}
//                   className=" py-5 px-6 rounded-lg cursor-pointer transition-all duration-300 h[100px]"
//                   style={{
//                     background:
//                       scrollPhase === coursePhase.id
//                         ? "linear-gradient(89.66deg, #30E29D -124.78%, rgba(48,226,157,0) 105.61%)"
//                         : "transparent",
//                     borderLeft:
//                       scrollPhase === coursePhase.id
//                         ? "0px solid transparent"
//                         : "none",
//                     borderImage:
//                       scrollPhase === coursePhase.id
//                         ? "linear-gradient(89.61deg, #30E29D -19.63%, rgba(0,0,0,0) 97.66%) 1"
//                         : "none",
//                   }}
//                 >
//                   <div className="text-xs font-light  text-gray-400 mb-1 font-['Graphikthin']">
//                     {coursePhase.phase}
//                   </div>
//                   <div className="text-[22px] font-['Graphikthin'] text-[#E0E0E0] font-normal hover:text-white transition-colors">
//                     {coursePhase.title}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Section - Phase Content */}
//           <div
//             ref={rightSectionRef}
//             className="lg:col-span-2 bg-[#FFFFFF14] rounded-2xl p-4  w-[70%] h-96 lg:h-[600px] overflow-y-auto pr-4 space-y-6"
//             style={{
//               scrollBehavior: "smooth",
//             }}
//           >
//             {coursePhasesData.map((coursePhase) => (
//               <div
//                 key={coursePhase.id}
//                 ref={(el) => {
//                   if (el) phaseRefsRef.current[coursePhase.id] = el;
//                 }}
//                 className="bg-[#000000] w-full from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8  hover:border-slate-600 transition-colors"
//               >
//                 {/* Phase Header */}
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h2 className="text-2xl sm:text-[24px] text-[#E0E0E0] font-['Graphikthin'] font-normal mb-2">
//                       {coursePhase.phase} : {coursePhase.title}
//                     </h2>
//                     <p className="text-[#FFFFFFCC] font-['Graphikthin'] text-sm sm:text-base leading-relaxed max-w-2xl">
//                       {coursePhase.description}
//                     </p>
//                   </div>
//                   <div className="flex text-[20px] items-center gap-2 text-[#FFFFFFCC] whitespace-nowrap ml-4">
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M16 2V6M8 2V6M3 10H21M11 14H16M8 14H8.00898M13 18H8M16 18H15.991M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
//                         stroke="url(#paint0_linear_2989_8784)"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <defs>
//                         <linearGradient
//                           id="paint0_linear_2989_8784"
//                           x1="1"
//                           y1="-2.5"
//                           x2="23.8244"
//                           y2="34.2456"
//                           gradientUnits="userSpaceOnUse"
//                         >
//                           <stop stop-color="#201DA7" />
//                           <stop offset="1" stop-color="#30E29D" />
//                         </linearGradient>
//                       </defs>
//                     </svg>

//                     <span className="text-sm sm:text-base font-normal font-['Graphikthin']">
//                       {coursePhase.duration}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Checkpoints */}
//                 <div className="space-y-3 mb-8">
//                   {coursePhase.checkpoints.map((checkpoint, idx) => (
//                     <div key={idx} className="flex gap-3">
//                       <div className="text-green-400 mt-0.5 flex-shrink-0">
//                         <svg
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M9.54961 18.0016L3.84961 12.3016L5.27461 10.8766L9.54961 15.1516L18.7246 5.97656L20.1496 7.40156L9.54961 18.0016Z"
//                             fill="#30E29D"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-gray-300 text-sm sm:text-base font-['Graphikthin']">
//                         {checkpoint}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Animated Logo Marquee */}
//                 <div className="relative overflow-hidden">
//                   <div className="flex gap-4 animatemarquee">
//                     {/* First set */}
//                     {coursePhase.logos.map((logo, idx) => (
//                       <div key={idx} className="flex items-center">
//                         <Image
//                           className="w-[90%] object-cover"
//                           src={logo}
//                           width={100}
//                           height={100}
//                           alt="logo"
//                         />
//                       </div>
//                     ))}
//                     {/* Duplicate set for seamless loop */}
//                   </div>
//                   {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-900 via-transparent to-slate-900" /> */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <div className="flex justify-center pt-7">
//         <Link href={"/hire-from-us"}>
//           <button className="group font-['Graphikmid'] rounded-[8px] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[14px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10] hoveext-white">
//             Join The Next Cohort
//           </button>
//         </Link>
//       </div>

//       <style jsx>{`
//         /* Scrollbar Styling */
//         div::-webkit-scrollbar {
//           width: 8px;
//         }

//         div::-webkit-scrollbar-track {
//           background: rgba(51, 65, 85, 0.5);
//           border-radius: 10px;
//         }

//         div::-webkit-scrollbar-thumb {
//           background: rgba(100, 116, 139, 0.6);
//           border-radius: 10px;
//         }

//         div::-webkit-scrollbar-thumb:hover {
//           background: rgba(100, 116, 139, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function CourseCurriculum() {
//   const [scrollPhase, setScrollPhase] = useState(1);
//   const phaseRefsRef = useRef({});

//   // detect which phase is visible
//   useEffect(() => {
//     const handleScroll = () => {
//       const phaseElements = Object.entries(phaseRefsRef.current);
//       let currentPhase = 1;

//       for (const [phaseId, element] of phaseElements) {
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const windowHeight = window.innerHeight;

//           if (rect.top < windowHeight / 2) {
//             currentPhase = Number(phaseId);
//           }
//         }
//       }
//       setScrollPhase(currentPhase);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handlePhaseClick = (phaseId) => {
//     const element = phaseRefsRef.current[phaseId];
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setScrollPhase(phaseId);
//     }
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
//         <h1 className="text-white mt-10 font-['Graphikthin'] text-5xl sm:text-[64px] mb-5">
//           Course curriculum
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pb-16">
//         <div className="flex items-start gap-6 lg:gap-8">
//           {/* Left Section */}
//           <div className="lg:w-[30%] w-full sticky top-10 self-start">
//             <div className="space-y-3">
//               {coursePhasesData.map((coursePhase) => (
//                 <div
//                   key={coursePhase.id}
//                   onClick={() => handlePhaseClick(coursePhase.id)}
//                   className="py-5 px-6 rounded-lg cursor-pointer transition-all duration-300"
//                   style={{
//                     background:
//                       scrollPhase === coursePhase.id
//                         ? "linear-gradient(89.66deg,#30E29D -124.78%,rgba(48,226,157,0) 105.61%)"
//                         : "transparent",
//                     borderLeft:
//                       scrollPhase === coursePhase.id
//                         ? "0px solid transparent"
//                         : "none",
//                     borderImage:
//                       scrollPhase === coursePhase.id
//                         ? "linear-gradient(89.61deg,#30E29D -19.63%,rgba(0,0,0,0) 97.66%) 1"
//                         : "none",
//                   }}
//                 >
//                   <div className="text-xs font-light text-gray-400 mb-1 font-['Graphikthin']">
//                     {coursePhase.phase}
//                   </div>
//                   <div className="text-[22px] font-['Graphikthin'] text-[#E0E0E0] font-normal hover:text-white transition-colors">
//                     {coursePhase.title}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Section - full height scrolls with page */}
//           <div className="lg:w-[70%] w-full space-y-6">
//             {coursePhasesData.map((coursePhase) => (
//               <div
//                 key={coursePhase.id}
//                 ref={(el) => (phaseRefsRef.current[coursePhase.id] = el)}
//                 className="bg-[#000000] rounded-2xl p-6 sm:p-8"
//               >
//                 {/* Phase Header */}
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h2 className="text-2xl sm:text-[24px] text-[#E0E0E0] font-['Graphikthin'] font-normal mb-2">
//                       {coursePhase.phase} : {coursePhase.title}
//                     </h2>
//                     <p className="text-[#FFFFFFCC] font-['Graphikthin'] text-sm sm:text-base leading-relaxed max-w-2xl">
//                       {coursePhase.description}
//                     </p>
//                   </div>
//                   <div className="flex text-[20px] items-center gap-2 text-[#FFFFFFCC] whitespace-nowrap ml-4">
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M16 2V6M8 2V6M3 10H21M11 14H16M8 14H8.00898M13 18H8M16 18H15.991M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
//                         stroke="url(#paint0_linear_2989_8784)"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <defs>
//                         <linearGradient
//                           id="paint0_linear_2989_8784"
//                           x1="1"
//                           y1="-2.5"
//                           x2="23.8244"
//                           y2="34.2456"
//                           gradientUnits="userSpaceOnUse"
//                         >
//                           <stop stopColor="#201DA7" />
//                           <stop offset="1" stopColor="#30E29D" />
//                         </linearGradient>
//                       </defs>
//                     </svg>
//                     <span className="text-sm sm:text-base font-normal font-['Graphikthin']">
//                       {coursePhase.duration}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Checkpoints */}
//                 <div className="space-y-3 mb-8">
//                   {coursePhase.checkpoints.map((checkpoint, idx) => (
//                     <div key={idx} className="flex gap-3">
//                       <div className="text-green-400 mt-0.5 flex-shrink-0">
//                         <svg
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M9.54961 18.0016L3.84961 12.3016L5.27461 10.8766L9.54961 15.1516L18.7246 5.97656L20.1496 7.40156L9.54961 18.0016Z"
//                             fill="#30E29D"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-gray-300 text-sm sm:text-base font-['Graphikthin']">
//                         {checkpoint}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Logos */}
//                 <div className="relative overflow-hidden">
//                   <div className="flex gap-4 animatemarquee">
//                     {coursePhase.logos.map((logo, idx) => (
//                       <div key={idx} className="flex items-center">
//                         <Image
//                           className="w-[90%] object-cover"
//                           src={logo}
//                           width={100}
//                           height={100}
//                           alt="logo"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="flex justify-center pt-7">
//         <Link href="/hire-from-us">
//           <button className="group font-['Graphikmid'] rounded-[8px] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[14px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10]">
//             Join The Next Cohort
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default function CourseCurriculum() {
//   const [scrollPhase, setScrollPhase] = useState(1);
//   const phaseRefsRef = useRef({});

//   // detect which phase is visible
//   useEffect(() => {
//     const handleScroll = () => {
//       const phaseElements = Object.entries(phaseRefsRef.current);
//       let currentPhase = 1;

//       for (const [phaseId, element] of phaseElements) {
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const windowHeight = window.innerHeight;

//           if (rect.top < windowHeight / 2) {
//             currentPhase = Number(phaseId);
//           }
//         }
//       }
//       setScrollPhase(currentPhase);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handlePhaseClick = (phaseId) => {
//     const element = phaseRefsRef.current[phaseId];
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setScrollPhase(phaseId);
//     }
//   };

//   return (
//     <div>
//       {/* Header */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
//         <h1 className="text-white mt-10 font-['Graphikthin'] text-5xl sm:text-[64px] mb-5">
//           Course curriculum
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 pb-16">
//         <div className="flex items-start gap-6 lg:gap-8">
//           {/* Left Section */}
//           <div className="lg:w-[30%] w-full sticky top-10 self-start">
//             <div className="space-y-3">
//               {coursePhasesData.map((coursePhase) => (
//                 <div
//                   key={coursePhase.id}
//                   onClick={() => handlePhaseClick(coursePhase.id)}
//                   className="py-5 px-6 rounded-lg cursor-pointer transition-all duration-300"
//                   style={{
//                     background:
//                       scrollPhase === coursePhase.id
//                         ? "linear-gradient(89.66deg,#30E29D -124.78%,rgba(48,226,157,0) 105.61%)"
//                         : "transparent",
//                     borderLeft:
//                       scrollPhase === coursePhase.id
//                         ? "0px solid transparent"
//                         : "none",
//                     borderImage:
//                       scrollPhase === coursePhase.id
//                         ? "linear-gradient(89.61deg,#30E29D -19.63%,rgba(0,0,0,0) 97.66%) 1"
//                         : "none",
//                   }}
//                 >
//                   <div className="text-xs font-light text-gray-400 mb-1 font-['Graphikthin']">
//                     {coursePhase.phase}
//                   </div>
//                   <div className="text-[22px] font-['Graphikthin'] text-[#E0E0E0] font-normal hover:text-white transition-colors">
//                     {coursePhase.title}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Section - full height scrolls with page */}
//           <div className="lg:w-[70%] w-full space-y-6">
//             {coursePhasesData.map((coursePhase) => (
//               <div
//                 key={coursePhase.id}
//                 ref={(el) => (phaseRefsRef.current[coursePhase.id] = el)}
//                 className="bg-[#000000] rounded-2xl p-6 sm:p-8"
//               >
//                 {/* Phase Header */}
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h2 className="text-2xl sm:text-[24px] text-[#E0E0E0] font-['Graphikthin'] font-normal mb-2">
//                       {coursePhase.phase} : {coursePhase.title}
//                     </h2>
//                     <p className="text-[#FFFFFFCC] font-['Graphikthin'] text-sm sm:text-base leading-relaxed max-w-2xl">
//                       {coursePhase.description}
//                     </p>
//                   </div>
//                   <div className="flex text-[20px] items-center gap-2 text-[#FFFFFFCC] whitespace-nowrap ml-4">
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M16 2V6M8 2V6M3 10H21M11 14H16M8 14H8.00898M13 18H8M16 18H15.991M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
//                         stroke="url(#paint0_linear_2989_8784)"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <defs>
//                         <linearGradient
//                           id="paint0_linear_2989_8784"
//                           x1="1"
//                           y1="-2.5"
//                           x2="23.8244"
//                           y2="34.2456"
//                           gradientUnits="userSpaceOnUse"
//                         >
//                           <stop stopColor="#201DA7" />
//                           <stop offset="1" stopColor="#30E29D" />
//                         </linearGradient>
//                       </defs>
//                     </svg>
//                     <span className="text-sm sm:text-base font-normal font-['Graphikthin']">
//                       {coursePhase.duration}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Checkpoints */}
//                 <div className="space-y-3 mb-8">
//                   {coursePhase.checkpoints.map((checkpoint, idx) => (
//                     <div key={idx} className="flex gap-3">
//                       <div className="text-green-400 mt-0.5 flex-shrink-0">
//                         <svg
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M9.54961 18.0016L3.84961 12.3016L5.27461 10.8766L9.54961 15.1516L18.7246 5.97656L20.1496 7.40156L9.54961 18.0016Z"
//                             fill="#30E29D"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-gray-300 text-sm sm:text-base font-['Graphikthin']">
//                         {checkpoint}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Logos */}
//                 <div className="relative overflow-hidden">
//                   <div className="flex gap-4 animatemarquee">
//                     {coursePhase.logos.map((logo, idx) => (
//                       <div key={idx} className="flex items-center">
//                         <Image
//                           className="w-[90%] object-cover"
//                           src={logo}
//                           width={100}
//                           height={100}
//                           alt="logo"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="flex justify-center pt-7">
//         <Link href="/hire-from-us">
//           <button className="group font-['Graphikmid'] rounded-[8px] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[14px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10]">
//             Join The Next Cohort
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
