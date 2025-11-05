"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  {
    id: 1,
    number: (
      <svg
        width="41"
        height="73"
        viewBox="0 0 41 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.1504 0.5V72.0596H19.3516V23.6162H0.5V9.24121H3.63281C7.44992 9.24121 10.7917 8.84702 13.6475 7.59766C16.4874 6.35519 18.8822 4.25095 20.7812 0.760742L20.9229 0.5H40.1504Z"
          stroke="url(#paint0_linear_2882_9095)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2882_9095"
            x1="20.3333"
            y1="-23"
            x2="20.3333"
            y2="71.6667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#95FF93" stop-opacity="0.77" />
            <stop offset="1" stop-color="#999999" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Data Science Foundations",
    side: "left",
    items: [
      "Learn Python, SQL, and data analysis to build your base.",
      "Work hands-on with Pandas, NumPy, and real datasets.",
    ],
  },
  {
    id: 2,
    number: (
      <svg
        width="68"
        height="73"
        viewBox="0 0 68 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.3457 0.5C46.4074 0.5 54.2221 2.92473 59.2764 7.2207C64.3448 11.5289 66.5605 17.6527 66.5605 24.8662C66.5605 31.529 64.3327 36.4625 60.4902 40.1182C56.6654 43.7571 51.2782 46.094 45.0137 47.6602L45.0127 47.6611L29.4482 51.499C27.1359 52.0771 25.2705 52.5289 23.9678 53.2539C23.3293 53.6093 22.8559 54.0157 22.54 54.5088C22.3054 54.8751 22.1451 55.3093 22.0791 55.8408L40.9922 53.5273L41.0225 53.5234H66.3525V72.0596H0.5V59.3154C0.500052 53.3179 1.8975 48.6973 5.24609 44.9736C8.57736 41.2693 13.7888 38.5112 21.2891 36.1152H21.29L40.1748 30.0967C42.3988 29.3724 43.8623 28.6985 44.7744 27.8574C45.6496 27.0502 46.0527 26.0539 46.0527 24.5547C46.0527 23.6979 45.9692 22.97 45.7139 22.3486C45.4644 21.7416 45.0384 21.206 44.2949 20.7529C42.7647 19.8205 39.9094 19.2442 34.6201 19.2441C28.8174 19.2441 25.4078 19.9759 23.4463 21.3926C21.5405 22.769 20.9043 24.8721 20.9043 27.9785V29.8281H0.811523V27.7715C0.811523 20.6518 3.2402 13.815 8.80957 8.7627C14.3753 3.71381 23.018 0.500072 35.3457 0.5Z"
          stroke="url(#paint0_linear_2882_9076)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2882_9076"
            x1="33.5302"
            y1="1"
            x2="33.6667"
            y2="87.6667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFD707" stop-opacity="0.77" />
            <stop offset="1" stop-color="#999999" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Statistics & EDA",
    side: "right",
    items: [
      "Understand data deeply through visualization and storytelling.Use Tableau and Power BI to extract insights that matter.",
    ],
  },
  {
    id: 3,
    number: (
      <svg
        width="80"
        height="73"
        viewBox="0 0 80 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.0222 0.5C50.5698 0.5 58.0166 2.01176 63.0915 5.1377C68.2037 8.2867 70.8718 13.0526 70.8718 19.4072C70.8717 23.4995 69.6356 26.9055 67.1892 29.4189C64.8261 31.8466 61.3798 33.3893 56.9636 33.958V34.4053C61.94 35.0101 66.1858 36.504 69.2185 39.1641C72.3583 41.9181 74.1442 45.8722 74.1443 51.21C74.1443 58.1435 70.9757 63.3899 65.1306 66.876C59.3184 70.3424 50.8797 72.0596 40.3064 72.0596C28.7029 72.0595 20.0883 69.8801 14.365 65.5811C8.61467 61.2618 5.85618 54.8601 5.85617 46.6084V44.4727H27.3083V46.8125C27.3083 48.1021 27.337 49.0697 27.5446 49.8281C27.7421 50.549 28.0985 51.0682 28.7859 51.4688C29.5057 51.8881 30.6132 52.1921 32.3425 52.3848C34.0635 52.5765 36.3483 52.6533 39.3864 52.6533C45.2308 52.6533 48.8254 52.3924 50.9558 51.6455C52.0034 51.2782 52.6468 50.8095 53.0378 50.2393C53.4302 49.6667 53.612 48.9281 53.612 47.9375C53.612 46.3526 53.1631 45.4171 52.2995 44.8379C51.3834 44.2234 49.9046 43.9385 47.6696 43.9385H26.82V27.1904H46.238C48.0923 27.1904 49.1982 26.8601 49.8415 26.3223C50.4609 25.8044 50.7487 25.008 50.7487 23.8037C50.7487 23.0256 50.6372 22.4454 50.3698 21.9902C50.1084 21.5453 49.6618 21.1588 48.8659 20.8428C47.2303 20.1933 44.3094 19.9072 39.1823 19.9072C36.5555 19.9072 34.4883 19.9834 32.864 20.1748C31.2348 20.3668 30.0881 20.6704 29.28 21.1006C28.4914 21.5204 28.0159 22.0659 27.7243 22.7871C27.4237 23.5309 27.3083 24.4885 27.3083 25.7471V26.5537H5.85617V25.9512C5.85629 18.195 8.75327 11.8009 14.6452 7.3623C20.5166 2.93928 29.3056 0.500058 41.0222 0.5Z"
          stroke="url(#paint0_linear_2882_9132)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2882_9132"
            x1="40"
            y1="1"
            x2="40"
            y2="86.3333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF41D5" stop-opacity="0.77" />
            <stop offset="1" stop-color="#999999" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Machine Learning & AI",
    side: "left",
    items: [
      "Train and deploy ML models with Scikit-Learn, TensorFlow, and Keras.",
      "Build predictive and classification models from scratch.",
    ],
  },
  {
    id: 4,
    number: (
      <svg
        width="77"
        height="74"
        viewBox="0 0 77 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M66.2366 0.629883V40.6484H75.7151V59.707H66.2366V72.4502H45.178V59.707H0.630127V45.4541L0.799072 45.2725L42.1868 0.830078L42.3743 0.629883H66.2366ZM29.4817 40.167V40.6484H45.178V24.5322H44.7043L29.4817 40.167Z"
          stroke="url(#paint0_linear_2882_9114)"
          stroke-width="1.26"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2882_9114"
            x1="38.1724"
            y1="1.25977"
            x2="38.1724"
            y2="89.2598"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#07E1FF" stop-opacity="0.77" />
            <stop offset="1" stop-color="#999999" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "GenAI Integration",
    side: "right",
    items: [
      "Use AI-driven tools to automate data pipelines and generate insights faster.",
      "Integrate LLMs and GenAI APIs in your projects.",
      "Write comprehensive tests and documentation",
      "Deploy and maintain your project in production",
    ],
  },
  {
    id: 5,
    number: (
      <svg
        width="60"
        height="76"
        viewBox="0 0 60 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M54.4159 0.333008V16.252H20.4442L20.0712 30.9521C21.4316 29.2751 23.2942 27.7623 25.6474 26.4092C28.4281 24.7424 32.1195 23.9238 36.6942 23.9238C43.4158 23.9238 48.8297 26.1218 52.9003 30.5352L53.2831 30.9482C57.1707 35.2729 59.0936 41.2944 59.0937 48.9668C59.0937 54.1719 57.8944 58.7426 55.4853 62.666L55.4833 62.668C53.0746 66.5218 49.636 69.5453 45.1796 71.7393H45.1776C40.783 73.8679 35.4769 74.9257 29.2714 74.9258C22.7977 74.9258 17.4203 73.8698 13.1571 71.7383L13.1513 71.7354C8.96704 69.5403 5.83189 66.6166 3.7626 62.9609L3.76163 62.958C1.70078 59.2484 0.569644 55.0958 0.364166 50.5068L0.348541 50.1592H19.9023L19.9413 50.4473C20.274 52.9092 21.069 54.8804 22.3085 56.3809C23.572 57.8288 25.7894 58.5986 29.0673 58.5986C31.9706 58.5986 34.0607 57.6472 35.4071 55.7881C36.7818 53.8897 37.4794 51.5213 37.4794 48.6621C37.4794 45.4658 36.6483 43.0135 35.0263 41.2617C33.411 39.5173 31.0698 38.623 27.9491 38.623C25.0713 38.623 22.6871 39.1255 20.7812 40.1113C18.9159 41.1111 17.3919 42.3064 16.203 43.6934L16.1034 43.8096H3.19913L3.21085 43.4639L4.73624 0.654297L4.74796 0.333008H54.4159Z"
          stroke="url(#paint0_linear_2882_9171)"
          stroke-width="0.666667"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2882_9171"
            x1="29.7286"
            y1="0.666016"
            x2="29.7286"
            y2="94.9993"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF1111" stop-opacity="0.77" />
            <stop offset="1" stop-color="#999999" stop-opacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Capstone Project & Internship",
    description: "Get job-ready with intensive interview coaching.",
    side: "left",
    items: [
      "Work on live projects with real datasets from top domains.",
      "Gain hands-on experience that hiring managers love.",
    ],
  },
  {
    id: 6,
    number: (
      <svg
        width="64"
        height="77"
        viewBox="0 0 64 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.3083 0.333008C41.5561 0.333048 48.077 2.13885 52.8317 5.79102H52.8307C57.6634 9.45068 60.4438 14.898 61.197 22.0869L61.235 22.4551H41.4724L41.4206 22.1846C41.0929 20.4807 40.3755 19.0859 39.2751 17.9854L39.2682 17.9775C38.2766 16.924 36.5597 16.3536 34.0202 16.3535C30.2021 16.3535 27.2556 17.957 25.1472 21.1855C23.1597 24.2288 21.9979 28.5227 21.6921 34.0977C23.2422 31.983 25.1592 30.2347 27.4411 28.8535L27.444 28.8506C30.1574 27.2504 33.7825 26.4658 38.2907 26.4658C42.7428 26.4658 46.8264 27.3566 50.5358 29.1426C54.2533 30.9325 57.2161 33.5855 59.4186 37.0957C61.6286 40.6178 62.7233 44.9543 62.7233 50.0859C62.7233 55.224 61.5236 59.76 59.1149 63.6826L59.114 63.6846C56.7045 67.5398 53.2308 70.5633 48.7067 72.7568L48.7048 72.7578C44.2434 74.8856 38.9038 75.9424 32.6979 75.9424C24.9291 75.9424 18.6557 74.4095 13.9069 71.3125C9.17028 68.2234 5.70436 63.9651 3.51044 58.5488L3.50848 58.5459C1.38901 53.1447 0.333679 46.9667 0.333679 40.0186V38.0869C0.333679 30.1164 1.76437 23.3161 4.6413 17.6992L4.64227 17.6963C7.58258 12.0892 11.521 7.80421 16.4597 4.85449L16.9304 4.57617C21.8154 1.74569 27.2775 0.333008 33.3083 0.333008ZM32.4948 40.1484C29.5934 40.1484 27.2792 41.1011 25.5192 42.9912C23.8199 44.8887 22.9645 47.246 22.9645 50.0859C22.9646 53.2044 23.8247 55.7299 25.5222 57.6914C27.2817 59.5795 29.5949 60.5312 32.4948 60.5312C35.3258 60.5312 37.5701 59.5806 39.2624 57.6934C40.9604 55.7994 41.821 53.341 41.821 50.2891C41.821 47.307 40.9617 44.8817 39.2624 42.9863L39.2585 42.9814C37.6369 41.1005 35.3965 40.1485 32.4948 40.1484Z"
          stroke="url(#paint0_linear_2882_9149)"
          stroke-width="0.666667"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2882_9149"
            x1="620.211"
            y1="145.57"
            x2="632.71"
            y2="48.0471"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFDB0D" stop-opacity="0" />
            <stop offset="1" stop-color="#FF8808" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Career Launch & Placement Support",

    side: "right",
    items: [
      "Optimize your portfolio, practice interview questions, and get placed.",
      "Receive personalized resume and portfolio reviews",
      "Get 1-on-1 mentoring from industry professionals",
      "Negotiate offers and launch your tech career",
    ],
  },
];
export default function CourseRoadmap() {
  const roadmapRef = useRef(null);
  const diamondRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: roadmapRef.current,
      start: "top center",
      end: "bottom center",
      onUpdate: (self) => {
        if (diamondRef.current) {
          gsap.to(diamondRef.current, {
            top: `${self.progress * 100}%`,
            duration: 0,
            overwrite: "auto",
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={roadmapRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <h2 className="leading-tight lg:text-[64px] font-['Graphikthin'] font-light tracking-tight mb-16 text-pretty">
        Your next 6-9 months fast-track roadmap to a data science career{" "}
      </h2>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center Diamond Icon Track */}
        <div
          className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 w-[1px] bg-[#FFFFFF1A] from-cyan-400 via-cyan-400/50 to-transparent"
          style={{
            height: "100%",
            pointerEvents: "none",
          }}
        />

        {/* Animated Diamond Icon */}
        <div
          ref={diamondRef}
          className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10"
          style={{
            top: "0%",
            pointerEvents: "none",
          }}
        >
          <div className="relative flex items-center justify-center">
            {/* Diamond shape */}
            <div
              className="w-6 h-6 bgcyan-400 transform rotate-0 shadowlg "
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C15.0232 6.15178 19.8482 10.9768 26 13C19.8482 15.0232 15.0232 19.8482 13 26C10.9768 19.8482 6.15178 15.0232 0 13C6.15178 10.9768 10.9768 6.15178 13 0Z"
                  fill="url(#paint0_radial_2883_9199)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_2883_9199"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(25.0588 7.21229 -12.5322 682.886 -4.21635 10.4971)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#41EA70" />
                    <stop offset="1" stop-color="#0E0BB4" stop-opacity="0.94" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            {/* Glow effect */}
            <div
              className="absolute w-8 h-8 bg-[#FFFFFF1A] rounded-full opacity-20 blur-lg"
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="space-y-8 lg:space-y-12">
          {roadmapSteps.map((step, idx) => (
            <div
              key={step.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
                step.side === "right" ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content Column */}
              <div className={step.side === "right" ? "lg:col-start-2" : ""}>
                <div className="bg- from-slate-800/50 to-slate-900/50 rounded-2xl p-6 sm:p-8 hover:border-slate-600 transition-all ">
                  {/* Step Number */}
                  <div className="text-5xl sm:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl sm:text-[24px] font-['Graphikthin'] font-light mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-300  font-['Graphikthin'] font-light text-[16px] opacity-80 sm:text-base mb-6">
                    {step.description}
                  </p>

                  {/* Step Items */}
                  <div className="space-y-3">
                    {step.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-3">
                        <div
                          className={`flex-shrink-0 mt-1 w-5 h-5 rounded-sm ${
                            idx % 2 === 0
                              ? "bggradient-to-br from-teal-400 to-cyan-400"
                              : "bggradient-to-br from-yellow-400 to-orange-400"
                          }`}
                        >
                          {idx === 0 && (
                            <svg
                              width="11"
                              height="12"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clip-path="url(#paint0_angular_2882_9101_clip_path)"
                                data-figma-skip-parse="true"
                              >
                                <g transform="matrix(0.009 0 -4.58078e-10 0.0075 4 6.00391)">
                                  <foreignObject
                                    x="-961.988"
                                    y="-961.988"
                                    width="1923.98"
                                    height="1923.98"
                                  >
                                    <div
                                      style={{
                                        background:
                                          "conic-gradient(from 90deg,rgba(48, 226, 157, 1) 0deg,rgba(26, 124, 86, 0.4) 360deg);height:100%;width:100%;opacity:0.8",
                                      }}
                                      xmlns="http://www.w3.org/1999/xhtml"
                                    ></div>
                                  </foreignObject>
                                </g>
                              </g>
                              <path
                                d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z"
                                data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.18823529779911041,&#34;g&#34;:0.88627451658248901,&#34;b&#34;:0.61568629741668701,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.10327954590320587,&#34;g&#34;:0.48627451062202454,&#34;b&#34;:0.33781018853187561,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.18823529779911041,&#34;g&#34;:0.88627451658248901,&#34;b&#34;:0.61568629741668701,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.10327954590320587,&#34;g&#34;:0.48627451062202454,&#34;b&#34;:0.33781018853187561,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:18.0,&#34;m01&#34;:-9.1615544306478114e-07,&#34;m02&#34;:-5.0000004768371582,&#34;m10&#34;:-6.2604136284727385e-12,&#34;m11&#34;:15.000000953674316,&#34;m12&#34;:-1.4960942268371582},&#34;opacity&#34;:0.80000001192092896,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                              />
                              <defs>
                                <clipPath id="paint0_angular_2882_9101_clip_path">
                                  <path d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}

                          {idx === 1 && (
                            <svg
                              width="11"
                              height="12"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clip-path="url(#paint0_angular_2882_9085_clip_path)"
                                data-figma-skip-parse="true"
                              >
                                <g transform="matrix(0.009 0 -4.58078e-10 0.0075 4 6.00391)">
                                  <foreignObject
                                    x="-961.988"
                                    y="-961.988"
                                    width="1923.98"
                                    height="1923.98"
                                  >
                                    <div
                                      xmlns="http://www.w3.org/1999/xhtml"
                                      style={{
                                        background:
                                          "conic-gradient(from 90deg,rgba(255, 224, 67, 1) 0deg,rgba(94, 78, 0, 1) 360deg);height:100%;width:100%;opacity:0.8",
                                      }}
                                    ></div>
                                  </foreignObject>
                                </g>
                              </g>
                              <path
                                d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z"
                                data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.87998497486114502,&#34;b&#34;:0.26442307233810425,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.3692307174205780,&#34;g&#34;:0.30898782610893250,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.87998497486114502,&#34;b&#34;:0.26442307233810425,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.3692307174205780,&#34;g&#34;:0.30898782610893250,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:18.0,&#34;m01&#34;:-9.1615544306478114e-07,&#34;m02&#34;:-5.0000004768371582,&#34;m10&#34;:-6.2604136284727385e-12,&#34;m11&#34;:15.000000953674316,&#34;m12&#34;:-1.4960942268371582},&#34;opacity&#34;:0.80000001192092896,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                              />
                              <defs>
                                <clipPath id="paint0_angular_2882_9085_clip_path">
                                  <path d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                          {idx === 2 && (
                            <svg
                              width="11"
                              height="12"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clip-path="url(#paint0_angular_2882_9139_clip_path)"
                                data-figma-skip-parse="true"
                              >
                                <g transform="matrix(0.009 0 -4.58078e-10 0.0075 4 6.00391)">
                                  <foreignObject
                                    x="-961.988"
                                    y="-961.988"
                                    width="1923.98"
                                    height="1923.98"
                                  >
                                    <div
                                      xmlns="http://www.w3.org/1999/xhtml"
                                      style={{
                                        background:
                                          "conic-gradient(from 90deg,rgba(195, 49, 163, 1) 0deg,rgba(195, 49, 163, 0.4) 360deg);height:100%;width:100%;opacity:0.8",
                                      }}
                                      // style="background:conic-gradient(from 90deg,rgba(195, 49, 163, 1) 0deg,rgba(195, 49, 163, 0.4) 360deg);height:100%;width:100%;opacity:0.8"
                                    ></div>
                                  </foreignObject>
                                </g>
                              </g>
                              <path
                                d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z"
                                data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.76470589637756348,&#34;g&#34;:0.19215686619281769,&#34;b&#34;:0.63921570777893066,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.76470589637756348,&#34;g&#34;:0.19215686619281769,&#34;b&#34;:0.63921570777893066,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.76470589637756348,&#34;g&#34;:0.19215686619281769,&#34;b&#34;:0.63921570777893066,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.76470589637756348,&#34;g&#34;:0.19215686619281769,&#34;b&#34;:0.63921570777893066,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:18.0,&#34;m01&#34;:-9.1615544306478114e-07,&#34;m02&#34;:-5.0000004768371582,&#34;m10&#34;:-6.2604136284727385e-12,&#34;m11&#34;:15.000000953674316,&#34;m12&#34;:-1.4960942268371582},&#34;opacity&#34;:0.80000001192092896,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                              />
                              <defs>
                                <clipPath id="paint0_angular_2882_9139_clip_path">
                                  <path d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                          {idx === 3 && (
                            <svg
                              width="11"
                              height="12"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clip-path="url(#paint0_angular_2882_9120_clip_path)"
                                data-figma-skip-parse="true"
                              >
                                <g transform="matrix(0.009 0 -4.58078e-10 0.0075 4 6.00391)">
                                  <foreignObject
                                    x="-961.988"
                                    y="-961.988"
                                    width="1923.98"
                                    height="1923.98"
                                  >
                                    <div
                                      xmlns="http://www.w3.org/1999/xhtml"
                                      style={{
                                        background:
                                          "conic-gradient(from 90deg,rgba(5, 173, 196, 1) 0deg,rgba(5, 173, 196, 0.4) 360deg);height:100%;width:100%;opacity:0.8",
                                      }}
                                    ></div>
                                  </foreignObject>
                                </g>
                              </g>
                              <path
                                d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z"
                                data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.019607843831181526,&#34;g&#34;:0.67843139171600342,&#34;b&#34;:0.76862746477127075,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.019607843831181526,&#34;g&#34;:0.67843139171600342,&#34;b&#34;:0.76862746477127075,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.019607843831181526,&#34;g&#34;:0.67843139171600342,&#34;b&#34;:0.76862746477127075,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.019607843831181526,&#34;g&#34;:0.67843139171600342,&#34;b&#34;:0.76862746477127075,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:18.0,&#34;m01&#34;:-9.1615544306478114e-07,&#34;m02&#34;:-5.0000004768371582,&#34;m10&#34;:-6.2604136284727385e-12,&#34;m11&#34;:15.000000953674316,&#34;m12&#34;:-1.4960942268371582},&#34;opacity&#34;:0.80000001192092896,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                              />
                              <defs>
                                <clipPath id="paint0_angular_2882_9120_clip_path">
                                  <path d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                          {idx === 4 && (
                            <svg
                              width="11"
                              height="12"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clip-path="url(#paint0_angular_2882_9177_clip_path)"
                                data-figma-skip-parse="true"
                              >
                                <g transform="matrix(0.009 0 -4.58078e-10 0.0075 4 6.00391)">
                                  <foreignObject
                                    x="-961.988"
                                    y="-961.988"
                                    width="1923.98"
                                    height="1923.98"
                                  >
                                    <div
                                      xmlns="http://www.w3.org/1999/xhtml"
                                      style={{
                                        background:
                                          "conic-gradient(from 90deg,rgba(255, 17, 17, 1) 0deg,rgba(255, 17, 17, 0.4) 360deg);height:100%;width:100%;opacity:0.8",
                                      }}
                                    ></div>
                                  </foreignObject>
                                </g>
                              </g>
                              <path
                                d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z"
                                data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.066666670143604279,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.066666670143604279,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.066666670143604279,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.066666670143604279,&#34;b&#34;:0.066666670143604279,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:18.0,&#34;m01&#34;:-9.1615544306478114e-07,&#34;m02&#34;:-5.0000004768371582,&#34;m10&#34;:-6.2604136284727385e-12,&#34;m11&#34;:15.000000953674316,&#34;m12&#34;:-1.4960942268371582},&#34;opacity&#34;:0.80000001192092896,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                              />
                              <defs>
                                <clipPath id="paint0_angular_2882_9177_clip_path">
                                  <path d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}

                          {idx === 5 && (
                            <svg
                              width="11"
                              height="12"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                clip-path="url(#paint0_angular_2882_9155_clip_path)"
                                data-figma-skip-parse="true"
                              >
                                <g transform="matrix(0.009 0 -4.58078e-10 0.0075 4 6.00391)">
                                  <foreignObject
                                    x="-961.988"
                                    y="-961.988"
                                    width="1923.98"
                                    height="1923.98"
                                  >
                                    <div
                                      xmlns="http://www.w3.org/1999/xhtml"
                                      style={{
                                        background:
                                          "conic-gradient(from 90deg,rgba(255, 136, 8, 1) 0deg,rgba(255, 136, 8, 0.4) 360deg);height:100%;width:100%;opacity:0.8",
                                      }}
                                    ></div>
                                  </foreignObject>
                                </g>
                              </g>
                              <path
                                d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z"
                                data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.53333336114883423,&#34;b&#34;:0.031372550874948502,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.53333336114883423,&#34;b&#34;:0.031372550874948502,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.53333336114883423,&#34;b&#34;:0.031372550874948502,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:0.53333336114883423,&#34;b&#34;:0.031372550874948502,&#34;a&#34;:0.40000000596046448},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:18.0,&#34;m01&#34;:-9.1615544306478114e-07,&#34;m02&#34;:-5.0000004768371582,&#34;m10&#34;:-6.2604136284727385e-12,&#34;m11&#34;:15.000000953674316,&#34;m12&#34;:-1.4960942268371582},&#34;opacity&#34;:0.80000001192092896,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                              />
                              <defs>
                                <clipPath id="paint0_angular_2882_9155_clip_path">
                                  <path d="M4.67261 6.00353C4.1868 5.38682 0 0 0 0C0 0 4.68781 0.00353158 5.28134 0.00353158C5.28134 0.00353158 9.28507 4.34072 10.5 6.00717L5.28134 12.0035H1.17507C0.992634 12.0033 0.00919151 12.017 0 12.0035C0 12.0035 3.10786 7.9891 4.67261 6.00353Z" />
                                </clipPath>
                              </defs>
                            </svg>
                          )}
                        </div>
                        <span className="text-gray-300 font-['Graphikthin'] font-light text-[16px] opacity-80 text-sm sm:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Dot for Mobile */}
              <div className="lg:hidden flex justify-center">
                <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
