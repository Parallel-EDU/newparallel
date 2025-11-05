// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [openPrograms, setOpenPrograms] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("bootcamp");
//   const timeoutRef = useRef(null);

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutRef.current);
//     setOpenPrograms(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setOpenPrograms(false), 150);
//   };

//   const programsData = {
//     bootcamp: [
//       ["JavaScript Training", "Python Training", "AWS Training"],
//       ["React.js Training", "Java Training", "Machine Learning Training"],
//       ["Vue.js Training", "Data Analysis Training", "Salesforce Training"],
//       ["Next.js Training", "Tableau Training", "AI Agents Training"],
//       ["Node.js Training", "DevOps Training", "AI Prompt Engineering"],
//     ],
//     certification: [
//       ["Full Stack Web Development with GenAI"],
//       ["Data Science with GenAI"],
//       ["DevOps and Cloud Computing"],
//     ],
//   };

//   return (
//     <nav className="sticky top-0 z-[9999] bg-[#1A1A1A]/90 backdrop-blur-xl px-[80px] py-[22px] flex justify-between items-center max-lg:px-[40px] max-sm:px-[20px]">
//       {/* Logo */}
//       <Link href="/" className="flex items-center">
//         <Image src="/Frame 96.svg" alt="Parallel" width={140} height={26} />
//       </Link>

//       {/* Menu */}
//       <ul className="flex gap-[50px] items-center text-white">
//         {/* Programs Dropdown */}
//         <li
//           className="relative"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <button className="flex items-center gap-2 text-[16px] font-medium">
//             Programs
//             <Image
//               src={openPrograms ? "/svgs/jh.svg" : "/svgs/jh.svg"}
//               alt="chevron"
//               width={14}
//               height={14}
//             />
//           </button>

//           {/* Dropdown */}
//           <div
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className={`fixed left-1/2 top-[80px] drope-down -translate-x-1/2 w-[90vw] h-[520px] max-w-[1280px] bg-black text-white px-[80px] py-[60px] flex justify-center gap-[60px] transition-all duration-300 ease-in-out rounded-lg shadow-2xl ${
//               openPrograms
//                 ? "opacity-100 visible translate-y-0"
//                 : "opacity-0 invisible -translate-y-4"
//             }`}
//           >
//             {/* Left Side */}
//             <div className="min-w-[260px]">
//               <p className="text-[#9CA3AF] text-[15px] mb-4">Programs</p>
//               <div className="flex flex-col gap-3">
//                 <button
//                   onClick={() => setActiveCategory("bootcamp")}
//                   className={`font-semibold text-[18px] text-left ${
//                     activeCategory === "bootcamp"
//                       ? "text-[#30E29D]"
//                       : "text-[#9CA3AF] hover:text-white"
//                   }`}
//                 >
//                   Job Bootcamp Programs
//                 </button>
//                 <button
//                   onClick={() => setActiveCategory("certification")}
//                   className={`font-semibold text-[18px] text-left ${
//                     activeCategory === "certification"
//                       ? "text-[#30E29D]"
//                       : "text-[#9CA3AF] hover:text-[#30E29D]"
//                   }`}
//                 >
//                   Certification Programs
//                 </button>
//               </div>
//             </div>

//             {/* Divider + Programs */}
//             <div className="border-l border-[#30E29D40] pl-[40px] flex-1 relative">
//               <p className="text-[#9CA3AF] mb-4">
//                 {activeCategory === "bootcamp"
//                   ? "Job Bootcamp Programs"
//                   : "Certification Programs"}
//               </p>

//               {/* Bootcamp Programs */}
//               {activeCategory === "bootcamp" && (
//                 <div className="grid grid-cols-3 gap-x-[60px] gap-y-[35px] text-[2-px]">
//                   {programsData.bootcamp.map((col, i) =>
//                     col.map((item, j) => (
//                       <Link
//                         key={i + "-" + j}
//                         href="#"
//                         className="hover:text-[#30E29D] text-[#E5E5E5]"
//                       >
//                         {item}
//                       </Link>
//                     ))
//                   )}
//                 </div>
//               )}

//               {/* Certification Programs */}
//               {activeCategory === "certification" && (
//                 <div className="flex flex-col gap-[35px] text-[16px]">
//                   {programsData.certification.map((col, i) =>
//                     col.map((item, j) => (
//                       <Link
//                         key={i + "-" + j}
//                         href="#"
//                         className="hover:text-[#30E29D]"
//                       >
//                         {item}
//                       </Link>
//                     ))
//                   )}
//                 </div>
//               )}

//               {/* Right side light glow */}
//               <div className="absolute top-0 right-0 bottom-0 w-[400px] bg-gradient-to-l from-[#0b0b0b] to-transparent blur-3xl opacity-30 pointer-events-none"></div>
//             </div>
//           </div>
//         </li>

//         <Link href="/about" className="text-[16px] font-medium">
//           About us
//         </Link>
//         <Link href="/workshops" className="text-[16px] font-medium">
//           Workshops
//         </Link>
//         <Link href="/hire-from-us" className="text-[16px] font-medium">
//           Hire from us
//         </Link>
//         <Link href="/contact-us" className="text-[16px] font-medium">
//           Contact us
//         </Link>

//         <Link
//           href="/signup"
//           className="bg-[#30E29D] text-black font-semibold py-[8px] px-[20px] rounded-[8px]"
//         >
//           Sign up
//         </Link>
//       </ul>
//     </nav>
//   );
// }

"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openPrograms, setOpenPrograms] = useState(false);
  const [activeCategory, setActiveCategory] = useState("bootcamp");
  const [mobileMenu, setMobileMenu] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpenPrograms(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenPrograms(false), 150);
  };

  const programsData = {
    bootcamp: [
      [
        { title: "JavaScript Training", link: "/tech/javascript" },
        { title: "Python Training", link: "/tech/python" },
        { title: "AWS Training", link: "/tech/aws" },
      ],
      [
        { title: "React.js Training", link: "/tech/react-js" },
        { title: "Java Training", link: "/tech/java" },
        { title: "Machine Learning Training", link: "/tech/machine-learning" },
      ],
      [
        { title: "Vue.js Training", link: "/tech/vue-js" },
        { title: "Data Analysis Training", link: "/tech/data-analysis" },
        { title: "Salesforce Training", link: "/tech/salesforce" },
      ],
      [
        { title: "Next.js Training", link: "/tech/next-js" },
        { title: "Tableau Training", link: "/tech/tableau" },
        { title: "AI Agents Training", link: "/tech/ai-agents" },
      ],
      [
        { title: "Node.js Training", link: "/tech/node-js" },
        { title: "DevOps Training", link: "/tech/dev-ops" },
        { title: "AI Prompt Engineering", link: "/tech/ai-prompt-eng" },
      ],
    ],
    certification: [
      [
        {
          title: "Full Stack Web Development with GenAI",
          link: "/job-bootcamp-full-stack-development",
        },
      ],
      [
        {
          title: "Data Science with GenAI",
          link: "/data-science-with-genAI-bootcamp",
        },
      ],
      [
        {
          title: "DevOps and Cloud Computing",
          link: "/devOps-and-cloud-computing-bootcamp",
        },
      ],
    ],
  };

  return (
    <nav className="sticky top-0 z-[9999999] bg-[#1A1A1A]/10 backdrop-blur-xl px-[80px] py-[22px] flex justify-between items-center  max-xl:px-[40px] max-lg:px-[40px] max-sm:px-[20px]">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/Frame 96.svg" alt="Parallel" width={140} height={26} />
      </Link>

      {/* Hamburger for Mobile */}
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="lg:hidden text-white focus:outline-none"
      >
        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-[50px] items-center text-white">
        {/* Programs Dropdown */}
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center gap-2 text-[16px] font-medium">
            Programs
            <Image
              src={openPrograms ? "/svgs/jh.svg" : "/svgs/jh.svg"}
              alt="chevron"
              width={14}
              height={14}
            />
          </button>

          {/* Dropdown */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`fixed left-1/2 top-[80px] -translate-x-1/2 w-[90vw] h-[520px] drope-down max-w-[1280px] bg-black text-white px-[80px] py-[60px] flex justify-center gap-[60px] transition-all duration-300 ease-in-out rounded-lg shadow-2xl ${
              openPrograms
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-4"
            }`}
          >
            {/* Left Side */}
            <div className="min-w-[260px]">
              <p className="text-[#9CA3AF] text-[15px] mb-4">Programs</p>
              <div className="flex flex-col gap-8">
                <button
                  onClick={() => setActiveCategory("bootcamp")}
                  className={`font-semibold text-[18px] text-left ${
                    activeCategory === "bootcamp"
                      ? "text-[#30E29D]"
                      : "text-[#9CA3AF] hover:text-[#30E29D]"
                  }`}
                >
                  Job Bootcamp Programs
                </button>
                <button
                  onClick={() => setActiveCategory("certification")}
                  className={`font-semibold text-[18px] text-left ${
                    activeCategory === "certification"
                      ? "text-[#30E29D]"
                      : "text-[#9CA3AF] hover:text-[#30E29D]"
                  }`}
                >
                  Certification Programs
                </button>
              </div>
            </div>

            {/* Divider + Programs */}
            <div className="border-l border-[#30E29D40] pl-[40px] flex-1 relative overflow-y-auto">
              <p className="text-[#9CA3AF] mb-4">
                {activeCategory === "bootcamp"
                  ? "Job Bootcamp Programs"
                  : "Certification Programs"}
              </p>

              {/* Bootcamp Programs */}

              {/* Bootcamp Programs */}
              {activeCategory === "certification" && (
                <div className="grid grid-cols-3 gap-x-[60px] gap-y-[35px] text-[16px]">
                  {programsData.bootcamp.map((col, i) =>
                    col.map((item, j) => (
                      <Link
                        key={`${i}-${j}`}
                        href={item.link}
                        className="hover:text-[#30E29D] text-[#E5E5E5]"
                      >
                        {item.title}
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* Certification Programs */}
              {activeCategory === "bootcamp" && (
                <div className="flex flex-col gap-[35px] text-[16px]">
                  {programsData.certification.map((col, i) =>
                    col.map((item, j) => (
                      <Link
                        key={`${i}-${j}`}
                        href={item.link}
                        className="hover:text-[#30E29D] text-[#E5E5E5]"
                      >
                        {item.title}
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* {activeCategory === "certification" && (
                <div className="grid grid-cols-3 gap-x-[60px] gap-y-[35px] text-[16px]">
                  {programsData.bootcamp.map((col, i) =>
                    col.map((item, j) => (
                      <Link
                        key={i + "-" + j}
                        href="/tech/python"
                        className="hover:text-[#30E29D] text-[#E5E5E5]"
                      >
                        {item}
                      </Link>
                    ))
                  )}
                </div>
              )}

              {activeCategory === "bootcamp" && (
                <div className="flex flex-col gap-[35px] text-[16px]">
                  {programsData.certification.map((col, i) =>
                    col.map((item, j) => (
                      <Link
                        key={i + "-" + j}
                        href="#"
                        className="hover:text-[#30E29D]"
                      >
                        {item}
                      </Link>
                    ))
                  )}
                </div>
              )} */}

              {/* Right side light glow */}
              <div className="absolute top-0 right-0 bottom-0 w-[400px] bggradient-to-l from-[#0b0b0b] to-transparent blur-3xl opacity-30 pointer-events-none"></div>
            </div>
          </div>
        </li>

        <Link href="/about" className="text-[16px] font-medium">
          About us
        </Link>
        <Link href="/workshops" className="text-[16px] font-medium">
          Workshops
        </Link>
        <Link href="/hire-from-us" className="text-[16px] font-medium">
          Hire from us
        </Link>
        <Link href="/contact-us" className="text-[16px] font-medium">
          Contact us
        </Link>

        <Link
          href="/signup"
          className="bg-[#30E29D] text-black font-semibold py-[8px] px-[20px] rounded-[8px]"
        >
          Sign up
        </Link>
      </ul>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed top-16 left-0 pt-12 w-full h-screen bg-[#0F0F0F] text-white flex flex-col items-center justify-start gap-6 text-lg z-[9998]">
          <Link href="/" onClick={() => setMobileMenu(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenu(false)}>
            About us
          </Link>
          <Link href="/workshops" onClick={() => setMobileMenu(false)}>
            Workshops
          </Link>
          <Link href="/hire-from-us" onClick={() => setMobileMenu(false)}>
            Hire from us
          </Link>
          <Link href="/contact-us" onClick={() => setMobileMenu(false)}>
            Contact us
          </Link>
          <Link
            href="/signup"
            onClick={() => setMobileMenu(false)}
            className="bg-[#30E29D] text-black font-semibold py-[10px] px-[25px] rounded-[8px]"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
