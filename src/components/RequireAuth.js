import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RequireAuth = ({ allowedRole }) => {
    const { auth } = useAuthContext();
    const location = useLocation();

    return allowedRole.find((role) => auth.user.role.includes(role)) ? (
        <Outlet />
      ) : auth?.user ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      );

}

export default RequireAuth;