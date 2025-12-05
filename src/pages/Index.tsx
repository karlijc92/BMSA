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
                  className="rounded-full border border-emerald-300/80 bg-black/40 px-6 py-2.5 text-sm font-semibold text-emerald-200
