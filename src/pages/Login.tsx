import SignUpForm from "@/components/SignUpForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <SignUpForm mode="login" />
    </div>
  );
}
