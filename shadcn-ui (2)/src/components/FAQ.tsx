import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is the AI advisor safe to use?",
    answer: "Yes, our AI advisor is designed with safety as the top priority. It provides educational information only and always recommends consulting with healthcare professionals. It does not provide medical advice or recommend illegal substances."
  },
  {
    question: "What types of supplements can the AI help with?",
    answer: "The AI can provide information about a wide range of supplements including nootropics, peptides, SARMs, fat burners, recovery stacks, vitamins, minerals, and more. It focuses on legal, research-backed substances."
  },
  {
    question: "How accurate is the AI's advice?",
    answer: "Our AI is trained on thousands of research papers and real-world data. However, it provides educational information only. Individual responses to supplements can vary, so always consult with healthcare professionals before making decisions."
  },
  {
    question: "Can the AI help with drug interactions?",
    answer: "The AI can provide general information about potential supplement interactions based on available research. However, for specific medical conditions or prescription medications, always consult your doctor or pharmacist."
  },
  {
    question: "Is my information kept private?",
    answer: "Yes, we take privacy seriously. Your conversations and personal information are encrypted and not shared with third parties. We use data only to improve our AI's responses."
  },
  {
    question: "How much does it cost to use?",
    answer: "We offer a free tier to get started, with premium features available for advanced users. No credit card is required to begin using the basic AI advisor features."
  },
  {
    question: "Can the AI replace my doctor or nutritionist?",
    answer: "Absolutely not. Our AI advisor is an educational tool only. It cannot replace professional medical advice, diagnoses, or treatment plans. Always work with qualified healthcare professionals for medical decisions."
  },
  {
    question: "What if I have a specific medical condition?",
    answer: "If you have any medical conditions, are taking medications, or have health concerns, you must consult with your healthcare provider before using any supplements, regardless of AI recommendations."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5" />
            <span className="font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI supplement advisor
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">
                Common Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-blue-600 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}