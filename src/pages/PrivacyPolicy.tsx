import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Mail,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

export default function PrivacyPolicy() {
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

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">
            Legal
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is fundamental to our mission. Learn how we protect and use your information.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6 text-sm text-gray-500">
            <span>Last updated: December 15, 2024</span>
            <span>•</span>
            <span>Effective: January 1, 2024</span>
          </div>
        </div>

        {/* Privacy Commitment */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-3">Our Privacy Commitment</h2>
                <p className="text-green-800 leading-relaxed">
                  ProofMode is built on trust. We collect only the information necessary to verify your skills 
                  and provide our services. We never sell your personal data, and we use industry-leading 
                  security measures to protect your information. Your skills verification data belongs to you.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Database className="w-8 h-8 text-blue-600" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Account Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span>Name, email address, and contact information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span>Account credentials and authentication data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span>Profile information and preferences</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Assessment Data</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                  <span>Assessment responses and scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                  <span>Portfolio files and work samples (with your consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-1" />
                  <span>Skill verification results and ProofTag data</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                  <span>Device information and browser type</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                  <span>IP address and location data (for security)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mt-1" />
                  <span>Usage analytics and performance data</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Eye className="w-8 h-8 text-indigo-600" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Service Delivery</h3>
                <ul className="space-y-2 text-blue-800 text-sm">
                  <li>• Process skill assessments</li>
                  <li>• Generate ProofTags and certificates</li>
                  <li>• Provide verification services</li>
                  <li>• Maintain your account and dashboard</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">Improvement & Security</h3>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• Improve AI assessment accuracy</li>
                  <li>• Detect and prevent fraud</li>
                  <li>• Enhance user experience</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="w-8 h-8 text-orange-600" />
              Information Sharing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-900 mb-2">We Never Sell Your Data</h3>
                  <p className="text-orange-800">
                    ProofMode never sells, rents, or trades your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">We may share information only in these limited cases:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                  <span><strong>With your consent:</strong> When you choose to share ProofTags with employers or on social platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span><strong>Service providers:</strong> Trusted partners who help us deliver our services (under strict confidentiality)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-1" />
                  <span><strong>Legal compliance:</strong> When required by law or to protect our users' safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span><strong>Aggregated data:</strong> Anonymous, statistical data that cannot identify individuals</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Lock className="w-8 h-8 text-red-600" />
              Data Security & Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• End-to-end encryption for all data</li>
                  <li>• Blockchain security for ProofTags</li>
                  <li>• SOC 2 Type II compliance</li>
                  <li>• Regular security audits</li>
                  <li>• Multi-factor authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Operational Security</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Limited access on need-to-know basis</li>
                  <li>• Employee background checks</li>
                  <li>• 24/7 security monitoring</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular staff training</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Shield className="w-8 h-8 text-green-600" />
              Your Privacy Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Access & Control</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• View all your personal data</li>
                    <li>• Download your ProofTags</li>
                    <li>• Update account information</li>
                    <li>• Control sharing preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Deletion & Portability</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Delete your account anytime</li>
                    <li>• Export your data</li>
                    <li>• Remove specific information</li>
                    <li>• Opt out of communications</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Exercise Your Rights</h3>
                <p className="text-blue-800 text-sm mb-4">
                  Contact our privacy team to exercise any of your rights or ask questions about your data.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Privacy Team
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our privacy team is here to help you understand and control your data
            </p>
            <div className="space-y-2 mb-6">
              <p><strong>Privacy Officer:</strong> privacy@proofmode.com</p>
              <p><strong>Data Protection Officer:</strong> dpo@proofmode.com</p>
              <p><strong>General Inquiries:</strong> support@proofmode.com</p>
            </div>
            <Button 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/help'}
            >
              Visit Help Center
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}