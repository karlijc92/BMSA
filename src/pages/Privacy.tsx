import { Link } from "react-router-dom";
import DisclaimerFooter from "@/components/DisclaimerFooter";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block text-sm text-emerald-400 hover:underline"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-400">Last updated: December 2025</p>

        <p>
          Black Market Supplement Advisor (“BMSA,” “we,” “us,” or “our”) respects
          your privacy. This Privacy Policy explains how we collect, use, store,
          and protect your information when you use our website and services.
        </p>

        <p>
          By accessing or using this site, you agree to this Privacy Policy and
          our Terms & Conditions.
        </p>

        <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email address and account information</li>
          <li>Subscription and payment status (not full card numbers)</li>
          <li>Usage data such as pages visited and interactions</li>
          <li>AI prompts submitted for informational responses</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">2. How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide and maintain access to subscribed features</li>
          <li>Operate and improve the AI advisor</li>
          <li>Process payments and manage subscriptions</li>
          <li>Prevent abuse and maintain security</li>
        </ul>

        <p>We do <strong>not</strong> sell your personal information.</p>

        <h2 className="text-xl font-semibold text-white">3. Payments & Third Parties</h2>
        <p>
          Payments are processed securely through Stripe. We do not store
          complete payment card details.
        </p>
        <p>
          We may use third-party services (authentication, hosting, analytics,
          email) strictly to operate the service.
        </p>

        <h2 className="text-xl font-semibold text-white">4. Health & AI Disclaimer</h2>
        <p>
          BMSA provides educational and informational content only.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>No medical advice, diagnosis, or treatment is provided</li>
          <li>Statements have not been evaluated by the FDA</li>
          <li>You are solely responsible for your decisions and outcomes</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
        <p>
          We use reasonable industry-standard safeguards, but no system is
          completely secure.
        </p>

        <h2 className="text-xl font-semibold text-white">6. Cookies</h2>
        <p>
          Cookies may be used for authentication, performance, and analytics.
          You can disable cookies, but some features may not work properly.
        </p>

        <h2 className="text-xl font-semibold text-white">7. No Refunds</h2>
        <p>
          <strong>All purchases are final. No refunds are provided.</strong>
        </p>

        <h2 className="text-xl font-semibold text-white">8. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your data by
          contacting us.
        </p>

        <h2 className="text-xl font-semibold text-white">9. Contact</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:proofmodepro365@gmail.com"
            className="text-emerald-400 underline"
          >
            proofmodepro365@gmail.com
          </a>
        </p>
      </div>

      {/* Global Disclaimer */}
      <DisclaimerFooter />
    </div>
  );
}
