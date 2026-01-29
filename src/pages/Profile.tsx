import { useEffect, useMemo, useState } from "react";
import { useMemberstack } from "@memberstack/react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

type GoalType = "Cut" | "Bulk" | "Recomp" | "Health" | "Performance" | "Other";
type FocusType =
  | "Fat loss"
  | "Muscle gain"
  | "Strength"
  | "Recovery"
  | "Energy"
  | "Cognition"
  | "Longevity"
  | "Hormones"
  | "General health"
  | "Other";

type ReminderType = "Supplement" | "Training" | "Hydration" | "Sleep" | "Other";

interface SavedStackItem {
  id: string;
  name: string;
  purpose: string;
  timing: string;
  dose: string; // user-defined
  cycle: string; // user-defined (e.g. 8w on / 4w off)
  source: string; // optional
  active: boolean;
  notes: string;
  createdAt: number;
}

interface ReminderItem {
  id: string;
  title: string;
  type: ReminderType;
  frequency: string; // e.g. daily, M/W/F, etc.
  timeOfDay: string; // optional (morning, pre-workout, 8pm)
  enabled: boolean;
  notes: string;
  createdAt: number;
}

const LS_KEYS = {
  notes: "bmsa_profile_notes_v2",
  goalType: "bmsa_profile_goal_type_v2",
  goalText: "bmsa_profile_goal_text_v2",
  goalTimeline: "bmsa_profile_goal_timeline_v2",
  goalFocus: "bmsa_profile_goal_focus_v2",
  trainingFreq: "bmsa_profile_training_freq_v2",
  bodyMetrics: "bmsa_profile_body_metrics_v2",
  preferences: "bmsa_profile_preferences_v2",
  contraindications: "bmsa_profile_contra_v2",
  avoidCombos: "bmsa_profile_avoid_combos_v2",
  stacks: "bmsa_profile_stacks_v2",
  reminders: "bmsa_profile_reminders_v2",
};

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function now() {
  return Date.now();
}

export default function Profile() {
  /* =========================
     AUTH GUARD — DO NOT TOUCH
     ========================= */
  const { member, status } = useMemberstack();

  useEffect(() => {
    if (status === "ready" && !member) {
      // Force signup/login before profile access
      // (If your signup route is different, change ONLY this path.)
      window.location.href = "/signup";
    }
  }, [status, member]);

  if (status !== "ready") {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading…
      </main>
    );
  }

  if (!member) return null;

  /* =========================
     CONFIG
     ========================= */
  const BILLING_SUPPORT_EMAIL = "proofmodepro365@gmail.com";
  const FEATURE_EMAIL = "proofmodepro365@gmail.com";
  const STRIPE_PORTAL =
    "https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00";

  /* =========================
     STATE
     ========================= */
  // Journal / notes
  const [notes, setNotes] = useState<string>("");

  // Goals & training context
  const [goalType, setGoalType] = useState<GoalType>("Health");
  const [goalText, setGoalText] = useState<string>("");
  const [goalTimeline, setGoalTimeline] = useState<string>(""); // e.g. 8 weeks
  const [goalFocus, setGoalFocus] = useState<FocusType>("General health");
  const [trainingFreq, setTrainingFreq] = useState<string>(""); // e.g. 4 days/week

  // Optional profile context (not medical)
  const [bodyMetrics, setBodyMetrics] = useState<string>(""); // user-defined
  const [preferences, setPreferences] = useState<string>(""); // e.g. caffeine sensitivity, vegan, etc.

  // Contraindications / avoid combos (self-reported)
  const [contra, setContra] = useState<string>("");
  const [avoidCombos, setAvoidCombos] = useState<string>("");

  // Stacks
  const [stacks, setStacks] = useState<SavedStackItem[]>([]);
  const [stackName, setStackName] = useState("");
  const [stackPurpose, setStackPurpose] = useState("");
  const [stackTiming, setStackTiming] = useState("");
  const [stackDose, setStackDose] = useState("");
  const [stackCycle, setStackCycle] = useState("");
  const [stackSource, setStackSource] = useState("");
  const [stackNotes, setStackNotes] = useState("");

  // Reminders
  const [reminders, setReminders] = useState<ReminderItem[]>([]);
  const [remTitle, setRemTitle] = useState("");
  const [remType, setRemType] = useState<ReminderType>("Supplement");
  const [remFreq, setRemFreq] = useState("");
  const [remTimeOfDay, setRemTimeOfDay] = useState("");
  const [remNotes, setRemNotes] = useState("");

  // Feature request modal
  const [featureOpen, setFeatureOpen] = useState(false);
  const [featTitle, setFeatTitle] = useState("");
  const [featDetails, setFeatDetails] = useState("");

  // Export / import
  const [exportOpen, setExportOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState("");

  /* =========================
     LOAD ONCE
     ========================= */
  useEffect(() => {
    setNotes(safeParse<string>(localStorage.getItem(LS_KEYS.notes), ""));

    setGoalType(
      safeParse<GoalType>(localStorage.getItem(LS_KEYS.goalType), "Health")
    );
    setGoalText(
      safeParse<string>(localStorage.getItem(LS_KEYS.goalText), "")
    );
    setGoalTimeline(
      safeParse<string>(localStorage.getItem(LS_KEYS.goalTimeline), "")
    );
    setGoalFocus(
      safeParse<FocusType>(
        localStorage.getItem(LS_KEYS.goalFocus),
        "General health"
      )
    );
    setTrainingFreq(
      safeParse<string>(localStorage.getItem(LS_KEYS.trainingFreq), "")
    );

    setBodyMetrics(
      safeParse<string>(localStorage.getItem(LS_KEYS.bodyMetrics), "")
    );
    setPreferences(
      safeParse<string>(localStorage.getItem(LS_KEYS.preferences), "")
    );

    setContra(
      safeParse<string>(localStorage.getItem(LS_KEYS.contraindications), "")
    );
    setAvoidCombos(
      safeParse<string>(localStorage.getItem(LS_KEYS.avoidCombos), "")
    );

    setStacks(
      safeParse<SavedStackItem[]>(localStorage.getItem(LS_KEYS.stacks), [])
    );
    setReminders(
      safeParse<ReminderItem[]>(localStorage.getItem(LS_KEYS.reminders), [])
    );
  }, []);

  /* =========================
     PERSIST
     ========================= */
  useEffect(() => {
    localStorage.setItem(LS_KEYS.notes, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.goalType, JSON.stringify(goalType));
    localStorage.setItem(LS_KEYS.goalText, JSON.stringify(goalText));
    localStorage.setItem(LS_KEYS.goalTimeline, JSON.stringify(goalTimeline));
    localStorage.setItem(LS_KEYS.goalFocus, JSON.stringify(goalFocus));
    localStorage.setItem(LS_KEYS.trainingFreq, JSON.stringify(trainingFreq));
  }, [goalType, goalText, goalTimeline, goalFocus, trainingFreq]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.bodyMetrics, JSON.stringify(bodyMetrics));
  }, [bodyMetrics]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.preferences, JSON.stringify(preferences));
  }, [preferences]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.contraindications, JSON.stringify(contra));
  }, [contra]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.avoidCombos, JSON.stringify(avoidCombos));
  }, [avoidCombos]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.stacks, JSON.stringify(stacks));
  }, [stacks]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.reminders, JSON.stringify(reminders));
  }, [reminders]);

  /* =========================
     DERIVED
     ========================= */
  const stackCount = stacks.length;
  const activeStackCount = useMemo(
    () => stacks.filter((s) => s.active).length,
    [stacks]
  );
  const reminderCount = reminders.length;
  const enabledReminderCount = useMemo(
    () => reminders.filter((r) => r.enabled).length,
    [reminders]
  );

  const goalLabel = useMemo(() => {
    return goalType === "Other" ? "Other goal" : goalType;
  }, [goalType]);

  const exportPayload = useMemo(() => {
    return {
      version: "bmsa_profile_export_v2",
      exportedAt: new Date().toISOString(),
      notes,
      goalType,
      goalText,
      goalTimeline,
      goalFocus,
      trainingFreq,
      bodyMetrics,
      preferences,
      contraindications: contra,
      avoidCombos,
      stacks,
      reminders,
    };
  }, [
    notes,
    goalType,
    goalText,
    goalTimeline,
    goalFocus,
    trainingFreq,
    bodyMetrics,
    preferences,
    contra,
    avoidCombos,
    stacks,
    reminders,
  ]);

  /* =========================
     ACTIONS
     ========================= */
  function clearAll() {
    if (!confirm("Clear ALL saved Profile data on this device?")) return;

    setNotes("");

    setGoalType("Health");
    setGoalText("");
    setGoalTimeline("");
    setGoalFocus("General health");
    setTrainingFreq("");

    setBodyMetrics("");
    setPreferences("");

    setContra("");
    setAvoidCombos("");

    setStacks([]);
    setReminders([]);

    Object.values(LS_KEYS).forEach((k) => localStorage.removeItem(k));
  }

  function openFeatureModal() {
    setFeatTitle("");
    setFeatDetails("");
    setFeatureOpen(true);
  }

  function sendFeatureRequest() {
    const title = featTitle.trim() || "Feature Request";
    const details = featDetails.trim();

    const subject = encodeURIComponent(`[BMSA] ${title}`);
    const body = encodeURIComponent(
      `Feature request:\n\n${details}\n\n---\nSent from BMSA Profile`
    );

    window.location.href = `mailto:${FEATURE_EMAIL}?subject=${subject}&body=${body}`;
    setFeatureOpen(false);
  }

  function addStack() {
    const name = stackName.trim();
    if (!name) {
      alert("Stack name is required.");
      return;
    }

    const item: SavedStackItem = {
      id: uid(),
      name,
      purpose: stackPurpose.trim(),
      timing: stackTiming.trim(),
      dose: stackDose.trim(),
      cycle: stackCycle.trim(),
      source: stackSource.trim(),
      active: true,
      notes: stackNotes.trim(),
      createdAt: now(),
    };

    setStacks((prev) => [item, ...prev]);

    setStackName("");
    setStackPurpose("");
    setStackTiming("");
    setStackDose("");
    setStackCycle("");
    setStackSource("");
    setStackNotes("");
  }

  function toggleStackActive(id: string) {
    setStacks((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  }

  function deleteStack(id: string) {
    if (!confirm("Delete this stack?")) return;
    setStacks((prev) => prev.filter((s) => s.id !== id));
  }

  function addReminder() {
    const title = remTitle.trim();
    if (!title) {
      alert("Reminder title is required.");
      return;
    }

    const item: ReminderItem = {
      id: uid(),
      title,
      type: remType,
      frequency: remFreq.trim(),
      timeOfDay: remTimeOfDay.trim(),
      enabled: true,
      notes: remNotes.trim(),
      createdAt: now(),
    };

    setReminders((prev) => [item, ...prev]);

    setRemTitle("");
    setRemType("Supplement");
    setRemFreq("");
    setRemTimeOfDay("");
    setRemNotes("");
  }

  function toggleReminder(id: string) {
    setReminders((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );
  }

  function deleteReminder(id: string) {
    if (!confirm("Delete this reminder?")) return;
    setReminders((prev) => prev.filter((r) => r.id !== id));
  }

  function copyExportToClipboard() {
    const text = JSON.stringify(exportPayload, null, 2);
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied profile export to clipboard."))
      .catch(() => alert("Could not copy. You can manually select and copy."));
  }

  function doImport() {
    const raw = importText.trim();
    if (!raw) {
      alert("Paste your export JSON first.");
      return;
    }

    let obj: any;
    try {
      obj = JSON.parse(raw);
    } catch {
      alert("That import text is not valid JSON.");
      return;
    }

    if (!obj || typeof obj !== "object") {
      alert("Invalid import format.");
      return;
    }

    // Minimal safety checks (don’t crash)
    setNotes(typeof obj.notes === "string" ? obj.notes : "");

    setGoalType(
      ["Cut", "Bulk", "Recomp", "Health", "Performance", "Other"].includes(
        obj.goalType
      )
        ? (obj.goalType as GoalType)
        : "Health"
    );
    setGoalText(typeof obj.goalText === "string" ? obj.goalText : "");
    setGoalTimeline(typeof obj.goalTimeline === "string" ? obj.goalTimeline : "");
    setGoalFocus(
      typeof obj.goalFocus === "string" ? (obj.goalFocus as FocusType) : "General health"
    );
    setTrainingFreq(
      typeof obj.trainingFreq === "string" ? obj.trainingFreq : ""
    );

    setBodyMetrics(typeof obj.bodyMetrics === "string" ? obj.bodyMetrics : "");
    setPreferences(typeof obj.preferences === "string" ? obj.preferences : "");

    setContra(
      typeof obj.contraindications === "string" ? obj.contraindications : ""
    );
    setAvoidCombos(typeof obj.avoidCombos === "string" ? obj.avoidCombos : "");

    setStacks(Array.isArray(obj.stacks) ? obj.stacks : []);
    setReminders(Array.isArray(obj.reminders) ? obj.reminders : []);

    setImportOpen(false);
    setImportText("");
    alert("Import complete on this device.");
  }

  /* =========================
     UI HELPERS
     ========================= */
  const card =
    "p-4 border border-emerald-500/30 rounded-xl bg-black/40";
  const label = "text-sm text-slate-300 mb-1";
  const input =
    "w-full bg-slate-900 border border-slate-700 p-2 rounded text-white";
  const textarea =
    "w-full bg-slate-900 border border-slate-700 p-3 rounded text-white";
  const btn =
    "rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700";
  const btnAlt =
    "rounded-lg border border-emerald-500/40 px-4 py-2 text-emerald-300 hover:border-emerald-500/70";

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Top nav */}
        <div className="flex justify-between mb-6">
          <button onClick={() => window.history.back()} className="text-emerald-400">
            ← Back
          </button>
          <div className="flex gap-4">
            <a href="/subscription-ai" className="text-emerald-400">
              AI Advisor
            </a>
            <button onClick={() => setExportOpen(true)} className="text-emerald-400">
              Export
            </button>
            <button onClick={() => setImportOpen(true)} className="text-emerald-400">
              Import
            </button>
            <button onClick={openFeatureModal} className="text-emerald-400">
              Suggest a Feature
            </button>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2">
          Your <span className="text-emerald-400">Profile</span>
        </h1>
        <p className="text-slate-300 mb-6">
          Your personal hub for goals, stacks, reminders, and safety notes. Saved on this device.
        </p>

        {/* Billing / Cancel */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
          <a
            href={STRIPE_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className={btn}
          >
            Manage Billing / Cancel Subscription
          </a>

          <div className="text-sm text-slate-300">
            Billing help:{" "}
            <a href={`mailto:${BILLING_SUPPORT_EMAIL}`} className="text-emerald-400">
              {BILLING_SUPPORT_EMAIL}
            </a>
          </div>

          <button onClick={clearAll} className={btnAlt}>
            Clear Saved Data (Device)
          </button>
        </div>

        {/* Quick stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className={card}>
            <p className="text-slate-300">Saved stacks</p>
            <p className="text-2xl">{stackCount}</p>
            <p className="text-xs text-slate-400">{activeStackCount} active</p>
          </div>
          <div className={card}>
            <p className="text-slate-300">Reminders</p>
            <p className="text-2xl">{reminderCount}</p>
            <p className="text-xs text-slate-400">{enabledReminderCount} enabled</p>
          </div>
          <div className={card}>
            <p className="text-slate-300">Goal</p>
            <p className="text-xl">{goalLabel}</p>
            <p className="text-xs text-slate-400">{goalFocus}</p>
          </div>
          <div className={card}>
            <p className="text-slate-300">Training frequency</p>
            <p className="text-xl">{trainingFreq || "—"}</p>
            <p className="text-xs text-slate-400">self-reported</p>
          </div>
        </div>

        {/* Goals & context */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">
              Goals & Focus <span className="text-emerald-400">Overview</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <div className={label}>Goal type</div>
                <select
                  value={goalType}
                  onChange={(e) => setGoalType(e.target.value as GoalType)}
                  className={input}
                >
                  <option>Cut</option>
                  <option>Bulk</option>
                  <option>Recomp</option>
                  <option>Health</option>
                  <option>Performance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <div className={label}>Primary focus</div>
                <select
                  value={goalFocus}
                  onChange={(e) => setGoalFocus(e.target.value as FocusType)}
                  className={input}
                >
                  <option>Fat loss</option>
                  <option>Muscle gain</option>
                  <option>Strength</option>
                  <option>Recovery</option>
                  <option>Energy</option>
                  <option>Cognition</option>
                  <option>Longevity</option>
                  <option>Hormones</option>
                  <option>General health</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <div className={label}>Timeline (optional)</div>
                <input
                  value={goalTimeline}
                  onChange={(e) => setGoalTimeline(e.target.value)}
                  className={input}
                  placeholder="e.g. 8 weeks, 3 months"
                />
              </div>

              <div>
                <div className={label}>Training frequency (optional)</div>
                <input
                  value={trainingFreq}
                  onChange={(e) => setTrainingFreq(e.target.value)}
                  className={input}
                  placeholder="e.g. 4 days/week"
                />
              </div>
            </div>

            <div className="mt-3">
              <div className={label}>Goal notes (optional)</div>
              <textarea
                value={goalText}
                onChange={(e) => setGoalText(e.target.value)}
                className={textarea}
                rows={4}
                placeholder="What matters most right now? Any constraints? What are you trying to improve?"
              />
            </div>
          </div>

          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">
              Profile Context <span className="text-emerald-400">Optional</span>
            </h2>

            <div className="mb-3">
              <div className={label}>Body / performance metrics (self-reported)</div>
              <textarea
                value={bodyMetrics}
                onChange={(e) => setBodyMetrics(e.target.value)}
                className={textarea}
                rows={4}
                placeholder="e.g. height, weight, training history, PRs, current cardio, sleep avg, resting HR..."
              />
            </div>

            <div>
              <div className={label}>Preferences & sensitivities</div>
              <textarea
                value={preferences}
                onChange={(e) => setPreferences(e.target.value)}
                className={textarea}
                rows={4}
                placeholder="e.g. caffeine sensitive, vegan, no gelatin, avoid stimulants, GI sensitive..."
              />
            </div>
          </div>
        </div>

        {/* Safety notes */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">
              Contraindications <span className="text-emerald-400">Self-reported</span>
            </h2>
            <div className={label}>Past side effects / sensitivities / “not for me” list</div>
            <textarea
              value={contra}
              onChange={(e) => setContra(e.target.value)}
              className={textarea}
              rows={6}
              placeholder="e.g. niacin flush intolerance, anxiety from yohimbine, GI upset from X, headaches from Y..."
            />
          </div>

          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">
              Avoid Combining <span className="text-emerald-400">Notes</span>
            </h2>
            <div className={label}>Things you want to avoid stacking together</div>
            <textarea
              value={avoidCombos}
              onChange={(e) => setAvoidCombos(e.target.value)}
              className={textarea}
              rows={6}
              placeholder="e.g. 'No stimulants after 2pm', 'Avoid stacking multiple stimulants', 'No alcohol + X'..."
            />
          </div>
        </div>

        {/* Stacks */}
        <div className={card + " mb-8"}>
          <h2 className="text-xl font-semibold mb-3">
            Saved Supplement Stacks <span className="text-emerald-400">Library</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <div>
              <div className={label}>Stack name *</div>
              <input
                value={stackName}
                onChange={(e) => setStackName(e.target.value)}
                className={input}
                placeholder="e.g. Cut Stack v1"
              />
            </div>
            <div>
              <div className={label}>Purpose</div>
              <input
                value={stackPurpose}
                onChange={(e) => setStackPurpose(e.target.value)}
                className={input}
                placeholder="e.g. fat loss, energy, recovery"
              />
            </div>
            <div>
              <div className={label}>Timing</div>
              <input
                value={stackTiming}
                onChange={(e) => setStackTiming(e.target.value)}
                className={input}
                placeholder="e.g. AM + pre-workout"
              />
            </div>

            <div>
              <div className={label}>Dose (free text)</div>
              <input
                value={stackDose}
                onChange={(e) => setStackDose(e.target.value)}
                className={input}
                placeholder="e.g. 200mg, 2 caps"
              />
            </div>
            <div>
              <div className={label}>Cycle</div>
              <input
                value={stackCycle}
                onChange={(e) => setStackCycle(e.target.value)}
                className={input}
                placeholder="e.g. 8w on / 4w off"
              />
            </div>
            <div>
              <div className={label}>Source (optional)</div>
              <input
                value={stackSource}
                onChange={(e) => setStackSource(e.target.value)}
                className={input}
                placeholder="e.g. brand/vendor"
              />
            </div>

            <div className="md:col-span-3">
              <div className={label}>Notes</div>
              <textarea
                value={stackNotes}
                onChange={(e) => setStackNotes(e.target.value)}
                className={textarea}
                rows={3}
                placeholder="What’s in it? What to watch for? What worked/didn’t?"
              />
            </div>
          </div>

          <button onClick={addStack} className={btn}>
            Add Stack
          </button>

          <div className="mt-5 space-y-3">
            {stacks.length === 0 ? (
              <p className="text-slate-400">No stacks saved yet.</p>
            ) : (
              stacks.map((s) => (
                <div key={s.id} className="p-4 rounded-xl border border-slate-800 bg-slate-950">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold">
                        {s.name}{" "}
                        {s.active ? (
                          <span className="text-emerald-400 text-sm">(Active)</span>
                        ) : (
                          <span className="text-slate-400 text-sm">(Inactive)</span>
                        )}
                      </div>
                      <div className="text-sm text-slate-300">
                        {s.purpose ? <span><b>Purpose:</b> {s.purpose} · </span> : null}
                        {s.timing ? <span><b>Timing:</b> {s.timing} · </span> : null}
                        {s.dose ? <span><b>Dose:</b> {s.dose} · </span> : null}
                        {s.cycle ? <span><b>Cycle:</b> {s.cycle} · </span> : null}
                        {s.source ? <span><b>Source:</b> {s.source}</span> : null}
                      </div>
                      {s.notes ? (
                        <div className="mt-2 text-slate-200 whitespace-pre-wrap">
                          {s.notes}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex gap-2">
                      <button onClick={() => toggleStackActive(s.id)} className={btnAlt}>
                        {s.active ? "Set Inactive" : "Set Active"}
                      </button>
                      <button onClick={() => deleteStack(s.id)} className={btnAlt}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Reminders */}
        <div className={card + " mb-8"}>
          <h2 className="text-xl font-semibold mb-3">
            Reminders <span className="text-emerald-400">Routine</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <div>
              <div className={label}>Title *</div>
              <input
                value={remTitle}
                onChange={(e) => setRemTitle(e.target.value)}
                className={input}
                placeholder="e.g. Creatine"
              />
            </div>
            <div>
              <div className={label}>Type</div>
              <select
                value={remType}
                onChange={(e) => setRemType(e.target.value as ReminderType)}
                className={input}
              >
                <option>Supplement</option>
                <option>Training</option>
                <option>Hydration</option>
                <option>Sleep</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <div className={label}>Frequency</div>
              <input
                value={remFreq}
                onChange={(e) => setRemFreq(e.target.value)}
                className={input}
                placeholder="e.g. daily, M/W/F"
              />
            </div>

            <div className="md:col-span-3">
              <div className={label}>Time of day (optional)</div>
              <input
                value={remTimeOfDay}
                onChange={(e) => setRemTimeOfDay(e.target.value)}
                className={input}
                placeholder="e.g. morning, pre-workout, 8pm"
              />
            </div>

            <div className="md:col-span-3">
              <div className={label}>Notes</div>
              <textarea
                value={remNotes}
                onChange={(e) => setRemNotes(e.target.value)}
                className={textarea}
                rows={3}
                placeholder="Any notes that help you stay consistent."
              />
            </div>
          </div>

          <button onClick={addReminder} className={btn}>
            Add Reminder
          </button>

          <div className="mt-5 space-y-3">
            {reminders.length === 0 ? (
              <p className="text-slate-400">No reminders saved yet.</p>
            ) : (
              reminders.map((r) => (
                <div key={r.id} className="p-4 rounded-xl border border-slate-800 bg-slate-950">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold">
                        {r.title}{" "}
                        {r.enabled ? (
                          <span className="text-emerald-400 text-sm">(Enabled)</span>
                        ) : (
                          <span className="text-slate-400 text-sm">(Disabled)</span>
                        )}
                      </div>
                      <div className="text-sm text-slate-300">
                        <b>Type:</b> {r.type} ·{" "}
                        <b>Frequency:</b> {r.frequency || "—"} ·{" "}
                        <b>Time:</b> {r.timeOfDay || "—"}
                      </div>
                      {r.notes ? (
                        <div className="mt-2 text-slate-200 whitespace-pre-wrap">
                          {r.notes}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex gap-2">
                      <button onClick={() => toggleReminder(r.id)} className={btnAlt}>
                        {r.enabled ? "Disable" : "Enable"}
                      </button>
                      <button onClick={() => deleteReminder(r.id)} className={btnAlt}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Journal */}
        <div className={card + " mb-8"}>
          <h2 className="text-xl font-semibold mb-3">
            Journal Notes <span className="text-emerald-400">Log</span>
          </h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={textarea}
            placeholder="Training notes, what you noticed, what worked, what didn’t..."
            rows={8}
          />
        </div>

        {/* Feature modal */}
        {featureOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-slate-900 p-5 rounded-lg w-full max-w-lg border border-slate-700">
              <div className="text-lg font-semibold mb-2">Suggest a Feature</div>
              <input
                value={featTitle}
                onChange={(e) => setFeatTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 mb-2 bg-black border border-slate-700 rounded"
              />
              <textarea
                value={featDetails}
                onChange={(e) => setFeatDetails(e.target.value)}
                rows={6}
                className="w-full p-2 bg-black border border-slate-700 rounded"
                placeholder="What would make this better for you?"
              />
              <div className="flex gap-2 mt-3 justify-end">
                <button onClick={() => setFeatureOpen(false)} className={btnAlt}>
                  Cancel
                </button>
                <button onClick={sendFeatureRequest} className={btn}>
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Export modal */}
        {exportOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-slate-900 p-5 rounded-lg w-full max-w-2xl border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold">Export Profile Data</div>
                <button onClick={() => setExportOpen(false)} className="text-emerald-400">
                  Close
                </button>
              </div>
              <p className="text-sm text-slate-300 mb-2">
                This exports your Profile setup (saved on this device). Copy and save it somewhere safe.
              </p>
              <textarea
                readOnly
                value={JSON.stringify(exportPayload, null, 2)}
                className={textarea}
                rows={12}
              />
              <div className="flex gap-2 mt-3 justify-end">
                <button onClick={copyExportToClipboard} className={btn}>
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Import modal */}
        {importOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <div className="bg-slate-900 p-5 rounded-lg w-full max-w-2xl border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-semibold">Import Profile Data</div>
                <button onClick={() => setImportOpen(false)} className="text-emerald-400">
                  Close
                </button>
              </div>
              <p className="text-sm text-slate-300 mb-2">
                Paste a prior export JSON here to restore your Profile on this device.
              </p>
              <textarea
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                className={textarea}
                rows={12}
                placeholder="Paste export JSON here..."
              />
              <div className="flex gap-2 mt-3 justify-end">
                <button onClick={doImport} className={btn}>
                  Import Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <DisclaimerFooter />
      </section>
    </main>
  );
}
