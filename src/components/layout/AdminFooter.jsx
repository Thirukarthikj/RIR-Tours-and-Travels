import React from 'react';

export default function AdminFooter() {
  return (
    <footer className="w-full py-3 md:h-12 bg-white border-t border-gray-100 flex items-center justify-center text-[8px] sm:text-[10px] font-sans font-semibold tracking-wider text-gray-400 uppercase text-center px-4">
      <span>© {new Date().getFullYear()} RIR Tours & Travels • Administrative Control Panel</span>
    </footer>
  );
}
