import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from './routerPath';
import {  AuthState, showNotification } from '../redux-store/slice/authSlice';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((store:{auth:AuthState}) => store.auth.token)
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated == null) {
      dispatch(showNotification({type:'error', message:'You need to login to access this resource.', show: true}))
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
