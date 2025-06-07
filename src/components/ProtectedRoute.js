// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if user token exists in localStorage (replace with your real auth check)
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (!isAuthenticated) {
    // If not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the children components
  return children;
};

export default ProtectedRoute;

