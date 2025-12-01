import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs md:text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Underground Supplement Advisor (BMSA).{" "}
          <span className="text-gray-500">
            Educational use only. Not medical advice.
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs md:text-sm text-gray-400">
          <a
            href="/privacy"
            className="hover:text-emerald-400 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-slate-700">|</span>
          <a
            href="/terms"
            className="hover:text-emerald-400 transition-colors"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
