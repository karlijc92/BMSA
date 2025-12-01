import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full bg-black py-20 border-t border-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
          How <span className="text-emerald-400">BMSA</span> Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* STEP 1 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md">
            <h3 className="text-xl text-emerald-400 font-semibold mb-2">
              1. Ask Anything
            </h3>
            <p className="text-gray-300 text-sm">
              Ask about supplements, stacks, risks, side effects, training,
              performance enhancement, or recovery.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md">
            <h3 className="text-xl text-emerald-400 font-semibold mb-2">
              2. Get Clear Answers
            </h3>
            <p className="text-gray-300 text-sm">
              BMSA breaks down benefits, dosage ranges, toxicity risks, red
              flags, interactions, and science-backed insights.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 shadow-md">
            <h3 className="text-xl text-emerald-400 font-semibold mb-2">
              3. Smarter Decisions
            </h3>
            <p className="text-gray-300 text-sm">
              Get harm-reduction guidance and smarter planning for your fitness,
              cutting, bulking, or performance goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
