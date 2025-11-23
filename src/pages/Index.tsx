import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
}