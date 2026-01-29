import { useEffect, useMemo, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

/* =========================
   TYPES
   ========================= */
type GoalType = "Cut" | "Bulk" | "Recomp" | "Health" | "Performance" | "Other";

interface SavedStackItem {
  id: string;
  name: string;
  purpose: string;
  timing: string;
  dose: string;
  cycle: string;
  source: string;
  active: boolean;
  notes: string;
  createdAt: number;
}

interface ReminderItem {
  id: string;
  title: string;
  frequency: string;
  timeOfDay: string;
  enabled: boolean;
  notes: string;
  createdAt: number;
}

/* =========================
   STORAGE KEYS
   ========================= */
const LS_KEYS = {
  notes: "bmsa_notes",
  goal: "bmsa_goal",
  goalText: "bmsa_goal_text",
  stacks: "bmsa_stacks",
  reminders: "bmsa_reminders",
  contraindications: "bmsa_contra",
};

/* =========================
   HELPERS
   ========================= */
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

/* =========================
   COMPONENT
   ========================= */
export default function Profile() {
  /* =========================
     AUTH GUARD (SCRIPT-BASED)
     ========================= */
  useEffect(() => {
    const w = window as any;

    const checkAuth = () => {
      if (w.$memberstackDom) {
        w.$memberstackDom.getCurrentMember().then((member: any) => {
          if (!member) {
            window.location.href = "/login";
          }
        });
      } else {
        setTimeout(checkAuth, 300);
      }
    };

    checkAuth();
  }, []);

  /* =========================
     STATE
     ========================= */
  const [notes, setNotes] = useState("");
  const [goal, setGoal] = useState<GoalType>("Health");
  const [goalText, setGoalText] = useState("");
  const [contra, setContra] = useState("");

  const [stacks, setStacks] = useState<SavedStackItem[]>([]);
  const [stackName, setStackName] = useState("");
  const [stackPurpose, setStackPurpose] = useState("");
  const [stackTiming, setStackTiming] = useState("");
  const [stackDose, setStackDose] = useState("");
  const [stackCycle, setStackCycle] = useState("");
  const [stackSource, setStackSource] = useState("");
  const [stackNotes, setStackNotes] = useState("");

  const [reminders, setReminders] = useState<ReminderItem[]>([]);
  const [remTitle, setRemTitle] = useState("");
  const [remFreq, setRemFreq] = useState("");
  const [remTime, setRemTime] = useState("");
  const [remNotes, setRemNotes] = useState("");

  /* =========================
     LOAD
     ========================= */
  useEffect(() => {
    setNotes(safeParse(localStorage.getItem(LS_KEYS.notes), ""));
    setGoal(safeParse(localStorage.getItem(LS_KEYS.goal), "Health"));
    setGoalText(safeParse(localStorage.getItem(LS_KEYS.goalText), ""));
    setContra(safeParse(localStorage.getItem(LS_KEYS.contraindications), ""));
    setStacks(safeParse(localStorage.getItem(LS_KEYS.stacks), []));
    setReminders(safeParse(localStorage.getItem(LS_KEYS.reminders), []));
  }, []);

  /* =========================
     SAVE
     ========================= */
  useEffect(() => {
    localStorage.setItem(LS_KEYS.notes, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.goal, JSON.stringify(goal));
    localStorage.setItem(LS_KEYS.goalText, JSON.stringify(goalText));
  }, [goal, goalText]);

  useEffect(() => {
    localStorage.setItem(
      LS_KEYS.contraindications,
      JSON.stringify(contra)
    );
  }, [contra]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.stacks, JSON.stringify(stacks));
  }, [stacks]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.reminders, JSON.stringify(reminders));
  }, [reminders]);

  /* =========================
     ACTIONS
     ========================= */
  function addStack() {
    if (!stackName.trim()) return alert("Stack name required");

    setStacks((prev) => [
      {
        id: uid(),
        name: stackName,
        purpose: stackPurpose,
        timing: stackTiming,
        dose: stackDose,
        cycle: stackCycle,
        source: stackSource,
        active: true,
        notes: stackNotes,
        createdAt: Date.now(),
      },
      ...prev,
    ]);

    setStackName("");
    setStackPurpose("");
    setStackTiming("");
    setStackDose("");
    setStackCycle("");
    setStackSource("");
    setStackNotes("");
  }

  function addReminder() {
    if (!remTitle.trim()) return alert("Reminder title required");

    setReminders((prev) => [
      {
        id: uid(),
        title: remTitle,
        frequency: remFreq,
        timeOfDay: remTime,
        enabled: true,
        notes: remNotes,
        createdAt: Date.now(),
      },
      ...prev,
    ]);

    setRemTitle("");
    setRemFreq("");
    setRemTime("");
    setRemNotes("");
  }

  /* =========================
     UI
     ========================= */
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <button
          onClick={() => window.history.back()}
          className="text-emerald-400 mb-6"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-6">
          Your <span className="text-emerald-400">Profile</span>
        </h1>

        {/* GOALS */}
        <div className="mb-8">
          <h2 className="text-xl mb-2">Goals</h2>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value as GoalType)}
            className="w-full bg-slate-900 border p-2 mb-2"
          >
            <option>Cut</option>
            <option>Bulk</option>
            <option>Recomp</option>
            <option>Health</option>
            <option>Performance</option>
            <option>Other</option>
          </select>
          <textarea
            value={goalText}
            onChange={(e) => setGoalText(e.target.value)}
            className="w-full bg-slate-900 border p-3"
            placeholder="Goal details…"
          />
        </div>

        {/* NOTES */}
        <div className="mb-8">
          <h2 className="text-xl mb-2">Journal / Notes</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-slate-900 border p-3"
            rows={6}
          />
        </div>

        {/* CONTRA */}
        <div className="mb-8">
          <h2 className="text-xl mb-2">Contraindications / Avoid</h2>
          <textarea
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            className="w-full bg-slate-900 border p-3"
            rows={5}
          />
        </div>

        {/* STACKS */}
        <div className="mb-8">
          <h2 className="text-xl mb-2">Supplement Stacks</h2>
          <input
            value={stackName}
            onChange={(e) => setStackName(e.target.value)}
            className="w-full bg-slate-900 border p-2 mb-2"
            placeholder="Stack name"
          />
          <input
            value={stackPurpose}
            onChange={(e) => setStackPurpose(e.target.value)}
            className="w-full bg-slate-900 border p-2 mb-2"
            placeholder="Purpose"
          />
          <input
            value={stackTiming}
            onChange={(e) => setStackTiming(e.target.value)}
            className="w-full bg-slate-900 border p-2 mb-2"
            placeholder="Timing"
          />
          <input
            value={stackDose}
            onChange={(e) => setStackDose(e.target.value)}
            className="w-full bg-slate-900 border p-2 mb-2"
            placeholder="Dose"
          />
          <button
            onClick={addStack}
            className="bg-emerald-600 px-4 py-2 rounded"
          >
            Add Stack
          </button>
        </div>

        {/* REMINDERS */}
        <div className="mb-8">
          <h2 className="text-xl mb-2">Reminders</h2>
          <input
            value={remTitle}
            onChange={(e) => setRemTitle(e.target.value)}
            className="w-full bg-slate-900 border p-2 mb-2"
            placeholder="Title"
          />
          <input
            value={remFreq}
            onChange={(e) => setRemFreq(e.target.value)}
            className="w-full bg-slate-900 border p-2 mb-2"
            placeholder="Frequency"
          />
          <button
            onClick={addReminder}
            className="bg-emerald-600 px-4 py-2 rounded"
          >
            Add Reminder
          </button>
        </div>

        <DisclaimerFooter />
      </section>
    </main>
  );
}
