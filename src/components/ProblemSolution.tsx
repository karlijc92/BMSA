import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Users, CreditCard } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Information Overload",
      description: "Conflicting advice from influencers, forums, and marketing makes it impossible to know what actually works"
    },
    {
      icon: Shield,
      title: "Safety Concerns",
      description: "No reliable way to verify supplement safety, interactions, or proper dosing protocols"
    },
    {
      icon: Users,
      title: "Biased Sources",
      description: "Most information comes from people trying to sell you something, not give honest guidance"
    },
    {
      icon: CreditCard,
      title: "Expensive Mistakes",
      description: "Wasting money on ineffective supplements or dangerous combinations"
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "AI-Powered Safety Analysis",
      description: "Get instant analysis of supplement interactions, contraindications, and safety protocols"
    },
    {
      icon: Users,
      title: "Unbiased Recommendations",
      description: "Research-backed guidance with no affiliate links or product sales - just honest advice"
    },
    {
      icon: AlertTriangle,
      title: "Harm Reduction Focus",
      description: "Prioritize your health and safety with evidence-based harm reduction protocols"
    },
    {
      icon: CreditCard,
      title: "Cost-Effective Stacks",
      description: "Optimize your supplement budget with personalized recommendations that actually work"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problems Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-red-400">Problem</span> with Supplement Advice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The supplement industry is full of misinformation, dangerous advice, and profit-driven recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-red-900/20 border-red-500/30 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <CardTitle className="text-white">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-emerald-400">BMSA Solution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered guidance that cuts through the BS and prioritizes your health and results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <CardTitle className="text-white">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}