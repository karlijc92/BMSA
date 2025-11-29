import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        This page slipped into the underground and couldn&apos;t be found.
      </p>
      <a
        href="/"
        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
      >
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
