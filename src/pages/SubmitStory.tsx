import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, Upload, Send, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SubmitStory() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    profession: '',
    email: '',
    challenge: '',
    solution: '',
    outcome: '',
    testimonial: '',
    rating: 5,
    skills: '',
    beforeIncome: '',
    afterIncome: '',
    timeToSuccess: '',
    photo: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    alert('Thank you for sharing your success story! Our team will review it and may feature it on our website.');
    navigate('/');
  };

  const handleInputChange = (field: string, value: string | number | File | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Share Your Success Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help inspire others by sharing how ProofMode transformed your career. Your story could be featured on our website to motivate talented individuals worldwide.
          </p>
        </div>

        {/* Form */}
        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Tell Us Your Story</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g., Sarah K."
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-sm font-semibold text-gray-700">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., Lagos, Nigeria"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="profession" className="text-sm font-semibold text-gray-700">
                    Profession *
                  </Label>
                  <Input
                    id="profession"
                    value={formData.profession}
                    onChange={(e) => handleInputChange('profession', e.target.value)}
                    placeholder="e.g., Graphic Designer"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Story Details */}
              <div>
                <Label htmlFor="challenge" className="text-sm font-semibold text-gray-700">
                  What was your main challenge before ProofMode? *
                </Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => handleInputChange('challenge', e.target.value)}
                  placeholder="Describe the professional challenges you faced, such as lack of credentials, difficulty proving skills, low client rates, etc."
                  required
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="solution" className="text-sm font-semibold text-gray-700">
                  How did you use ProofMode? *
                </Label>
                <Textarea
                  id="solution"
                  value={formData.solution}
                  onChange={(e) => handleInputChange('solution', e.target.value)}
                  placeholder="Describe what you submitted to ProofMode and how the verification process worked for you."
                  required
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div>
                <Label htmlFor="outcome" className="text-sm font-semibold text-gray-700">
                  What results did you achieve? *
                </Label>
                <Textarea
                  id="outcome"
                  value={formData.outcome}
                  onChange={(e) => handleInputChange('outcome', e.target.value)}
                  placeholder="Describe the positive changes in your career, income, opportunities, etc."
                  required
                  className="mt-2 min-h-[100px]"
                />
              </div>

              {/* Success Metrics */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="beforeIncome" className="text-sm font-semibold text-gray-700">
                    Income Before (Optional)
                  </Label>
                  <Input
                    id="beforeIncome"
                    value={formData.beforeIncome}
                    onChange={(e) => handleInputChange('beforeIncome', e.target.value)}
                    placeholder="e.g., $500/month"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="afterIncome" className="text-sm font-semibold text-gray-700">
                    Income After (Optional)
                  </Label>
                  <Input
                    id="afterIncome"
                    value={formData.afterIncome}
                    onChange={(e) => handleInputChange('afterIncome', e.target.value)}
                    placeholder="e.g., $2000/month"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="timeToSuccess" className="text-sm font-semibold text-gray-700">
                    Time to See Results
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('timeToSuccess', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-week">Within 1 week</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-months">Within 2 months</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="1-year">Within 1 year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="skills" className="text-sm font-semibold text-gray-700">
                  Skills You Got Verified
                </Label>
                <Input
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  placeholder="e.g., Graphic Design, Logo Creation, Brand Identity, Adobe Photoshop"
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
              </div>

              {/* Testimonial */}
              <div>
                <Label htmlFor="testimonial" className="text-sm font-semibold text-gray-700">
                  Your Testimonial Quote *
                </Label>
                <Textarea
                  id="testimonial"
                  value={formData.testimonial}
                  onChange={(e) => handleInputChange('testimonial', e.target.value)}
                  placeholder="A powerful quote about how ProofMode changed your life or career..."
                  required
                  className="mt-2 min-h-[80px]"
                />
              </div>

              {/* Rating */}
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Rate Your Experience with ProofMode *
                </Label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleInputChange('rating', star)}
                      className={`w-8 h-8 ${
                        star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                      } hover:text-yellow-400 transition-colors`}
                    >
                      <Star className="w-full h-full fill-current" />
                    </button>
                  ))}
                  <span className="ml-3 text-sm text-gray-600">
                    {formData.rating} out of 5 stars
                  </span>
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <Label htmlFor="photo" className="text-sm font-semibold text-gray-700">
                  Profile Photo (Optional)
                </Label>
                <div className="mt-2 flex items-center space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById('photo-input')?.click()}
                    className="flex items-center"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <input
                    id="photo-input"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleInputChange('photo', e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  {formData.photo && (
                    <span className="text-sm text-green-600">
                      ✓ {formData.photo.name}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  We may use your photo if we feature your story (with your permission)
                </p>
              </div>

              {/* Privacy Notice */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Privacy & Usage</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• We will contact you before featuring your story publicly</li>
                  <li>• You can request to remain anonymous (first name + last initial only)</li>
                  <li>• Your email will never be shared publicly</li>
                  <li>• You can withdraw permission to use your story at any time</li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit My Story
                </Button>
                <p className="text-gray-500 mt-4 text-sm">
                  Thank you for helping inspire others with your success!
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}