import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-20 text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4 font-display">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 font-sans">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto font-sans">
        We couldn't find the page you were looking for. The route might have changed or does not exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-all shadow-md font-sans"
      >
        Go Back Home
      </Link>
    </div>
  );
}
