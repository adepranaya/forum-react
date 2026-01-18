import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ProtectedRoute = ({ to = '/', children }) => {
  const navigate = useNavigate();
  const authUser = useSelector((states) => states.authUser);

  useEffect(() => {
    if (authUser === null) {
      navigate(to, { replace: true });
    }
  }, [authUser, navigate, to]);

  if (authUser === null) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
