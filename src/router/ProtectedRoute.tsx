import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { RoutePath } from './routerPath';
import {  AuthState } from '../redux-store/slice/authSlice';
import { showToast } from '../component/ToastNotifications';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((store:{auth:AuthState}) => store.auth.token)
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated == null) {
      showToast({type:'error', message:'You need to login to access this resource.', show: true})
      navigate(RoutePath.login);

      // redirect("/login");
    }
  
  }, [isAuthenticated, location]);

  // If not authenticated, return null while navigating
  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
