import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-emerald-900 overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-700 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 pb-24">
        <p className="text-emerald-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
          Underground Supplement Advisor
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Black Market <span className="text-emerald-400">Supplement Advisor</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Navigate the underground supplement world safely with AI-powered guidance,
          research-backed insights, and comprehensive harm reduction protocols.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="rounded-full border border-emerald-500/60 bg-black/40 px-4 py-2 text-sm text-slate-100">
            Safety First
          </span>
          <span className="rounded-full border border-emerald-500/60 bg-black/40 px-4 py-2 text-sm text-slate-100">
            Research-Backed
          </span>
          <span className="rounded-full border border-emerald-500/60 bg-black/40 px-4 py-2 text-sm text-slate-100">
            Legal Compliance
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="/subscribe"
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            Get Started
          </a>

          <a
            href="#"
            data-ms-modal="login"
            className="rounded-full border border-emerald-500 px-8 py-3 text-sm font-semibold text-emerald-300 bg-black/40 transition hover:bg-black/60"
          >
            Member Login
          </a>
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3 text-sm mx-auto mb-10">
          <div>
            <p className="text-3xl font-bold text-emerald-400">15,000+</p>
            <p className="text-slate-300 mt-1">Compounds Analyzed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">94%</p>
            <p className="text-slate-300 mt-1">Safety Accuracy</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-400">24/7</p>
            <p className="text-slate-300 mt-1">AI Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
