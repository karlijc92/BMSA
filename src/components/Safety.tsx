import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Heart, BookOpen } from 'lucide-react';

export default function Safety() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Safety First Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Safety Is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide educational information only. Always consult healthcare professionals 
            before making supplement decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-800">
                <Shield className="w-6 h-6" />
                What We Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Provide science-backed educational information</p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Share research-based supplement insights</p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Offer general wellness and fitness guidance</p>
              </div>
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Promote safe supplementation practices</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-red-800">
                <AlertTriangle className="w-6 h-6" />
                What We Don't Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Provide medical advice or diagnoses</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Recommend illegal substances</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Replace professional healthcare advice</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Provide sourcing or purchasing guidance</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="border-blue-200 bg-blue-50">
          <AlertTriangle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>Important Disclaimer:</strong> This AI-powered supplement advisor is intended for 
            informational and educational purposes only. It does not provide medical advice, make diagnoses, 
            or offer treatment plans. Always consult your physician or licensed medical professional before 
            beginning any supplement regimen. Use of this platform is at your own discretion and risk.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
}