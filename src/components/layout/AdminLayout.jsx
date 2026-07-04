import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import { adminService } from '../../services/adminService';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Redirect if not authenticated (route guard check)
  if (!adminService.isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  // Handle responsiveness toggles
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // Auto-close on mobile, open on desktop
      setSidebarOpen(!mobile);
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-screen bg-slate-50 flex overflow-hidden font-sans">
      
      {/* Sidebar Navigation Drawer */}
      <AdminSidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
        isMobile={isMobile} 
      />

      {/* Main Content Area Canvas */}
      <div 
        className={`flex-grow flex flex-col h-screen overflow-hidden transition-all duration-300 ${
          isMobile 
            ? 'pl-0' 
            : `${sidebarOpen ? 'pl-64' : 'pl-20'}`
        }`}
      >
        {/* Top Header Bar */}
        <AdminHeader 
          sidebarOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
          isMobile={isMobile} 
        />

        {/* Dynamic Nested Screen Content */}
        <main className="flex-grow p-6 overflow-y-auto">
          <Outlet />
        </main>

        {/* Bottom copyright details */}
        <AdminFooter />
      </div>

    </div>
  );
}
