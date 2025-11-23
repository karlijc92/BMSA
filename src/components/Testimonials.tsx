import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Freelance Designer",
      location: "Philippines",
      content: "I couldn't get design work because I didn't have a degree. TrustTag changed everything - now clients see my actual skills, not just my education.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Ahmed Hassan",
      role: "Construction Worker",
      location: "Egypt",
      content: "As a refugee, I had no way to prove my 15 years of construction experience. TrustTag helped me get hired within a week of arriving.",
      rating: 5,
      avatar: "AH"
    },
    {
      name: "James Chen",
      role: "Self-taught Developer",
      location: "Malaysia",
      content: "No computer science degree, but I've built amazing apps. TrustTag verified my coding skills and I landed my dream job at a tech startup.",
      rating: 5,
      avatar: "JC"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-emerald-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real people whose lives were transformed by proving their skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900/50 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}