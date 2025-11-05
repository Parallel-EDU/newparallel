// app/components/PlansPricing.jsx  (Next.js 13+)
// or components/PlansPricing.jsx for pages router
import Link from "next/link";
import React from "react";

const plans = [
  {
    title: "DevOps & Cloud Bootcamp",
    features: [
      "End-to-end DevOps + Cloud curriculum",
      "live mentorship",
      "1:1 mentorship, dedicated manager",
      "real deployment projects",
      "unlimited live doubt support",
      "dedicated manager",
      "live webinars",
      "personalized placement",
      "assistance",
      "cancel anytime within 14 days for full refund",
    ],
    price: "₹54,999 ",
    mrp: "₹85,000",
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
    <section className="relative w-full overflow-hidden price-bg z-[999] relaive">
      {/* radial dark gradient background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20 z-[999] relative">
        <h2 className="text-4xl text-center z-[999] sm:text-5xl md:text-[64px] font-['Graphikthin'] tracking-tight font-normal text-white/95">
          Plans <span className="font-['system-ui'] font-[100]">& </span>{" "}
          pricing
        </h2>

        {/* cards container */}
        <div className="mt-[75px] grid grid-cols-1 gap-6 lg:grid-cols-1">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl border max-w-[413px] mx-auto border-white/10 bg-neutral-900/70 backdrop-blur-md shadow-2xl ring-1 ring-white/5"
            >
              {/* inner stroke like the screenshot */}
              <div className="rounded-2xl py-[24px] px-[18px] flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-[20px] sm:text-[32px] leading-snug font-['Graphikthin'] text-[#E5E5E5]">
                    {p.title}
                  </h3>

                  <ul className="mt-[32px] space-y-4 ">
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

                <div className="mt[72px]">
                  {/* pricing + CTA */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl sm:text-[28px] font-semibold text-[#FFFFFFCC]">
                        {p.price}
                      </span>
                      <span className="text-neutral-500 line-through decoration-2">
                        {p.mrp}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/signup"
                    className="rounded-lg w-full block text-center font-['Graphikmid'] border mt-10 border-emerald-500/60 px-5 py-4 text-[#30E29D]  text-[16px]  transition hover:bg-[#30E29D] hover:text-[#292929] border-[#30E29D]"
                    type="button"
                  >
                    {p.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
