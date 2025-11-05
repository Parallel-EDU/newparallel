import CareerLaunchpadHero from "@/components/pages/devOps-and-cloud-computing-bootcamp/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/devOps-and-cloud-computing-bootcamp/CourseCurriculum";
import CourseRoadmap from "@/components/pages/devOps-and-cloud-computing-bootcamp/CourseRoadmap";
import HeroBoot from "@/components/pages/devOps-and-cloud-computing-bootcamp/HeroBoot";
import HeroSection from "@/components/pages/devOps-and-cloud-computing-bootcamp/HeroSection";
import Industry from "@/components/pages/devOps-and-cloud-computing-bootcamp/Industry";
import PlacementSupport from "@/components/pages/devOps-and-cloud-computing-bootcamp/PlacementSupport";
import PlansPricing from "@/components/pages/devOps-and-cloud-computing-bootcamp/PlansPricing";
import Blog from "@/components/pages/Home/Blog";

const devOps = () => {
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
        <HeroSection />
        <Blog />
      </div>
    </>
  );
};

export default devOps;
