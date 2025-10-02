import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { CheckCircle, Upload, FileText, Brain, Paperclip } from 'lucide-react';

export default function Assessment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [customSkill, setCustomSkill] = useState('');
  const [answers, setAnswers] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const skillCategories = {
    'Technology & Development': [
      'Web Development', 'Mobile App Development', 'Software Engineering', 'Data Science',
      'Machine Learning/AI', 'Cybersecurity', 'Cloud Computing', 'DevOps',
      'Database Administration', 'Network Administration', 'UI/UX Design', 'Game Development',
      'Blockchain Development', 'Quality Assurance/Testing', 'Technical Writing'
    ],
    'Creative & Design': [
      'Graphic Design', 'Video Editing', 'Photography', 'Animation', 'Illustration',
      'Interior Design', 'Fashion Design', 'Music Production', 'Content Creation',
      'Copywriting', 'Brand Design', '3D Modeling', 'Web Design', 'Print Design'
    ],
    'Business & Marketing': [
      'Digital Marketing', 'Social Media Marketing', 'SEO/SEM', 'Content Marketing',
      'Email Marketing', 'Sales', 'Business Development', 'Project Management',
      'Product Management', 'Market Research', 'Brand Management', 'Public Relations',
      'Event Planning', 'E-commerce Management'
    ],
    'Finance & Accounting': [
      'Accounting', 'Bookkeeping', 'Financial Analysis', 'Tax Preparation',
      'Investment Analysis', 'Risk Management', 'Auditing', 'Payroll Management',
      'Budget Planning', 'Financial Planning', 'Insurance', 'Real Estate'
    ],
    'Healthcare & Wellness': [
      'Nursing', 'Physical Therapy', 'Mental Health Counseling', 'Nutrition Counseling',
      'Medical Assistance', 'Pharmacy', 'Dental Care', 'Veterinary Care',
      'Fitness Training', 'Massage Therapy', 'Alternative Medicine'
    ],
    'Education & Training': [
      'Teaching/Tutoring', 'Curriculum Development', 'Educational Technology',
      'Language Instruction', 'Corporate Training', 'Skill Development',
      'Academic Research', 'Educational Administration'
    ],
    'Service & Hospitality': [
      'Customer Service', 'Restaurant Service', 'Hotel Management', 'Tourism',
      'Event Coordination', 'Catering', 'Retail Management', 'Personal Care',
      'Cleaning Services', 'Security Services'
    ],
    'Trades & Manual Skills': [
      'Carpentry', 'Plumbing', 'Electrical Work', 'Automotive Repair',
      'Welding', 'Construction', 'Painting', 'Landscaping', 'Tailoring/Sewing',
      'Cooking/Culinary Arts', 'Hair Styling', 'Jewelry Making'
    ],
    'Transportation & Logistics': [
      'Driving (Professional)', 'Logistics Coordination', 'Supply Chain Management',
      'Warehouse Management', 'Shipping/Receiving', 'Fleet Management'
    ],
    'Communication & Languages': [
      'Translation', 'Interpretation', 'Public Speaking', 'Writing/Editing',
      'Journalism', 'Broadcasting', 'Voice Acting', 'Sign Language'
    ]
  };

  const getQuestionsForSkill = (skill) => {
    const baseQuestions = [
      {
        id: 1,
        type: 'multiple-choice',
        question: 'How many years of experience do you have in this skill?',
        options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', '10+ years']
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: 'How did you primarily learn this skill?',
        options: ['Self-taught', 'Online courses', 'On-the-job training', 'Formal education', 'Mentorship', 'Bootcamp/Workshop', 'Apprenticeship']
      }
    ];

    // Skill-specific questions
    const skillSpecificQuestions = {
      'Web Development': [
        {
          id: 3,
          type: 'multiple-choice',
          question: 'Which programming languages are you proficient in?',
          options: ['JavaScript', 'Python', 'PHP', 'Java', 'C#', 'Ruby', 'Go', 'Multiple languages']
        },
        {
          id: 4,
          type: 'multiple-choice',
          question: 'What type of web development do you specialize in?',
          options: ['Frontend', 'Backend', 'Full-stack', 'Mobile web', 'E-commerce', 'Web applications']
        },
        {
          id: 5,
          type: 'text',
          question: 'Describe a complex web project you\'ve built. Include technologies used, challenges faced, and solutions implemented.',
          placeholder: 'Example: Built an e-commerce platform using React, Node.js, and MongoDB. Handled 10,000+ concurrent users...'
        }
      ],
      'Graphic Design': [
        {
          id: 3,
          type: 'multiple-choice',
          question: 'Which design software are you proficient in?',
          options: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva Pro', 'CorelDRAW', 'Multiple tools']
        },
        {
          id: 4,
          type: 'multiple-choice',
          question: 'What type of design work do you specialize in?',
          options: ['Brand identity', 'Print design', 'Digital marketing', 'Web design', 'Packaging', 'Illustration']
        },
        {
          id: 5,
          type: 'text',
          question: 'Describe a design project that showcases your creativity and problem-solving skills.',
          placeholder: 'Example: Redesigned a nonprofit\'s brand identity, increasing donor engagement by 40%...'
        }
      ],
      'Digital Marketing': [
        {
          id: 3,
          type: 'multiple-choice',
          question: 'Which digital marketing channels do you have experience with?',
          options: ['Social media marketing', 'Google Ads', 'Email marketing', 'Content marketing', 'SEO', 'All of the above']
        },
        {
          id: 4,
          type: 'multiple-choice',
          question: 'What\'s your experience with marketing analytics?',
          options: ['Google Analytics', 'Facebook Analytics', 'Marketing automation tools', 'A/B testing', 'All of the above']
        },
        {
          id: 5,
          type: 'text',
          question: 'Describe a successful marketing campaign you\'ve managed, including metrics and results.',
          placeholder: 'Example: Managed social media campaign that increased brand awareness by 60% and generated 500+ leads...'
        }
      ]
    };

    // Default questions for skills not specifically defined
    const defaultQuestions = [
      {
        id: 3,
        type: 'multiple-choice',
        question: 'What is your current skill level?',
        options: ['Beginner', 'Intermediate', 'Advanced', 'Expert/Professional']
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: 'In what context have you used this skill?',
        options: ['Personal projects', 'Freelance work', 'Full-time employment', 'Volunteer work', 'Academic projects', 'Multiple contexts']
      },
      {
        id: 5,
        type: 'text',
        question: 'Describe a specific project or achievement that demonstrates your expertise in this skill.',
        placeholder: 'Provide details about the project, your role, challenges faced, outcomes achieved, and any measurable results...'
      }
    ];

    const specificQuestions = skillSpecificQuestions[skill] || defaultQuestions;
    return [...baseQuestions, ...specificQuestions];
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setCurrentStep(7);
  };

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Choose Your Skill</h2>
            <p className="text-gray-600">Select the skill you want to get verified</p>
          </div>
          
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <Card 
                    key={skill}
                    className={`cursor-pointer transition-all ${
                      selectedSkill === skill ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <CardContent className="p-3 text-center">
                      <p className="font-medium text-sm">{skill}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Other Skill</h3>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your skill if not listed above"
                value={customSkill}
                onChange={(e) => setCustomSkill(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={() => setSelectedSkill(customSkill)}
                disabled={!customSkill.trim()}
                variant="outline"
              >
                Select
              </Button>
            </div>
          </div>
        </div>
      );
    }

    if (currentStep >= 2 && currentStep <= 6) {
      const questions = getQuestionsForSkill(selectedSkill);
      const question = questions[currentStep - 2];
      
      if (!question) {
        return <div>Loading...</div>;
      }

      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Assessment Questions</h2>
            <p className="text-gray-600">Question {currentStep - 1} of 5 for {selectedSkill}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              {question.type === 'multiple-choice' ? (
                <RadioGroup 
                  value={answers[question.id] || ''}
                  onValueChange={(value) => setAnswers({...answers, [question.id]: value})}
                >
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <Textarea
                  placeholder={question.placeholder}
                  value={answers[question.id] || ''}
                  onChange={(e) => setAnswers({...answers, [question.id]: e.target.value})}
                  rows={6}
                />
              )}

              {/* File upload section for the last question */}
              {currentStep === 6 && (
                <div className="mt-6 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-700 mb-2">Upload Supporting Files (Optional)</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Upload portfolio samples, certificates, work examples, or any files that demonstrate your skills
                    </p>
                    
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.mp4,.mov,.zip"
                    />
                    <label htmlFor="file-upload">
                      <Button variant="outline" className="cursor-pointer" asChild>
                        <span>
                          <Paperclip className="w-4 h-4 mr-2" />
                          Choose Files
                        </span>
                      </Button>
                    </label>
                    
                    <p className="text-xs text-gray-400 mt-2">
                      Supported: PDF, DOC, images, videos, ZIP (max 10MB each)
                    </p>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-4">
                      <h5 className="font-medium text-gray-700 mb-2">Uploaded Files:</h5>
                      <div className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <span className="text-sm text-gray-600 truncate">{file.name}</span>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      );
    }

    if (currentStep === 7) {
      return (
        <div className="text-center space-y-6">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900">Assessment Complete!</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Your assessment for <strong>{selectedSkill}</strong> has been submitted for AI review. 
            You'll receive your ProofTag within 24-48 hours.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="font-semibold mb-2">What happens next?</h3>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• AI analyzes your responses and uploaded files</li>
              <li>• Expert reviewers validate the assessment</li>
              <li>• Your ProofTag is generated with blockchain verification</li>
              <li>• You receive download link via email</li>
            </ul>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="bg-green-50 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-green-800">
                ✅ {uploadedFiles.length} file(s) uploaded successfully for review
              </p>
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <Button onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/dashboard'}>
              View Dashboard
            </Button>
          </div>
        </div>
      );
    }

    return null;
  };

  if (currentStep === 7) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-6">
          {renderStep()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Skill Assessment</h1>
            <span className="text-sm text-gray-500">Step {currentStep} of 6</span>
          </div>
          <Progress value={(currentStep / 6) * 100} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          
          {currentStep === 6 ? (
            <Button onClick={handleSubmit}>
              Submit Assessment
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              disabled={currentStep === 1 && !selectedSkill}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}