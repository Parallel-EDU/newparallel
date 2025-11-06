// app/components/HiringPartners.jsx
"use client";

import Link from "next/link";

export default function HiringPartners() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 max-lg:pt-20">
      {/* Background radial glow at bottom */}
      {/* <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(175% 80% at 50% 85%, rgba(36,246,187,0.24) 0%, rgba(36,246,187,0.02) 70%, rgba(11,16,23,0.7) 100%)",
          opacity: 0.74,
        }}
      /> */}

      <div className="relative mx-auto max-w-[1280px] px-4 max-xl:p-10 max-md:p-4 smpx-8">
        {/* Breadcrumb */}
        <span
          style={{
            background:
              "linear-gradient(90deg,  #30E29D   0%, #201DA7 147.01%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          className="text-[16px]  opacity-[.8] mb-2"
        >
          Our hiring partners
        </span>

        {/* Heading */}
        <h1 className="text-[#E5E5E5] font-['Graphikthin'] max-sm:text-[32px] mt-6  tracking-[-0.018em] leading-[1.04] text-[64px]  mb-2">
          Our graduates don’t just learn
          <br className="max-lg:hidden" />- they get hired.
        </h1>

        {/* Subhead */}
        <p className="mt-7 mt-6 mb-[56px] text-[16px] text-[#B7C4D1] font-['Graphikthin'] max-w-[800px]">
          From India’s leading startups to global tech giants, Parallel alumni
          are building real careers and contributing from day one. Over 1800+
          students placed and counting.
        </p>

        {/* Logos grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4  mb-6"> */}
        {/* {logos.map((item, i) => (
            <LogoCard key={item.name + i} {...item} />
          ))} */}

        <img
          src="/logos/Frame 1000003078.svg"
          // alt={name}
          className=" w-[100%] objectcontain  mxauto"
          // title={name}
          loading="lazy"
          style={{ filter: "brightness(98%)" }}
        />
        {/* </div> */}

        {/* CTA */}
        <div className="flex justify-center pt-7 mt-[56px]">
          <Link href={"/hire-from-us"}>
            <button className="group font-['Graphikmid'] rounded-[8px] hover:bg-[#30E29D] hover:text-[#292929] border border-[#30E29D] px-7 py-[12px] text-[15px] text-[#30E29D] transition-colors hover:bg-[#22e19d10] hoveext-white">
              Hire From Parallel
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==== Grid item ==== */
function LogoCard({ name, src }) {
  return (
    <div className="flex items-center justify-center rounded-[8px] bg-[#141b2200] w-[196px] h-[82px] border border-white/20 hover:border-[#22e19d33] transition-all shadow-[0_0_7px_rgba(21,38,36,0.12)] px-2">
      <img
        src={src}
        alt={name}
        className="max-h-[32px] w-auto object-contain max-w-[106px] mx-auto"
        title={name}
        loading="lazy"
        style={{ filter: "brightness(98%)" }}
      />
    </div>
  );
}

/* ==== Logos definition — Replace with actual SVG source ==== */
const logos = [
  // 1st row
  {
    name: "Amazon",
    src: "/logos/Mask group (1).svg",
  },
  {
    name: "Verizon",
    src: "/logos/Mask group (1) copy.svg",
  },
  { name: "Atos", src: "/logos/Mask group (1) copy 2.svg" },
  {
    name: "Swiggy",
    src: "/logos/Mask group (2).svg",
  },
  {
    name: "PhonePe",
    src: "/logos/23.svg",
  },
  { name: "Razorpay", src: "/logos/Mask group (1) copy 3.svg" },
  // 2nd row
  {
    name: "Meesho",
    src: "/logos/Mask group (1).svg",
  },
  {
    name: "Zepto",
    src: "/logos/Mask group (1).svg",
  },
  { name: "Groww", src: "/logos/Mask group (1).svg" },
  {
    name: "PharmEasy",
    src: "/logos/Mask group (1).svg",
  },
  {
    name: "Digit",
    src: "/logos/Mask group (1).svg",
  },
  {
    name: "Urban Company",
    src: "/logos/Mask group (1).svg",
  },
  // 3rd row
  {
    name: "Delhivery",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Delhivery_Logo.png",
  },
  { name: "Fractal", src: "https://fractal.ai/favicon.ico" },
  {
    name: "Chargebee",
    src: "https://cdn.worldvectorlogo.com/logos/chargebee.svg",
  },
  {
    name: "Optum",
    src: "https://cdn.worldvectorlogo.com/logos/optum-logo.svg",
  },
  {
    name: "Asian Paints",
    src: "https://cdn.worldvectorlogo.com/logos/asian-paints-1.svg",
  },
  {
    name: "Lupin",
    src: "https://lupin.com/wp-content/themes/lupin/img/logo.png",
  },
  // 4th row
  { name: "Paytm", src: "https://cdn.worldvectorlogo.com/logos/paytm-1.svg" },
  {
    name: "Arya.ai",
    src: "https://arya.ai/wp-content/uploads/2021/06/arya.png",
  },
  {
    name: "Bira",
    src: "https://www.bira91.com/static/media/BiraLogo.9eca1ed7.svg",
  },
  { name: "Slice", src: "https://cdn.worldvectorlogo.com/logos/slice-app.svg" },
  { name: "Khatabook", src: "https://khatabook.com/logo192.png" },
  {
    name: "Licious",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Licious_logo.png",
  },
  // 5th row
  {
    name: "Larsen & Toubro",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Larsen_and_Toubro_logo.svg",
  },
  {
    name: "Tata 1mg",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/25/1mg_Logo.png",
  },
  {
    name: "Mitsubishi Electric",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Mitsubishi_Electric_logo.svg",
  },
  {
    name: "Shiprocket",
    src: "https://www.shiprocket.in/wp-content/themes/shiprocket/images/logo/logo_dark.svg",
  },
  {
    name: "Upstox",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/67/Upstox_logo.svg",
  },
  {
    name: "cult.fit",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Cult.fit_logo.svg",
  },
];
