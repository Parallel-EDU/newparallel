// app/components/TrainingModes.jsx
"use client";

export default function TrainingModes() {
  return (
    <section className="relative overflow-hidden">
      {/* Canvas background */}
      <BackgroundGrid />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 pt-16 sm:pt-20 pb-14 sm:pb-20">
        {/* Heading */}
        <h1 className="text-white/95 font-medium tracking-[-0.02em] leading-[1.05] text-[38px] sm:text-[54px] md:text-[64px]">
          Training that fits your life -<br className="hidden md:block" />
          and delivers real results
        </h1>

        <p className="mt-5 text-[16px] sm:text-[17px] text-[#B7C4D1] max-w-[760px]">
          Parallel offers flexible learning modes for students, freshers, and
          working professionals.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <ModeCard
            icon={<BoardIcon />}
            title={["On-Premise Classroom", "Training"]}
            bullets={[
              "Hands-on sessions with expert mentors",
              "Small batch sizes for personalized guidance",
              "Peer collaboration & live project work",
            ]}
          />
          <ModeCard
            icon={<ScreenIcon />}
            title={["Instructor-Led, Live", "Online Training"]}
            bullets={[
              "Real-time classes by industry professionals",
              "Group projects & instant feedback",
              "Full placement support",
            ]}
          />
          <ModeCard
            icon={<ClockUserIcon />}
            title={["Self-Paced Online", "Training"]}
            bullets={[
              "Structured pre-recorded content",
              "Mentor check-ins for progress",
              "Flexible for independent learners",
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className="group rounded-[10px] border border-[#22E19D] px-6 py-3 text-[15px] text-[#CFE9DE] transition-colors hover:text-white"
            style={{
              boxShadow:
                "0 0 0 1px rgba(34,225,157,0.15) inset, 0 0 25px rgba(34,225,157,0.15)",
            }}
          >
            <span className="relative">
              Join The Next Cohort
              <span
                className="absolute -inset-1 rounded-md opacity-0 blur-[6px] transition-opacity group-hover:opacity-30"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, rgba(34,225,157,0.35) 0%, rgba(34,225,157,0) 70%)",
                }}
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* =================== Subcomponents =================== */

function ModeCard({ icon, title, bullets }) {
  return (
    <div className="relative rounded-[14px] p-[1px]">
      {/* Neon border */}
      <div
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
      />
      {/* Card body with glass + vignette */}
      <div
        className="relative rounded-[14px] h-full bg-[#0A0F16]/70 backdrop-blur-[2px] px-6 py-7"
        style={{
          background:
            "radial-gradient(120% 100% at 0% 100%, rgba(22,179,114,0.08) 0%, rgba(22,179,114,0) 55%), radial-gradient(110% 100% at 100% 0%, rgba(30,40,140,0.10) 0%, rgba(30,40,140,0) 60%), rgba(8,12,18,0.7)",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Icon */}
        <div className="mb-6 inline-flex h-[64px] w-[64px] items-center justify-center rounded-[10px] border border-white/15 text-white/80">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-white/95 text-[26px] sm:text-[28px] leading-[1.15] font-medium">
          {title[0]}
          <br />
          {title[1]}
        </h3>

        {/* Bullets */}
        <ul className="mt-5 space-y-3">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] text-[#C7D5E2]"
            >
              <span
                className="mt-[5px] inline-block h-[12px] w-[12px] rounded-full"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, #30E29D 0%, rgba(48,226,157,0.25) 100%)",
                  boxShadow: "0 0 10px rgba(48,226,157,0.45)",
                }}
              />
              <span className="leading-[1.5]">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =================== Icons =================== */

function BoardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-90">
      <path
        d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-5v3h-2v-3H5a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.3"
      />
      <path d="M4 9h16" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ScreenIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-90">
      <rect
        x="3"
        y="5"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.3"
      />
      <path d="M8 19h8" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function ClockUserIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="opacity-90">
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.3"
      />
      <path
        d="M4 20a8 8 0 0 1 16 0"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.3"
      />
    </svg>
  );
}

/* =================== Background (top-right + bottom-left) =================== */

function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Solid dark base */}
      <div className="absolute inset-0 bg-[#070A10]" />

      {/* Global diagonal wash to match brand gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(156.63deg, #201DA7 8.68%, #30E29D 84.91%)",
          opacity: 0.12,
          mixBlendMode: "screen",
        }}
      />

      {/* Bottom-left green glow */}
      <div
        className="absolute -left-24 bottom-[-120px] h-[420px] w-[520px] rounded-full blur-[90px] opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 40% 60%, rgba(48,226,157,0.35) 0%, rgba(48,226,157,0) 70%)",
        }}
      />

      {/* Top-right blue glow */}
      <div
        className="absolute -top-20 -right-28 h-[520px] w-[520px] rounded-full blur-[110px] opacity-70"
        style={{
          background:
            "radial-gradient(55% 55% at 60% 40%, rgba(32,29,167,0.55) 0%, rgba(32,29,167,0) 70%)",
        }}
      />

      {/* Crosshair lines (TR) */}
      <div className="absolute right-6 sm:right-16 top-6 sm:top-10 h-[520px] w-[520px] opacity-[0.35]">
        <Crosshair />
      </div>

      {/* Soft vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 75%), radial-gradient(100% 100% at 0% 100%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 75%)",
        }}
      />
    </div>
  );
}

function Crosshair() {
  return (
    <svg viewBox="0 0 600 600" className="w-full h-full">
      <defs>
        <linearGradient id="gh" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
        </linearGradient>
      </defs>
      {/* vertical */}
      <line
        x1="300"
        y1="0"
        x2="300"
        y2="600"
        stroke="url(#gh)"
        strokeWidth="1"
      />
      {/* horizontal */}
      <line
        x1="0"
        y1="300"
        x2="600"
        y2="300"
        stroke="url(#gh)"
        strokeWidth="1"
      />
      {/* outer soft ring */}
      <circle
        cx="300"
        cy="300"
        r="220"
        fill="none"
        stroke="url(#gh)"
        strokeWidth="1"
      />
      <circle
        cx="300"
        cy="300"
        r="120"
        fill="none"
        stroke="url(#gh)"
        strokeWidth="1"
      />
    </svg>
  );
}
