import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const AIRTABLE_BASE_ID = import.meta.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = import.meta.env.AIRTABLE_API_KEY;
const TABLE_NAME = "UserProfile";

export default function Profile() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const [notes, setNotes] = useState("");
  const [trainingGoal, setTrainingGoal] = useState<string>("");

  const [recordId, setRecordId] = useState<string | null>(null);

  // Auth check
  useEffect(() => {
    const isAuthed = localStorage.getItem("bmsa_logged_in") === "true";
    const userEmail = localStorage.getItem("bmsa_user_email");
    setAuthorized(isAuthed);
    setEmail(userEmail);
  }, []);

  // Load profile from Airtable
  useEffect(() => {
    if (!email) return;

    fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}?filterByFormula=${encodeURIComponent(
        `{email}='${email}'`
      )}`,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.records && data.records.length > 0) {
          const record = data.records[0];
          setRecordId(record.id);
          setNotes(record.fields.notes || "");
          setTrainingGoal(record.fields.training_goal || "");
        } else {
          fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ fields: { email } }),
          })
            .then((res) => res.json())
            .then((newRecord) => setRecordId(newRecord.id));
        }
      });
  }, [email]);

  // Save notes (debounced)
  useEffect(() => {
    if (!recordId) return;
    const t = setTimeout(() => {
      fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}/${recordId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fields: { notes } }),
        }
      );
    }, 800);
    return () => clearTimeout(t);
  }, [notes, recordId]);

  // Save training_goal (debounced)
  useEffect(() => {
    if (!recordId) return;
    const t = setTimeout(() => {
      fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}/${recordId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fields: { training_goal: trainingGoal } }),
        }
      );
    }, 600);
    return () => clearTimeout(t);
  }, [trainingGoal, recordId]);

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
        <h1 className="text-4xl font-bold mb-6">
          Your <span className="text-emerald-400">Profile</span>
        </h1>

        <p className="text-slate-300 mb-4">Email: {email}</p>

        {/* Training Goal */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-slate-300">
            Training goal
          </label>
          <select
            className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
            value={trainingGoal}
            onChange={(e) => setTrainingGoal(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="Cut">Cut</option>
            <option value="Bulk">Bulk</option>
            <option value="Recomp">Recomp</option>
            <option value="Maintain">Maintain</option>
          </select>
        </div>

        {/* Notes */}
        <div className="mb-8">
          <h2 className="text-xl mb-2">Notes</h2>
          <textarea
            className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
            rows={8}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="These notes save automatically."
          />
        </div>

        <a
          href="https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 underline"
        >
          Manage subscription
        </a>

        <div className="mt-6">
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
        </div>

        <DisclaimerFooter />
      </section>
    </main>
  );
}
