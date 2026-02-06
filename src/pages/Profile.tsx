import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const AIRTABLE_BASE_ID = import.meta.env.AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = import.meta.env.AIRTABLE_API_KEY;
const TABLE_NAME = "UserProfile";

export default function Profile() {

  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");

  const [recordId, setRecordId] = useState<string | null>(null);

  // Identity
  const [experienceLevel, setExperienceLevel] = useState("");
  const [enhancedStatus, setEnhancedStatus] = useState("");
  const [trainingGoal, setTrainingGoal] = useState("");

  // Body stats
  const [weightValue, setWeightValue] = useState("");
  const [weightUnit, setWeightUnit] = useState("lbs");

  const [heightValue, setHeightValue] = useState("");
  const [heightUnit, setHeightUnit] = useState("in");

  // Training context
  const [yearsTraining, setYearsTraining] = useState("");
  const [competitionPrep, setCompetitionPrep] = useState("");

  // Notes
  const [notes, setNotes] = useState("");

  const [savedMessage, setSavedMessage] = useState("");

  // Auth
  useEffect(() => {
    const isAuthed = localStorage.getItem("bmsa_logged_in") === "true";
    const storedEmail = localStorage.getItem("bmsa_user_email") || "";

    setAuthorized(isAuthed);
    setEmail(storedEmail);

  }, []);

  // Load Airtable profile
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
        const f = r.fields;

        setRecordId(r.id);

        setExperienceLevel(f.experience_level || "");
        setEnhancedStatus(f.enhanced_status || "");
        setTrainingGoal(f.training_goal || "");

        setWeightValue(f.weight_value?.toString() || "");
        setWeightUnit(f.weight_unit || "lbs");

        setHeightValue(f.height_value?.toString() || "");
        setHeightUnit(f.height_unit || "in");

        setYearsTraining(f.years_training || "");
        setCompetitionPrep(f.competition_prep || "");

        setNotes(f.notes || "");

      }

    });

  }, [email]);

  // Save
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

            experience_level: experienceLevel,
            enhanced_status: enhancedStatus,
            training_goal: trainingGoal,

            weight_value: weightValue ? Number(weightValue) : null,
            weight_unit: weightUnit,

            height_value: heightValue ? Number(heightValue) : null,
            height_unit: heightUnit,

            years_training: yearsTraining,
            competition_prep: competitionPrep,

            notes: notes,

          },
        }),
      }
    );

    setSavedMessage("Profile saved successfully ✓");

    setTimeout(() => setSavedMessage(""), 3000);

  };

  if (authorized === false)
    return <main className="min-h-screen bg-black text-white flex items-center justify-center">Members only</main>;

  if (authorized === null)
    return <main className="min-h-screen bg-black text-white flex items-center justify-center">Loading…</main>;

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

        {/* Experience */}
        <div className="mb-4">

          <label>Experience Level</label>

          <select className="w-full bg-slate-900 p-3 rounded"
            value={experienceLevel}
            onChange={e => setExperienceLevel(e.target.value)}
          >
            <option value="">Select</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Enhanced</option>
          </select>

        </div>

        {/* Enhanced Status */}
        <div className="mb-4">

          <label>Enhanced Status</label>

          <select className="w-full bg-slate-900 p-3 rounded"
            value={enhancedStatus}
            onChange={e => setEnhancedStatus(e.target.value)}
          >
            <option value="">Select</option>
            <option>Natural</option>
            <option>Enhanced</option>
            <option>Prefer not to say</option>
          </select>

        </div>

        {/* Weight */}
        <div className="mb-4 flex gap-2">

          <input
            type="number"
            placeholder="Weight"
            className="w-full bg-slate-900 p-3 rounded"
            value={weightValue}
            onChange={e => setWeightValue(e.target.value)}
          />

          <select
            className="bg-slate-900 p-3 rounded"
            value={weightUnit}
            onChange={e => setWeightUnit(e.target.value)}
          >
            <option>lbs</option>
            <option>kg</option>
          </select>

        </div>

        {/* Height */}
        <div className="mb-4 flex gap-2">

          <input
            type="number"
            placeholder="Height"
            className="w-full bg-slate-900 p-3 rounded"
            value={heightValue}
            onChange={e => setHeightValue(e.target.value)}
          />

          <select
            className="bg-slate-900 p-3 rounded"
            value={heightUnit}
            onChange={e => setHeightUnit(e.target.value)}
          >
            <option>in</option>
            <option>cm</option>
          </select>

        </div>

        {/* Training Years */}
        <div className="mb-4">

          <label>Years Training</label>

          <select className="w-full bg-slate-900 p-3 rounded"
            value={yearsTraining}
            onChange={e => setYearsTraining(e.target.value)}
          >
            <option value="">Select</option>
            <option>&lt;1 year</option>
            <option>1–2 years</option>
            <option>3–5 years</option>
            <option>5+ years</option>
          </select>

        </div>

        {/* Competition Prep */}
        <div className="mb-4">

          <label>Competition Prep</label>

          <select className="w-full bg-slate-900 p-3 rounded"
            value={competitionPrep}
            onChange={e => setCompetitionPrep(e.target.value)}
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </select>

        </div>

        {/* Notes */}
        <div className="mb-4">

          <textarea
            className="w-full bg-slate-900 p-3 rounded"
            rows={4}
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />

        </div>

        <button
          onClick={saveProfile}
          className="bg-emerald-500 text-black px-6 py-3 rounded"
        >
          Save Profile
        </button>

        {savedMessage && <p className="mt-4 text-emerald-400">{savedMessage}</p>}

        <DisclaimerFooter />

      </section>

    </main>

  );

}
