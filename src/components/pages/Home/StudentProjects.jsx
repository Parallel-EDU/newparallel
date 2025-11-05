// app/components/StudentProjects.jsx
"use client";

import style from "@/styles/style.module.css";
// import { Link } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudentProjects() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20">
      <div className="absolute w-[100%] h-[822px] top-0 left-0  overflow-hidden">
        <div className={`${style.backgroundbox2222}`}></div>
      </div>
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-8 z-[9999]">
        {/* Heading */}
        <h1 className="text-[#E5E5E5] font- font-['Graphikthin'] tracking-[-0.018em] leading-[1.08] text-[42px] sm:text-[64px]  6">
          See what our students build
        </h1>
        {/* Subhead */}
        <p className="text-[16px] font-['Graphikthin'] text-[#E0E0E0] max-w-[660px]  mt-6">
          From interactive web apps to AI-driven dashboards and automation
          tools, every project is designed to showcase your skills to employers.
        </p>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 z-[90] bg-black sm:grid-cols-2 md:grid-cols-4 gap-7 mt-[75px]">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-[75px] mt[75px] z-[9999]">
          <Link href="/#">
            <button
              className="group rounded-[8px] font-['Graphikmid'] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-8 py-[14px] text-[16px] text-[#30E29D] transition-colors hover:bg-[#22e19d14] hoverext-white"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(34,225,157,0.18) inset, 0 0 20px rgba(34,225,157,0.14)",
              }}
            >
              View Project Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==== Card ==== */
function ProjectCard({ color, img, title, desc }) {
  return (
    <div className="rounded-[7px] border-[1px] border-[#ffffff24] p-[27px] transition-all group bg-transparent hover:shadow-[0_2px_16px_0_rgba(48,226,151,0.05)] cursor-pointer flex flex-col overflow-hidden">
      <div
        className="w-full  flex items-center justify-center"
        // style={{ background: color }}
      >
        {/* Placeholder artwork, replace with real image if available */}
        <Image
          alt="book-reading--book-reading-learning"
          src={img}
          width={447}
          height={280}
        />
      </div>
      <div className="px5 pt-5 pb6   ">
        <div className="text-[#E0E0E0] text-[20px] border-t border-[#ffffff24] pt-5 mt-2 leading-[1.38]">
          {title}
        </div>
        <div className="text-[#E0E0E0] mt-1 text-[15px]">{desc}</div>
      </div>
    </div>
  );
}

/* ==== Projects Definition ==== */
// You can swap the inner span for img tags or svg as needed
const projects = [
  {
    color: "#EB39C2",
    img: "/home/Frame 1000003040.png",
    title: "E-Commerce Platform – MERN / Spring Boot + Payment Gateway",
    desc: "",
  },
  {
    color: "#2277ea",
    img: "/home/Frame 1000003040 copy.png",

    title:
      "AI-Powered Dashboard – Data Analytics + Automation + GenAI insights",
    desc: "",
  },
  {
    color: "#781fe0",
    img: "/home/Frame 1000003040 (1).png",
    title:
      "CI/CD Pipeline Automation – Jenkins pipeline for web app deployment",
    desc: "",
  },
  {
    color: "#DDFB22",
    img: "/home/Frame 1000003038 (1).png",
    title: "Recommendation System – Personalized suggestions using ML",
    desc: "",
  },
];
