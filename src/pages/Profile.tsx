import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

export default function Profile() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    // TEMP auth check (Stripe will set this)
    const isAuthed = localStorage.getItem("bmsa_logged_in") === "true";
    setAuthorized(isAuthed);
  }, []);

  // Block page entirely if not logged in
  if (authorized === false) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full border border-emerald-500/30 rounded-xl p-6 bg-black/60 text-center">
          <h1 className="text-2xl font-bold mb-3">
            Members Only
          </h1>
          <p className="text-slate-300 mb-6">
            You must be logged in to view your profile.
          </p>

          <a
            href="/subscribe"
            className="inline-block bg-emerald-600 px-5 py-2 rounded-lg hover:bg-emerald-700"
          >
            Get Access
          </a>

          <p className="text-xs text-slate-400 mt-4">
            Already purchased? You’ll be logged in automatically after checkout.
          </p>
        </div>
      </main>
    );
  }

  // While checking auth
  if (authorized === null) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading…
      </main>
    );
  }

  // AUTHORIZED VIEW
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <button
          onClick={() => window.history.back()}
          className="text-emerald-400 mb-6"
        >
          ← Back
        </button>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">
            Your <span className="text-emerald-400">Profile</span>
          </h1>

          <a href="/subscription-ai" className="text-emerald-400">
            AI Advisor
          </a>
        </div>

        <p className="text-slate-300 mb-6">
          You’re logged in. This page is private.
        </p>

        <div className="mb-8">
          <h2 className="text-xl mb-2">Notes</h2>
          <textarea
            className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
            rows={8}
            placeholder="Your saved notes will live here."
          />
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("bmsa_logged_in");
            window.location.href = "/";
          }}
          className="text-sm text-red-400"
        >
          Log out
        </button>

        <DisclaimerFooter />
      </section>
    </main>
  );
}
