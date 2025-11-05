import CareerLaunchpadHero from "@/components/pages/javascript/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/javascript/CourseCurriculum";
import HeroBoot from "@/components/pages/javascript/HeroBoot";
import HeroSection from "@/components/pages/javascript/HeroSection";
import Industry from "@/components/pages/javascript/Industry";
import PlacementSupport from "@/components/pages/javascript/PlacementSupport";
import PlansPricing from "@/components/pages/javascript/PlansPricing";
import Success from "@/components/success";

const devOps = () => {
  return (
    <>
      <div>
        <HeroBoot />
        <CareerLaunchpadHero />
        <CourseCurriculum />
        <PlacementSupport />
        <Industry />
        <PlansPricing />
        <Success />
        {/* <CourseRoadmap /> */}
        {/* <Blog /> */}
        <HeroSection />
      </div>
    </>
  );
};

export default devOps;
