import { Brain, Shield, Zap, Target } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Research-based supplement recommendations without medical claims. Discover how each ingredient works before buying or combining anything.",
      stat: "94% Accuracy"
    },
    {
      icon: Shield,
      title: "Safe & Legal Focus",
      description: "Only safe, legal, and effective supplements. Comprehensive safety screening across 15,000+ compounds with no prescription requirements.",
      stat: "15,000+ Compounds"
    },
    {
      icon: Zap,
      title: "Performance Goals",
      description: "Tailored recommendations for fitness, focus, recovery, and wellness goals based on your unique profile and objectives.",
      stat: "<3 Seconds"
    },
    {
      icon: Target,
      title: "Supplement Breakdowns",
      description: "Explore detailed supplement breakdowns and learn exactly how each ingredient works for informed decision-making.",
      stat: "87% Satisfaction"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Performance Advisor
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Research-based supplement guidance for fitness, focus, recovery, and wellness
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group">
              <div className="bg-emerald-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600/30 transition-colors">
                <feature.icon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
              <div className="text-emerald-400 font-bold text-lg">{feature.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}