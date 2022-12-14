import {Navigate, Outlet} from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuth';

export const AuthLayout = () => {
    const { isAuthorized } = useAuthentication();
    return isAuthorized ? <Outlet /> : <Navigate to={"/login"} replace />;
};
