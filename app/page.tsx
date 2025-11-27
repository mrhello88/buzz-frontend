import HeroSection from "@/components/Home/Herosection";
import PricingSection from "@/components/Home/PricingSection";
import WhyEagleLikes from "@/components/Home/WhyEagleLikes";
import InstagramGrowthSection from "@/components/Home/InstagramGrowthSection";
import WhyInstagramFollowers from "@/components/Home/WhyInstagramFollowers";
import BenefitsOfBuying from "@/components/Home/BenefitsOfBuying";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <div className="relative w-full bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <PricingSection />
        </div>
        {/* Separator */}
        <div className="w-full mt-10">
          <Separator className="bg-blue-500 h-0.5" />
        </div>
      </div>
      <WhyEagleLikes />
      {/* Separator */}
      <div className="w-full bg-black">
        <Separator className="bg-blue-500 h-0.5" />
      </div>
      <InstagramGrowthSection />
      <WhyInstagramFollowers />
      {/* Separator */}
      <div className="w-full bg-black">
        <Separator className="bg-blue-500 h-0.5" />
      </div>
      <BenefitsOfBuying />
    </div>
  );
}
