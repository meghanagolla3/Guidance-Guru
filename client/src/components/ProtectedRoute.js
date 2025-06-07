import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-center text-xl p-5">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  
  return children;
};

export default ProtectedRoute;
