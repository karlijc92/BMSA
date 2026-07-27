import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  mode?: "signup" | "login";
};

export default function SignUpForm({ mode = "signup" }: Props) {
  const navigate = useNavigate();
  const isLogin = mode === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (!isLogin && (!firstName || !lastName))) {
      setError("Please complete all required fields.");
      return;
    }

    setIsLoading(true);

    if (isLogin) {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        setError(loginError.message);
        setIsLoading(false);
        return;
      }

      navigate("/profile");
    } else {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        setIsLoading(false);
        return;
      }

      if (data.user) {
        const { error: profileError } = await supabase.from("bmsa_profiles").insert({
          id: data.user.id,
          email: data.user.email,
          is_subscribed: false,
        });

        if (profileError) {
          console.error("Failed to create profile row:", profileError);
        }
      }

      navigate("/subscribe");
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-gradient-to-br from-slate-900 to-black border border-emerald-600/40 rounded-xl p-8 shadow-xl"
    >
      <h1 className="text-2xl font-bold text-white mb-2 text-center">
        {isLogin ? "Member Login" : "Join BMSA"}
      </h1>
      <p className="text-gray-400 text-sm mb-6 text-center">
        {isLogin
          ? "Log in to access your account"
          : "Create your account to access AI-powered supplement guidance"}
      </p>
      {!isLogin && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          <input
            placeholder="First Name"
            className="w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            className="w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      )}
      <input
        placeholder="Email"
        type="email"
        className="w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        className="w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-white mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && (
        <p className="text-red-400 text-sm mb-3 text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-2 rounded-md transition disabled:opacity-50"
      >
        {isLoading ? "Please wait..." : isLogin ? "Log In" : "Create Account"}
      </button>
    </form>
  );
}
