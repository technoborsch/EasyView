import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import {isAuthValid} from "./Utils";

export function PrivateOutlet() {
  const auth = useAuth();
  const logged = isAuthValid(auth);
  const location = useLocation();

  return logged? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}