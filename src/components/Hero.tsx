import { Button } from "@/components/ui/button";
import { Shield, Brain, Zap } from "lucide-react";

export default function Hero() {
  const handleSignUp = () => {
    // Open Memberstack signup modal instead of redirecting to signup page
    if (window.MemberStack) {
      window.MemberStack.openModal();
    }
  };

  const handleLogin = () => {
    // Open Memberstack login modal
    if (window.MemberStack) {
      window.MemberStack.openModal();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-black"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Black Market
            <span className="block text-emerald-400 bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Supplement Advisor
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate the underground supplement world safely with AI-powered guidance, 
            research-backed insights, and comprehensive harm reduction protocols.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/20">
            <Shield className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-gray-300 text-sm">Safety First</span>
          </div>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/20">
            <Brain className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-gray-300 text-sm">Research-Backed</span>
          </div>
          <div className="flex items-center bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/20">
            <Zap className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-gray-300 text-sm">Legal Compliance</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            data-ms-modal="signup"
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
          <Button 
            data-ms-modal="login"
            variant="outline" 
            size="lg"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Member Login
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-emerald-400 text-3xl font-bold">15,000+</div>
            <div className="text-gray-400 text-sm">Compounds Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-emerald-400 text-3xl font-bold">94%</div>
            <div className="text-gray-400 text-sm">Safety Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-emerald-400 text-3xl font-bold">24/7</div>
            <div className="text-gray-400 text-sm">AI Availability</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Educational information only. Always consult healthcare professionals before starting any supplement regimen. 
            BMSA promotes harm reduction and legal compliance.
          </p>
        </div>
      </div>
    </div>
  );
}