import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, User, Mail, Lock, AlertCircle, CheckCircle } from "lucide-react";
import { airtableService } from "@/lib/airtable";

interface SignUpFormProps {
  onClose?: () => void;
  onSuccess?: () => void;
}

export default function SignUpForm({ onClose, onSuccess }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) {
      setError("First name is required");
      return false;
    }
    if (!formData.lastName.trim()) {
      setError("Last name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email address is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      // Integrate with Memberstack signup
      if (window.MemberStack) {
        await window.MemberStack.signUp({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName
        });

        // Save to Airtable after successful Memberstack signup
        try {
          await airtableService.createUserRecord({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            createdAt: new Date().toISOString(),
            subscriptionPlan: 'Pending',
            subscriptionStatus: 'Active'
          });
          console.log('User data saved to Airtable successfully');
        } catch (airtableError) {
          console.error('Failed to save to Airtable, but user account created:', airtableError);
          // Don't fail the signup if Airtable fails
        }
        
        setSuccess(true);
        setTimeout(() => {
          onSuccess?.();
        }, 2000);
      } else {
        throw new Error("Authentication service not available");
      }
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm border-emerald-500/20">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Account Created!</h3>
          <p className="text-gray-300 mb-4">
            Welcome to BMSA! You can now access the Underground Supplement Advisor.
          </p>
          <Button 
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm border-emerald-500/20">
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
              <AlertDescription className="text-red-300">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-300 flex items-center">
                <User className="w-4 h-4 mr-2" />
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-gray-700/50 border-emerald-500/30 text-white placeholder-gray-400 focus:border-emerald-400"
                placeholder="John"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-300 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-gray-700/50 border-emerald-500/30 text-white placeholder-gray-400 focus:border-emerald-400"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-700/50 border-emerald-500/30 text-white placeholder-gray-400 focus:border-emerald-400"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300 flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                className="bg-gray-700/50 border-emerald-500/30 text-white placeholder-gray-400 focus:border-emerald-400 pr-10"
                placeholder="Minimum 8 characters"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg font-semibold transition-all duration-300"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{" "}
            <button
              onClick={() => {
                if (window.MemberStack) {
                  window.MemberStack.openModal();
                }
              }}
              className="text-emerald-400 hover:underline"
            >
              Sign in here
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs">
            By creating an account, you agree to our Terms of Service and Privacy Policy. 
            BMSA provides educational information only.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
