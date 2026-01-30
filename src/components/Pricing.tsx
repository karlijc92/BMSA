import React from "react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Monthly Underground",
      price: "$12 / month",
      tagline: "Cancel anytime. Full access.",
      features: [
        "Unlimited AI supplement questions",
        "Risk-aware breakdowns & stack reviews",
        "Cutting, bulking & health optimization",
        "Harm reduction focused responses",
      ],
    },
    {
      name: "Yearly Underground",
      price: "$99 / year",
      tagline: "Save more. Stay locked in.",
      features: [
        "Everything in Monthly Underground",
        "Best value for long-term users",
        "Perfect for lifters & biohackers",
        "Priority for future feature drops",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-black py-20 border-t border-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Choose Your <span className="text-emerald-400">Access Level</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          BMSA is focused on education and harm reduction. No medical advice, no
          prescriptions, no sourcing help — just clear analysis so you stop
          guessing with your body.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl border border-emerald-700/40 bg-slate-950/80 p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-emerald-400 mb-1">
                {plan.price}
              </p>
              <p className="text-gray-400 text-sm mb-4">{plan.tagline}</p>

              <ul className="text-left text-gray-300 text-sm space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-[3px] text-emerald-400">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/signup"
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm md:text-base font-semibold text-white transition-transform duration-150 hover:scale-105"
              >
                Create Account
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
