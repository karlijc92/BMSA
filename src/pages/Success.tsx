import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // If already subscribed, do nothing (prevents manual abuse)
    const alreadySubscribed =
      localStorage.getItem("bmsa_is_subscribed") === "true";

    if (!alreadySubscribed) {
      // Stripe just sent the user here → unlock access ONCE
      localStorage.setItem("bmsa_logged_in", "true");
      localStorage.setItem("bmsa_is_subscribed", "true");
      localStorage.setItem("bmsa_login_time", Date.now().toString());
    }

    // Always send user to profile
    window.location.replace("/profile");
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      Completing your access…
    </main>
  );
}
