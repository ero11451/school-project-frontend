import  { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showNotification } from '../redux-store/slice/notificationSlice';
// import { RoutePath } from './routerPath';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(showNotification({type:'error', message:'You need to login to access this resource.', show: true}))
    //   navigate(RoutePath.login);
      // redirect("/login");
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, return null while navigating
  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
