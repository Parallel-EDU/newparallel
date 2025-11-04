// app/components/Testimonials.jsx  (Next.js 13+)
// or components/Testimonials.jsx for pages router
import React from "react";

const people = [
  { name: "Aryan Arjun Kedar", role: "Data Analyst", img: "/avatars/1.png" },
  {
    name: "Meenal Botadkar",
    role: "Data Operations Analyst",
    img: "/avatars/2.png",
  },
  { name: "Sanket Tiwade", role: "AWS Consultant", img: "/avatars/3.png" },
  {
    name: "Palash A Ranvir",
    role: "MERN Stack Developer",
    img: "/avatars/4.png",
  },
  { name: "Vivek Talwekar", role: "Python Developer", img: "/avatars/5.png" },
  {
    name: "Vikrant Shivkumar Pali",
    role: "Python Developer",
    img: "/avatars/6.png",
  },
  { name: "Sarthaki Chikhale", role: "Java Engineer", img: "/avatars/7.png" },
  {
    name: "Nikhil Jawalkar",
    role: "Frontend Developer",
    img: "/avatars/8.png",
  },
  {
    name: "Rushabh Ramkrushna Bandewar",
    role: "AWS Consultant",
    img: "/avatars/9.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* subtle grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Left block: heading + copy + CTA */}
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white/95">
            Real Stories. Real Transformations. Real Results.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-300">
            Behind every testimonial is a journey of persistence, mentorship,
            and growth - proof that the right guidance can change everything.
          </p>
          <button className="mt-6 rounded-full border border-emerald-500/60 px-5 py-2.5 text-emerald-400 text-sm hover:bg-emerald-500/10 transition">
            Enroll Now
          </button>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, i) => (
            <article
              key={i}
              className="rounded-xl border border-white/10 bg-neutral-900/70 p-5 sm:p-6 backdrop-blur-lg ring-1 ring-white/5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-white/10"
                />
                <div>
                  <h3 className="text-base font-medium text-white/90">
                    {p.name}
                  </h3>
                  <p className="text-xs text-neutral-400">{p.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
