import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Blog from "@/components/pages/Home/Blog";
import CareerLaunchpadHero from "@/components/pages/job-bootcamp-full-stack-development/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/job-bootcamp-full-stack-development/CourseCurriculum";
import CourseRoadmap from "@/components/pages/job-bootcamp-full-stack-development/CourseRoadmap";
import HeroBoot from "@/components/pages/job-bootcamp-full-stack-development/HeroBoot";
import HeroSection from "@/components/pages/job-bootcamp-full-stack-development/HeroSection";
import Industry from "@/components/pages/job-bootcamp-full-stack-development/Industry";
import PlacementSupport from "@/components/pages/job-bootcamp-full-stack-development/PlacementSupport";
import PlansPricing from "@/components/pages/job-bootcamp-full-stack-development/PlansPricing";
import Success from "@/components/success";
import React from "react";

const jobbootcampfullstackdevelopment = () => {
  return (
    <>
      <div>
        <HeroBoot />
        <CareerLaunchpadHero />
        <CourseCurriculum />
        <Industry />
        <PlacementSupport />
        <PlansPricing />
        <CourseRoadmap />
        <Success />
        <Blog />
        <HeroSection />
      </div>
    </>
  );
};

export default jobbootcampfullstackdevelopment;
