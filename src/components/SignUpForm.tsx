import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, User, Mail, Lock, AlertCircle } from "lucide-react";
import { airtableService } from "@/lib/airtable";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return setError("First name required"), false;
    if (!formData.lastName.trim()) return setError("Last name required"), false;
    if (!formData.email.trim()) return setError("Email required"), false;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return setError("Enter a valid email"), false;
    if (!formData.password || formData.password.length < 8)
      return setError("Password must be at least 8 characters"), false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      const w = window as any;
      if (!w.$memberstackDom) throw new Error("Auth not ready");

      await w.$memberstackDom.signup({
        email: formData.email,
        password: formData.password,
        customFields: {
          firstName: formData.firstName,
          lastName: formData.lastName,
        }
      });

      try {
        await airtableService.createUserRecord({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          createdAt: new Date().toISOString(),
          subscriptionPlan: "Pending",
          subscriptionStatus: "Active"
        });
      } catch {}

      window.location.href = "/subscribe";
    } catch (err: any) {
      setError(err.message || "Signup failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800/50 border-emerald-500/20">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-white">Join BMSA</CardTitle>
        <CardDescription className="text-gray-300">
          Create your account to access AI-powered supplement guidance
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert className="bg-red-900/20 border-red-500/30">
              <AlertCircle className="h-4 w-4 text-red-400" />
              <AlertDescription className="text-red-300">{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-300">First Name</Label>
              <Input name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </div>
            <div>
              <Label className="text-gray-300">Last Name</Label>
              <Input name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </div>
          </div>

          <div>
            <Label className="text-gray-300">Email</Label>
            <Input name="email" type="email" value={formData.email} onChange={handleInputChange} />
          </div>

          <div>
            <Label className="text-gray-300">Password</Label>
            <div className="relative">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                className="absolute right-0 top-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-emerald-600">
            {isLoading ? "Creating..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => (window as any).$memberstackDom.openModal("LOGIN")}
            className="text-emerald-400 hover:underline"
          >
            Sign in
          </button>
        </p>
      </CardContent>
    </Card>
  );
}
