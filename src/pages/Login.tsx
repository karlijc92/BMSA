import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [msg, setMsg] = useState("Opening login...");

  useEffect(() => {
    let tries = 0;

    const t = setInterval(() => {
      tries += 1;

      if (!window.MemberStack) {
        setMsg("Loading login...");
        if (tries > 80) {
          clearInterval(t);
          setMsg("Login system not loaded. Refresh and try again.");
        }
        return;
      }

      try {
        window.MemberStack.openModal("LOGIN");
      } catch {
        try {
          window.MemberStack.openModal();
        } catch {
          setMsg("Could not open login modal. Refresh and try again.");
        }
      }

      clearInterval(t);
    }, 150);

    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-emerald-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl border border-emerald-500/30 bg-black/40 p-6 text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Member Login</h1>
        <p className="text-slate-300 mb-6">{msg}</p>

        <Button
          className="w-full bg-emerald-500 text-black hover:bg-emerald-400"
          onClick={() => {
            if (!window.MemberStack) return;
            try {
              window.MemberStack.openModal("LOGIN");
            } catch {
              window.MemberStack.openModal();
            }
          }}
        >
          Open Login
        </Button>

        <button
          className="mt-4 text-sm text-emerald-300 underline"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
