import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Brain, Target, Zap, LogIn } from 'lucide-react';

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Ask Your Question",
    description: "Tell our AI about your goals, current stack, training style, or any supplement questions you have."
  },
  {
    step: "02",
    icon: Brain,
    title: "Comprehensive Analysis",
    description: "Our AI instantly accesses vast databases of research studies, clinical trials, and supplement interactions to provide evidence-based insights."
  },
  {
    step: "03",
    icon: Target,
    title: "Personalized Advice",
    description: "Receive tailored recommendations with dosing, timing, and safety considerations specific to your needs."
  },
  {
    step: "04",
    icon: Zap,
    title: "Optimize & Track",
    description: "Implement the advice and return for adjustments as your goals and experience evolve."
  }
];

export default function HowItWorks() {
  const handleLoginSignup = () => {
    // Redirect to existing signup/login functionality
    window.location.href = 'https://goundergroundsupps.com';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get expert-level supplement advice in minutes, not hours of research
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold"
            onClick={handleLoginSignup}
          >
            <LogIn className="w-5 h-5 mr-2" />
            Login/Sign Up
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Free to start • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}