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
      { rol
