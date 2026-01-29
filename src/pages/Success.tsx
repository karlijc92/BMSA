import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    // Mark user as logged in after Stripe checkout
    localStorage.setItem("bmsa_logged_in", "true");

    // Optional timestamp
    localStorage.setItem("bmsa_login_time", Date.now().toString());

    // Send user to profile
    window.location.replace("/profile");
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      Completing your access…
    </main>
  );
}
