import { useEffect, useMemo, useRef, useState } from "react";
import { useMemberstack } from "@memberstack/react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

type GoalType = "Cut" | "Bulk" | "Recomp" | "Health" | "Performance" | "Other";

type ReminderType = "Supplement" | "Training" | "Hydration" | "Sleep" | "Meal" | "Other";

interface SavedStackItem {
  id: string;
  name: string;
  purpose: string;
  dose: string;
  timing: string;
  cycle: string;
  vendor: string;
  active: boolean;
  notes: string;
  createdAt: number;
  updatedAt?: number;
}

interface ReminderItem {
  id: string;
  title: string;
  type: ReminderType;
  frequency: string;
  timeOfDay: string;
  enabled: boolean;
  notes: string;
  createdAt: number;
  updatedAt?: number;
}

interface ProgressSnapshot {
  id: string;
  date: string; // YYYY-MM-DD
  weight: string;
  bodyFat: string;
  waist: string;
  strengthNotes: string; // PRs, lifts, etc.
  recoveryNotes: string; // sleep, soreness, etc.
  createdAt: number;
}

interface ProfileBasics {
  trainingDaysPerWeek: string;
  sleepTargetHours: string;
  hydrationTarget: string; // e.g. "3L" or "100oz"
  stepTarget: string; // e.g. "8,000"
  nutritionFocus: string; // e.g. "High protein"
}

const LS_KEYS = {
  notes: "bmsa_profile_notes_v2",
  goals: "bmsa_profile_goals_v2",
  contraindications: "bmsa_profile_contra_v2",
  stacks: "bmsa_profile_stacks_v2",
  reminders: "bmsa_profile_reminders_v2",
  progress: "bmsa_profile_progress_v1",
  basics: "bmsa_profile_basics_v1",
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

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function Profile() {
  /* =========================
     AUTH / ACCESS
     ========================= */
  const { member, status } = useMemberstack();

  // If you later have Hosted Auth URLs, replace these with those URLs.
  // Keeping these as simple paths avoids changing design.
  const LOGIN_URL = "/login";
  const SIGNUP_URL = "/signup";

  useEffect(() => {
    // If auth is ready and no member exists, show login/signup UI
    // (Do NOT hard redirect here — we show a clean access screen so you can control it.)
  }, [status, member]);

  if (status !== "ready") {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full border border-emerald-500/30 rounded-xl p-6 bg-slate-950">
          <div className="text-2xl font-bold mb-2">Loading Profile…</div>
          <p className="text-slate-300">
            Please wait a second while your account loads.
          </p>
        </div>
      </main>
    );
  }

  if (!member) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-md w-full border border-emerald-500/30 rounded-xl p-6 bg-slate-950">
          <div className="text-2xl font-bold mb-2">
            Please sign in to access your <span className="text-emerald-400">Profile</span>
          </div>
          <p className="text-slate-300 mb-5">
            This page is for members only. Sign in (or create an account) to view your saved stacks,
            reminders, and progress.
          </p>

          <div className="flex gap-3">
            <a
              href={LOGIN_URL}
              className="inline-block rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
            >
              Sign In
            </a>
            <a
              href={SIGNUP_URL}
              className="inline-block rounded-lg border border-emerald-500/40 px-4 py-2 text-emerald-300 hover:bg-emerald-500/10"
            >
              Create Account
            </a>
          </div>

          <div className="mt-4">
            <button onClick={() => window.history.back()} className="text-emerald-400">
              ← Back
            </button>
          </div>

          <div className="mt-6">
            <DisclaimerFooter />
          </div>
        </div>
      </main>
    );
  }

  /* =========================
     SETTINGS
     ========================= */
  const BILLING_SUPPORT_EMAIL = "proofmodepro365@gmail.com";
  const FEATURE_EMAIL = "proofmodepro365@gmail.com";
  const STRIPE_PORTAL = "https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00";

  /* =========================
     STATE
     ========================= */
  const [notes, setNotes] = useState<string>("");

  const [goalType, setGoalType] = useState<GoalType>("Health");
  const [goalText, setGoalText] = useState<string>("");
  const [goalTimeline, setGoalTimeline] = useState<string>("");
