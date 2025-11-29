import React from "react";

const Subscribe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-black">
      
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your <span className="text-emerald-400">Underground</span> Access
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get AI-powered supplement guidance that cuts through the industry BS
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Monthly Access</h3>
                <p className="text-gray-400 mb-6">Perfect for trying out the underground</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-emerald-400">$12</span>
                  <span className="text-gray-400 text-lg">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited AI supplement consultations
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized supplement stacks
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Harm reduction protocols
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Research-backed recommendations
                </li>
              </ul>

              <a
                href="https://buy.stripe.com/test_8wM6oV2Ub6Zb9vq4gh"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-600/25"
              >
                Start Monthly Plan
              </a>
            </div>

            {/* Yearly Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-emerald-500 rounded-2xl p-8 relative hover:border-emerald-400 transition-all duration-300">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Yearly Access</h3>
                <p className="text-gray-400 mb-6">Best value for serious optimization</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-emerald-400">$99</span>
                  <span className="text-gray-400 text-lg">/year</span>
                </div>
                <p className="text-emerald-400 text-sm font-semibold">Save $45 vs monthly</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Monthly Plan
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority AI response times
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced cycle planning
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Exclusive underground insights
                </li>
              </ul>

              <a
                href="https://buy.stripe.com/test_5kA5kR8iF0B7bDy6op"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-600/25"
              >
                Start Yearly Plan
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-800/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Is this legal?</h4>
                <p className="text-gray-300">
                  Yes, BMSA provides educational information only. We promote harm reduction and legal compliance while discussing supplements within legal boundaries.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Can I cancel anytime?</h4>
                <p className="text-gray-300">
                  Absolutely. You can cancel your subscription at any time through your account settings. No questions asked.
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">How accurate is the AI?</h4>
                <p className="text-gray-300">
                  Our AI is trained on thousands of research papers and real-world data. However, always consult healthcare professionals before making supplement decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Educational information only. Not medical advice. Always consult healthcare professionals before starting any supplement regimen. 
              BMSA promotes harm reduction and legal compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
