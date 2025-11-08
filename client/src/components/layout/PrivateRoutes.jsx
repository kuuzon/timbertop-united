import { Outlet, Navigate, useLocation } from 'react-router-dom'; 
import useAuth from '../../hooks/useAuth';

const PrivateRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    !user
      ? <Navigate to="/login" state={{ from: location }} replace />
      : <Outlet /> 
  )
}

export default PrivateRoutes