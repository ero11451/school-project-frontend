import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from './routerPath';
import { AuthState, showNotification } from '../redux-store/slice/authSlice';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: { auth: AuthState}) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(showNotification({type:'error', message:'You need to login to access this resource.', show: true}))
      navigate(RoutePath.login);
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, return null while navigating
  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
