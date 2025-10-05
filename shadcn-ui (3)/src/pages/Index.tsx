import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Safety from '@/components/Safety';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      <Hero />
      <Features />
      <HowItWorks />
      <Safety />
      <Footer />
    </div>
  );
}