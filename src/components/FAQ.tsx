import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What types of work can I verify with TrustTag?",
      answer: "Almost anything! From carpentry and cooking to coding and design. If you can show it through photos, videos, or files, our AI can analyze and verify it."
    },
    {
      question: "How does the AI verification work?",
      answer: "Our AI analyzes multiple factors including technique, quality, complexity, and authenticity markers. It's trained on millions of work samples across hundreds of skills."
    },
    {
      question: "Are TrustTags legally recognized?",
      answer: "While not legally equivalent to formal degrees, TrustTags are increasingly recognized by employers worldwide as proof of practical skills and experience."
    },
    {
      question: "Can TrustTags be faked or manipulated?",
      answer: "No. Each TrustTag is secured with blockchain technology and includes cryptographic proof that makes it impossible to fake or alter."
    },
    {
      question: "What if I don't have any work samples?",
      answer: "You can create new work specifically for verification, or we can guide you through skill-building exercises that demonstrate your capabilities."
    },
    {
      question: "How long does verification take?",
      answer: "Most verifications are completed within 24 hours. Complex skills may take up to 48 hours for thorough analysis."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-black to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about TrustTag
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gray-900/50 border-emerald-500/20 rounded-lg px-6 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-white hover:text-emerald-400 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}