import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const AIRTABLE_BASE_ID = import.meta.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = import.meta.env.AIRTABLE_API_KEY;
const TABLE_NAME = "UserProfile";

export default function Profile() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState<string>("");

  const [recordId, setRecordId] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [trainingGoal, setTrainingGoal] = useState("");

  // Auth
  useEffect(() => {
    const isAuthed = localStorage.getItem("bmsa_logged_in") === "true";
    const storedEmail = localStorage.getItem("bmsa_user_email") || "";
    setAuthorized(isAuthed);
    setEmail(storedEmail);
  }, []);

  // Load profile from Airtable
  useEffect(() => {
    if (!email) return;

    fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}?filterByFormula=${encodeURIComponent(
        `{email}='${email}'`
      )}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.records?.length) {
          const r = data.records[0];
          setRecordId(r.id);
          setNotes(r.fields.notes || "");
          setTrainingGoal(r.fields.training_goal || "");
        } else {
          // create record if missing
          fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fields: { email },
            }),
          })
            .then((res) => res.json())
            .then((r) => setRecordId(r.id));
        }
      });
  }, [email]);

  // Save helper
  const saveField = (fields: Record<string, any>) => {
    if (!recordId) return;
    fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}/${recordId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields }),
      }
    );
  };

  if (authorized === false) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Members only
      </main>
    );
  }

  if (authorized === null) {
    return <main className="min-h-screen bg-black text-white">Loading…</main>;
  }

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

          {/* RESTORED */}
          <a href="/subscription-ai" className="text-emerald-400">
            AI Advisor
          </a>
        </div>

        <p className="text-slate-300 mb-6">Email: {email}</p>

        {/* TRAINING GOAL (controlled, saved) */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-slate-300">
            Training goal
          </label>
          <select
            className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
            value={trainingGoal}
            onChange={(e) => {
              const v = e.target.value;
              setTrainingGoal(v);
              saveField({ training_goal: v });
            }}
          >
            <option value="">Select one</option>
            <option value="Bulk">Bulk</option>
            <option value="Cut">Cut</option>
            <option value="Recomp">Recomp</option>
            <option value="Maintain">Maintain</option>
          </select>
        </div>

        {/* NOTES (explicit save) */}
        <div className="mb-8">
          <h2 className="text-xl mb-2">Notes</h2>
          <textarea
            className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
            rows={8}
            value={notes}
            onChange={(e) => {
              const v = e.target.value;
              setNotes(v);
              saveField({ notes: v });
            }}
            placeholder="Saved to your profile."
          />
        </div>

        <p className="mb-6">
          <a
            href="https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline"
          >
            Manage subscription
          </a>
        </p>

        <button
          onClick={() => {
            localStorage.removeItem("bmsa_logged_in");
            localStorage.removeItem("bmsa_user_email");
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
