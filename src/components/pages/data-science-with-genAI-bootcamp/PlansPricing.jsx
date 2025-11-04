// app/components/PlansPricing.jsx  (Next.js 13+)
// or components/PlansPricing.jsx for pages router
import React from "react";

const plans = [
  {
    title: "Data Science with GenAI (Most Popular)",
    features: [
      "Industry-standard curriculum",
      "1:1 mentorship, dedicated manager",
      "AI-powered projects",
      "unlimited live doubt support",
      "Dedicated manager",
      "live webinars",
      "personalized placement assistance",
      "cancel anytime in first 14 days (full refund)",
    ],
    price: "₹54,999",
    mrp: "₹85,000",
    cta: "Enroll Now",
  },
  {
    title: "Spring Boot",
    features: [
      "Industry-standard curriculum",
      "AI-powered projects",
      "1:1 mentorship, dedicated manager",
      "unlimited live doubt support",
      "live webinars",
      "personalized placement assistance",
      "cancel anytime in first 14 days (full refund)",
      "backend with Java/Spring Boot",
    ],
    price: "₹44,999",
    mrp: "₹75,000",
    cta: "Enroll Now",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 text-emerald-400 shrink-0"
    >
      <path
        fill="currentColor"
        d="M9.55 17.05 4.9 12.4l1.4-1.4 3.25 3.25 7.25-7.25 1.4 1.4-8.65 8.65z"
      />
    </svg>
  );
}

export default function PlansPricing() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* radial dark gradient background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <h2 className="text-4xl text-center sm:text-5xl md:text-[64px] font-['Graphikthin'] tracking-tight font-normal text-white/95">
          Plans <span className="font-['system-ui'] font-[100]">& </span>pricing
        </h2>

        {/* cards container */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl border max-w-[413px] mx-auto border-white/10 bg-neutral-900/70 backdrop-blur-md shadow-2xl ring-1 ring-white/5"
            >
              {/* inner stroke like the screenshot */}
              <div className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-[32px] font-['Graphikthin'] text-[#E5E5E5]">
                    {p.title}
                  </h3>

                  <ul className="mt-6 space-y-4 ">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
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

                        <span className="text-[#FFFFFFCC] text-[20px] leading-relaxed">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* pricing + CTA */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-semibold text-white/95">
                      {p.price}
                    </span>
                    <span className="text-neutral-500 line-through decoration-2">
                      {p.mrp}
                    </span>
                  </div>

                  <button
                    className="rounded-full border border-emerald-500/60 px-5 py-2.5 text-emerald-400 text-sm hover:bg-emerald-500/10 transition shadow-[0_0_0_1px_rgba(16,185,129,0.25)]"
                    type="button"
                  >
                    {p.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
