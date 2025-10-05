import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Access AI Advisor",
      description: "Connect with BMSA's AI-powered supplement advisor to discuss your fitness, focus, recovery, or wellness goals"
    },
    {
      number: "02", 
      title: "Explore Breakdowns",
      description: "Get detailed supplement breakdowns and learn how each ingredient works before making any decisions"
    },
    {
      number: "03",
      title: "Research-Based Recommendations", 
      description: "Receive safe, legal, and effective supplement suggestions with no medical claims or prescription requirements"
    },
    {
      number: "04",
      title: "Make Informed Choices",
      description: "Understand exactly what you're buying and how to safely combine supplements for optimal results"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How BMSA Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four steps to discover safe, legal, and effective supplements for your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
                <div className="text-6xl font-bold text-emerald-600/30 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-emerald-500 w-8 h-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}