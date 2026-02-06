import { useEffect, useMemo, useState } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

/**
 * Supports BOTH env var styles:
 * - VITE_AIRTABLE_BASE_ID / VITE_AIRTABLE_API_KEY (recommended for Vite)
 * - AIRTABLE_BASE_ID / AIRTABLE_API_KEY (your current code)
 */
const AIRTABLE_BASE_ID =
  (import.meta as any).env.VITE_AIRTABLE_BASE_ID ||
  (import.meta as any).env.AIRTABLE_BASE_ID;

const AIRTABLE_API_KEY =
  (import.meta as any).env.VITE_AIRTABLE_API_KEY ||
  (import.meta as any).env.AIRTABLE_API_KEY;

const TABLE_NAME = "UserProfile";

type AirtableRecord = {
  id: string;
  fields: Record<string, any>;
};

export default function Profile() {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");

  const [recordId, setRecordId] = useState<string | null>(null);

  // saved data (truth from Airtable)
  const [saved, setSaved] = useState({
    experience_level: "",
    training_goal: "",
    notes: "",
  });

  // draft data (what user is editing)
  const [draft, setDraft] = useState({
    experience_level: "",
    training_goal: "",
    notes: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "saving" | "saved" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const canUseAirtable = useMemo(() => {
    return Boolean(AIRTABLE_BASE_ID && AIRTABLE_API_KEY);
  }, []);

  // Auth
  useEffect(() => {
    const isAuthed = localStorage.getItem("bmsa_logged_in") === "true";
    const storedEmail = localStorage.getItem("bmsa_user_email") || "";

    setAuthorized(isAuthed);
    setEmail(storedEmail);
  }, []);

  // Airtable helpers
  const airtableHeaders = useMemo(() => {
    return {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    };
  }, []);

  const loadOrCreateRecord = async (userEmail: string) => {
    if (!canUseAirtable) {
      throw new Error(
        "Airtable is not configured. Missing AIRTABLE base id or API key in Vercel env vars."
      );
    }

    // 1) Try to find existing record
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}?filterByFormula=${encodeURIComponent(
      `{email}='${userEmail}'`
    )}`;

    const res = await fetch(url, { headers: airtableHeaders });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Airtable load failed: ${res.status} ${text}`);
    }

    const data = await res.json();

    if (data.records?.length) {
      return data.records[0] as AirtableRecord;
    }

    // 2) Create a record if missing (THIS WAS MISSING BEFORE)
    const createRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`,
      {
        method: "POST",
        headers: airtableHeaders,
        body: JSON.stringify({ fields: { email: userEmail } }),
      }
    );

    if (!createRes.ok) {
      const text = await createRes.text();
      throw new Error(`Airtable create failed: ${createRes.status} ${text}`);
    }

    const created = (await createRes.json()) as AirtableRecord;
    return created;
  };

  const patchRecord = async (id: string, fields: Record<string, any>) => {
    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}/${id}`,
      {
        method: "PATCH",
        headers: airtableHeaders,
        body: JSON.stringify({ fields }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Airtable save failed: ${res.status} ${text}`);
    }

    const updated = (await res.json()) as AirtableRecord;
    return updated;
  };

  // Load profile (and guarantee record exists)
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!email) return;
      setStatus("loading");
      setErrorMsg("");

      try {
        const record = await loadOrCreateRecord(email);
        if (cancelled) return;

        setRecordId(record.id);

        const experience_level = record.fields.experience_level || "";
        const training_goal = record.fields.training_goal || "";
        const notes = record.fields.notes || "";

        const next = { experience_level, training_goal, notes };

        setSaved(next);
        setDraft(next);

        setStatus("idle");
      } catch (e: any) {
        if (cancelled) return;
        setStatus("error");
        setErrorMsg(e?.message || "Unknown error");
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [email]);

  const startEdit = () => {
    setDraft(saved); // reset draft from saved
    setIsEditing(true);
    setErrorMsg("");
  };

  const cancelEdit = () => {
    setDraft(saved);
    setIsEditing(false);
    setErrorMsg("");
  };

  const saveNow = async () => {
    if (!recordId) {
      setStatus("error");
      setErrorMsg(
        "Profile record is not ready yet (recordId missing). Refresh and try again."
      );
      return;
    }

    setStatus("saving");
    setErrorMsg("");

    try {
      const updated = await patchRecord(recordId, {
        experience_level: draft.experience_level || "",
        training_goal: draft.training_goal || "",
        notes: draft.notes || "",
      });

      const nextSaved = {
        experience_level: updated.fields.experience_level || "",
        training_goal: updated.fields.training_goal || "",
        notes: updated.fields.notes || "",
      };

      setSaved(nextSaved);
      setDraft(nextSaved);
      setIsEditing(false);

      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
    } catch (e: any) {
      setStatus("error");
      setErrorMsg(e?.message || "Unknown save error");
    }
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

        <p className="mb-6 text-slate-300">Email: {email}</p>

        {/* STATUS / ERRORS (so you can SEE why it fails) */}
        {!canUseAirtable && (
          <div className="mb-6 p-4 rounded border border-red-700 bg-red-950/40">
            <p className="text-red-300 font-semibold">
              Airtable is NOT configured.
            </p>
            <p className="text-red-200 text-sm mt-1">
              Missing env vars in Vercel. Add either:
              <br />
              <span className="font-mono">
                VITE_AIRTABLE_BASE_ID + VITE_AIRTABLE_API_KEY
              </span>
              <br />
              or
              <br />
              <span className="font-mono">AIRTABLE_BASE_ID + AIRTABLE_API_KEY</span>
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 rounded border border-red-700 bg-red-950/40">
            <p className="text-red-300 font-semibold">Save/Load Error</p>
            <p className="text-red-200 text-sm mt-1">{errorMsg}</p>
          </div>
        )}

        {/* VIEW MODE */}
        {!isEditing && (
          <div className="space-y-6">
            <div className="p-5 rounded border border-slate-800 bg-slate-950/40">
              <h2 className="text-xl font-semibold mb-4 text-emerald-400">
                Saved Profile
              </h2>

              <div className="space-y-2 text-slate-200">
                <p>
                  <span className="text-slate-400">Experience Level:</span>{" "}
                  {saved.experience_level || "Not set"}
                </p>
                <p>
                  <span className="text-slate-400">Training Goal:</span>{" "}
                  {saved.training_goal || "Not set"}
                </p>
                <p>
                  <span className="text-slate-400">Notes:</span>{" "}
                  {saved.notes ? saved.notes : "None"}
                </p>
              </div>

              <div className="mt-4 flex gap-3 items-center">
                <button
                  onClick={startEdit}
                  className="bg-emerald-500 text-black px-5 py-2 rounded font-semibold"
                >
                  Edit Profile
                </button>

                {status === "saving" && (
                  <span className="text-slate-300 text-sm">Saving…</span>
                )}
                {status === "saved" && (
                  <span className="text-emerald-400 text-sm">
                    Saved successfully ✓
                  </span>
                )}
                {status === "loading" && (
                  <span className="text-slate-300 text-sm">Loading…</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* EDIT MODE */}
        {isEditing && (
          <div className="p-5 rounded border border-slate-800 bg-slate-950/40">
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">
              Edit Profile
            </h2>

            {/* Experience */}
            <div className="mb-4">
              <label className="block mb-2 text-slate-300">
                Experience Level
              </label>
              <select
                className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
                value={draft.experience_level}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, experience_level: e.target.value }))
                }
              >
                <option value="">Select one</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Enhanced">Enhanced</option>
              </select>
            </div>

            {/* Training goal */}
            <div className="mb-4">
              <label className="block mb-2 text-slate-300">Training Goal</label>
              <select
                className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
                value={draft.training_goal}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, training_goal: e.target.value }))
                }
              >
                <option value="">Select one</option>
                <option value="Bulk">Bulk</option>
                <option value="Cut">Cut</option>
                <option value="Recomp">Recomp</option>
                <option value="Maintain">Maintain</option>
              </select>
            </div>

            {/* Notes */}
            <div className="mb-5">
              <label className="block mb-2 text-slate-300">Notes</label>
              <textarea
                className="w-full bg-slate-900 border border-slate-700 p-3 rounded"
                rows={6}
                value={draft.notes}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, notes: e.target.value }))
                }
                placeholder="Write notes you want saved in your profile."
              />
              <p className="text-xs text-slate-400 mt-2">
                Tip: Your old notes don’t disappear unless you overwrite them.
                If you want “note history,” that’s a separate feature we can add next.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={saveNow}
                className="bg-emerald-500 text-black px-5 py-2 rounded font-semibold"
                disabled={status === "saving"}
              >
                {status === "saving" ? "Saving…" : "Save"}
              </button>

              <button
                onClick={cancelEdit}
                className="bg-slate-800 text-white px-5 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Billing + Logout (kept) */}
        <div className="mt-8">
          <p className="mb-4">
            <a
              href="https://billing.stripe.com/p/login/bJe5kEgoZ64qc109nVeME00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline"
            >
              Manage subscription
            </a>
          </p>

          <button
            onClick={() => {
              localStorage.removeItem("bmsa_logged_in");
              localStorage.removeItem("bmsa_user_email");
              window.location.href = "/";
            }}
            className="text-sm text-red-400"
          >
            Log out
          </button>
        </div>

        <div className="mt-10">
          <DisclaimerFooter />
        </div>
      </section>
    </main>
  );
}
