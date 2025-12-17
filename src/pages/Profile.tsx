import { useEffect, useMemo, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

type GoalType = "Cut" | "Bulk" | "Recomp" | "Health" | "Performance" | "Other";

interface SavedStackItem {
  id: string;
  name: string;
  purpose: string;
  timing: string;
  notes: string;
  createdAt: number;
}

interface ReminderItem {
  id: string;
  title: string;
  frequency: string;
  notes: string;
  createdAt: number;
}

const LS_KEYS = {
  notes: "bmsa_profile_notes_v1",
  stacks: "bmsa_profile_stacks_v1",
  goals: "bmsa_profile_goals_v1",
  contraindications: "bmsa_profile_contra_v1",
  reminders: "bmsa_profile_reminders_v1",
};

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function Profile() {
  const BILLING_SUPPORT_EMAIL = "proofmodepro365@gmail.com";
  const FEATURE_EMAIL = "proofmodepro365@gmail.com";

  // Notes
  const [notes, setNotes] = useState<string>("");

  // Goals
  const [goalType, setGoalType] = useState<GoalType>("Health");
  const [goalText, setGoalText] = useState<string>("");

  // Contraindications / constraints
  const [contra, setContra] = useState<string>("");

  // Saved stacks
  const [stacks, setStacks] = useState<SavedStackItem[]>([]);
  const [stackName, setStackName] = useState("");
  const [stackPurpose, setStackPurpose] = useState("");
  const [stackTiming, setStackTiming] = useState("");
  const [stackNotes, setStackNotes] = useState("");

  // Reminders
  const [reminders, setReminders] = useState<ReminderItem[]>([]);
  const [remTitle, setRemTitle] = useState("");
  const [remFreq, setRemFreq] = useState("");
  const [remNotes, setRemNotes] = useState("");

  // Feature request modal
  const [featureOpen, setFeatureOpen] = useState(false);
  const [featTitle, setFeatTitle] = useState("");
  const [featDetails, setFeatDetails] = useState("");

  // Load from localStorage once
  useEffect(() => {
    setNotes(safeParse<string>(localStorage.getItem(LS_KEYS.notes), ""));
    setGoalType(
      safeParse<GoalType>(localStorage.getItem(LS_KEYS.goals), "Health")
    );
    setGoalText(
      safeParse<string>(localStorage.getItem(`${LS_KEYS.goals}_text`), "")
    );
    setContra(
      safeParse<string>(localStorage.getItem(LS_KEYS.contraindications), "")
    );
    setStacks(
      safeParse<SavedStackItem[]>(localStorage.getItem(LS_KEYS.stacks), [])
    );
    setReminders(
      safeParse<ReminderItem[]>(localStorage.getItem(LS_KEYS.reminders), [])
    );
  }, []);

  // Persist changes
  useEffect(() => {
    localStorage.setItem(LS_KEYS.notes, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.goals, JSON.stringify(goalType));
    localStorage.setItem(`${LS_KEYS.goals}_text`, JSON.stringify(goalText));
  }, [goalType, goalText]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.contraindications, JSON.stringify(contra));
  }, [contra]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.stacks, JSON.stringify(stacks));
  }, [stacks]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.reminders, JSON.stringify(reminders));
  }, [reminders]);

  const stackCount = stacks.length;
  const reminderCount = reminders.length;

  const goalLabel = useMemo(() => {
    return goalType === "Other" ? "Other goal" : goalType;
  }, [goalType]);

  function addStack() {
    const name = stackName.trim();
    if (!name) return;

    const item: SavedStackItem = {
      id: uid(),
      name,
      purpose: stackPurpose.trim(),
      timing: stackTiming.trim(),
      notes: stackNotes.trim(),
      createdAt: Date.now(),
    };

    setStacks([item, ...stacks]);
    setStackName("");
    setStackPurpose("");
    setStackTiming("");
    setStackNotes("");
  }

  function removeStack(id: string) {
    setStacks(stacks.filter((s) => s.id !== id));
  }

  function addReminder() {
    const title = remTitle.trim();
    if (!title) return;

    const item: ReminderItem = {
      id: uid(),
      title,
      frequency: remFreq.trim(),
      notes: remNotes.trim(),
      createdAt: Date.now(),
    };

    setReminders([item, ...reminders]);
    setRemTitle("");
    setRemFreq("");
    setRemNotes("");
  }

  function removeReminder(id: string) {
    setReminders(reminders.filter((r) => r.id !== id));
  }

  function clearAll() {
    if (!confirm("Clear ALL saved Profile data on this device?")) return;
    setNotes("");
    setGoalType("Health");
    setGoalText("");
    setContra("");
    setStacks([]);
    setReminders([]);
    Object.values(LS_KEYS).forEach((k) => localStorage.removeItem(k));
    localStorage.removeItem(`${LS_KEYS.goals}_text`);
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
      `Feature request / suggestion:\n\n${details}\n\n---\nSent from: BMSA Profile page`
    );

    window.location.href = `mailto:${FEATURE_EMAIL}?subject=${subject}&body=${body}`;
    setFeatureOpen(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <section className="relative max-w-5xl mx-auto px-4 py-10">
        {/* TOP NAV */}
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            ← Back
          </button>

          <div className="flex items-center gap-4">
            <a
              href="/subscription-ai"
              className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              AI Advisor
            </a>

            <button
              type="button"
              onClick={openFeatureModal}
              className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Suggest a Feature
            </button>
          </div>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-extrabold">
            Your <span className="text-emerald-400">Profile</span>
          </h1>
          <p className="mt-3 text-gray-300 max-w-2xl">
            Your personal fitness + supplement hub. Everything here saves on this
            device for now (MVP mode).
          </p>
        </header>

        {/* QUICK ACTIONS */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-xl border border-emerald-500/30 bg-slate-900/50 p-4">
            <p className="text-xs text-gray-400">Saved stacks</p>
            <p className="text-2xl font-bold mt-1">{stackCount}</p>
            <p className="text-sm text-gray-300 mt-2">
              Your go-to supplement setups.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-slate-900/50 p-4">
            <p className="text-xs text-gray-400">Reminders</p>
            <p className="text-2xl font-bold mt-1">{reminderCount}</p>
            <p className="text-sm text-gray-300 mt-2">
              Habits you want to stay on top of.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-slate-900/50 p-4">
            <p className="text-xs text-gray-400">Manage billing</p>
            <p className="text-sm text-gray-300 mt-2">
              To cancel or get billing help, email:
            </p>
            <a
              className="mt-2 inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              href={`mailto:${BILLING_SUPPORT_EMAIL}?subject=BMSA%20Billing%20Help`}
            >
              {BILLING_SUPPORT_EMAIL}
            </a>
            <p className="text-xs text-gray-500 mt-2">
              (Stripe portal link will be added after Memberstack is re-enabled.)
            </p>
          </div>
        </div>

        {/* GOALS + CONTRAINDICATIONS */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-5">
            <h2 className="text-xl font-bold">
              Fitness Goal <span className="text-emerald-400">Focus</span>
            </h2>

            <div className="mt-4 grid gap-3">
              <label className="text-sm text-gray-300">Goal type</label>
              <select
                value={goalType}
                onChange={(e) => setGoalType(e.target.value as GoalType)}
                className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              >
                <option>Cut</option>
                <option>Bulk</option>
                <option>Recomp</option>
                <option>Health</option>
                <option>Performance</option>
                <option>Other</option>
              </select>

              <label className="text-sm text-gray-300 mt-2">
                Goal details (what “{goalLabel}” means for you)
              </label>
              <textarea
                value={goalText}
                onChange={(e) => setGoalText(e.target.value)}
                placeholder="Example: lose 10 lbs, keep muscle, improve sleep, better energy, 3x gym/week..."
                rows={4}
                className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-5">
            <h2 className="text-xl font-bold">
              Safety Notes <span className="text-emerald-400">and Avoid List</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Allergies, meds, sensitivities, “no-go” ingredients, stimulant tolerance, etc.
            </p>

            <textarea
              value={contra}
              onChange={(e) => setContra(e.target.value)}
              placeholder="Example: sensitive to caffeine, avoid yohimbine, on SSRIs, high blood pressure..."
              rows={8}
              className="mt-4 rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        {/* PERSONAL NOTES */}
        <div className="rounded-2xl border border-slate-700 bg-slate-950/40 p-5 mb-10">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold">
              Personal Notes <span className="text-emerald-400">Journal</span>
            </h2>

            <button
              type="button"
              onClick={clearAll}
              className="text-xs font-semibold border border-slate-700 rounded-lg px-3 py-2 hover:border-slate-500"
            >
              Clear all (this device)
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            Log reactions, training notes, energy/sleep notes, etc.
          </p>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Example: Pre-workout makes me anxious. Better sleep when magnesium at night..."
            rows={8}
            className="mt-4 w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-500"
          />
        </div>

        {/* SAVED STACKS + REMINDERS (unchanged from previous version) */}
        {/* You already have these sections in your previous file; keep them as-is if already deployed. */}

        {/* FEATURE REQUEST MODAL */}
        {featureOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">
                    Suggest a <span className="text-emerald-400">Feature</span>
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Tell us what would make this advisor hub more helpful for you.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setFeatureOpen(false)}
                  className="text-sm font-semibold border border-slate-700 rounded-lg px-3 py-2 hover:border-slate-500"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 grid gap-3">
                <input
                  value={featTitle}
                  onChange={(e) => setFeatTitle(e.target.value)}
                  placeholder="Short title (ex: “Workout log calendar”)"
                  className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />

                <textarea
                  value={featDetails}
                  onChange={(e) => setFeatDetails(e.target.value)}
                  placeholder="Describe the feature + why it helps + how you’d use it..."
                  rows={7}
                  className="rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-500"
                />

                <button
                  type="button"
                  onClick={sendFeatureRequest}
                  className="rounded-lg px-4 py-2 text-sm font-semibold bg-emerald-500 text-black"
                >
                  Send suggestion
                </button>

                <p className="text-xs text-gray-500">
                  This opens your email app to send the suggestion to {FEATURE_EMAIL}.
                </p>
              </div>
            </div>
          </div>
        )}

        <DisclaimerFooter />
      </section>
    </main>
  );
}
