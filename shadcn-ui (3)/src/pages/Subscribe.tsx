import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Brain } from "lucide-react";

export default function Subscribe() {
  const plans = [
    {
      name: "Monthly",
      price: "$12",
      period: "per month",
      description: "Perfect for trying out BMSA",
      features: [
        "AI-Powered Supplement Analysis",
        "Safety Risk Assessments", 
        "Legal Status by Region",
        "Community Reviews Access",
        "Basic Stack Recommendations"
      ],
      popular: false,
      buttonText: "Start Monthly Plan"
    },
    {
      name: "Annual",
      price: "$99",
      period: "per year",
      description: "Best value - Save $45 annually",
      features: [
        "Everything in Monthly",
        "Advanced Stack Builder",
        "Dosage Calculators",
        "Wearable Integration",
        "Priority AI Consultations",
        "Exclusive Research Reports"
      ],
      popular: true,
      buttonText: "Start Annual Plan"
    }
  ];

  const consultations = [
    {
      name: "Basic Stack Consultation",
      price: "$29",
      description: "AI-powered supplement stack for your specific goals",
      features: [
        "Personalized goal assessment",
        "3-5 supplement recommendations", 
        "Safety and interaction warnings",
        "Legal alternatives suggested"
      ]
    },
    {
      name: "Advanced Stack Consultation", 
      price: "$99",
      description: "Comprehensive supplement strategy with ongoing support",
      features: [
        "Everything in Basic",
        "Detailed dosage protocols",
        "Timing and cycling recommendations",
        "30-day follow-up assessment",
        "Wearable data integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-black">
      {/* Header Section */}
      <div className="relative py-24 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Choose Your
            <span className="block text-emerald-400">BMSA Plan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get access to AI-powered supplement analysis, safety assessments, and research-based recommendations
          </p>
        </div>
      </div>

      {/* Subscription Plans */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscription Plans
            </h2>
            <p className="text-gray-400 text-lg">
              Unlock the full BMSA experience with unlimited access
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative bg-gray-800/50 backdrop-blur-sm border ${plan.popular ? 'border-emerald-500/50' : 'border-emerald-500/20'} hover:border-emerald-500/40 transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-600 text-white px-4 py-1 text-sm font-semibold">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-300 text-lg">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button 
                    className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-500/25' 
                        : 'bg-gray-700 hover:bg-emerald-600 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Consultations */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Consultations
            </h2>
            <p className="text-gray-400 text-lg">
              One-time personalized supplement stack consultations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {consultations.map((consultation, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-white mb-2">{consultation.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-400">{consultation.price}</span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <CardDescription className="text-gray-300">{consultation.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {consultation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Brain className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-semibold transition-all duration-300">
                    Get Consultation
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-600/20 p-3 rounded-full">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Safe & Legal Focus</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              BMSA provides research-based supplement recommendations for informational purposes only. 
              We focus on safe, legal, and effective supplements without medical claims or prescriptions. 
              Always consult healthcare professionals before starting any supplement regimen.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-emerald-400">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                Educational Only
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Harm Reduction
              </div>
              <div className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Research-Based
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}