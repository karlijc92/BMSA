import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Monthly Access",
      price: "$12",
      period: "/month",
      description: "Perfect for trying out the underground",
      features: [
        "Unlimited AI supplement consultations",
        "Personalized supplement stacks",
        "Harm reduction protocols",
        "Research-backed recommendations"
      ],
      popular: false,
      link: "https://buy.stripe.com/test_8wM6oV2Ub6Zb9vq4gh"
    },
    {
      name: "Yearly Access",
      price: "$99",
      period: "/year",
      description: "Best value for serious optimization",
      features: [
        "Everything in Monthly Plan",
        "Priority AI response times",
        "Advanced cycle planning",
        "Exclusive underground insights"
      ],
      popular: true,
      link: "https://buy.stripe.com/test_5kA5kR8iF0B7bDy6op"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-emerald-400">Underground</span> Access
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get AI-powered supplement guidance that cuts through the industry BS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`bg-gray-900/80 backdrop-blur-sm relative ${
              plan.popular 
                ? 'border-2 border-emerald-500 ring-2 ring-emerald-500/20' 
                : 'border border-emerald-500/30 hover:border-emerald-500/50'
            } transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-emerald-400">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                {plan.popular && (
                  <p className="text-emerald-400 text-sm font-semibold mt-2">Save $45 vs monthly</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                    plan.popular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-black shadow-emerald-500/25'
                      : 'bg-emerald-500 hover:bg-emerald-600 text-black shadow-emerald-500/25'
                  }`}
                >
                  Start {plan.name}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}