import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Shield, Zap, Target, Database, Users, TrendingUp, AlertTriangle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Analysis',
      description: 'Our sophisticated AI processes thousands of research papers, clinical studies, and user data to provide personalized supplement recommendations tailored to your specific goals and health profile.',
      badge: 'Core Technology',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Comprehensive Safety Screening',
      description: 'Advanced interaction detection analyzes potential contraindications, drug interactions, and safety concerns across your entire supplement stack and medical history.',
      badge: 'Safety First',
      color: 'green'
    },
    {
      icon: Target,
      title: 'Personalized Protocols',
      description: 'Receive custom supplement protocols based on your fitness goals, body composition, training regimen, and individual response patterns for optimal results.',
      badge: 'Customized',
      color: 'purple'
    },
    {
      icon: Database,
      title: 'Research-Backed Insights',
      description: 'Every recommendation is supported by peer-reviewed research, clinical trials, and real-world data from our extensive database of supplement studies and user outcomes.',
      badge: 'Evidence-Based',
      color: 'indigo'
    },
    {
      icon: Zap,
      title: 'Real-Time Optimization',
      description: 'Continuously refine your supplement strategy based on progress tracking, biomarker changes, and performance metrics for ongoing optimization.',
      badge: 'Dynamic',
      color: 'yellow'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track supplement effectiveness with detailed analytics, progress charts, and performance correlations to maximize your investment in health optimization.',
      badge: 'Data-Driven',
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-50',
      green: 'text-green-600 bg-green-50',
      purple: 'text-purple-600 bg-purple-50',
      indigo: 'text-indigo-600 bg-indigo-50',
      yellow: 'text-yellow-600 bg-yellow-50',
      emerald: 'text-emerald-600 bg-emerald-50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Intelligence
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Next-Generation Supplement Intelligence
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience the future of personalized nutrition with our advanced AI system that combines 
            cutting-edge technology, comprehensive safety protocols, and evidence-based recommendations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconColorClasses(feature.color)}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge className={`text-xs ${getColorClasses(feature.color)}`}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Users Worldwide
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI advisor has helped users optimize their supplement protocols with measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600 font-medium">Consultations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">Research Papers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-2">Safety & Compliance Notice:</p>
                  <p className="leading-relaxed">
                    Our AI advisor provides educational information only and should not replace professional medical advice. 
                    Always consult healthcare professionals before starting new supplements, especially with pre-existing conditions 
                    or medications. Individual results may vary, and supplements are not FDA-evaluated for treating diseases.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}