import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RequireAuth = () => {
    const { context } = useAuthContext();
    const location = useLocation();

    return (
        context?.user
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;