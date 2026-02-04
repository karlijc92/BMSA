import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // Mark user as logged in
    localStorage.setItem("bmsa_logged_in", "true");

    // Mark user as subscribed (THIS IS THE KEY LINE)
    localStorage.setItem("bmsa_is_subscribed", "true");

    // Optional timestamp
    localStorage.setItem("bmsa_login_time", Date.now().toString());

    // Send user to AI advisor (now unlocked)
    window.location.replace("/subscription-ai");
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      Completing your access…
    </main>
  );
}
