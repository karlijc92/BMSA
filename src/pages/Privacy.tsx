export default function Privacy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold">
            Privacy <span className="text-emerald-400">Policy</span>
          </h1>

          <p className="mt-4 text-gray-300">
            This page is live so links don’t 404. Update the wording anytime.
          </p>

          <div className="mt-10 p-6 rounded-xl border border-emerald-700/40 bg-slate-900/40">
            <p className="text-gray-300">
              BMSA is educational and harm-reduction focused. We do not provide
              medical advice, prescriptions, or sourcing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
