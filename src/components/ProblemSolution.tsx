import React from "react";

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 bg-black px-4">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Problem Side (shortened) */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The supplement scene is{" "}
            <span className="text-emerald-400">confusing and risky</span>.
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Hype, half-truths, and random forum advice make it hard to know
            what’s actually safe or worth your money.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm md:text-base">
            <li>• Confusing labels and mixed information</li>
            <li>• Little real harm-reduction guidance</li>
            <li>• Opinions instead of structured logic</li>
          </ul>
        </div>

        {/* Solution Side (shortened) */}
        <div className="bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-lg shadow-emerald-500/10">
          <h3 className="text-2xl font-semibold text-white mb-3">
            BMSA gives you clear, risk-aware guidance.
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base mb-5">
            <li>✅ Breaks down risks vs. rewards in plain language</li>
            <li>✅ Helps you compare options based on your goals</li>
            <li>✅ Flags sketchy compounds and interactions</li>
          </ul>
          <p className="text-xs text-gray-500">
            Educational only, not medical advice. BMSA helps you think clearly
            and ask smarter questions before you decide what to use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
