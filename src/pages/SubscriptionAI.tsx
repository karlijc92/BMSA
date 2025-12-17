import { useEffect, useRef, useState, FormEvent } from "react";
import DisclaimerFooter from "@/components/DisclaimerFooter";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function SubscriptionAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your Black Market Supplement Advisor (BMSA). Tell me your fitness goals and what supplements you're curious about.",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;
    if (loading) return;

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/bmsa-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();

      const reply =
        typeof data?.reply === "string"
          ? data.reply
          : "Sorry, I couldn't generate a response.";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error(err);
      setError("There was a problem talking to the AI. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-3xl mx-auto px-4 py-10">
        {/* TOP NAV */}
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            ← Back
          </button>

          <a
            href="/profile"
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Profile
          </a>
        </div>

        <h1 className="text-3xl font-bold mb-2">
          Black Market Supplement Advisor
        </h1>

        {/* MEMBERSTACK GATED CONTENT */}
        <div data-ms-content="underground-supplement-advisor">
          <div className="border border-emerald-500/40 rounded-xl p-4 h-[480px] flex flex-col bg-slate-900/60">
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-emerald-500 text-black"
                        : "bg-slate-800 text-gray-100 border border-slate-700"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-xs text-gray-400 italic">
                  BMSA is thinking...
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about supplements, workouts, or nutrition..."
                className="flex-1 rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg px-4 py-2 text-sm font-semibold bg-emerald-500 text-black disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>

            {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
          </div>
        </div>

        {/* Helper text + Memberstack modals */}
        <div className="mt-6 text-sm text-gray-300">
          <p>
            If you can&apos;t see the chat above, you may need an active{" "}
            <span className="font-semibold text-emerald-400">AIBMSA</span>{" "}
            subscription.
          </p>

          <div className="mt-2 flex gap-2">
            <button
              data-ms-modal="signup"
              className="rounded-lg px-4 py-2 text-sm font-semibold bg-emerald-500 text-black"
            >
              Sign up
            </button>

            <button
              data-ms-modal="login"
              className="rounded-lg px-4 py-2 text-sm border border-slate-600"
            >
              Log in
            </button>
          </div>
        </div>

        <DisclaimerFooter />
      </section>
    </main>
  );
}
