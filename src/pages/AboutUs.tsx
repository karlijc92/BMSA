import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Shield, 
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Award
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ProofMode</span>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="border-2"
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">
            About ProofMode
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Democratizing Skill Verification
            <span className="block text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
              For Everyone, Everywhere
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building the world's first global system to verify undocumented skills, 
            empowering 1.5+ billion people to prove their worth without formal credentials.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-8 h-8 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To create a world where talent is recognized regardless of formal education, 
                documentation, or geographic location. We believe skills matter more than certificates, 
                and everyone deserves the opportunity to prove their capabilities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lightbulb className="w-8 h-8 text-purple-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                A future where skill verification is instant, accurate, and accessible to all. 
                Where refugees, immigrants, self-taught professionals, and underrepresented communities 
                can unlock opportunities through verified competency, not just credentials.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Problem We Solve */}
        <Card className="mb-16 border-0 shadow-lg bg-gradient-to-r from-red-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-3xl text-center mb-6">The Global Challenge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">1.5B+</div>
                <p className="text-gray-700">People lack formal skill documentation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
                <p className="text-gray-700">Of refugees can't prove their qualifications</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">$12T</div>
                <p className="text-gray-700">Annual economic loss from skill mismatch</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Solution */}
        <Card className="mb-16 border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-3xl text-center mb-6">Our Solution: ProofTags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  How It Works
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>AI-powered skill assessments in 100+ categories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Portfolio review and practical demonstrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Expert human validation for accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span>Blockchain-secured digital certificates</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <span>96% accuracy rate with continuous improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <span>Instant verification by employers worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <span>Tamper-proof and fraud-resistant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                    <span>Available in 50+ languages</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us build a world where everyone's skills are recognized and valued
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
              onClick={() => window.location.href = '/assessment'}
            >
              Get Your ProofTag
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4"
              onClick={() => window.location.href = '/#pricing'}
            >
              View Partnership Options
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}