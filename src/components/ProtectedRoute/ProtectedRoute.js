import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('user');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
