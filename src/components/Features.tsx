import { CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    "AI-powered supplement analysis",
    "Underground & rare compound detection",
    "Risk scoring and toxicity alerts",
    "Cross-checking with FDA, EU, & global advisories",
    "Goal-based optimization (fat loss, muscle, health)",
    "Personalized stack recommendations",
  ];

  return (
    <section className="py-20 bg-black border-t border-emerald-800/40">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-10 text-white">
          Why People Choose <span className="text-emerald-400">BMSA</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl border border-emerald-700/40 bg-slate-900/40"
            >
              <CheckCircle className="text-emerald-400 w-6 h-6 mt-1" />
              <p className="text-gray-300 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
