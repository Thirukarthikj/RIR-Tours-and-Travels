import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts & Guards
import RootLayout from '../layouts/RootLayout';
import AdminLayout from '../components/layout/AdminLayout';
import ProtectedRoute from './ProtectedRoute';

// Public Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Packages from '../pages/Packages';
import Contact from '../pages/Contact';
import Fleet from '../pages/Fleet';
import Gallery from '../pages/Gallery';
import NotFound from '../pages/NotFound';

// Admin Pages
import AdminLogin from '../pages/Admin/Login';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminPackages from '../pages/Admin/Packages';
import AdminVehicles from '../pages/Admin/Vehicles';
import AdminGallery from '../pages/Admin/Gallery';
import AdminEnquiries from '../pages/Admin/Enquiries';
import AdminSettings from '../pages/Admin/Settings';
import AdminProfile from '../pages/Admin/Profile';

export default function AppRoutes() {
  return (
    <Routes>
      
      {/* 1. Public Facing Catalog Website */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="packages" element={<Packages />} />
        <Route path="contact" element={<Contact />} />
        <Route path="fleet" element={<Fleet />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* 2. Admin Gatekeeper Gateway */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* 3. Protected Dashboard Hub Panel */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="packages" element={<AdminPackages />} />
        <Route path="vehicles" element={<AdminVehicles />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="enquiries" element={<AdminEnquiries />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="profile" element={<AdminProfile />} />
      </Route>

    </Routes>
  );
}
