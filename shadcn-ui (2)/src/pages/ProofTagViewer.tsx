import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Download, 
  Share2, 
  CheckCircle, 
  Shield, 
  Calendar,
  Hash,
  User,
  Award,
  ExternalLink,
  Search,
  Star,
  Globe,
  Lock
} from 'lucide-react';

export default function ProofTagViewer() {
  const [verificationId, setVerificationId] = useState('');
  const [proofTag, setProofTag] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sample ProofTag data with enhanced design
  const sampleProofTag = {
    id: 'PT-WD-2024-001',
    holderName: 'John Doe',
    skill: 'Web Development',
    score: 92,
    level: 'Advanced',
    issueDate: '2024-01-15',
    expiryDate: '2026-01-15',
    blockchainHash: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
    verificationUrl: 'https://proofmode.com/verify/PT-WD-2024-001',
    assessmentDetails: {
      technicalScore: 95,
      practicalScore: 89,
      portfolioScore: 92,
      totalQuestions: 25,
      correctAnswers: 23,
      timeSpent: '45 minutes',
      filesSubmitted: 3
    },
    skills: [
      'JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'MongoDB'
    ],
    verified: true,
    verifiedBy: 'ProofMode AI + Expert Review',
    aiConfidence: 96,
    reviewerNotes: 'Exceptional portfolio demonstrating advanced full-stack capabilities'
  };

  const handleVerify = () => {
    if (!verificationId.trim()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (verificationId === 'PT-WD-2024-001') {
        setProofTag(sampleProofTag);
      } else {
        setProofTag(null);
      }
      setLoading(false);
    }, 1500);
  };

  const handleDownloadCertificate = () => {
    if (!proofTag) return;

    const certificateContent = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                        PROOFMODE SKILL VERIFICATION CERTIFICATE              ║
╚══════════════════════════════════════════════════════════════════════════════╝

Certificate ID: ${proofTag.id}
Holder: ${proofTag.holderName}
Skill: ${proofTag.skill}
Level: ${proofTag.level}
Overall Score: ${proofTag.score}/100

═══════════════════════════════════════════════════════════════════════════════
ASSESSMENT BREAKDOWN
═══════════════════════════════════════════════════════════════════════════════
Technical Knowledge: ${proofTag.assessmentDetails.technicalScore}/100
Practical Application: ${proofTag.assessmentDetails.practicalScore}/100
Portfolio Review: ${proofTag.assessmentDetails.portfolioScore}/100

Assessment Duration: ${proofTag.assessmentDetails.timeSpent}
Questions Answered: ${proofTag.assessmentDetails.correctAnswers}/${proofTag.assessmentDetails.totalQuestions}
Portfolio Files: ${proofTag.assessmentDetails.filesSubmitted} files submitted
AI Confidence: ${proofTag.aiConfidence}%

═══════════════════════════════════════════════════════════════════════════════
VERIFIED SKILLS
═══════════════════════════════════════════════════════════════════════════════
${proofTag.skills.join(', ')}

═══════════════════════════════════════════════════════════════════════════════
CERTIFICATION DETAILS
═══════════════════════════════════════════════════════════════════════════════
Issue Date: ${new Date(proofTag.issueDate).toLocaleDateString()}
Valid Until: ${new Date(proofTag.expiryDate).toLocaleDateString()}
Verified By: ${proofTag.verifiedBy}
Reviewer Notes: ${proofTag.reviewerNotes}

═══════════════════════════════════════════════════════════════════════════════
BLOCKCHAIN VERIFICATION
═══════════════════════════════════════════════════════════════════════════════
Blockchain Hash: ${proofTag.blockchainHash}
Verification URL: ${proofTag.verificationUrl}

This certificate is issued by ProofMode and secured through blockchain technology.
The holder has demonstrated verified competency in the specified skill through 
our AI-powered assessment system with expert human validation.

To verify this certificate's authenticity, visit:
https://proofmode.com/verify/${proofTag.id}

© 2024 ProofMode. All rights reserved.
This certificate is tamper-proof and cryptographically secured.
    `;

    const element = document.createElement('a');
    const file = new Blob([certificateContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `ProofMode_Certificate_${proofTag.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ProofTag Verification
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enter a ProofTag verification ID to view and verify skill credentials secured by blockchain technology
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              Verify ProofTag
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter Verification ID (e.g., PT-WD-2024-001)"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                className="flex-1 h-12"
              />
              <Button 
                onClick={handleVerify}
                disabled={loading || !verificationId.trim()}
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {loading ? 'Verifying...' : 'Verify'}
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Try sample ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">PT-WD-2024-001</span>
            </p>
          </CardContent>
        </Card>

        {/* ProofTag Display */}
        {proofTag && (
          <div className="space-y-6">
            {/* Main Certificate */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8 text-center relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">ProofMode Skill Certificate</h2>
                  <div className="flex justify-center">
                    <Badge className="bg-green-500 text-white px-6 py-2 text-lg">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Verified & Authentic
                    </Badge>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-8">
                {/* Holder Information */}
                <div className="text-center border-b pb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{proofTag.holderName}</h3>
                  <p className="text-lg text-gray-600 mb-2">has successfully demonstrated expertise in</p>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    {proofTag.skill}
                  </h2>
                  <div className="flex justify-center items-center gap-6 flex-wrap">
                    <Badge variant="outline" className="text-lg px-6 py-3 border-2 border-blue-200">
                      <Star className="w-5 h-5 mr-2 text-yellow-500" />
                      Level: {proofTag.level}
                    </Badge>
                    <Badge variant="outline" className="text-lg px-6 py-3 border-2 border-green-200">
                      <Award className="w-5 h-5 mr-2 text-green-500" />
                      Score: {proofTag.score}/100
                    </Badge>
                    <Badge variant="outline" className="text-lg px-6 py-3 border-2 border-purple-200">
                      <Globe className="w-5 h-5 mr-2 text-purple-500" />
                      AI Confidence: {proofTag.aiConfidence}%
                    </Badge>
                  </div>
                </div>

                {/* Assessment Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Assessment Breakdown
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Technical Knowledge:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                              style={{ width: `${proofTag.assessmentDetails.technicalScore}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-gray-900 w-12">{proofTag.assessmentDetails.technicalScore}/100</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Practical Application:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                              style={{ width: `${proofTag.assessmentDetails.practicalScore}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-gray-900 w-12">{proofTag.assessmentDetails.practicalScore}/100</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Portfolio Review:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                              style={{ width: `${proofTag.assessmentDetails.portfolioScore}%` }}
                            ></div>
                          </div>
                          <span className="font-bold text-gray-900 w-12">{proofTag.assessmentDetails.portfolioScore}/100</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-blue-200">
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Assessment Duration: <span className="font-semibold">{proofTag.assessmentDetails.timeSpent}</span></div>
                        <div>Files Submitted: <span className="font-semibold">{proofTag.assessmentDetails.filesSubmitted}</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                      Verified Skills
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proofTag.skills.map((skill, index) => (
                        <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="bg-white/60 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Expert Review</h5>
                      <p className="text-sm text-gray-700 italic">"{proofTag.reviewerNotes}"</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 space-y-4">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-gray-600" />
                    Certificate Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <Hash className="w-4 h-4 text-gray-500" />
                      <span><strong>Certificate ID:</strong> {proofTag.id}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span><strong>Issued:</strong> {new Date(proofTag.issueDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span><strong>Valid Until:</strong> {new Date(proofTag.expiryDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-gray-500" />
                      <span><strong>Verified By:</strong> {proofTag.verifiedBy}</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-start gap-3">
                      <User className="w-4 h-4 text-gray-500 mt-1" />
                      <div className="flex-1">
                        <strong className="text-xs">Blockchain Hash:</strong>
                        <div className="font-mono text-xs text-gray-600 break-all bg-white p-2 rounded mt-1">
                          {proofTag.blockchainHash}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center pt-6">
                  <Button 
                    onClick={handleDownloadCertificate}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-3"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Certificate
                  </Button>
                  <Button variant="outline" className="px-8 py-3 border-2">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Certificate
                  </Button>
                  <Button variant="outline" className="px-8 py-3 border-2">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View on Blockchain
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Verification Notice */}
            <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Verification Guarantee</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      This ProofTag has been verified through ProofMode's advanced AI-powered assessment system 
                      combined with expert human review. The certificate is cryptographically secured on blockchain 
                      technology and can be independently verified at any time. Our verification process maintains 
                      a 96% accuracy rate with continuous monitoring for fraud prevention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* No Results */}
        {verificationId && !loading && !proofTag && (
          <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="text-red-600 mb-4">
                <ExternalLink className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-3">
                ProofTag Not Found
              </h3>
              <p className="text-red-800 mb-4">
                The verification ID "<span className="font-mono bg-red-100 px-2 py-1 rounded">{verificationId}</span>" could not be found in our system.
              </p>
              <p className="text-red-700 text-sm">
                Please check the ID for typos and try again, or contact the certificate holder for the correct verification ID.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}