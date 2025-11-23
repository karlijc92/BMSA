import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      name: "Amara O.",
      location: "Lagos, Nigeria",
      profession: "Graphic Designer",
      challenge: "Self-taught designer with amazing portfolio but no formal degree. Clients questioned her credibility and offered low rates.",
      solution: "Uploaded 15 logo designs and brand projects to ProofMode. AI verified originality and assessed skill level.",
      outcome: "Received verified TrustTag showing '15+ Professional Design Projects Verified'. Increased client rates by 300% and landed international clients.",
      skills: ["Logo Design", "Brand Identity", "Adobe Creative Suite", "Client Communication"],
      rating: 5,
      testimonial: "ProofMode changed my life. Now clients see I'm a real professional, not just someone with a computer."
    },
    {
      name: "Fatima K.", 
      location: "Karachi, Pakistan",
      profession: "Content Writer",
      challenge: "Experienced ghostwriter working through WhatsApp with no way to showcase her extensive writing portfolio to new clients.",
      solution: "Submitted 25 articles and blog posts (with client permission). AI analyzed writing quality, originality, and style consistency.",
      outcome: "TrustTag verified '25+ Professional Articles, 98% Originality Score'. Joined premium freelance platforms and doubled her income.",
      skills: ["Content Writing", "SEO Writing", "Blog Posts", "Technical Writing"],
      rating: 5,
      testimonial: "Finally, I can prove what I've been doing for years. My TrustTag opens doors that were closed before."
    },
    {
      name: "Ahmad R.",
      location: "Berlin, Germany (Syrian Refugee)",
      profession: "IT Support Specialist", 
      challenge: "Lost all certificates and work documents when fleeing Syria. Couldn't prove 8 years of IT experience to German employers.",
      solution: "Documented his troubleshooting knowledge through video demonstrations and technical problem-solving examples.",
      outcome: "Verified TrustTag showing 'IT Support Expertise - 8 Years Experience Verified'. Secured employment with tech company within 2 months.",
      skills: ["Hardware Repair", "Network Troubleshooting", "Windows/Linux", "Customer Support"],
      rating: 5,
      testimonial: "ProofMode gave me back my professional identity. Employers could finally see what I'm capable of."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how ProofMode has transformed lives by helping talented individuals prove their worth
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{caseStudy.name}</h3>
                    <p className="text-sm text-gray-500">{caseStudy.location}</p>
                    <p className="text-sm font-medium text-blue-600">{caseStudy.profession}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(caseStudy.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">Challenge</h4>
                  <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">ProofMode Solution</h4>
                  <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                </div>

                {/* Outcome */}
                <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <h4 className="font-semibold text-green-800 text-sm uppercase tracking-wide">Result</h4>
                  </div>
                  <p className="text-sm text-green-700">{caseStudy.outcome}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Verified Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 text-sm">
                  "{caseStudy.testimonial}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-8">ProofMode Impact</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-blue-100">Average Income Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2 Months</div>
              <div className="text-blue-100">Average Time to New Opportunity</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">User Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={() => window.location.href = '/submit-story'}
          >
            Start Your Success Story
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-gray-500 mt-4">Join thousands who have already transformed their careers</p>
        </div>
      </div>
    </section>
  );
}