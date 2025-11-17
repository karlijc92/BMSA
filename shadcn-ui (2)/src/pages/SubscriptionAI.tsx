import React from "react";

const SubscriptionAI: React.FC = () => {
  return (
    <div data-ms-content="underground-supplement-advisor">
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        <h1 className="text-3xl font-bold">
          Underground Supplement Advisor
        </h1>

        <p className="text-sm text-gray-600">
          This AI advisor helps you explore supplements, ingredients, and
          potential risks. It is for educational use only and does not replace
          medical care.
        </p>

        {/* 🔹 Replace this block with your actual AI embed / widget */}
        <section className="border rounded-lg p-4">
          <p className="text-gray-500 text-sm">
            [AI chat widget goes here – replace this with your embed/script or MGX component.]
          </p>
        </section>

        {/* 🔻 LEGAL DISCLAIMER (bottom of page) */}
        <p className="mt-6 text-xs text-gray-500">
          Disclaimer: This AI tool is for informational and educational
          purposes only. It does not provide medical advice, diagnosis, or
          treatment. Always consult a licensed healthcare professional before
          starting, stopping, or changing any medication, supplement, or
          treatment. Use of this tool is at your own risk.
        </p>
      </main>
    </div>
  );
};

export default SubscriptionAI;
