import HeroSection from "@/components/pages/aws/HeroSection";
import Industry from "@/components/pages/aws/Industry";
import CareerLaunchpadHero from "@/components/pages/data-analysis/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/data-analysis/CourseCurriculum";
import HeroBoot from "@/components/pages/data-analysis/HeroBoot";
import PlacementSupport from "@/components/pages/data-analysis/PlacementSupport";
import PlansPricing from "@/components/pages/data-analysis/PlansPricing";
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
