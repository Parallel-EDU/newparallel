import Image from "next/image";
import style from "@/styles/style.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pl-[80px]  overflow-hidden max-md:px-[40px] max-sm:px-[20px] pt-[80.58px] pb-[14px] flex flex-col gap-[40px] max-sm:gap-[00px] relative pr-[76px]">
      {/* <div className="overflow-hidden max-smallphone:hidden absolute w-[100%] bottom-[0] left-0 h-[1449.12px]"> */}
      {/* <div
          className={`w-[100%] h-[849.12px] left-[15.49px] absolute bottom-[275.86px] ${style.footer}`}
        ></div> */}

      <div className="absolute -top-40 -z10 h-[500px] flex justify-center">
        <div
          className="w-[1100px] h-full rounded-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #1BD44F 0%, rgba(14, 11, 180, 0.43) 100%)",
            filter: "blur(326.8px)",
            opacity: 0.8,
          }}
        ></div>
      </div>

      {/* </div> */}
      <div className="flex justify-start gap-10 max-sm:flex-col max-hamburger:gap-[50px] z-20 widescreen:justify-between">
        <div className=" w-[390px] widescreen:w-[700px] max-sm:w-full flex-wrap gap-x-[27px] gap-y-[41.34px]">
          <div className="w-[210px] widescreen:w-[40%] widestscreen:w-[50%]">
            <h1 className="text-[#E5E5E5] opacity-80 text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Address
            </h1>
            <p className="mt-[16px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Wework Galaxy <br /> Shanthala Nagar, Ashok Nagar, Bengaluru,
              Karnataka 560001
            </p>

            <p className="mt-[12px] flex items-center gap-3 text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3163_8402)">
                  <path
                    d="M21 5.25L12 13.5L3 5.25"
                    stroke="white"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                    stroke="white"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.3639 12L3.23145 18.5381"
                    stroke="white"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.7685 18.5381L13.636 12"
                    stroke="white"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3163_8402">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              hello@paralleledu.com
            </p>
          </div>

          <div className="flex flex-col widescreen:w-[30%] w-[50%] mt-10">
            {/* <h1 className="text-[#E5E5E5] opacity-80 mb-[10px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Follow us
            </h1> */}

            <div className="flex items-center gap-8 justify-center">
              <a
                href={
                  "https://www.instagram.com/parallel.edu_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                }
                target="_blank"
                className="mt-[0px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9332 20.0011C12.7336 20.0013 11.5608 19.6457 10.5633 18.9794C9.56574 18.313 8.78822 17.3658 8.32905 16.2575C7.86988 15.1493 7.74969 13.9297 7.98368 12.7531C8.21767 11.5765 8.79532 10.4958 9.64359 9.64749C10.4919 8.79923 11.5726 8.22157 12.7492 7.98758C13.9258 7.7536 15.1454 7.87379 16.2536 8.33296C17.3619 8.79213 18.3091 9.56965 18.9755 10.5672C19.6418 11.5647 19.9974 12.7375 19.9972 13.9371C19.9951 15.5447 19.3555 17.0859 18.2187 18.2227C17.082 19.3594 15.5408 19.999 13.9332 20.0011ZM13.9332 10.2301C13.1998 10.2287 12.4825 10.4449 11.872 10.8513C11.2615 11.2577 10.7853 11.836 10.5036 12.5132C10.2219 13.1903 10.1473 13.9358 10.2894 14.6553C10.4315 15.3748 10.7838 16.0359 11.3018 16.5551C11.8197 17.0744 12.48 17.4283 13.1992 17.5721C13.9183 17.7159 14.664 17.6432 15.3418 17.3632C16.0196 17.0831 16.5991 16.6083 17.007 15.9988C17.4149 15.3893 17.6328 14.6725 17.6332 13.9391C17.6324 12.9572 17.2426 12.0156 16.5492 11.3205C15.8557 10.6253 14.9151 10.2333 13.9332 10.2301Z"
                    fill="#E7E7E7"
                  />
                  <path
                    d="M18.463 25.448H8.985C7.13311 25.4459 5.35768 24.7093 4.0482 23.3998C2.73871 22.0903 2.00212 20.3149 2 18.463L2 8.985C2.00212 7.13311 2.73871 5.35768 4.0482 4.0482C5.35768 2.73871 7.13311 2.00212 8.985 2L18.463 2C20.3149 2.00212 22.0903 2.73871 23.3998 4.0482C24.7093 5.35768 25.4459 7.13311 25.448 8.985V18.463C25.4459 20.3149 24.7093 22.0903 23.3998 23.3998C22.0903 24.7093 20.3149 25.4459 18.463 25.448ZM8.985 4.359C7.7586 4.36059 6.58288 4.84848 5.71568 5.71568C4.84848 6.58288 4.36059 7.7586 4.359 8.985V18.463C4.36032 19.6896 4.8481 20.8656 5.71532 21.733C6.58255 22.6004 7.75842 23.0884 8.985 23.09H18.463C19.6894 23.0884 20.8651 22.6005 21.7323 21.7333C22.5995 20.8661 23.0874 19.6904 23.089 18.464V8.985C23.0874 7.7586 22.5995 6.58288 21.7323 5.71568C20.8651 4.84848 19.6894 4.36059 18.463 4.359H8.985ZM19.8 9.158C19.5126 9.158 19.2317 9.07278 18.9928 8.91313C18.7538 8.75347 18.5676 8.52654 18.4576 8.26104C18.3476 7.99554 18.3189 7.70339 18.3749 7.42153C18.431 7.13968 18.5694 6.88078 18.7726 6.67757C18.9758 6.47437 19.2347 6.33598 19.5165 6.27992C19.7984 6.22386 20.0905 6.25263 20.356 6.3626C20.6215 6.47258 20.8485 6.65881 21.0081 6.89776C21.1678 7.1367 21.253 7.41762 21.253 7.705C21.2525 8.0902 21.0992 8.45947 20.8268 8.73184C20.5545 9.00422 20.1852 9.15747 19.8 9.158Z"
                    fill="#E7E7E7"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/parallel-edutech-pvt-ltd/"
                className="mt-[0px]  text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.744 5.382C7.74025 5.84857 7.59845 6.30359 7.33649 6.6897C7.07452 7.07581 6.70412 7.37572 6.27196 7.55163C5.8398 7.72754 5.36524 7.77157 4.9081 7.67818C4.45095 7.58479 4.03169 7.35815 3.70315 7.02683C3.37462 6.69552 3.15152 6.27436 3.06199 5.81644C2.97246 5.35853 3.02049 4.88435 3.20004 4.45369C3.37959 4.02303 3.68261 3.65517 4.07091 3.39647C4.45921 3.13777 4.91541 2.99982 5.382 3C5.6935 3.00131 6.00168 3.06396 6.28897 3.18438C6.57625 3.3048 6.837 3.48062 7.05633 3.70181C7.27567 3.923 7.44928 4.18522 7.56727 4.47351C7.68526 4.7618 7.74532 5.0705 7.744 5.382ZM7.763 9.669H3V24.913H7.764L7.763 9.669ZM15.363 9.669H10.635V24.913H15.369V16.913C15.369 12.464 21.113 12.1 21.113 16.913V24.913H25.865V15.261C25.865 7.753 17.365 8.027 15.365 11.723L15.363 9.669Z"
                    fill="#E7E7E7"
                  />
                </svg>
              </a>
              <p className="mt-[6px]   text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.8362 7.84795C26.6835 7.2998 26.3918 6.80036 25.9894 6.39799C25.5871 5.99562 25.0876 5.70395 24.5395 5.5512C22.4848 5.00001 14.2054 5.00001 14.2054 5.00001C14.2054 5.00001 5.94839 4.98929 3.8714 5.5512C3.32324 5.70395 2.82381 5.99562 2.42144 6.39799C2.01907 6.80036 1.72739 7.2998 1.57464 7.84795C1.18468 9.95362 0.992376 12.0911 1.00023 14.2326C0.993872 16.366 1.18617 18.4953 1.57464 20.5931C1.72739 21.1412 2.01907 21.6407 2.42144 22.0431C2.82381 22.4454 3.32324 22.7371 3.8714 22.8899C5.92606 23.4419 14.2054 23.4419 14.2054 23.4419C14.2054 23.4419 22.4607 23.4419 24.5395 22.8899C25.0876 22.7371 25.5871 22.4454 25.9894 22.0431C26.3918 21.6407 26.6835 21.1412 26.8362 20.5931C27.2166 18.4946 27.4009 16.3652 27.3865 14.2326C27.4023 12.0919 27.2181 9.95438 26.8362 7.84795ZM11.5639 18.182V10.2707L18.4532 14.2326L11.5639 18.182Z"
                    fill="#E7E7E7"
                  />
                </svg>
              </p>
            </div>
          </div>

          {/* <div className="opacity-70 widescreen:w-full max-smallphone:hidden">
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Copyright @ ParallelEduTech. All Rights Reserved{" "}
            </p>
            <div className="flex mt-[5.37px] gap-[13.9px]">
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Privacy Policy
              </p>
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Terms of Service
              </p>
            </div>
          </div> */}
        </div>
        <div className="flex max-hamburger:gap-[50px] max-xl:flex-wrap-reverse gap-10">
          <div className="opacity-70 hidden max-smallphone:block widescreen:w-full">
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Copyright @ ParallelEduTech Pvt Ltd. All Rights Reserved{" "}
            </p>
            <div className="flex mt-[5.37px] gap-[13.9px]">
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Privacy Policy
              </p>
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Terms of Service
              </p>
            </div>
          </div>

          <div className="w-[150px] widescreen:w-[200px] flex flex-col">
            <h1 className="text-[#E5E5E5] opacity-80 text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Company
            </h1>
            <Link
              href={"/about"}
              className="mt-[16px] font-[300] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              About us
            </Link>
            <Link
              href={"/workshops"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Workshops
            </Link>
            <Link
              href={"/hire-from-us"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Hire from us
            </Link>
            <Link
              href={"/refer-us"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Refer us
            </Link>
            <Link
              href={"/#"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Blogs
            </Link>
            <Link
              href={"/#"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Careers
            </Link>
            <Link
              href={"/contact-us"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Contact us
            </Link>
            <Link
              href={"/testimonials"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[130px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Alumni Reviews
            </Link>
            <Link
              href={"/#"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[150px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Student Projects
            </Link>

            {/* <Link
              href={"/fees"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Fees
            </Link> */}

            {/* <Link
              href={"/isa"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              ISA
            </Link> */}
          </div>

          <div className="w-[300px] widescreen:w-[200px] flex flex-col">
            <h1 className="text-[#E5E5E5] opacity-80 text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Job Bootcamp Programs{" "}
            </h1>
            <Link
              href={"/job-bootcamp-full-stack-development"}
              className="mt-[16px] hover:underline cursor-pointer hover:decoration-solid w-[300px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Full Stack Web Development with GenAI
            </Link>
            <Link
              href={"/data-science-with-genAI-bootcamp"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[300px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Data Science with GenAI
            </Link>
            <Link
              href={"/devOps-and-cloud-computing-bootcamp"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[300px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              DevOps and Cloud Computing
            </Link>
          </div>
          <div className=" widescreen:w-[300px] widestscreen:w-[500px] max-sm:w-full flex flex-col">
            <h1 className="text-[#E5E5E5] opacity-80 max-smallphone:mb-[10px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Certification Programs
            </h1>
            <div className="flex mt-[16px] widescreen:gap-10">
              <div className="w-[197.73px] flex flex-col">
                <Link
                  href={"/tech/javascript"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  JavaScript Training
                </Link>
                <Link
                  href={"/tech/react-js"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  React.js Training
                </Link>
                <Link
                  href={"/tech/vue-js"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Vue.js Training
                </Link>
                <Link
                  href={"/tech/next-js"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Next.js Training
                </Link>
                <Link
                  href={"/tech/node-js"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Node.js Training
                </Link>
                <Link
                  href={"/tech/python"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Python Training
                </Link>
                <Link
                  href={"/tech/java"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Java Training
                </Link>
                <Link
                  href={"/tech/data-analysis"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Data Analysis Training
                </Link>
              </div>
              <div className="w-[197.73px] flex flex-col">
                <Link
                  href={"/tech/tableau"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Tableau Training
                </Link>
                <Link
                  href={"/tech/dev-ops"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  DevOps Training
                </Link>
                <Link
                  href={"/tech/aws"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  AWS Training
                </Link>
                <Link
                  href={"/tech/machine-learning"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Machine Learning Training
                </Link>
                <Link
                  href={"/tech/salesforce"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  Salesforce Training
                </Link>
                <Link
                  href={"/tech/ai-agents"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  AI Agents Training
                </Link>
                <Link
                  href={"/tech/ai-prompt-eng"}
                  className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
                >
                  AI Prompt Engineering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src="/footerimg.svg"
        className="pl-[0.05px] pr-[3.89px] w-full"
        width={139.45}
        height={26}
        alt="Perallel Image"
      /> */}

      <svg
        width="1287"
        height="240"
        viewBox="0 0 1287 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="widescreen:w-full w-full"
      >
        <g clip-path="url(#clip0_3361_9293)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M86.1558 206.16H0L86.1558 120.004H0L86.1558 33.8485H172.312L86.1558 120.004L172.312 120.004L86.1558 206.16Z"
            fill="url(#paint0_linear_3361_9293)"
          />
        </g>
        <path
          d="M240.023 182H203.398V51.4772H275.673C306.648 51.4772 326.129 69.2049 326.129 100.18C326.129 131.155 306.648 149.077 275.673 149.077H240.023V182ZM271.582 84.4001H240.023V116.154H271.582C284.439 116.154 289.699 113.622 289.699 100.18C289.699 86.9326 284.439 84.4001 271.582 84.4001ZM367.218 182H326.113L382.414 51.4772H434.817L491.312 182H449.233L439.298 157.844H377.348L367.218 182ZM398.778 106.608L391.18 124.921H425.856L418.259 106.608L409.687 84.5949H407.154L398.778 106.608ZM531.857 182H495.233V51.4772H571.404C605.885 51.4772 624.002 65.8932 624.002 91.4133C624.002 112.063 613.678 124.336 588.742 127.453V129.401C602.184 132.908 606.47 139.337 611.34 149.272L627.509 182H585.235L569.65 150.051C564.975 140.311 561.079 137.583 546.858 137.583H531.857V182ZM531.857 84.4001V110.31H571.014C581.729 110.31 585.625 108.362 585.625 97.2576C585.625 86.9326 581.729 84.4001 571.014 84.4001H531.857ZM666.663 182H625.558L681.858 51.4772H734.262L790.757 182H748.678L738.743 157.844H676.793L666.663 182ZM698.222 106.608L690.624 124.921H725.301L717.703 106.608L709.131 84.5949H706.599L698.222 106.608ZM906.693 182H794.677V51.4772H831.302V149.077H906.693V182ZM1028.45 182H916.434V51.4772H953.058V149.077H1028.45V182ZM1154.1 182H1038.19V51.4772H1154.1V84.4001H1074.81V99.9849H1151.18V132.713H1074.81V149.077H1154.1V182ZM1276.53 182H1164.51V51.4772H1201.14V149.077H1276.53V182Z"
          fill="#F7F7F7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3361_9293"
            x1="17.6619"
            y1="192.375"
            x2="86.1558"
            y2="33.8485"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#201DA7" />
            <stop offset="1" stop-color="#30E29D" />
          </linearGradient>
          <clipPath id="clip0_3361_9293">
            <rect
              width="172.312"
              height="172.312"
              fill="white"
              transform="translate(0 33.8438)"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="opacity-70 flex justify-between widescreen:w-full max-smallphone:hidden border-t border-[#484747] pt-4 max-lg:flex-col">
        <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
          Copyright @ Parallel Edutech Pvt Ltd. All Rights Reserved
        </p>
        <div className="flex mt-[5.37px] gap-[13.9px] max-lg:flex-col">
          <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
            Pricing & Refund Policy
          </p>
          <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
            Privacy Policy
          </p>
          <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
