import { useEffect, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";
import { supabase } from "@/lib/supabaseClient";

type StackItem = {
  name: string;
  dosage: string;
  timing: string;
};

type LiftItem = {
  lift_name: string;
  current_max: string;
};

type ProfileData = {
  experience_level: string;
  enhanced_status: string;
  training_goal: string;
  weight_value: string;
  weight_unit: string;
  target_weight_value: string;
  target_weight_unit: string;
  height_value: string;
  height_unit: string;
  body_fat_percentage: string;
  years_training: string;
  competition_prep: string;

  daily_calorie_target: string;
  protein_target_g: string;
  carb_target_g: string;
  fat_target_g: string;
  diet_style: string;

  current_stack: StackItem[];
  supplement_budget: string;

  training_split: string;
  days_per_week: string;
  cardio_frequency: string;
  key_lifts: LiftItem[];

  allergies_or_conditions: string;
  current_medications: string;
  sleep_hours_avg: string;

  notes: string;
};

const emptyProfile: ProfileData = {
  experience_level: "",
  enhanced_status: "",
  training_goal: "",
  weight_value: "",
  weight_unit: "lbs",
  target_weight_value: "",
  target_weight_unit: "lbs",
  height_value: "",
  height_unit: "in",
  body_fat_percentage: "",
  years_training: "",
  competition_prep: "",

  daily_calorie_target: "",
  protein_target_g: "",
  carb_target_g: "",
  fat_target_g: "",
  diet_style: "",

  current_stack: [],
  supplement_budget: "",

  training_split: "",
  days_per_week: "",
  cardio_frequency: "",
  key_lifts: [],

  allergies_or_conditions: "",
  current_medications: "",
  sleep_hours_avg: "",

  notes: "",
};

export default function Profile() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState<ProfileData>(emptyProfile);
  const [draft, setDraft] = useState<ProfileData>(emptyProfile);
  const [editing, setEditing] = useState(false);
  const [savedMsg, setSavedMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        setAuthorized(false);
        setLoading(false);
        return;
      }

      setAuthorized(true);
      setEmail(session.user.email || "");

      const { data, error } = await supabase
        .from("bmsa_profiles")
        .select("*")
        .eq("email", session.user.email)
        .maybeSingle();

      if (error) {
        console.error("LOAD PROFILE ERROR:", error);
        setSavedMsg("Load error: " + error.message);
      }

      if (data) {
        const merged = { ...emptyProfile, ...data };
        setProfile(merged);
        setDraft(merged);
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  const saveProfile = async () => {
    if (!email) return;

    const { error } = await supabase
      .from("bmsa_profiles")
      .upsert({ email, ...draft }, { onConflict: "email" });

    if (error) {
      console.error("SAVE PROFILE ERROR:", error);
      setSavedMsg("Error: " + error.message);
      return;
    }

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

  const addStackItem = () => {
    setDraft({
      ...draft,
      current_stack: [...draft.current_stack, { name: "", dosage: "", timing: "" }],
    });
  };

  const updateStackItem = (index: number, field: keyof StackItem, value: string) => {
    const updated = [...draft.current_stack];
    updated[index] = { ...updated[index], [field]: value };
    setDraft({ ...draft, current_stack: updated });
  };

  const removeStackItem = (index: number) => {
    const updated = draft.current_stack.filter((_, i) => i !== index);
    setDraft({ ...draft, current_stack: updated });
  };

  const addLiftItem = () => {
    setDraft({
      ...draft,
      key_lifts: [...draft.key_lifts, { lift_name: "", current_max: "" }],
    });
  };

  const updateLiftItem = (index: number, field: keyof LiftItem, value: string) => {
    const updated = [...draft.key_lifts];
    updated[index] = { ...updated[index], [field]: value };
    setDraft({ ...draft, key_lifts: updated });
  };

  const removeLiftItem = (index: number) => {
    const updated = draft.key_lifts.filter((_, i) => i !== index);
    setDraft({ ...draft, key_lifts: updated });
  };

  if (loading)
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading…
      </main>
    );

  if (authorized === false)
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Members only
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

        {savedMsg && (
          <p className="mb-4 text-sm font-semibold text-emerald-400">{savedMsg}</p>
        )}

        {!editing && (
          <div className="space-y-6">

            <div className="bg-slate-950 border border-slate-800 p-5 rounded">
              <h2 className="text-xl text-emerald-400 mb-4">
                Body &amp; Training Goals
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
                Target Weight:
                {profile.target_weight_value
                  ? ` ${profile.target_weight_value} ${profile.target_weight_unit}`
                  : " Not set"}
              </p>

              <p>
                Height:
                {profile.height_value
                  ? ` ${profile.height_value} ${profile.height_unit}`
                  : " Not set"}
              </p>

              <p>Body Fat %: {profile.body_fat_percentage || "Not set"}</p>
              <p>Years Training: {profile.years_training || "Not set"}</p>
              <p>Competition Prep: {profile.competition_prep || "Not set"}</p>

              <button
                onClick={startEdit}
                className="mt-4 bg-emerald-500 text-black px-5 py-2 rounded font-semibold"
              >
                Edit Profile
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded">
              <h2 className="text-xl text-emerald-400 mb-4">
                Nutrition &amp; Calories
              </h2>

              <p>Diet Style: {profile.diet_style || "Not set"}</p>
              <p>Daily Calorie Target: {profile.daily_calorie_target ? `${profile.daily_calorie_target} kcal` : "Not set"}</p>
              <p>Protein Target: {profile.protein_target_g ? `${profile.protein_target_g} g` : "Not set"}</p>
              <p>Carb Target: {profile.carb_target_g ? `${profile.carb_target_g} g` : "Not set"}</p>
              <p>Fat Target: {profile.fat_target_g ? `${profile.fat_target_g} g` : "Not set"}</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded">
              <h2 className="text-xl text-emerald-400 mb-4">
                Current Supplement Stack
              </h2>

              {profile.current_stack.length === 0 && (
                <p className="text-slate-400">No supplements added yet</p>
              )}

              {profile.current_stack.map((item, i) => (
                <div key={i} className="border-b border-slate-800 py-2 last:border-b-0">
                  <p className="font-semibold">{item.name || "Unnamed supplement"}</p>
                  <p className="text-slate-400 text-sm">
                    {item.dosage || "No dosage set"} • {item.timing || "No timing set"}
                  </p>
                </div>
              ))}

              <p className="mt-4">
                Monthly Supplement Budget: {profile.supplement_budget ? `$${profile.supplement_budget}` : "Not set"}
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded">
              <h2 className="text-xl text-emerald-400 mb-4">
                Gym Performance
              </h2>

              <p>Training Split: {profile.training_split || "Not set"}</p>
              <p>Days Per Week: {profile.days_per_week || "Not set"}</p>
              <p>Cardio Frequency: {profile.cardio_frequency || "Not set"}</p>

              {profile.key_lifts.length === 0 && (
                <p className="text-slate-400 mt-3">No lifts tracked yet</p>
              )}

              {profile.key_lifts.length > 0 && (
                <div className="mt-3 space-y-1">
                  {profile.key_lifts.map((lift, i) => (
                    <p key={i}>
                      {lift.lift_name || "Unnamed lift"}: {lift.current_max || "—"}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded">
              <h2 className="text-xl text-emerald-400 mb-4">
                Health &amp; Safety
              </h2>

              <p>Allergies / Conditions: {profile.allergies_or_conditions || "None listed"}</p>
              <p>Current Medications: {profile.current_medications || "None listed"}</p>
              <p>Average Sleep: {profile.sleep_hours_avg ? `${profile.sleep_hours_avg} hrs/night` : "Not set"}</p>

              <p className="mt-3">
                Notes: {profile.notes || "None"}
              </p>
            </div>

          </div>
        )}

        {editing && (
          <div className="space-y-6">

            <div className="bg-slate-950 border border-slate-800 p-5 rounded space-y-4">
              <h2 className="text-xl text-emerald-400">Body &amp; Training Goals</h2>

              <select
                value={draft.experience_level}
                onChange={e => setDraft({ ...draft, experience_level: e.target.value })}
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
                onChange={e => setDraft({ ...draft, enhanced_status: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              >
                <option value="">Enhanced Status</option>
                <option>Natural</option>
                <option>Enhanced</option>
                <option>Prefer not to say</option>
              </select>

              <select
                value={draft.training_goal}
                onChange={e => setDraft({ ...draft, training_goal: e.target.value })}
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
                  placeholder="Current Weight"
                  value={draft.weight_value}
                  onChange={e => setDraft({ ...draft, weight_value: e.target.value })}
                  className="w-full bg-slate-900 p-3 rounded"
                />
                <select
                  value={draft.weight_unit}
                  onChange={e => setDraft({ ...draft, weight_unit: e.target.value })}
                  className="bg-slate-900 p-3 rounded"
                >
                  <option>lbs</option>
                  <option>kg</option>
                </select>
              </div>

              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Target Weight"
                  value={draft.target_weight_value}
                  onChange={e => setDraft({ ...draft, target_weight_value: e.target.value })}
                  className="w-full bg-slate-900 p-3 rounded"
                />
                <select
                  value={draft.target_weight_unit}
                  onChange={e => setDraft({ ...draft, target_weight_unit: e.target.value })}
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
                  onChange={e => setDraft({ ...draft, height_value: e.target.value })}
                  className="w-full bg-slate-900 p-3 rounded"
                />
                <select
                  value={draft.height_unit}
                  onChange={e => setDraft({ ...draft, height_unit: e.target.value })}
                  className="bg-slate-900 p-3 rounded"
                >
                  <option>in</option>
                  <option>cm</option>
                </select>
              </div>

              <input
                type="number"
                placeholder="Body Fat % (optional)"
                value={draft.body_fat_percentage}
                onChange={e => setDraft({ ...draft, body_fat_percentage: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              />

              <select
                value={draft.years_training}
                onChange={e => setDraft({ ...draft, years_training: e.target.value })}
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
                onChange={e => setDraft({ ...draft, competition_prep: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              >
                <option value="">Competition Prep</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded space-y-4">
              <h2 className="text-xl text-emerald-400">Nutrition &amp; Calories</h2>

              <select
                value={draft.diet_style}
                onChange={e => setDraft({ ...draft, diet_style: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              >
                <option value="">Diet Style</option>
                <option>Standard</option>
                <option>Keto</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Carnivore</option>
                <option>IIFYM / Flexible Dieting</option>
              </select>

              <input
                type="number"
                placeholder="Daily Calorie Target (kcal)"
                value={draft.daily_calorie_target}
                onChange={e => setDraft({ ...draft, daily_calorie_target: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              />

              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Protein (g)"
                  value={draft.protein_target_g}
                  onChange={e => setDraft({ ...draft, protein_target_g: e.target.value })}
                  className="w-full bg-slate-900 p-3 rounded"
                />
                <input
                  type="number"
                  placeholder="Carbs (g)"
                  value={draft.carb_target_g}
                  onChange={e => setDraft({ ...draft, carb_target_g: e.target.value })}
                  className="w-full bg-slate-900 p-3 rounded"
                />
                <input
                  type="number"
                  placeholder="Fat (g)"
                  value={draft.fat_target_g}
                  onChange={e => setDraft({ ...draft, fat_target_g: e.target.value })}
                  className="w-full bg-slate-900 p-3 rounded"
                />
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded space-y-4">
              <h2 className="text-xl text-emerald-400">Current Supplement Stack</h2>

              {draft.current_stack.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <input
                    type="text"
                    placeholder="Supplement name"
                    value={item.name}
                    onChange={e => updateStackItem(i, "name", e.target.value)}
                    className="w-full bg-slate-900 p-3 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Dosage (e.g. 5g)"
                    value={item.dosage}
                    onChange={e => updateStackItem(i, "dosage", e.target.value)}
                    className="w-full bg-slate-900 p-3 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Timing (e.g. pre-workout)"
                    value={item.timing}
                    onChange={e => updateStackItem(i, "timing", e.target.value)}
                    className="w-full bg-slate-900 p-3 rounded"
                  />
                  <button
                    onClick={() => removeStackItem(i)}
                    className="bg-slate-800 px-3 py-3 rounded text-red-400"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={addStackItem}
                className="bg-slate-800 px-4 py-2 rounded text-emerald-400"
              >
                + Add Supplement
              </button>

              <input
                type="number"
                placeholder="Monthly Supplement Budget ($)"
                value={draft.supplement_budget}
                onChange={e => setDraft({ ...draft, supplement_budget: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              />
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded space-y-4">
              <h2 className="text-xl text-emerald-400">Gym Performance</h2>

              <select
                value={draft.training_split}
                onChange={e => setDraft({ ...draft, training_split: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              >
                <option value="">Training Split</option>
                <option>Full Body</option>
                <option>Upper / Lower</option>
                <option>Push / Pull / Legs</option>
                <option>Bro Split</option>
                <option>Other</option>
              </select>

              <select
                value={draft.days_per_week}
                onChange={e => setDraft({ ...draft, days_per_week: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              >
                <option value="">Training Days Per Week</option>
                <option>1–2</option>
                <option>3–4</option>
                <option>5–6</option>
                <option>7</option>
              </select>

              <select
                value={draft.cardio_frequency}
                onChange={e => setDraft({ ...draft, cardio_frequency: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              >
                <option value="">Cardio Frequency</option>
                <option>None</option>
                <option>1–2x / week</option>
                <option>3–4x / week</option>
                <option>5+ / week</option>
              </select>

              {draft.key_lifts.map((lift, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <input
                    type="text"
                    placeholder="Lift (e.g. Squat)"
                    value={lift.lift_name}
                    onChange={e => updateLiftItem(i, "lift_name", e.target.value)}
                    className="w-full bg-slate-900 p-3 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Current Max (e.g. 315 lbs)"
                    value={lift.current_max}
                    onChange={e => updateLiftItem(i, "current_max", e.target.value)}
                    className="w-full bg-slate-900 p-3 rounded"
                  />
                  <button
                    onClick={() => removeLiftItem(i)}
                    className="bg-slate-800 px-3 py-3 rounded text-red-400"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={addLiftItem}
                className="bg-slate-800 px-4 py-2 rounded text-emerald-400"
              >
                + Add Lift
              </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded space-y-4">
              <h2 className="text-xl text-emerald-400">Health &amp; Safety</h2>

              <textarea
                value={draft.allergies_or_conditions}
                onChange={e => setDraft({ ...draft, allergies_or_conditions: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
                rows={2}
                placeholder="Allergies or health conditions (optional)"
              />

              <textarea
                value={draft.current_medications}
                onChange={e => setDraft({ ...draft, current_medications: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
                rows={2}
                placeholder="Current medications (optional)"
              />

              <input
                type="number"
                placeholder="Average Sleep (hours/night)"
                value={draft.sleep_hours_avg}
                onChange={e => setDraft({ ...draft, sleep_hours_avg: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
              />

              <textarea
                value={draft.notes}
                onChange={e => setDraft({ ...draft, notes: e.target.value })}
                className="w-full bg-slate-900 p-3 rounded"
                rows={4}
                placeholder="Notes"
              />
            </div>

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
