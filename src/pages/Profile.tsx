import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const STORAGE_KEY_PREFIX = "bmsa_profile_";

type ProfileData = {
  experience_level: string;
  enhanced_status: string;
  training_goal: string;
  weight_value: string;
  weight_unit: string;
  height_value: string;
  height_unit: string;
  years_training: string;
  competition_prep: string;
  notes: string;
};

const emptyProfile: ProfileData = {
  experience_level: "",
  enhanced_status: "",
  training_goal: "",
  weight_value: "",
  weight_unit: "lbs",
  height_value: "",
  height_unit: "in",
  years_training: "",
  competition_prep: "",
  notes: "",
};

export default function Profile() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<ProfileData>(emptyProfile);
  const [draft, setDraft] = useState<ProfileData>(emptyProfile);
  const [editing, setEditing] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");

  // Load auth + profile
  useEffect(() => {
    const isAuthed = localStorage.getItem("bmsa_logged_in") === "true";
    const storedEmail = localStorage.getItem("bmsa_user_email") || "";

    setAuthorized(isAuthed);
    setEmail(storedEmail);

    if (storedEmail) {
      const stored = localStorage.getItem(
        STORAGE_KEY_PREFIX + storedEmail
      );

      if (stored) {
        const parsed = JSON.parse(stored);
        setProfile(parsed);
        setDraft(parsed);
      }
    }
  }, []);

  // Save profile
  const saveProfile = () => {
    if (!email) return;

    localStorage.setItem(
      STORAGE_KEY_PREFIX + email,
      JSON.stringify(draft)
    );

    setProfile(draft);
    setEditing(false);
    setSavedMsg("Profile saved successfully ✓");

    setTimeout(() => setSavedMsg(""), 3000);
  };

  const startEdit = () => {
    setDraft(profile);
    setEditing(true);
  };

  const cancelEdit = () => {
    setDraft(profile);
    setEditing(false);
  };

  if (authorized === false)
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Members only
      </main>
    );

  if (authorized === null)
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading…
      </main>
    );

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

        <p className="mb-6 text-slate-300">Email: {email}</p>

        {!editing && (
          <div className="space-y-6">

            <div className="bg-slate-950 border border-slate-800 p-5 rounded">
              <h2 className="text-xl text-emerald-400 mb-4">
                Saved Profile
              </h2>

              <p>Experience Level: {profile.experience_level || "Not set"}</p>
              <p>Enhanced Status: {profile.enhanced_status || "Not set"}</p>
              <p>Training Goal: {profile.training_goal || "Not set"}</p>

              <p>
                Weight:
                {profile.weight_value
                  ? ` ${profile.weight_value} ${profile.weight_unit}`
                  : " Not set"}
              </p>

              <p>
                Height:
                {profile.height_value
                  ? ` ${profile.height_value} ${profile.height_unit}`
                  : " Not set"}
              </p>

              <p>Years Training: {profile.years_training || "Not set"}</p>

              <p>Competition Prep: {profile.competition_prep || "Not set"}</p>

              <p className="mt-3">
                Notes: {profile.notes || "None"}
              </p>

              <button
                onClick={startEdit}
                className="mt-4 bg-emerald-500 text-black px-5 py-2 rounded font-semibold"
              >
                Edit Profile
              </button>

              {savedMsg && (
                <p className="text-emerald-400 mt-3">{savedMsg}</p>
              )}
            </div>

          </div>
        )}

        {editing && (
          <div className="bg-slate-950 border border-slate-800 p-5 rounded space-y-4">

            <select
              value={draft.experience_level}
              onChange={e =>
                setDraft({ ...draft, experience_level: e.target.value })
              }
              className="w-full bg-slate-900 p-3 rounded"
            >
              <option value="">Experience Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Enhanced</option>
            </select>

            <select
              value={draft.enhanced_status}
              onChange={e =>
                setDraft({ ...draft, enhanced_status: e.target.value })
              }
              className="w-full bg-slate-900 p-3 rounded"
            >
              <option value="">Enhanced Status</option>
              <option>Natural</option>
              <option>Enhanced</option>
              <option>Prefer not to say</option>
            </select>

            <select
              value={draft.training_goal}
              onChange={e =>
                setDraft({ ...draft, training_goal: e.target.value })
              }
              className="w-full bg-slate-900 p-3 rounded"
            >
              <option value="">Training Goal</option>
              <option>Bulk</option>
              <option>Cut</option>
              <option>Recomp</option>
              <option>Maintain</option>
            </select>

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Weight"
                value={draft.weight_value}
                onChange={e =>
                  setDraft({ ...draft, weight_value: e.target.value })
                }
                className="w-full bg-slate-900 p-3 rounded"
              />

              <select
                value={draft.weight_unit}
                onChange={e =>
                  setDraft({ ...draft, weight_unit: e.target.value })
                }
                className="bg-slate-900 p-3 rounded"
              >
                <option>lbs</option>
                <option>kg</option>
              </select>
            </div>

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Height"
                value={draft.height_value}
                onChange={e =>
                  setDraft({ ...draft, height_value: e.target.value })
                }
                className="w-full bg-slate-900 p-3 rounded"
              />

              <select
                value={draft.height_unit}
                onChange={e =>
                  setDraft({ ...draft, height_unit: e.target.value })
                }
                className="bg-slate-900 p-3 rounded"
              >
                <option>in</option>
                <option>cm</option>
              </select>
            </div>

            <select
              value={draft.years_training}
              onChange={e =>
                setDraft({ ...draft, years_training: e.target.value })
              }
              className="w-full bg-slate-900 p-3 rounded"
            >
              <option value="">Years Training</option>
              <option>&lt;1 year</option>
              <option>1–2 years</option>
              <option>3–5 years</option>
              <option>5+ years</option>
            </select>

            <select
              value={draft.competition_prep}
              onChange={e =>
                setDraft({ ...draft, competition_prep: e.target.value })
              }
              className="w-full bg-slate-900 p-3 rounded"
            >
              <option value="">Competition Prep</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <textarea
              value={draft.notes}
              onChange={e =>
                setDraft({ ...draft, notes: e.target.value })
              }
              className="w-full bg-slate-900 p-3 rounded"
              rows={5}
              placeholder="Notes"
            />

            <div className="flex gap-3">
              <button
                onClick={saveProfile}
                className="bg-emerald-500 text-black px-5 py-2 rounded"
              >
                Save
              </button>

              <button
                onClick={cancelEdit}
                className="bg-slate-800 px-5 py-2 rounded"
              >
                Cancel
              </button>
            </div>

          </div>
        )}

        <div className="mt-8">
          <a
            href="https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline"
          >
            Manage subscription
          </a>
        </div>

        <div className="mt-10">
          <DisclaimerFooter />
        </div>

      </section>
    </main>
  );
}
