import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const AIRTABLE_BASE_ID = import.meta.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = import.meta.env.AIRTABLE_API_KEY;
const TABLE_NAME = "UserProfile";

export default function Profile() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");

  const [recordId, setRecordId] = useState<string | null>(null);

  const [trainingGoal, setTrainingGoal] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [notes, setNotes] = useState("");

  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    const isAuthed = localStorage.getItem("bmsa_logged_in") === "true";
    const storedEmail = localStorage.getItem("bmsa_user_email") || "";
    setAuthorized(isAuthed);
    setEmail(storedEmail);
  }, []);

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
      .then(res => res.json())
      .then(data => {
        if (data.records?.length) {
          const r = data.records[0];

          setRecordId(r.id);
          setTrainingGoal(r.fields.training_goal || "");
          setExperienceLevel(r.fields.experience_level || "");
          setNotes(r.fields.notes || "");
        }
      });
  }, [email]);

  const saveProfile = async () => {
    if (!recordId) return;

    await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}/${recordId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            training_goal: trainingGoal,
            experience_level: experienceLevel,
            notes: notes,
          },
        }),
      }
    );

    setSavedMessage("Profile saved successfully ✓");

    setTimeout(() => {
      setSavedMessage("");
    }, 3000);
  };

  if (authorized === false) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Members only
      </main>
    );
  }

  if (authorized === null) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading…
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-10">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">
            Your <span className="text-emerald-400">Profile</span>
          </h1>

          <a href="/subscription-ai" className="text-emerald-400">
            AI Advisor
          </a>
        </div>

        <p className="mb-8 text-slate-300">Email: {email}</p>

        {/* EXPERIENCE */}
        <div className="mb-6">
          <label className="block mb-2">Experience Level</label>

          <select
            className="w-full bg-slate-900 p-3 rounded"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Enhanced">Enhanced</option>
          </select>
        </div>

        {/* GOAL */}
        <div className="mb-6">
          <label className="block mb-2">Training Goal</label>

          <select
            className="w-full bg-slate-900 p-3 rounded"
            value={trainingGoal}
            onChange={(e) => setTrainingGoal(e.target.value)}
          >
            <option value="">Select one</option>
            <option value="Bulk">Bulk</option>
            <option value="Cut">Cut</option>
            <option value="Recomp">Recomp</option>
            <option value="Maintain">Maintain</option>
          </select>
        </div>

        {/* NOTES */}
        <div className="mb-6">
          <label className="block mb-2">Notes</label>

          <textarea
            className="w-full bg-slate-900 p-3 rounded"
            rows={5}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={saveProfile}
          className="bg-emerald-500 text-black px-6 py-3 rounded font-semibold"
        >
          Save Profile
        </button>

        {savedMessage && (
          <p className="mt-4 text-emerald-400">{savedMessage}</p>
        )}

        {/* SAVED PROFILE DISPLAY */}
        <div className="mt-10 border-t border-slate-700 pt-6">
          <h2 className="text-2xl mb-4 text-emerald-400">
            Your Saved Profile
          </h2>

          <p>Experience Level: {experienceLevel || "Not set"}</p>
          <p>Training Goal: {trainingGoal || "Not set"}</p>
          <p>Notes: {notes || "None"}</p>
        </div>

        <DisclaimerFooter />

      </section>
    </main>
  );
}
