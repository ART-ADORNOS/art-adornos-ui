import {Navigate} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../providers/AuthContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { user, token } = useContext(AuthContext);

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;