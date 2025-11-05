// app/components/Bootcamps.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const accent = { color: "#22E19D" }; // color for “Job bootcamp programs”

export default function Bootcamps() {
  return (
    <section className="relative overflow-hidden">
      {/* Background wash at 292.01deg */}

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 pt-10 sm:pt-0 pb-16">
        {/* Breadcrumb */}
        <p className="text-[16px] text-[#B9C7D6] font-['Graphikthin']">
          Our courses -{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg,  #30E29D   0%, #201DA7 147.01%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Job bootcamp programs
          </span>
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-[#E5E5E5] font-['Graphikthin'] font-[300] fontmedium tracking-[-0.02em] leading-[1.05] text-[44px] sm:text-[58px] md:text-[68px]">
          Bootcamps that get you hired
        </h2>

        {/* Subhead */}
        <p className="mt-6 text-[20px] font-normal sm:text-[17px] text-[#B7C4D1] max-w-[900px]">
          Intensive, project-based training with real-world projects and
          guaranteed placement support.
        </p>

        {/* Cards */}
        <div className="mt-[83px] grid grid-cols-1 md:grid-cols-3 gap-5">
          <CourseCard
            art="/Frame 1000002891.png"
            title={["Full Stack Web", "Development With GenAI"]}
            bullets={[
              "MERN, or Spring Boot tracks",
              "Frontend, backend, databases, deployment",
              "Build AI-powered applications",
            ]}
            cta="Join The Next Full Stack Cohort"
            link="/job-bootcamp-full-stack-development"
          />
          <CourseCard
            art="/Frame 1000003002.png"
            title={["Data Science", "With GenAI"]}
            bullets={[
              "Python, SQL, Pandas, NumPy, ML algorithms",
              "Data visualization & storytelling",
              "End-to-end live data projects",
            ]}
            cta="Join The Next Data Science Cohort"
            link="/data-science-with-genAI-bootcamp"
          />
          <CourseCard
            art="/Frame 1000002996.png"
            title={["DevOps And Cloud", "Computing"]}
            bullets={[
              "CI/CD with Jenkins, Docker, and Kubernetes",
              "AWS, Terraform, and Azure basics",
              "Real-time deployment projects",
            ]}
            cta="Join The Next DevOps Cohort"
            link="/devOps-and-cloud-computing-bootcamp"
          />
        </div>
      </div>
    </section>
  );
}

/* =================== Card =================== */
function CourseCard({ art, title, bullets, cta, link }) {
  return (
    <div className="relative rounded-[14px] p-[1px]">
      {/* Subtle neon border */}
      {/* <div
        className="pointer-events-none absolute inset-0 rounded-[14px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      /> */}
      <div
        className="rounded-[14px] flex justify-between flex-col border h-[640px] max-lg:h-full border-[#7878784D] bg-[#0A0F16]/70 backdrop-blur-[2px] overflow-hidden"
        // style={{
        //   boxShadow:
        //     "0 10px 30px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
        // }}
      >
        {/* Art area */}
        <div className="h[210px] sm:h-full bg-black/20 px-[18px] pt-[20px] ">
          {" "}
          <Image
            alt="book-reading--book-reading-learning"
            src={art}
            width={447}
            className="max-lg:w-full"
            height={280}
          />
          <h3 className="text-[#E5E5E5] mt-[32px] font-['Graphikthin'] px6 py6 text-[22px] sm:text-[30px] leading-[1.2] font-medium">
            {title[0]}
            <br />
            {title[1] ?? ""}
          </h3>
          <ul className="mt-[32px] space-y-3 px6 py-2 ">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text[15px] text-[#FFFFFFCC]"
              >
                <span className="mt-[0px] font-['Graphikthin'] inline-block h-[12px] w-[12px] rounded-full">
                  {" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.54961 17.9996L3.84961 12.2996L5.27461 10.8746L9.54961 15.1496L18.7246 5.97461L20.1496 7.39961L9.54961 17.9996Z"
                      fill="#30E29D"
                    />
                  </svg>
                  {/* <Image
                    alt="book-reading--book-reading-learning"
                    src="/Vector (6).svg"
                    width={12}
                    height={10}
                  /> */}
                </span>
                <span className="leading-[1.5] text-[20px] font-['Graphikthin']">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-[18px] pb-[20px]">
          <Link href={link}>
            <button className="mt-6 font-['Graphikmid']  w-full rounded-[10px] border hover:bg-[#30E29D] hover:text-[#292929] border-[#30E29D] px-4 py-[13px] text-[16px] text-[#30E29D] transition-colors hovertext-white">
              {cta}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =================== Placeholder artwork blocks =================== */
/* Replace with real images; these reproduce the color vibes from screenshot */

function ArtPurple() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          "radial-gradient(70% 70% at 30% 30%, #6F45FF 0%, rgba(111,69,255,0) 60%), radial-gradient(80% 80% at 70% 70%, #0AB3A5 0%, rgba(10,179,165,0) 65%), #1C2550",
      }}
    />
  );
}

function ArtViolet() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          "radial-gradient(70% 70% at 35% 35%, #FFB100 0%, rgba(255,177,0,0) 60%), #4E2B6E",
      }}
    />
  );
}

function ArtBlue() {
  return (
    <div
      className="h-full w-full"
      style={{
        background:
          "radial-gradient(70% 70% at 55% 35%, #7CC3FF 0%, rgba(124,195,255,0) 60%), #2B2D74",
      }}
    />
  );
}
