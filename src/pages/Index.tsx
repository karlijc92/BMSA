import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Hero */}
        <section className="pt-16 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-700 px-8 py-10 shadow-2xl">
            <div className="space-y-6">
              <p className="text-sm font-medium tracking-wide text-emerald-300 uppercase">
                Underground. Research-minded. Harm-reduction first.
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Black Market{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                  Supplement Advisor
                </span>
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-slate-200">
                Navigate the underground supplement world safely with AI-powered
                guidance, research-backed insights, and comprehensive harm
                reduction protocols.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm text-emerald-200">
                  🛡️ Safety First
                </span>
                <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-slate-900/60 px-3 py-1 text-xs sm:text-sm text-emerald-100">
                  🔬 Research-Backed
                </span>
                <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-slate-900/60 px-3 py-1 text-xs sm:text-sm text-emerald-100">
                  ⚖️ Legal Compliance
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/subscribe"
                  className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
                >
                  Get Started
                </Link>
                <button
                  className="rounded-full border border-emerald-500/60 bg-slate-950/40 px-6 py-2.5 text-sm font-semibold text-emerald-200 hover:bg-slate-900 transition"
                  data-ms-modal="login"
                >
                  Member Login
                </button>
              </div>

              {/* Stats */}
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-emerald-200">
                <div>
                  <p className="text-xl font-semibold text-emerald-300">
                    15,000+
                  </p>
                  <p className="text-xs text-emerald-100">Compounds Analyzed</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-emerald-300">
                    94%
                  </p>
                  <p className="text-xs text-emerald-100">Safety Accuracy</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-emerald-300">
                    24/7
                  </p>
                  <p className="text-xs text-emerald-100">AI Availability</p>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="mt-4 max-w-3xl text-[11px] leading-relaxed text-slate-300">
                Educational information only. Always consult healthcare
                professionals before starting any supplement regimen. BMSA
                promotes harm reduction and legal compliance and does not
                provide medical advice or prescribe treatment.
              </p>
            </div>
          </div>
        </section>

        {/* How BMSA Works */}
        <section className="space-y-6 pt-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            How BMSA Works
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-slate-200">
            <div>
              <h3 className="font-semibold text-emerald-300">1. Ask Anything</h3>
              <p>
                Ask about supplements, stacks, risks, side effects, training,
                performance enhancement, or recovery. No judgment, just data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-300">
                2. Get Clear Answers
              </h3>
              <p>
                BMSA breaks down benefits, dosage ranges, toxicity risks, red
                flags, interactions, and science-backed insights so you can see
                the full picture.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-emerald-300">
                3. Make Smarter Decisions
              </h3>
              <p>
                Get harm-reduction guidance and smarter planning for your
                fitness, cutting, bulking, or performance goals without
                gambling with your health.
              </p>
            </div>
          </div>
        </section>

        {/* Why People Choose BMSA */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Why People Choose BMSA
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 text-sm sm:text-base text-slate-200">
            <div className="space-y-2">
              <p>✔️ AI-powered supplement analysis</p>
              <p>✔️ Underground &amp; rare compound detection</p>
              <p>✔️ Risk scoring and toxicity alerts</p>
              <p>✔️ Cross-checking with FDA, EU, &amp; global advisories</p>
            </div>
            <div className="space-y-2">
              <p>✔️ Harm-reduction focused, not hype driven</p>
              <p>✔️ Built for lifters, experimenters, and biohackers</p>
              <p>✔️ Supports legal, compliant decision-making</p>
              <p>✔️ Private, anonymous supplement questions</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
