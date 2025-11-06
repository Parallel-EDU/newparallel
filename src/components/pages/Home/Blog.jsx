// app/components/StudentProjects.jsx
"use client";
import style from "@/styles/style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="relative overflow-hidden pt-10 pb-0 max-md:pt-0 ">
      <div className="absolute w-[100%] h-[822px] z[1] top-0 left-0 overflow-hidden">
        <div className={`${style.backgroundbox22223}`}></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 spx-8  max-xl:p-10  max-md:p-4 z-[99999]">
        {/* Heading */}
        <h1 className="text-white/95 font-['Graphikthin'] font-medium tracking-[-0.018em] leading-[1.08] text-[42px] sm:text-[64px] mb-3">
          Blogs{" "}
        </h1>
        {/* Subhead */}
        {/* <p className="text-[16px] text-[#B7C4D1] max-w-[660px] mb-12">
          From interactive web apps to AI-driven dashboards and automation
          tools, every project is designed to showcase your skills to employers.
        </p> */}

        {/* Responsive grid */}
        <div className="grid mt-10 grid-cols-1  z-[99999] sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>

        {/* CTA */}
        <Link href="/blogs" className="flex justify-center pt-2 z-[99999]">
          <button className="group font-['Graphikmid'] rounded-[8px] border hover:bg-[#30E29D] hover:text-[#292929] border-[#30E29D] px-8 py-[14px] text-[16px] text-[#30E29D] transition-colors hover:bg-[#22e19d14]">
            View all Blogs
          </button>
        </Link>
      </div>
    </section>
  );
}

/* ==== Card ==== */
function ProjectCard({ color, date, img, title, desc, link }) {
  return (
    <Link
      href={link}
      className="rounded-[7px] border-[1px] border-[#ffffff24] p-[16px] transition-all group bg-transparent hover:shadow-[0_2px_16px_0_rgba(48,226,151,0.05)] cursor-pointer flex flex-col overflow-hidden"
    >
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
        <div className="flex items-start justify-start gap-3">
          {/* <Image
            alt="book-reading--book-reading-learning"
            src="/home/Frame 1000003090.png"
            width={24}
            height={24}
          /> */}
          <span className="text-[14px] font-['Graphikthin']">{date}</span>
        </div>
        <div className="text-[#E0E0E0] text-[20px] pt-2 mt-2 leading-[1.38] max-xl:text-[16px]">
          {title}
        </div>
        <div className="text-[#E0E0E0] mt-1 text-[15px]">{desc}</div>
        <Link
          href={link}
          className="flex w-full justify-start pt-2 z-[99999] text-[#30E29D]"
        >
          {/* <button className="group w-full font-['Graphikmid'] rounded-[8px] border hover:bg-[#30E29D] hover:text-[#292929] border-[#30E29D] px-8 py-[8px] text-[16px] text-[#30E29D] transition-colors hover:bg-[#22e19d14]"> */}
          Read more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2"
          >
            <path
              d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5003 13.5 19.5003C13.301 19.5003 13.1101 19.4213 12.9694 19.2806C12.8286 19.1398 12.7496 18.949 12.7496 18.7499C12.7496 18.5509 12.8286 18.36 12.9694 18.2193L18.4397 12.7499H3.75C3.55109 12.7499 3.36032 12.6709 3.21967 12.5303C3.07902 12.3896 3 12.1988 3 11.9999C3 11.801 3.07902 11.6103 3.21967 11.4696C3.36032 11.3289 3.55109 11.2499 3.75 11.2499H18.4397L12.9694 5.78055C12.8286 5.63982 12.7496 5.44895 12.7496 5.24993C12.7496 5.05091 12.8286 4.86003 12.9694 4.7193C13.1101 4.57857 13.301 4.49951 13.5 4.49951C13.699 4.49951 13.8899 4.57857 14.0306 4.7193L20.7806 11.4693C20.8504 11.539 20.9057 11.6217 20.9434 11.7127C20.9812 11.8038 21.0006 11.9014 21.0006 11.9999C21.0006 12.0985 20.9812 12.1961 20.9434 12.2871C20.9057 12.3782 20.8504 12.4609 20.7806 12.5306Z"
              fill="#30E29D"
            />
          </svg>
          {/* </button> */}
        </Link>
      </div>
    </Link>
  );
}

/* ==== Projects Definition ==== */
// You can swap the inner span for img tags or svg as needed

const projects = [
  {
    color: "#EB39C2",
    date: "04/11/2025",
    img: "/home/Frame 1000003040 copy 2.png",
    title: "Choosing Between Full Stack",
    desc: "",

    link: "/blogs/choosing-between-full-stack",
  },
  {
    color: "#2277ea",
    date: "03/11/2025",
    img: "/home/Frame 1000003040 copy 3.png",

    title: "Communication: The Most Underrated ",
    desc: "",
    link: "/blogs/communication-the-most-underrated-skill-in-the-AI-world",
  },
  {
    color: "#781fe0",
    date: "02/11/2025",
    img: "/home/Frame 1000003040 copy 4.png",

    title: "AI Agents: The Co-Workers You",
    desc: "",
    link: "/blogs/ai-agents-the-Co-Workers-you",
  },
  {
    color: "#DDFB22",
    date: "01/11/2025",
    img: "/home/Frame 1000003038 (1) copy.png",
    title: "How AWS is Quietly Building",
    desc: "",
    link: "/blogs/how-aws-is-quietly-building",
  },
];
