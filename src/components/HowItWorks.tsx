import { Card, CardContent } from '@/components/ui/card';
import { Upload, Cpu, Award, Share } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Work",
      description: "Share photos, videos, or files of your actual work - anything that demonstrates your skills"
    },
    {
      icon: Cpu,
      title: "AI Analysis",
      description: "Our advanced AI analyzes your work for authenticity, quality, and skill level"
    },
    {
      icon: Award,
      title: "Get Your TrustTag",
      description: "Receive a blockchain-secured, timestamped proof of your verified skills"
    },
    {
      icon: Share,
      title: "Share & Succeed",
      description: "Use your TrustTag to apply for jobs, win clients, and unlock opportunities"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-emerald-400">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four simple steps to transform your hidden talents into verified credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 backdrop-blur-sm relative">
              <CardContent className="p-6 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-emerald-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}