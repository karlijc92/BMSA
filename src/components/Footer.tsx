import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">TrustTag</h3>
            <p className="text-gray-300 mb-4">
              Empowering everyone to prove their skills and unlock opportunities, 
              regardless of background or credentials.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TrustTag. All rights reserved. Empowering skills, enabling opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
}