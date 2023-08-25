import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  user?: any;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
