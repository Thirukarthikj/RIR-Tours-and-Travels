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
import Cab from '../pages/Cab';
import Gallery from '../pages/Gallery';
import NotFound from '../pages/NotFound';

// SEO Landing Pages – Kodaikanal
import KodaiTourPackages from '../pages/LandingPages/KodaiTourPackages';
import KodaiTaxiService from '../pages/LandingPages/KodaiTaxiService';
import KodaiOneWayDrop from '../pages/LandingPages/KodaiOneWayDrop';
import MaduraiToKodaiTaxi from '../pages/LandingPages/MaduraiToKodaiTaxi';
import KodaiSightseeing from '../pages/LandingPages/KodaiSightseeing';
import KodaiTourOperator from '../pages/LandingPages/KodaiTourOperator';

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
        <Route path="cab" element={<Cab />} />
        <Route path="gallery" element={<Gallery />} />

        {/* Kodaikanal SEO Landing Pages */}
        <Route path="kodaikanal-tour-packages" element={<KodaiTourPackages />} />
        <Route path="kodaikanal-taxi-service" element={<KodaiTaxiService />} />
        <Route path="kodaikanal-one-way-drop" element={<KodaiOneWayDrop />} />
        <Route path="madurai-to-kodaikanal-taxi" element={<MaduraiToKodaiTaxi />} />
        <Route path="kodaikanal-sightseeing" element={<KodaiSightseeing />} />
        <Route path="kodaikanal-tour-operator" element={<KodaiTourOperator />} />

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

