export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold">
            Terms <span className="text-emerald-400">of Use</span>
          </h1>

          <p className="mt-4 text-gray-300">
            This page exists so your links don’t 404. You can expand the wording later.
          </p>

          <div className="mt-10 space-y-4 p-6 rounded-xl border border-emerald-700/40 bg-slate-900/40">
            <p className="text-gray-300">
              BMSA provides educational information only. It is not medical advice.
            </p>
            <p className="text-gray-300">
              You are responsible for your own decisions and outcomes. If you have
              medical conditions or take medications, consult a qualified professional.
            </p>
            <p className="text-gray-300">
              We do not sell, ship, or source supplements or compounds.
            </p>
          </div>

          <p className="mt-12 text-xs text-gray-400">
            By using this site, you agree to these terms.
          </p>
        </div>
      </section>
    </main>
  );
}
