import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Black Market
          <span className="block text-emerald-400">Supplement Advisor</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          AI-powered supplement and performance advisor for safe, legal, and effective supplements. Get research-based recommendations for fitness, focus, recovery, and wellness.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/subscribe">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Sign Up
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}