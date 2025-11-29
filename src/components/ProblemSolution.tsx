import React from "react";

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Problem Side */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The supplement world is{" "}
            <span className="text-emerald-400">a mess</span>.
          </h2>
          <p className="text-gray-300 text-lg">
            Fake gurus. Shady underground products. Confusing labels. Everyone
            has an opinion, but nobody shows real risk, real tradeoffs, or how
            this actually hits your body.
          </p>
          <ul className="space-y-2 text-gray-400 text-sm md:text-base">
            <li>• No idea which stacks are actually worth the money</li>
            <li>• Zero harm-reduction guidance for serious lifters</li>
            <li>• Random Reddit advice instead of structured logic</li>
            <li>• Doctors who don&apos;t understand performance goals</li>
          </ul>
        </div>

        {/* Solution Side */}
        <div className="bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-lg shadow-emerald-500/10">
          <h3 className="text-2xl font-semibold text-white mb-3">
            BMSA: Your underground supplement advisor.
          </h3>
          <p className="text-gray-300 mb-4">
            Instead of guessing, you get an AI assistant trained to think like a
            coach, a risk analyst, and a harm-reduction nerd all at once.
          </p>
          <ul className="space-y-2 text-gray-300 text-sm md:text-base mb-6">
            <li>✅ Breaks down risks vs. rewards in plain English</li>
            <li>✅ Helps you build stacks based on your goals</li>
            <li>✅ Flags sketchy compounds and interactions</li>
            <li>✅ Focused on <span className="text-emerald-400">education, not prescriptions</span></li>
          </ul>
          <p className="text-xs text-gray-500">
            BMSA does not replace medical care. It gives you structured, educational
            info so you can ask smarter questions, make safer choices, and stop
            gambling with your health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
