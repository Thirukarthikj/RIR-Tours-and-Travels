import React from 'react';
import { Navigate } from 'react-router-dom';
import { adminService } from '../services/adminService';

export default function ProtectedRoute({ children }) {
  if (!adminService.isAuthenticated()) {
    // Redirect unauthenticated clients to login page
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
