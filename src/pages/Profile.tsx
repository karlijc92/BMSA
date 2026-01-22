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
  const STRIPE_PORTAL =
    "https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00";

  const [notes, setNotes] = useState<string>("");
  const [goalType, setGoalType] = useState<GoalType>("Health");
  const [goalText, setGoalText] = useState<string>("");
  const [contra, setContra] = useState<string>("");

  const [stacks, setStacks] = useState<SavedStackItem[]>([]);
  const [stackName, setStackName] = useState("");
  const [stackPurpose, setStackPurpose] = useState("");
  const [stackTiming, setStackTiming] = useState("");
  const [stackNotes, setStackNotes] = useState("");

  const [reminders, setReminders] = useState<ReminderItem[]>([]);
  const [remTitle, setRemTitle] = useState("");
  const [remFreq, setRemFreq] = useState("");
  const [remNotes, setRemNotes] = useState("");

  const [featureOpen, setFeatureOpen] = useState(false);
  const [featTitle, setFeatTitle] = useState("");
  const [featDetails, setFeatDetails] = useState("");

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
      `Feature request:\n\n${details}\n\n---\nSent from BMSA Profile`
    );

    window.location.href = `mailto:${FEATURE_EMAIL}?subject=${subject}&body=${body}`;
    setFeatureOpen(false);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between mb-6">
          <button
            onClick={() => window.history.back()}
            className="text-emerald-400"
          >
            ← Back
          </button>
          <div className="flex gap-4">
            <a href="/subscription-ai" className="text-emerald-400">
              AI Advisor
            </a>
            <button onClick={openFeatureModal} className="text-emerald-400">
              Suggest a Feature
            </button>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">
          Your <span className="text-emerald-400">Profile</span>
        </h1>

        {/* STRIPE BUTTON */}
        <a
          href={STRIPE_PORTAL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
        >
          Manage Billing / Cancel Subscription
        </a>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 border border-emerald-500/30 rounded-xl">
            <p>Saved stacks</p>
            <p className="text-2xl">{stackCount}</p>
          </div>
          <div className="p-4 border border-emerald-500/30 rounded-xl">
            <p>Reminders</p>
            <p className="text-2xl">{reminderCount}</p>
          </div>
          <div className="p-4 border border-emerald-500/30 rounded-xl">
            <p>Billing help</p>
            <a
              href={`mailto:${BILLING_SUPPORT_EMAIL}`}
              className="text-emerald-400"
            >
              {BILLING_SUPPORT_EMAIL}
            </a>
          </div>
        </div>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
          placeholder="Personal notes..."
          rows={8}
        />

        {featureOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80">
            <div className="bg-slate-900 p-5 rounded-lg w-full max-w-lg">
              <input
                value={featTitle}
                onChange={(e) => setFeatTitle(e.target.value)}
                placeholder="Title"
                className="w-full p-2 mb-2 bg-black border"
              />
              <textarea
                value={featDetails}
                onChange={(e) => setFeatDetails(e.target.value)}
                rows={6}
                className="w-full p-2 bg-black border"
              />
              <button
                onClick={sendFeatureRequest}
                className="mt-3 bg-emerald-500 px-4 py-2 rounded"
              >
                Send
              </button>
            </div>
          </div>
        )}

        <DisclaimerFooter />
      </section>
    </main>
  );
}
