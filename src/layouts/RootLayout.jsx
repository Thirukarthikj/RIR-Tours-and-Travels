import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import BackToTop from '../components/common/BackToTop';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Reusable Footer */}
      <Footer />

      {/* Floating Utilities */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
