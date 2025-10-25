import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

// Fix: Use React.ReactElement instead of JSX.Element to avoid issues with the global JSX namespace.
const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth) {
      // This can happen if AuthContext is not yet available.
      // You might want to show a loading spinner here.
      return null;
  }

  if (!auth.isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they
    // login, which is a nicer user experience.
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
