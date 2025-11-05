import CareerLaunchpadHero from "@/components/pages/tableau/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/tableau/CourseCurriculum";
import HeroBoot from "@/components/pages/tableau/HeroBoot";
import HeroSection from "@/components/pages/tableau/HeroSection";
import Industry from "@/components/pages/tableau/Industry";
import PlacementSupport from "@/components/pages/tableau/PlacementSupport";
import PlansPricing from "@/components/pages/tableau/PlansPricing";
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
