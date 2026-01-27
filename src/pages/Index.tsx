import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import DisclaimerFooter from "@/components/DisclaimerFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <DisclaimerFooter />
    </div>
  );
}
