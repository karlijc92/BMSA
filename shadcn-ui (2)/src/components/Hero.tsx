import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Shield, Zap, LogIn, UserPlus } from 'lucide-react';

export default function Hero() {
  const handleLogin = () => {
    // Redirect to existing login functionality
    window.location.href = 'https://www.goundergroundsupps.com/glimmer-hide-6558';
  };

  const handleSignup = () => {
    // Redirect to signup page
    window.location.href = 'https://www.goundergroundsupps.com/subscribe';
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Supplement Advisor
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Your Personal
            <span className="block">Supplement Coach</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get science-backed supplement advice, stack recommendations, and safety insights from our advanced AI advisor. 
            Built for serious lifters, biohackers, and wellness enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={handleSignup}
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Sign Up
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-400 text-blue-100 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold"
              onClick={handleLogin}
            >
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              Safety First Approach
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-2 text-blue-400" />
              Science-Backed Advice
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              Instant Responses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}