"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [openPrograms, setOpenPrograms] = useState(false);
  const [activeCategory, setActiveCategory] = useState("bootcamp");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false); // <-- added
  const timeoutRef = useRef(null);

  const dropdownRef = useRef(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenPrograms(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // const handleMouseEnter = () => {
  //   clearTimeout(timeoutRef.current);
  //   setOpenPrograms(true);
  // };

  // const handleMouseLeave = () => {
  //   timeoutRef.current = setTimeout(() => setOpenPrograms(false), 150);
  // };

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
        <li className="relative" ref={dropdownRef}>
          {/* 🔹 Button — toggles dropdown on click */}
          <button
            onClick={() => setOpenPrograms(!openPrograms)}
            className="flex items-center gap-2 text-[16px] font-medium text-white"
          >
            Programs
            <Image
              src="/svgs/jh.svg"
              alt="chevron"
              width={14}
              height={14}
              className={`transition-transform duration-200 ${
                openPrograms ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* 🔹 Dropdown */}
          <div
            className={`fixed left-1/2 top-[80px] -translate-x-1/2 w-[90vw] h-[520px] max-w-[1280px] bg-black text-white px-[80px] py-[60px] flex justify-center gap-[60px] transition-all duration-300 ease-in-out rounded-lg shadow-2xl ${
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
            <div
              className="pl-[40px] flex-1 relative overflow-y-auto border-l"
              style={{
                borderLeft: "1px solid",
                borderImageSource:
                  "linear-gradient(156.63deg, #201DA7 8.68%, #30E29D 84.91%)",
                borderImageSlice: 1,
              }}
            >
              <p className="text-[#9CA3AF] mb-4">
                {activeCategory === "bootcamp"
                  ? "Job Bootcamp Programs"
                  : "Certification Programs"}
              </p>

              {/* Bootcamp Programs */}
              {activeCategory === "bootcamp" && (
                <div className="grid grid-cols-3 gap-x-[60px] gap-y-[35px] text-[16px]">
                  {programsData.bootcamp.map((col, i) =>
                    col.map((item, j) => (
                      <Link
                        key={`${i}-${j}`}
                        href={item.link}
                        className="hover:text-[#30E29D] text-[#E5E5E5]"
                        onClick={() => setOpenPrograms(false)} // close on click
                      >
                        {item.title}
                      </Link>
                    ))
                  )}
                </div>
              )}

              {/* Certification Programs */}
              {activeCategory === "certification" && (
                <div className="flex flex-col gap-[35px] text-[16px]">
                  {programsData.certification.map((col, i) =>
                    col.map((item, j) => (
                      <Link
                        key={`${i}-${j}`}
                        href={item.link}
                        className="hover:text-[#30E29D] text-[#E5E5E5]"
                        onClick={() => setOpenPrograms(false)} // close on click
                      >
                        {item.title}
                      </Link>
                    ))
                  )}
                </div>
              )}
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
        <div className="fixed top-16 left-0 pt-12 w-full h-screen bg-[#0F0F0F] text-white flex flex-col items-center justify-start gap-4 text-lg z-[9998] overflow-y-auto pb-10">
          {/* Programs dropdown for mobile */}
          <div className="w-full px-6">
            <button
              onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
              className="flex justify-center items-center w-full py-0 bor[#333]"
            >
              <span className="mr-2">Programs</span>
              {mobileProgramsOpen ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {mobileProgramsOpen && (
              <div className="mt-3 flex flex-col gap-6 text-[15px] pl-3 text-center">
                <div>
                  <p className="text-[#30E29D] font-semibold mb-2">
                    Job Bootcamp Programs
                  </p>
                  {programsData.bootcamp.flat().map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={() => setMobileMenu(false)}
                      className="block py-1 text-[#E5E5E5] hover:text-[#30E29D]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-[#30E29D] font-semibold mb-2">
                    Certification Programs
                  </p>
                  {programsData.certification.flat().map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.link}
                      onClick={() => setMobileMenu(false)}
                      className="block py-1 text-[#E5E5E5] hover:text-[#30E29D]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other links */}
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
            className="bg-[#30E29D] text-black font-semibold py-[10px] px-[25px] rounded-[8px] mt-2"
          >
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
}
