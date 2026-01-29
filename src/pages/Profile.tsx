import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

export default function Profile() {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("bmsa_notes");
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("bmsa_notes", notes);
  }, [notes]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* 🔒 MEMBERSTACK GATE — THIS FIXES AUTH */}
      <div data-ms-content="underground-supplement-advisor">
        <section className="max-w-5xl mx-auto px-4 py-10">
          <button
            onClick={() => window.history.back()}
            className="text-emerald-400 mb-6"
          >
            ← Back
          </button>

          <div className="flex justify-between mb-6">
            <h1 className="text-4xl font-bold">
              Your <span className="text-emerald-400">Profile</span>
            </h1>

            <a href="/subscription-ai" className="text-emerald-400">
              AI Advisor
            </a>
          </div>

          <a
            href="https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-8 rounded-lg bg-emerald-600 px-4 py-2 hover:bg-emerald-700"
          >
            Manage Billing / Cancel Subscription
          </a>

          <div className="mb-8">
            <h2 className="text-xl mb-2">Journal / Notes</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
              rows={8}
              placeholder="Training notes, supplement reactions, observations…"
            />
            <p className="text-sm text-slate-400 mt-2">
              Saved automatically on this device.
            </p>
          </div>

          <DisclaimerFooter />
        </section>
      </div>
    </main>
  );
}
