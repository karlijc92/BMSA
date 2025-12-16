import { useState, useRef, useEffect, FormEvent } from "react";
import DisclaimerFooter from "../DisclaimerFooter";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function SubscriptionAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your Black Market Supplement Advisor (BMSA). Tell me about your fitness goals and any supplements you're curious about.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

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
        typeof data.reply === "string"
          ? data.reply
          : "Sorry, I couldn't generate a response.";

      setMessages([
        ...newMessages,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      console.error(err);
      setError("There was a problem talking to the AI. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">
          Blac
