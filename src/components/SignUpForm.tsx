import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Mail, Lock, User, AlertCircle } from "lucide-react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TEMP AUTH: mark user as logged in
      localStorage.setItem("bmsa_logged_in", "true");
      localStorage.setItem("bmsa_user_email", formData.email);

      // AUTH-FIRST FLOW → send to subscribe
      window.location.href = "/subscribe";
    } catch (err) {
      setError("Signup failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md bg-slate-950 border border-emerald-700/40">
      <CardHeader>
        <CardTitle className="text-white text-center">Join BMSA</CardTitle>
        <CardDescription className="text-gray-400 text-center">
          Create your account to access AI-powered supplement guidance
        </CardDescription>
      </CardHeader>

      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-3">
            <div className="w-1/2">
              <Label>First Name</Label>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="w-1/2">
              <Label>Last Name</Label>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label>Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
