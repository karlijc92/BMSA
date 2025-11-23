import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Brain, Users, Globe, Clock, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your work samples and provide instant verification"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable timestamps and cryptographic proof ensure your TrustTags can't be faked"
    },
    {
      icon: Users,
      title: "Global Recognition",
      description: "TrustTags are recognized by employers and clients worldwide"
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "No barriers - anyone, anywhere can prove their skills regardless of background"
    },
    {
      icon: Clock,
      title: "Instant Verification",
      description: "Get your skills verified in minutes, not months"
    },
    {
      icon: Award,
      title: "Skill Progression",
      description: "Build a comprehensive portfolio of verified skills over time"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Revolutionary <span className="text-emerald-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technology meets human potential to create the future of skill verification
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}