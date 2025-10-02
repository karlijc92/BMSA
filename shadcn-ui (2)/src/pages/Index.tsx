import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Safety from '@/components/Safety';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Safety />
      <Footer />
    </div>
  );
}