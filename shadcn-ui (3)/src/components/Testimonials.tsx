import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mike Chen",
    role: "Competitive Bodybuilder",
    content: "This AI advisor helped me optimize my cutting stack and avoid dangerous interactions. The science-backed approach gave me confidence in my supplement choices.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Sarah Rodriguez",
    role: "Biohacker & Entrepreneur",
    content: "Finally, an AI that understands both performance and safety. The personalized nootropic recommendations have been game-changing for my productivity.",
    rating: 5,
    initials: "SR"
  },
  {
    name: "David Thompson",
    role: "Fitness Coach",
    content: "I recommend this to all my clients. The detailed explanations help them understand not just what to take, but why and when. Educational and practical.",
    rating: 5,
    initials: "DT"
  },
  {
    name: "Lisa Park",
    role: "Wellness Enthusiast",
    content: "The safety-first approach is exactly what I needed. Clear guidance on supplement timing and interactions without the sales pitch.",
    rating: 5,
    initials: "LP"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our community says about their experience with our AI advisor
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <Avatar key={i} className="w-8 h-8 border-2 border-white">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs">
                    {String.fromCharCode(65 + i)}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">10,000+ Active Users</p>
              <p className="text-sm text-gray-600">Average rating: 4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}