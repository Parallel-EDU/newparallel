import CareerLaunchpadHero from "@/components/pages/java/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/java/CourseCurriculum";
import HeroBoot from "@/components/pages/java/HeroBoot";
import HeroSection from "@/components/pages/java/HeroSection";
import Industry from "@/components/pages/java/Industry";
import PlacementSupport from "@/components/pages/java/PlacementSupport";
import PlansPricing from "@/components/pages/java/PlansPricing";
import Success from "@/components/success";

const devOps = () => {
  return (
    <>
      <div>
        <HeroBoot />
        <CareerLaunchpadHero />
        <CourseCurriculum />
        <PlacementSupport />
        {/* <Industry /> */}
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
