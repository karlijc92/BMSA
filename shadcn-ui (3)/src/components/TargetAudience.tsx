import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Laptop, Plane, GraduationCap, Wrench } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      icon: Laptop,
      title: "Digital Freelancers",
      subtitle: "Skilled but Uncredentialed",
      description: "Talented designers, writers, developers, and digital marketers who learned their skills online but lack formal credentials.",
      examples: [
        "Nigerian teen who learned Photoshop on YouTube",
        "Pakistani woman doing ghostwriting via WhatsApp", 
        "Self-taught web developer from rural areas",
        "Social media managers with proven results"
      ],
      color: "blue"
    },
    {
      icon: Plane,
      title: "Refugees & Migrants",
      subtitle: "Lost Documents, Not Skills",
      description: "People who had to flee their countries and lost official documents but retained their valuable skills and experience.",
      examples: [
        "Syrian refugee who fixed computers before fleeing",
        "Afghan translator with years of experience",
        "Venezuelan engineer working informal jobs",
        "Rohingya craftsperson with traditional skills"
      ],
      color: "green"
    },
    {
      icon: GraduationCap,
      title: "Self-Taught Professionals",
      subtitle: "Learning Without Institutions",
      description: "Young people and career changers who developed skills independently but have no official way to prove their capabilities.",
      examples: [
        "Autodidact programmers from coding bootcamps",
        "Self-taught graphic designers with portfolios",
        "YouTube-educated video editors",
        "Online-trained digital marketers"
      ],
      color: "purple"
    },
    {
      icon: Wrench,
      title: "Informal Workers",
      subtitle: "Experience Without Papers",
      description: "Skilled tradespeople and service workers with years of hands-on experience but no formal certifications or employment records.",
      examples: [
        "Jamaican man who cleaned pools for 10 years",
        "Indian tailor with decades of experience",
        "Brazilian construction worker with specialized skills",
        "Filipino domestic worker with excellent references"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500 bg-blue-50 text-blue-600",
      green: "border-green-500 bg-green-50 text-green-600", 
      purple: "border-purple-500 bg-purple-50 text-purple-600",
      orange: "border-orange-500 bg-orange-50 text-orange-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ProofMode is designed for the billions of talented people worldwide who have skills but lack formal credentials
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 bg-white">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${getColorClasses(audience.color)}`}>
                    <audience.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{audience.title}</h3>
                    <p className="text-sm text-gray-500">{audience.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{audience.description}</p>

                {/* Examples */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Real Examples:</h4>
                  {audience.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{example}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1.5B+</div>
              <div className="text-gray-600">People working informally worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100M+</div>
              <div className="text-gray-600">Stateless or undocumented people</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50%+</div>
              <div className="text-gray-600">Global workforce in informal sector</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
              <div className="text-gray-600">Global tools serving this market</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Join the Movement - Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
}