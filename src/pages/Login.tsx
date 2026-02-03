import SignUpForm from "@/components/SignUpForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <SignUpForm mode="login" />
    </div>
  );
}
