import DisclaimerFooter from "../DisclaimerFooter";

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* TOP NAV */}
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
            Market Supplement Advisor (“BMSA”, “we”, “us”, “our”) website and
            services (the “Service”). By accessing or using the Service, you
            agree to these Terms. If you do not agree, do not use the Service.
          </p>

          <h2 className="text-lg font-semibold text-white">1) Educational use only</h2>
          <p>
            The Service provides informational and educational content only and
            does not provide medical advice, diagnosis, or treatment. Always
            consult a qualified healthcare professional before making changes
            to your health or supplement regimen.
          </p>

          <h2 className="text-lg font-semibold text-white">2) Assumption of risk</h2>
          <p>
            Supplements, compounds, and protocols discussed may carry risks.
            You acknowledge that you use the Service at your own risk and are
            solely responsible
