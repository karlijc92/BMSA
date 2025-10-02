import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, Users, FileX, IdCard } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: FileX,
      title: "No Diploma or Degree",
      description: "Talented individuals without formal education credentials"
    },
    {
      icon: Users,
      title: "No Verifiable Work History",
      description: "Freelancers and gig workers with no official employment records"
    },
    {
      icon: IdCard,
      title: "No Government ID",
      description: "Refugees, migrants, and stateless people without documentation"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Upload Work Samples",
      description: "Share photos, videos, files of your actual work"
    },
    {
      icon: CheckCircle,
      title: "AI Verification",
      description: "Our AI analyzes and verifies your work authenticity"
    },
    {
      icon: CheckCircle,
      title: "Get Your TrustTag",
      description: "Receive a timestamped, shareable proof of your skills"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            The Global Problem We're Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than <span className="font-bold text-blue-600">1.5 billion people globally</span> cannot prove their skills or experience due to lack of formal credentials
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <div>
            <div className="flex items-center mb-8">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
            </div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <problem.icon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{problem.title}</h4>
                        <p className="text-gray-600">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-medium">
                <strong>Result:</strong> Talented individuals are locked out of opportunities, 
                undervalued in the marketplace, and unable to access better work or life opportunities.
              </p>
            </div>
          </div>

          {/* Solution Side */}
          <div>
            <div className="flex items-center mb-8">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
            </div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <solution.icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                        <p className="text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">
                <strong>Result:</strong> Anyone can now prove their capabilities and access 
                opportunities based on what they can do, not what papers they have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}