import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-slate-900 overflow-hidden px-4">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-700 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-emerald-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
          Underground Supplement Advisor
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Stop gambling{" "}
          <span className="text-emerald-400">with your stack.</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8">
          BMSA is your AI co-pilot for supplements and performance enhancement:
          risk-aware, research-minded, and brutally honest. No hype. No guru
          BS. Just clear options and smarter decisions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="/subscribe"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 hover:bg-emerald-700 px-8 py-3 text-base md:text-lg font-semibold text-white transition-transform duration-200 hover:scale-105 shadow-lg shadow-emerald-500/30"
          >
            Get Underground Access
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-500/50 px-8 py-3 text-base md:text-lg font-medium text-emerald-300 hover:bg-emerald-500/10 transition-colors duration-200"
          >
            See how it works
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs md:text-sm text-gray-400">
          <div>🔒 Educational only — not medical advice</div>
          <div>⚡ Built for lifters, experimenters & biohackers</div>
          <div>🧠 Harm-reduction focused</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
