import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Globe, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Users
} from "lucide-react";
import { useState } from "react";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <BookOpen className="w-6 h-6" />,
      questions: [
        {
          q: "How do I create my first ProofTag?",
          a: "Click 'Get Your First ProofTag Free' on our homepage, choose your skill category, complete the assessment (usually 30-45 minutes), and receive your blockchain-secured certificate within 24 hours."
        },
        {
          q: "What skills can I get verified?",
          a: "We verify 100+ skills across categories including Technical/IT, Creative/Design, Languages, Trade/Manual, Professional/Business, Healthcare, Teaching, Leadership, and Soft Skills."
        },
        {
          q: "How long does the assessment take?",
          a: "Most assessments take 30-45 minutes, including technical questions, practical demonstrations, and portfolio review. Complex skills may take up to 90 minutes."
        },
        {
          q: "Is my first ProofTag really free?",
          a: "Yes! Your first ProofTag is completely free with no hidden costs. Additional ProofTags are available through our paid plans."
        }
      ]
    },
    {
      title: "Assessment Process",
      icon: <Award className="w-6 h-6" />,
      questions: [
        {
          q: "How accurate are ProofMode assessments?",
          a: "Our AI-powered system combined with expert human review achieves 96% accuracy. We continuously improve through machine learning and feedback."
        },
        {
          q: "What happens if I fail an assessment?",
          a: "You can retake assessments after 30 days. We provide detailed feedback to help you improve. Failed attempts don't count against your plan limits."
        },
        {
          q: "Can I upload portfolio files during assessment?",
          a: "Yes! You can upload up to 10 files (max 50MB each) including documents, images, videos, or code samples to demonstrate your skills."
        },
        {
          q: "Do you support assessments in other languages?",
          a: "Yes, we support assessments in 50+ languages. Select your preferred language at the start of any assessment."
        }
      ]
    },
    {
      title: "ProofTag Verification",
      icon: <Shield className="w-6 h-6" />,
      questions: [
        {
          q: "How do employers verify my ProofTag?",
          a: "Employers can instantly verify your ProofTag using the verification ID on our website or through our API. All ProofTags are blockchain-secured and tamper-proof."
        },
        {
          q: "How long are ProofTags valid?",
          a: "ProofTags are valid for 2 years from issue date. You'll receive renewal reminders and can update your skills through re-assessment."
        },
        {
          q: "Can I share my ProofTag on social media?",
          a: "Absolutely! Each ProofTag includes sharing buttons for LinkedIn, Twitter, and other platforms. You can also download a certificate for offline use."
        },
        {
          q: "What if my ProofTag shows as invalid?",
          a: "Contact our support team immediately. This could indicate a technical issue or potential fraud attempt. We investigate all invalid ProofTag reports within 24 hours."
        }
      ]
    },
    {
      title: "Account & Billing",
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          q: "How do I upgrade my plan?",
          a: "Visit your Dashboard and click 'Upgrade Plan'. Choose from Individual ($29/month), Professional ($99/month), or Business (custom pricing) plans."
        },
        {
          q: "Can I cancel my subscription anytime?",
          a: "Yes, you can cancel anytime from your Dashboard. Your plan remains active until the end of your billing period, and all existing ProofTags remain valid."
        },
        {
          q: "Do you offer refunds?",
          a: "We offer full refunds within 30 days of purchase if you're not satisfied. Contact support@proofmode.com for refund requests."
        },
        {
          q: "How do I update my account information?",
          a: "Go to Dashboard > Account Settings to update your personal information, contact details, and notification preferences."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      title: "Email Support",
      description: "Get help within 24 hours",
      contact: "support@proofmode.com",
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      action: "Send Email"
    },
    {
      title: "Live Chat",
      description: "Available 24/7 for urgent issues",
      contact: "Start chat on any page",
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Business hours: 9 AM - 6 PM UTC",
      contact: "+1 (555) 123-4567",
      icon: <Phone className="w-8 h-8 text-purple-600" />,
      action: "Call Now"
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      item => 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

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
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">
            Help Center
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions, get support, and learn how to make the most of ProofMode
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-2">&lt;24hrs</div>
              <p className="text-gray-600">Average response time</p>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-2">98%</div>
              <p className="text-gray-600">Issues resolved</p>
            </CardContent>
          </Card>
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Live chat support</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {(searchQuery ? filteredCategories : faqCategories).map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.questions.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-100 pb-6 last:border-b-0">
                        <h3 className="font-semibold text-lg text-gray-900 mb-3 flex items-start gap-2">
                          <HelpCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                          {item.q}
                        </h3>
                        <p className="text-gray-700 leading-relaxed ml-7">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center mb-6">Still Need Help?</CardTitle>
            <p className="text-center text-gray-600 text-lg">
              Our support team is here to help you succeed with ProofMode
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
                  <div className="flex justify-center mb-4">{option.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-3">{option.description}</p>
                  <p className="text-sm font-mono bg-white px-3 py-2 rounded mb-4">{option.contact}</p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    {option.action}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <div className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Explore More Resources</h2>
          <p className="text-lg mb-6 opacity-90">
            Get the most out of ProofMode with our guides and tutorials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/assessment'}
            >
              Start Your Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600"
              onClick={() => window.location.href = '/verify'}
            >
              Verify a ProofTag
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}