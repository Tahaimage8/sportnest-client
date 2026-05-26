import Banner from "@/components/Banner";
import FeaturedFacilities from "@/components/FeaturedFacilities";
import HowItWorks from "@/components/HowItWork";
import WhyChooseSportNest from "@/components/WhyChooseSportNest";

export default function Home() {
  return (
    <div>
      <Banner/>
      <WhyChooseSportNest/>
      <FeaturedFacilities/>
      <HowItWorks/>
    </div>
  );
}
