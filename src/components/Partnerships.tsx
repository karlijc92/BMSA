import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Users, Globe, Heart, Send, Building, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";

export default function Partnerships() {
  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    organizationSize: '',
    currentChallenges: '',
    targetAudience: '',
    verificationNeeds: [],
    expectedVolume: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Partnership inquiry submitted! We will review your information and contact you within 2-3 business days.');
  };

  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        verificationNeeds: [...prev.verificationNeeds, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        verificationNeeds: prev.verificationNeeds.filter(item => item !== value)
      }));
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partnership Inquiry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your organization and how ProofMode might help serve your community. 
            We'll evaluate potential partnership opportunities based on mutual value and impact.
          </p>
        </div>

        {/* Partnership Benefits Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Help your community members prove skills and access opportunities through verified credentials
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">Training Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Provide graduates with verifiable credentials that employers recognize and trust
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Employers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Access verified talent beyond traditional credentials and expand your hiring pool
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Inquiry Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Partnership Inquiry Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organization Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="organizationType">Organization Type *</Label>
                  <Select value={formData.organizationType} onValueChange={(value) => setFormData(prev => ({...prev, organizationType: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                      <SelectItem value="training">Training Program/School</SelectItem>
                      <SelectItem value="employer">Employer/Company</SelectItem>
                      <SelectItem value="government">Government Agency</SelectItem>
                      <SelectItem value="platform">Platform/Marketplace</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="organizationSize">Organization Size</Label>
                  <Select value={formData.organizationSize} onValueChange={(value) => setFormData(prev => ({...prev, organizationSize: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">1-50 people</SelectItem>
                      <SelectItem value="medium">51-500 people</SelectItem>
                      <SelectItem value="large">500+ people</SelectItem>
                      <SelectItem value="enterprise">Enterprise (5000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="organizationName">Organization Name *</Label>
                  <Input
                    id="organizationName"
                    value={formData.organizationName}
                    onChange={(e) => setFormData(prev => ({...prev, organizationName: e.target.value}))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({...prev, website: e.target.value}))}
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => setFormData(prev => ({...prev, contactName: e.target.value}))}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                />
              </div>

              {/* Partnership Details */}
              <div>
                <Label htmlFor="currentChallenges">What challenges does your organization face in skill verification or credentialing? *</Label>
                <Textarea
                  id="currentChallenges"
                  rows={3}
                  placeholder="Describe the specific problems you're trying to solve..."
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData(prev => ({...prev, currentChallenges: e.target.value}))}
                  required
                />
              </div>

              <div>
                <Label htmlFor="targetAudience">Who would benefit from ProofMode in your organization? *</Label>
                <Textarea
                  id="targetAudience"
                  rows={3}
                  placeholder="Describe your target audience (refugees, students, job seekers, employees, etc.)"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData(prev => ({...prev, targetAudience: e.target.value}))}
                  required
                />
              </div>

              <div>
                <Label>What types of skills would you need verified? (Select all that apply)</Label>
                <div className="grid md:grid-cols-3 gap-3 mt-2">
                  {[
                    'Technical Skills', 'Creative Skills', 'Language Skills', 
                    'Trade Skills', 'Professional Skills', 'Soft Skills',
                    'Industry Certifications', 'Work Experience', 'Educational Background'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <Checkbox
                        id={skill}
                        checked={formData.verificationNeeds.includes(skill)}
                        onCheckedChange={(checked) => handleCheckboxChange(skill, checked)}
                      />
                      <Label htmlFor={skill} className="text-sm">{skill}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expectedVolume">Expected monthly volume</Label>
                  <Select value={formData.expectedVolume} onValueChange={(value) => setFormData(prev => ({...prev, expectedVolume: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select expected volume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 verifications</SelectItem>
                      <SelectItem value="51-200">51-200 verifications</SelectItem>
                      <SelectItem value="201-500">201-500 verifications</SelectItem>
                      <SelectItem value="500+">500+ verifications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline">Desired timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                      <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                      <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                      <SelectItem value="long">Long-term (6+ months)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Budget considerations</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({...prev, budget: value}))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nonprofit">Non-profit/NGO (seeking discounted rates)</SelectItem>
                    <SelectItem value="small">Small budget ($500-2,000/month)</SelectItem>
                    <SelectItem value="medium">Medium budget ($2,000-10,000/month)</SelectItem>
                    <SelectItem value="large">Large budget ($10,000+/month)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (custom pricing)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  rows={3}
                  placeholder="Any other details about your needs, existing systems, or partnership expectations..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData(prev => ({...prev, additionalInfo: e.target.value}))}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Submit Partnership Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            We review all partnership inquiries carefully and respond within 2-3 business days. 
            Not all inquiries will result in partnerships, but we appreciate your interest in ProofMode.
          </p>
        </div>
      </div>
    </section>
  );
}