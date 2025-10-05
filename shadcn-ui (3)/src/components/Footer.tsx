export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Important Disclaimer */}
        <div className="p-6 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-white">Important:</strong> This platform provides educational information only 
            and does not constitute medical advice. Always consult qualified healthcare professionals before 
            starting any supplement regimen. We do not encourage or promote illegal substances.
          </p>
        </div>
      </div>
    </footer>
  );
}