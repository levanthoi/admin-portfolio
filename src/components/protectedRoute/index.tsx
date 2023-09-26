import { getItem } from '@/utils/cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }: { children: React.ReactNode }) => {
  if (!getItem('accessToken')) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
