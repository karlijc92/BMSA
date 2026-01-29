import { useEffect, useMemo, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

type GoalType = "Cut" | "Bulk" | "Recomp" | "Health" | "Performance" | "Other";

type ReminderType = "Supplement" | "Training" | "Hydration" | "Sleep" | "Other";

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
  type: ReminderType;
  frequency: string;
  timeOfDay: string;
  enabled: boolean;
  notes: string;
  createdAt: number;
}

const LS_KEYS = {
  notes: "bmsa_profile_notes_v3",
  goalType: "bmsa_profile_goal_type_v3",
  goalText: "bmsa_profile_goal_text_v3",
  goalTimeline: "bmsa_profile_goal_timeline_v3",
  goalFocus: "bmsa_profile_goal_focus_v3",
  trainingFreq: "bmsa_profile_training_freq_v3",
  bodyMetrics: "bmsa_profile_body_metrics_v3",
  preferences: "bmsa_profile_preferences_v3",
  contraindications: "bmsa_profile_contra_v3",
  avoidCombos: "bmsa_profile_avoid_combos_v3",
  stacks: "bmsa_profile_stacks_v3",
  reminders: "bmsa_profile_reminders_v3",
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
  const FEATURE_EMAIL = "proofmodepro365@gmail.com";
  const STRIPE_PORTAL = "https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00";

  /* =========================
     AUTH STATE (SCRIPT-BASED)
     ========================= */
  const [msReady, setMsReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  // Try to detect Memberstack + auth status without crashing builds
  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      const w = window as any;

      if (w && w.$memberstackDom && typeof w.$memberstackDom.getCurrentMember === "function") {
        if (cancelled) return;
        setMsReady(true);

        try {
          const member = await w.$memberstackDom.getCurrentMember();
          if (cancelled) return;
          setIsAuthed(!!member);
          setAuthChecked(true);
          return;
        } catch {
          if (cancelled) return;
          setIsAuthed(false);
          setAuthChecked(true);
          return;
        }
      }

      // Not ready yet → try again
      if (!cancelled) setTimeout(check, 300);
    };

    check();

    return () => {
      cancelled = true;
    };
  }, []);

  function openLogin() {
    const w = window as any;
    if (w?.$memberstackDom?.openModal) {
      w.$memberstackDom.openModal("LOGIN");
      return;
    }
    alert("Login system is still loading. Refresh once and try again.");
  }

  function openSignup() {
    const w = window as any;
    if (w?.$memberstackDom?.openModal) {
      w.$memberstackDom.openModal("SIGNUP");
      return;
    }
    alert("Signup system is still loading. Refresh once and try again.");
  }

  /* =========================
     PROFILE STATE
     ========================= */
  const [notes, setNotes] = useState<string>("");

  const [goalType, setGoalType] = useState<GoalType>("Health");
  const [goalText, setGoalText] = useState<string>("");
  const [goalTimeline, setGoalTimeline] = useState<string>("");
  const [goalFocus, setGoalFocus] = useState<string>("General health");
  const [trainingFreq, setTrainingFreq] = useState<string>("");

  const [bodyMetrics, setBodyMetrics] = useState<string>("");
  const [preferences, setPreferences] = useState<string>("");

  const [contra, setContra] = useState<string>("");
  const [avoidCombos, setAvoidCombos] = useState<string>("");

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
  const [remType, setRemType] = useState<ReminderType>("Supplement");
  const [remFreq, setRemFreq] = useState("");
  const [remTimeOfDay, setRemTimeOfDay] = useState("");
  const [remNotes, setRemNotes] = useState("");

  const [featureOpen, setFeatureOpen] = useState(false);
  const [featTitle, setFeatTitle] = useState("");
  const [featDetails, setFeatDetails] = useState("");

  /* =========================
     LOAD ONCE
     ========================= */
  useEffect(() => {
    setNotes(safeParse<string>(localStorage.getItem(LS_KEYS.notes), ""));

    setGoalType(safeParse<GoalType>(localStorage.getItem(LS_KEYS.goalType), "Health"));
    setGoalText(safeParse<string>(localStorage.getItem(LS_KEYS.goalText), ""));
    setGoalTimeline(safeParse<string>(localStorage.getItem(LS_KEYS.goalTimeline), ""));
    setGoalFocus(safeParse<string>(localStorage.getItem(LS_KEYS.goalFocus), "General health"));
    setTrainingFreq(safeParse<string>(localStorage.getItem(LS_KEYS.trainingFreq), ""));

    setBodyMetrics(safeParse<string>(localStorage.getItem(LS_KEYS.bodyMetrics), ""));
    setPreferences(safeParse<string>(localStorage.getItem(LS_KEYS.preferences), ""));

    setContra(safeParse<string>(localStorage.getItem(LS_KEYS.contraindications), ""));
    setAvoidCombos(safeParse<string>(localStorage.getItem(LS_KEYS.avoidCombos), ""));

    setStacks(safeParse<SavedStackItem[]>(localStorage.getItem(LS_KEYS.stacks), []));
    setReminders(safeParse<ReminderItem[]>(localStorage.getItem(LS_KEYS.reminders), []));
  }, []);

  /* =========================
     SAVE
     ========================= */
  useEffect(() => localStorage.setItem(LS_KEYS.notes, JSON.stringify(notes)), [notes]);

  useEffect(() => {
    localStorage.setItem(LS_KEYS.goalType, JSON.stringify(goalType));
    localStorage.setItem(LS_KEYS.goalText, JSON.stringify(goalText));
    localStorage.setItem(LS_KEYS.goalTimeline, JSON.stringify(goalTimeline));
    localStorage.setItem(LS_KEYS.goalFocus, JSON.stringify(goalFocus));
    localStorage.setItem(LS_KEYS.trainingFreq, JSON.stringify(trainingFreq));
  }, [goalType, goalText, goalTimeline, goalFocus, trainingFreq]);

  useEffect(() => localStorage.setItem(LS_KEYS.bodyMetrics, JSON.stringify(bodyMetrics)), [bodyMetrics]);
  useEffect(() => localStorage.setItem(LS_KEYS.preferences, JSON.stringify(preferences)), [preferences]);
  useEffect(() => localStorage.setItem(LS_KEYS.contraindications, JSON.stringify(contra)), [contra]);
  useEffect(() => localStorage.setItem(LS_KEYS.avoidCombos, JSON.stringify(avoidCombos)), [avoidCombos]);
  useEffect(() => localStorage.setItem(LS_KEYS.stacks, JSON.stringify(stacks)), [stacks]);
  useEffect(() => localStorage.setItem(LS_KEYS.reminders, JSON.stringify(reminders)), [reminders]);

  /* =========================
     ACTIONS
     ========================= */
  function sendFeatureRequest() {
    const title = featTitle.trim() || "Feature Request";
    const details = featDetails.trim();

    const subject = encodeURIComponent(`[BMSA] ${title}`);
    const body = encodeURIComponent(`Feature request:\n\n${details}\n\n---\nSent from BMSA Profile`);

    window.location.href = `mailto:${FEATURE_EMAIL}?subject=${subject}&body=${body}`;
    setFeatureOpen(false);
  }

  function addStack() {
    const name = stackName.trim();
    if (!name) return alert("Stack name is required.");

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
      createdAt: Date.now(),
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
    setStacks((prev) => prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)));
  }

  function deleteStack(id: string) {
    if (!confirm("Delete this stack?")) return;
    setStacks((prev) => prev.filter((s) => s.id !== id));
  }

  function addReminder() {
    const title = remTitle.trim();
    if (!title) return alert("Reminder title is required.");

    const item: ReminderItem = {
      id: uid(),
      title,
      type: remType,
      frequency: remFreq.trim(),
      timeOfDay: remTimeOfDay.trim(),
      enabled: true,
      notes: remNotes.trim(),
      createdAt: Date.now(),
    };

    setReminders((prev) => [item, ...prev]);

    setRemTitle("");
    setRemType("Supplement");
    setRemFreq("");
    setRemTimeOfDay("");
    setRemNotes("");
  }

  function toggleReminder(id: string) {
    setReminders((prev) => prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)));
  }

  function deleteReminder(id: string) {
    if (!confirm("Delete this reminder?")) return;
    setReminders((prev) => prev.filter((r) => r.id !== id));
  }

  const card = "p-4 border border-emerald-500/30 rounded-xl bg-black/40";
  const label = "text-sm text-slate-300 mb-1";
  const input = "w-full bg-slate-900 border border-slate-700 p-2 rounded text-white";
  const textarea = "w-full bg-slate-900 border border-slate-700 p-3 rounded text-white";
  const btn = "rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700";
  const btnAlt = "rounded-lg border border-emerald-500/40 px-4 py-2 text-emerald-300 hover:border-emerald-500/70";

  const stackCount = stacks.length;
  const reminderCount = reminders.length;

  /* =========================
     LOCK SCREEN (NOT LOGGED IN)
     ========================= */
  if (authChecked && !isAuthed) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-lg w-full border border-emerald-500/30 rounded-2xl p-6 bg-black/60">
          <h1 className="text-3xl font-bold mb-2">
            Members Only <span className="text-emerald-400">Access</span>
          </h1>
          <p className="text-slate-300 mb-5">
            You must sign in to view your Profile.
          </p>

          <div className="flex flex-col gap-3">
            <button onClick={openLogin} className={btn}>
              Log In
            </button>
            <button onClick={openSignup} className={btnAlt}>
              Sign Up
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-4">
            If the buttons don’t open a login box, refresh once. (This is Memberstack loading.)
          </p>

          <div className="mt-6">
            <DisclaimerFooter />
          </div>
        </div>
      </main>
    );
  }

  // While we are still checking auth, show a simple loading screen
  if (!authChecked) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading…
      </main>
    );
  }

  /* =========================
     MAIN UI (LOGGED IN)
     ========================= */
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Top row */}
        <div className="flex justify-between mb-6">
          <button onClick={() => window.history.back()} className="text-emerald-400">
            ← Back
          </button>

          <div className="flex gap-4">
            <a href="/subscription-ai" className="text-emerald-400">
              AI Advisor
            </a>
            <button onClick={() => setFeatureOpen(true)} className="text-emerald-400">
              Suggest a Feature
            </button>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2">
          Your <span className="text-emerald-400">Profile</span>
        </h1>
        <p className="text-slate-300 mb-6">Saved automatically on this device.</p>

        {/* Billing (no email shown) */}
        <a href={STRIPE_PORTAL} target="_blank" rel="noopener noreferrer" className={btn + " inline-block mb-8"}>
          Manage Billing / Cancel Subscription
        </a>

        {/* Quick stats */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className={card}>
            <p className="text-slate-300">Saved stacks</p>
            <p className="text-2xl">{stackCount}</p>
          </div>
          <div className={card}>
            <p className="text-slate-300">Reminders</p>
            <p className="text-2xl">{reminderCount}</p>
          </div>
        </div>

        {/* Goals */}
        <div className={card + " mb-8"}>
          <h2 className="text-xl font-semibold mb-3">
            Goals <span className="text-emerald-400">Overview</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <div className={label}>Goal type</div>
              <select value={goalType} onChange={(e) => setGoalType(e.target.value as GoalType)} className={input}>
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
              <input value={goalFocus} onChange={(e) => setGoalFocus(e.target.value)} className={input} placeholder="e.g. recovery, energy, strength" />
            </div>

            <div>
              <div className={label}>Timeline (optional)</div>
              <input value={goalTimeline} onChange={(e) => setGoalTimeline(e.target.value)} className={input} placeholder="e.g. 8 weeks" />
            </div>

            <div>
              <div className={label}>Training frequency (optional)</div>
              <input value={trainingFreq} onChange={(e) => setTrainingFreq(e.target.value)} className={input} placeholder="e.g. 4 days/week" />
            </div>
          </div>

          <div className="mt-3">
            <div className={label}>Goal notes</div>
            <textarea value={goalText} onChange={(e) => setGoalText(e.target.value)} className={textarea} rows={4} placeholder="What matters most right now?" />
          </div>
        </div>

        {/* Profile context */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">Body / performance context</h2>
            <textarea value={bodyMetrics} onChange={(e) => setBodyMetrics(e.target.value)} className={textarea} rows={5} placeholder="Self-reported: height/weight, training history, PRs, sleep avg..." />
          </div>

          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">Preferences & sensitivities</h2>
            <textarea value={preferences} onChange={(e) => setPreferences(e.target.value)} className={textarea} rows={5} placeholder="Caffeine sensitive, avoid stimulants, vegan, GI sensitivity..." />
          </div>
        </div>

        {/* Safety notes */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">Contraindications</h2>
            <textarea value={contra} onChange={(e) => setContra(e.target.value)} className={textarea} rows={5} placeholder="Past side effects / things that didn’t work for you." />
          </div>

          <div className={card}>
            <h2 className="text-xl font-semibold mb-3">Avoid combining</h2>
            <textarea value={avoidCombos} onChange={(e) => setAvoidCombos(e.target.value)} className={textarea} rows={5} placeholder="Things you prefer not to stack together." />
          </div>
        </div>

        {/* Stacks */}
        <div className={card + " mb-8"}>
          <h2 className="text-xl font-semibold mb-3">
            Supplement Stacks <span className="text-emerald-400">Library</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <div>
              <div className={label}>Stack name *</div>
              <input value={stackName} onChange={(e) => setStackName(e.target.value)} className={input} placeholder="e.g. Cut Stack v1" />
            </div>
            <div>
              <div className={label}>Purpose</div>
              <input value={stackPurpose} onChange={(e) => setStackPurpose(e.target.value)} className={input} placeholder="fat loss, recovery, energy" />
            </div>
            <div>
              <div className={label}>Timing</div>
              <input value={stackTiming} onChange={(e) => setStackTiming(e.target.value)} className={input} placeholder="AM, pre-workout, PM" />
            </div>

            <div>
              <div className={label}>Dose</div>
              <input value={stackDose} onChange={(e) => setStackDose(e.target.value)} className={input} placeholder="e.g. 200mg / 2 caps" />
            </div>
            <div>
              <div className={label}>Cycle</div>
              <input value={stackCycle} onChange={(e) => setStackCycle(e.target.value)} className={input} placeholder="e.g. 8w on / 4w off" />
            </div>
            <div>
              <div className={label}>Source</div>
              <input value={stackSource} onChange={(e) => setStackSource(e.target.value)} className={input} placeholder="brand/vendor (optional)" />
            </div>

            <div className="md:col-span-3">
              <div className={label}>Notes</div>
              <textarea value={stackNotes} onChange={(e) => setStackNotes(e.target.value)} className={textarea} rows={3} placeholder="What’s in it? What to watch for?" />
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
                      {s.notes ? <div className="mt-2 text-slate-200 whitespace-pre-wrap">{s.notes}</div> : null}
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
              <input value={remTitle} onChange={(e) => setRemTitle(e.target.value)} className={input} placeholder="e.g. Creatine" />
            </div>
            <div>
              <div className={label}>Type</div>
              <select value={remType} onChange={(e) => setRemType(e.target.value as ReminderType)} className={input}>
                <option>Supplement</option>
                <option>Training</option>
                <option>Hydration</option>
                <option>Sleep</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <div className={label}>Frequency</div>
              <input value={remFreq} onChange={(e) => setRemFreq(e.target.value)} className={input} placeholder="daily, M/W/F" />
            </div>

            <div className="md:col-span-3">
              <div className={label}>Time of day</div>
              <input value={remTimeOfDay} onChange={(e) => setRemTimeOfDay(e.target.value)} className={input} placeholder="morning, pre-workout, 8pm" />
            </div>

            <div className="md:col-span-3">
              <div className={label}>Notes</div>
              <textarea value={remNotes} onChange={(e) => setRemNotes(e.target.value)} className={textarea} rows={3} placeholder="Anything to help you stay consistent." />
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
                        <b>Type:</b> {r.type} · <b>Frequency:</b> {r.frequency || "—"} · <b>Time:</b> {r.timeOfDay || "—"}
                      </div>
                      {r.notes ? <div className="mt-2 text-slate-200 whitespace-pre-wrap">{r.notes}</div> : null}
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

        <DisclaimerFooter />
      </section>
    </main>
  );
}
