import CareerLaunchpadHero from "@/components/pages/salesforce/CareerLaunchpadHero";
import CourseCurriculum from "@/components/pages/salesforce/CourseCurriculum";
import HeroBoot from "@/components/pages/salesforce/HeroBoot";
import HeroSection from "@/components/pages/salesforce/HeroSection";
import Industry from "@/components/pages/salesforce/Industry";
import PlacementSupport from "@/components/pages/salesforce/PlacementSupport";
import PlansPricing from "@/components/pages/salesforce/PlansPricing";
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
