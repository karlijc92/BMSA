import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-emerald-800 text-slate-50 flex flex-col">
      {/* TOP NAVBAR */}
      <header className="border-b border-emerald-800/50 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-[0.25em] text-emerald-300 uppercase">
              BMSA
            </span>
            <span className="hidden text-sm text-slate-300 sm:inline">
              Black Market Supplement Advisor
            </span>
          </div>

          {/* Nav links + auth */}
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <a href="#how" className="hover:text-emerald-300 transition">
              How it works
            </a>
            <a href="#why" className="hover:text-emerald-300 transition">
              Why BMSA
            </a>
            <a href="#faq" className="hover:text-emerald-300 transition">
              FAQ
            </a>

            <Link
              to="/subscribe"
              className="hidden rounded-full border border-emerald-400/70 px-3 py-1.5 font-semibold text-emerald-300 hover:bg-emerald-900/60 sm:inline-block transition"
            >
              Subscribe
            </Link>

            <button
              data-ms-modal="login"
              className="rounded-full border border-emerald-300/70 px-3 py-1.5 font-medium hover:bg-emerald-900/70 transition"
            >
              Login
            </button>

            <button
              data-ms-modal="signup"
              className="hidden rounded-full bg-emerald-400 px-4 py-1.5 font-semibold text-black hover:bg-emerald-300 sm:inline-block transition"
            >
              Join Now
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16">
        {/* HERO */}
        <section className="pt-10 pb-14">
          <div className="grid gap-10 md:grid-cols-[1.6fr,1.1fr] md:items-center">
            {/* Hero left */}
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300/80">
                Underground • Harm Reduction • Legal Compliance
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Navigate the{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                  underground supplement world
                </span>{" "}
                without gambling with your health.
              </h1>

              <p className="max-w-xl text-sm sm:text-base text-emerald-100/85">
                BMSA is your AI-powered harm-reduction guide for designer
                compounds, research chems, gray-market stacks, and
                performance-enhancement protocols. No hype, no shaming—just
                structured risk, interaction checks, and science-backed context.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/subscribe"
                  className="rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-black shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 transition"
                >
                  Start Your Safety Session
                </Link>

                <button
                  data-ms-modal="login"
                  className="rounded-full border border-emerald-300/80 bg-black/40 px-6 py-2.5 text-sm font-semibold text-emerald-200 hover:bg-slate-900 transition"
                >
                  I already have an account
                </button>
              </div>

              {/* Stats */}
              <div className="mt-4 flex flex-wrap gap-6 text-xs sm:text-sm text-emerald-100/85">
                <div>
                  <p className="text-lg font-semibold text-emerald-300">
                    5,000+
                  </p>
                  <p className="text-emerald-100/80">
                    Compounds &amp; ingredients mapped
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-emerald-300">
                    Risk scoring
                  </p>
                  <p className="text-emerald-100/80">
                    Toxicity, organ load &amp; interactions
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-emerald-300">
                    Legal lens
                  </p>
                  <p className="text-emerald-100/80">
                    Flags U.S./EU advisories &amp; bans
                  </p>
                </div>
              </div>

              {/* Short disclaimer */}
              <p className="mt-4 max-w-xl text-[11px] leading-relaxed text-emerald-200/80">
                BMSA is for educational and harm-reduction purposes only. It
                does not diagnose, treat, or prescribe. Always consult a licensed
                healthcare professional before starting, stopping, or changing
                any medication or supplement.
              </p>
            </div>

            {/* Hero right – safety card */}
            <div className="rounded-3xl border border-emerald-700/50 bg-black/60 p-6 shadow-2xl shadow-emerald-900/40">
              <h2 className="mb-3 text-lg font-semibold text-emerald-100">
                What BMSA helps you avoid
              </h2>
              <ul className="space-y-2 text-sm text-emerald-100/90">
                <li>• Blindly copying cycles from random forums or TikTok.</li>
                <li>
                  • Stacking compounds with unknown liver, kidney, or heart
                  stress.
                </li>
                <li>• Mixing meds and gray-market products without context.</li>
                <li>
                  • Ignoring blood work, tolerance, and long-term risk signals.
                </li>
              </ul>

              <div className="mt-4 rounded-2xl bg-emerald-900/40 p-3 text-[11px] leading-relaxed text-emerald-100/90">
                <p className="font-semibold text-emerald-200">
                  BMSA is not your doctor.
                </p>
                <p>
                  It’s a structured second brain that helps you ask better
                  questions, spot red flags, and plan safer conversations with
                  real clinicians.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHITE CONTENT CARD */}
        <section
          id="how"
          className="mt-4 rounded-3xl bg-white/95 p-8 text-slate-900 shadow-xl shadow-emerald-900/25"
        >
          {/* How BMSA Works */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">
              How BMSA Works
            </h2>

            <div className="space-y-5 text-sm sm:text-base">
              <div>
                <h3 className="font-semibold text-slate-900">
                  1. Ask anything (privately)
                </h3>
                <p className="text-slate-700">
                  Describe your planned stack, current cycle, symptoms, goals,
                  and constraints. You can ask about fat loss, muscle gain,
                  nootropics, recovery, sleep, or “weird” compounds you&apos;re
                  curious about.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  2. Get structured risk analysis
                </h3>
                <p className="text-slate-700">
                  BMSA breaks down potential benefits, risks, organ load,
                  interactions, tolerance issues, and red flags. It highlights
                  what to monitor, what to discuss with a doctor, and where
                  people commonly run into trouble.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  3. Plan safer decisions
                </h3>
                <p className="text-slate-700">
                  Use the insights to simplify your stack, reduce riskier
                  combinations, and think in terms of phases, recovery, and
                  long-term health—not just the next 8-week cycle.
                </p>
              </div>
            </div>
          </div>

          {/* Why People Choose BMSA */}
          <div id="why" className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-4">
              Why People Choose BMSA
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 text-sm sm:text-base text-slate-800">
              <div className="space-y-2">
                <p>✔ AI-powered supplement and stack analysis</p>
                <p>✔ Flags underground &amp; rare compounds by category</p>
                <p>✔ Risk scoring, toxicity hints, and interaction alerts</p>
                <p>✔ Built specifically for lifters, biohackers, &amp; grinders</p>
              </div>
              <div className="space-y-2">
                <p>✔ Harm-reduction &amp; legality focused, not hype driven</p>
                <p>✔ Helps you prepare better questions for real doctors</p>
                <p>✔ Anonymous by design—no public profiles required</p>
                <p>✔ Clear, simple language instead of medical jargon</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/subscribe"
                className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                View Plans &amp; Pricing
              </Link>
              <button
                data-ms-modal="signup"
                className="rounded-full border border-emerald-500/80 px-6 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition"
              >
                Create your account
              </button>
            </div>
          </div>

          {/* FAQ / Extra reassurance */}
          <div id="faq" className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-4">
              Quick Questions
            </h2>

            <div className="space-y-5 text-sm sm:text-base">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Is this medical advice?
                </h3>
                <p className="text-slate-700">
                  No. BMSA gives educational, harm-reduction oriented
                  information only. It cannot replace a doctor, clinic, or
                  emergency care. It&apos;s a planning tool to help you think
                  more clearly and more safely.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Will anyone see what I ask?
                </h3>
                <p className="text-slate-700">
                  The system is designed for private, one-on-one use. There are
                  no public forums or feeds attached to your questions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  I&apos;m totally new. Is this still for me?
                </h3>
                <p className="text-slate-700">
                  Yes. You don&apos;t have to be an expert. You can start with
                  basic questions like “Is this combo dumb?” or “What are safer
                  starting points for my goal?” BMSA will respond in plain,
                  simple language.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-6 border-t border-emerald-900/60 bg-black/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-[11px] text-emerald-100/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Black Market Supplement Advisor.</p>
          <div className="flex gap-4">
            <span>Educational use only. No medical advice.</span>
            {/* If you later add /privacy or /terms, these links will already be here */}
            {/* <Link to="/privacy" className="hover:text-emerald-300">Privacy</Link>
            <Link to="/terms" className="hover:text-emerald-300">Terms</Link> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
