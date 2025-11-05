import CareerLaunchpadHero from "@/components/pages/dev-ops/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/dev-ops/CourseCurriculum";
import HeroBoot from "@/components/pages/dev-ops/HeroBoot";
import HeroSection from "@/components/pages/dev-ops/HeroSection";
import Industry from "@/components/pages/dev-ops/Industry";
import PlacementSupport from "@/components/pages/dev-ops/PlacementSupport";
import PlansPricing from "@/components/pages/dev-ops/PlansPricing";
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
