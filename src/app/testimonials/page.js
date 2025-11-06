// app/components/Testimonials.jsx  (Next.js 13+)
// or components/Testimonials.jsx for pages router
"use client";
import HeroSection from "@/components/pages/testimonials/HeroSection";
import Link from "next/link";
import React from "react";
import { useModal } from "@/app/context/ModalContext";

// const people = [
//   {
//     name: "Aryan Arjun Kedar",
//     role: "Data Analyst",
//     img: "/testimonials/Frame 1000002775.png",
//     desc: "The internship program helped me apply analytics in real projects. That hands-on exposure made interview questions feel easy!",
//   },
//   {
//     name: "Meenal Botadkar",
//     role: " Data Operations Analyst",
//     img: "/testimonials/Frame 1000002776.png",
//     desc: "The trainers actually care about your growth. Their one-on-one feedback during my internship boosted both my skills and confidence.",
//   },
//   {
//     name: "Sanket Tiwade",
//     role: "AWS Consultant",
//     img: "/testimonials/Frame 1000002776 (1).png",
//     desc: "The AWS internship tasks were challenging but practical. They trained us exactly like the industry does. I was job-ready from day one.",
//   },
//   {
//     name: "Palash A Ranvir ",
//     role: "MERN Stack Developer",
//     img: "/testimonials/Frame 1000002776 (2).png",
//     desc: "",
//   },

//   {
//     name: "Vivek Talwekar",
//     role: "Python Developer",
//     img: "/testimonials/Frame 1000002776 (4).png",
//   },
//   {
//     name: "Vikrant Shivkumar Pali",
//     role: "Python Developer",
//     img: "/testimonials/Frame 1000002776 (5).png",
//   },
//   {
//     name: "Sarthaki Chikhale",
//     role: "Java Engineer",
//     img: "/testimonials/Frame 1000002777.png",
//   },
//   {
//     name: "Nikhil Jawalkar ",
//     role: "Frontend Developer",
//     img: "/testimonials/Frame 1000002776 (6).png",
//   },
//   {
//     name: "Rushabh Ramkrushna Bandewar",
//     role: "AWS Consultant",
//     img: "/testimonials/Frame 1000002777 copy.png",
//   },

//   {
//     name: "Shubham Ghode",
//     role: " Backend Developer",
//     img: "/testimonials/Frame 1000002777 (1).png",
//   },

//   {
//     name: "Amruta Milind Paithankar",
//     role: "Power BI Consultant",
//     img: "/testimonials/Frame 1000002777 (2).png",
//   },
//   {
//     name: "Vanashree Lonare  ",
//     role: "AWS Consultant",
//     img: "/testimonials/Frame 1000002777 (3).png",
//   },
//   {
//     name: "Mahendra Ambule",
//     role: "AWS Consultant",
//     img: "/testimonials/Frame 1000002777 (4).png",
//   },
//   {
//     name: "Nikhita Mate",
//     role: "Data Operations Analyst",
//     img: "/testimonials/Frame 1000002777 (5).png",
//   },
//   {
//     name: "Dharmik Bhuva",
//     role: "Data Analyst",
//     img: "/testimonials/Frame 1000002778.png",
//   },
//   {
//     name: "Shubham P Urkude ",
//     role: "Frontend Developer",
//     img: "/testimonials/Frame 1000002778 (1).png",
//   },
//   {
//     name: "Nayan Kundan Gour ",
//     role: "Java Developer",
//     img: "/testimonials/Frame 1000002779.png",
//   },
//   {
//     name: "Monali Sah ",
//     role: "Data Analyst",
//     img: "/testimonials/Frame 1000002779 (1).png",
//   },
//   {
//     name: "Saurav Tiwari",
//     role: "SQL Developer",
//     img: "/testimonials/Frame 1000002779 copy.png",
//   },
//   {
//     name: "Aryan Shende ",
//     role: "Data Analyst",
//     img: "/testimonials/Frame 1000002779 (2).png",
//   },
//   {
//     name: "Prachee Rahim Meshram ",
//     role: "Data Operations Analyst",
//     img: "/testimonials/Frame 1000002779 (3).png",
//   },
//   {
//     name: "Shwet Pardhi ",
//     role: "Data Operations Analyst",
//     img: "/testimonials/Frame 1000002779 copy 2.png",
//   },
//   {
//     name: "Shruti Niranjan Dhole ",
//     role: "Data Analyst",
//     img: "/testimonials/Frame 1000002779 (4).png",
//   },
//   {
//     name: "Rupesh Babanrao Deotale ",
//     role: "AWS Consultant",
//     img: "/testimonials/Frame 1000002779 (5).png",
//   },
// ];

const people = [
  {
    name: "Aryan Arjun Kedar",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002775.png",
    desc: "The internship program helped me apply analytics in real projects. That hands-on exposure made interview questions feel easy!",
  },
  {
    name: "Meenal Botadkar",
    role: " Data Operations Analyst",
    img: "/testimonials/Frame 1000002776.png",
    desc: "The trainers actually care about your growth. Their one-on-one feedback during my internship boosted both my skills and confidence.",
  },
  {
    name: "Sanket Tiwade",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002776 (1).png",
    desc: "The AWS internship tasks were challenging but practical. They trained us exactly like the industry does. I was job-ready from day one.",
  },
  {
    name: "Palash A Ranvir ",
    role: "MERN Stack Developer",
    img: "/testimonials/Frame 1000002776 (2).png",
    desc: "The projects and DSA sessions together built my logic and coding confidence. I cracked my first tech interview right after the course!",
  },
  {
    name: "Vivek Talwekar",
    role: "Python Developer",
    img: "/testimonials/Frame 1000002776 (4).png",
    desc: "The trainers were so approachable, they explained every concept till we got it. Their interview prep sessions were pure gold.",
  },
  {
    name: "Vikrant Shivkumar Pali",
    role: "Python Developer",
    img: "/testimonials/Frame 1000002776 (5).png",
    desc: "ParallelEdu’s DSA training helped me finally understand problem-solving. My interview performance improved drastically after that.",
  },
  {
    name: "Sarthaki Chikhale",
    role: "Java Engineer",
    img: "/testimonials/Frame 1000002777.png",
    desc: "The Java mentors went deep into DSA and real interview patterns. It made my placement process smoother and stress-free.",
  },
  {
    name: "Nikhil Jawalkar ",
    role: "Frontend Developer",
    img: "/testimonials/Frame 1000002776 (6).png",
    desc: "The coding challenges and mock interviews built my confidence. I actually enjoyed preparing for placements for the first time!",
  },
  {
    name: "Rushabh Ramkrushna Bandewar",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002777 copy.png",
    desc: "The AWS trainers explained complex cloud setups with real use cases. I even got to intern on live deployment projects!",
  },
  {
    name: "Shubham Ghode",
    role: " Backend Developer",
    img: "/testimonials/Frame 1000002777 (1).png",
    desc: "The backend course had both DSA and system design. The interview prep sessions made me confident to talk about my code.",
  },
  {
    name: "Amruta Milind Paithankar",
    role: "Power BI Consultant",
    img: "/testimonials/Frame 1000002777 (2).png",
    desc: "The placement support was amazing, they helped me fine-tune my resume and practice case-based Power BI interview questions.",
  },
  {
    name: "Vanashree Lonare  ",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002777 (3).png",
    desc: "I really liked how the trainers explained every AWS service with a real example. The internship turned all that theory into skill.",
  },
  {
    name: "Mahendra Ambule",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002777 (4).png",
    desc: "The best part was the placement team, they guided me step-by-step for interviews and even mock-tested my AWS answers.",
  },
  {
    name: "Nikhita Mate",
    role: "Data Operations Analyst",
    img: "/testimonials/Frame 1000002777 (5).png",
    desc: "The mentorship during my internship was so personal and helpful. It made me confident enough to take ownership of data workflows.",
  },
  {
    name: "Dharmik Bhuva",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002778.png",
    desc: "The DSA and SQL practice sessions were super helpful for cracking analytics interviews. I feel technically stronger than ever.",
  },
  {
    name: "Shubham P Urkude ",
    role: "Frontend Developer",
    img: "/testimonials/Frame 1000002778 (1).png",
    desc: "The trainers made us build everything from scratch, no shortcuts! That’s what helped me during my internship and later job interviews.",
  },
  {
    name: "Nayan Kundan Gour ",
    role: "Java Developer",
    img: "/testimonials/Frame 1000002779.png",
    desc: "The DSA bootcamp was the game-changer. It gave me the edge in coding rounds and made problem-solving fun again.",
  },
  {
    name: "Monali Sah ",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002779 (1).png",
    desc: "The mock interviews and resume reviews were incredibly helpful. I walked into my first interview feeling calm and prepared.",
  },
  {
    name: "Saurav Tiwari",
    role: "SQL Developer",
    img: "/testimonials/Frame 1000002779 copy.png",
    desc: "The real database projects we did during the internship gave me so much confidence. I now understand how SQL works in live systems.",
  },
  {
    name: "Aryan Shende ",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002779 (2).png",
    desc: "The trainers simplified every data concept with patience. Plus, the interview prep sessions helped me answer confidently under pressure.",
  },
  {
    name: "Prachee Rahim Meshram ",
    role: "Data Operations Analyst",
    img: "/testimonials/Frame 1000002779 (3).png",
    desc: "The community here is everything! I always had someone to guide me - mentors, peers, placement coordinators, everyone.",
  },
  {
    name: "Shwet Pardhi ",
    role: "Data Operations Analyst",
    img: "/testimonials/Frame 1000002779 copy 2.png",
    desc: "The trainers were genuinely invested in our success. Their feedback during internship reviews helped me fix my weak points.",
  },
  {
    name: "Shruti Niranjan Dhole ",
    role: "Data Analyst",
    img: "/testimonials/Frame 1000002779 (4).png",
    desc: "The internship was my turning point - real projects, weekly mentor calls, and DSA support made me feel truly industry-ready.",
  },
  {
    name: "Rupesh Babanrao Deotale ",
    role: "AWS Consultant",
    img: "/testimonials/Frame 1000002779 (5).png",
    desc: "I can now handle AWS deployments confidently thanks to the internship exposure. The placement prep team helped me secure my role fast!",
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
                {p.desc}
              </p>
            </article>
          ))}
        </div>

        <HeroSection />
      </div>
    </section>
  );
}
