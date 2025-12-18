import React from "react";

function openMemberLogin() {
  // If Memberstack is already ready, open immediately
  // Memberstack v2 exposes $memberstackDom + $memberstackReady
  const w = window as any;

  const tryOpen = () => {
    // Preferred (Memberstack DOM package)
    if (w.$memberstackDom && typeof w.$memberstackDom.openModal === "function") {
      w.$memberstackDom.openModal("LOGIN");
      return true;
    }

    // Fallback (older style)
    if (w.MemberStack && typeof w.MemberStack.openModal === "function") {
      w.MemberStack.openModal();
      return true;
    }

    return false;
  };

  // If ready, open now
  if (w.$memberstackReady === true) {
    if (!tryOpen()) {
      alert("Login system not loaded yet. Please refresh and try again.");
    }
    return;
  }

  // If not ready yet, wait for the Memberstack ready event ONE time, then open.
  const onReady = () => {
    document.removeEventListener("memberstack.ready", onReady);
    if (!tryOpen()) {
      alert("Login system not loaded yet. Please refresh and try again.");
    }
  };

  document.addEventListener("memberstack.ready", onReady);

  // Last-resort: try again after a short delay (covers slow loads)
  setTimeout(() => {
    if (w.$memberstackReady === true) {
      document.removeEventListener("memberstack.ready", onReady);
      tryOpen();
    }
  }, 1200);
}

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
          Navigate the underground supplement world safely with AI-powered guidance, research-backed insights,
          and harm reduction focused answers.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="/subscribe"
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
          >
            Get Started
          </a>

          <button
            type="button"
            onClick={openMemberLogin}
            className="rounded-full border border-emerald-500 px-8 py-3 text-sm font-semibold text-emerald-300 bg-black/40 hover:bg-black/60 transition"
          >
            Member Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
