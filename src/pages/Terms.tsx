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
          By using this site, you agree to these Terms.
        </p>

        <div className="space-y-6 text-sm text-gray-200 leading-6">
          <div>
            <h2 className="text-lg font-semibold text-white">1) Educational only</h2>
            <p>
              BMSA provides informational and educational content only. It does not provide medical advice,
              diagnosis, or treatment. Always consult a qualified healthcare professional before making
              changes to your health regimen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2) Assumption of risk</h2>
            <p>
              Supplements and compounds discussed may carry risks. You are solely responsible for your
              decisions, use, and outcomes. You use this Service at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3) Subscriptions &amp; billing</h2>
            <p>
              If you purchase a subscription, you authorize recurring charges based on the plan selected.
              You may cancel at any time. Access continues until the end of your current billing period.
            </p>
            <p className="font-semibold text-white">All sales are final. No refunds.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4) Acceptable use</h2>
            <p>
              Do not misuse the Service, attempt unauthorized access, scrape data, interfere with
              functionality, or use the Service for unlawful purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5) Disclaimers</h2>
            <p>
              The Service is provided “as is” and “as available” without warranties of any kind. We do not
              guarantee accuracy, completeness, or results.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6) Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for indirect, incidental,
              consequential, or punitive damages. Our total liability for any claim will not exceed the
              amount you paid in the last 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7) Changes</h2>
            <p>
              We may update these Terms at any time. Continued use of the Service means you accept the
              updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8) Contact</h2>
            <p>
              Questions? Email: <span className="text-emerald-400">proofmodepro365@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mt-10">
          <DisclaimerFooter />
        </div>
      </section>
    </main>
  );
}
