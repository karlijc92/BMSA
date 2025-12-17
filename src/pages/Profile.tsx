import DisclaimerFooter from "@/components/DisclaimerFooter";


export default function Profile() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold">
            Member <span className="text-emerald-400">Profile</span>
          </h1>

          <p className="mt-4 text-gray-300">
            Memberstack is paused right now. This page is a placeholder so your
            site routes work without errors.
          </p>
        </div>
      </section>

      <DisclaimerFooter />
    </main>
  );
}
