import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Shield, ArrowLeft, Zap, Brain, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Subscribe() {
  const navigate = useNavigate();

  const handleSubscribe = (plan: string) => {
    // Route to your actual Stripe checkout - replace with your URLs
    if (plan === 'monthly') {
      window.location.href = 'https://www.goundergroundsupps.com/subscribe'; // Replace with your Stripe monthly URL
    } else {
      window.location.href = 'https://www.goundergroundsupps.com/subscribe'; // Replace with your Stripe yearly URL
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            <Star className="w-4 h-4 mr-2" />
            Premium AI Supplement Advisor
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Unlock Your Full Potential
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get personalized supplement recommendations, safety analysis, and expert guidance 
            powered by advanced AI technology. Join thousands of users optimizing their health.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-medium">5,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-medium">Research-Backed</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-500" />
              <span className="font-medium">Instant Analysis</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <Card className="relative border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">Monthly Access</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Perfect for trying out our AI advisor
              </CardDescription>
              <div className="mt-6">
                <span className="text-5xl font-bold text-gray-900">$12</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  'Unlimited AI consultations',
                  'Personalized supplement stacks',
                  'Safety interaction warnings',
                  'Dosage recommendations',
                  'Research citations',
                  'Mobile-friendly interface'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                onClick={() => handleSubscribe('monthly')}
              >
                Start Monthly Plan
              </Button>
            </CardFooter>
          </Card>

          {/* Yearly Plan */}
          <Card className="relative border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
              Most Popular - Save 31%
            </Badge>
            
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl font-bold text-gray-900">Yearly Access</CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Best value for serious optimization
              </CardDescription>
              <div className="mt-6">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-gray-500 line-through">$144</span>
                  <span className="text-5xl font-bold text-gray-900">$99</span>
                </div>
                <span className="text-gray-600">/year</span>
                <div className="mt-2 text-green-600 font-semibold">
                  Save $45 per year
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  'Everything in Monthly plan',
                  'Priority AI response times',
                  'Advanced supplement analytics',
                  'Exclusive research updates',
                  'Direct expert consultations',
                  'Custom protocol development',
                  '24/7 priority support'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg font-semibold shadow-lg"
                onClick={() => handleSubscribe('yearly')}
              >
                Start Yearly Plan
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our AI Advisor?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI Technology</h4>
              <p className="text-gray-600">Powered by cutting-edge machine learning trained on thousands of research papers and clinical studies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety First Approach</h4>
              <p className="text-gray-600">Comprehensive interaction warnings and contraindication analysis to keep you safe.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h4>
              <p className="text-gray-600">Get personalized recommendations and analysis in seconds, not days.</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-2">Important Medical Disclaimer:</p>
                  <p className="leading-relaxed">
                    This AI advisor is for educational and informational purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals before starting any supplement regimen, especially if you have pre-existing medical conditions or are taking medications. Individual results may vary, and supplements are not regulated by the FDA in the same way as prescription medications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}