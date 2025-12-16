import DisclaimerFooter from "@/components/DisclaimerFooter";

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            ← Back
          </button>
          <a
            href="/"
            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Home
          </a>
        </div>

        <h1 className="text-3xl font-bold mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-400 mb-8">
          Effective date: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-sm text-gray-200 leading-6">
          <p>
            These Terms &amp; Conditions (“Terms”) govern your use of the Black
            Market Supplement Advisor (“BMSA”, “we”, “us”, “our”) website, tools,
            and services (the “Service”). By accessing or using the Service, you
            agree to these Terms. If you do not agree, do not use the Service.
          </p>

          <h2 className="text-lg font-semibold text-white">1) Educational only</h2>
          <p>
            The Service provides informational and educational content only. It
            is not medical advice, diagnosis, or treatment. Always consult a
            qualified healthcare professional before making changes to your
            health regimen.
          </p>

          <h2 className="text-lg font-semibold text-white">
            2) Assumption of risk
          </h2>
          <p>
            Supplements and compounds discussed may carry risks. You are solely
            responsible for your decisions, use, and outcomes. You agree to use
            the Service at your own risk.
          </p>

          <h2 className="text-lg font-semibold text-white">
            3) Not for emergencies
          </h2>
          <p>
            Do not use this Service for urgent or emergency situations. If you
            believe you have a medical emergency, call local emergency services
            immediately.
          </p>

          <h2 className="text-lg font-semibold text-white">
            4) Eligibility
          </h2>
          <p>
            You must be at least 18 years old to use the Service.
          </p>

          <h2 className="text-lg font-semibold text-white">
            5) Subscriptions, billing, and no refunds
          </h2>
          <p>
            If you purchase a subscription, you authorize recurring charges
            according to the plan selected. You can cancel any time, and your
            access remains active until the end of the current billing period.
          </p>
          <p className="font-semibold text-white">
            All sales are final. No refunds.
          </p>

          <h2 className="text-lg font-semibold text-white">
            6) User content and notes
          </h2>
          <p>
            You are responsible for any content you submit (including questions,
            notes, or saved stacks). Do not submit illegal content or anything
            you do not have the right to share.
          </p>

          <h2 className="text-lg font-semibold text-white">
            7) Acceptable use
          </h2>
          <p>
            You agree not to misuse the Service, attempt unauthorized access,
            disrupt functionality, scrape data, or use the Service for unlawful
            purposes.
          </p>

          <h2 className="text-lg font-semibold text-white">
            8) Intellectual property
          </h2>
          <p>
            The Service and its content are owned by us or our licensors and are
            protected by applicable laws. You may not copy, reproduce, or
            redistribute without permission.
          </p>

          <h2 className="text-lg font-semibold text-white">
            9) Disclaimers
          </h2>
          <p>
            The Service is provided “as is” and “as available” without warranties
            of any kind. We do not guarantee accuracy, completeness, or results.
          </p>

          <h2 className="text-lg font-semibold text-white">
            10) Limitation of liability
          </h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for
            any indirect, incidental, special, consequential, or punitive damages
            arising out of your use of the Service. Our total liability for any
            claim will not exceed the amount you paid to us in the last 30 days.
          </p>

          <h2 className="text-lg font-semibold text-white">
            11) Changes to these Terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes means you accept the updated Terms.
          </p>

          <h2 className="text-lg font-semibold text-white">
            12) Contact
          </h2>
          <p>
            Questions? Contact us at: <span className="text-emerald-400">[YOUR EMAIL HERE]</span>
          </p>
        </div>

        <div className="mt-10">
          <DisclaimerFooter />
        </div>
      </section>
    </main>
  );
}
