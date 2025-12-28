import {Navigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const isTokenValid = (token) => {
  if (!token || typeof token !== "string") {
    return false;
  }

  try {
    const decoded = jwtDecode(token);

    if (!decoded || typeof decoded !== "object") {
      return false;
    }

    const { exp } = decoded;

    if (typeof exp !== "number") {
      return false;
    }

    const nowInSeconds = Date.now() / 1000;
    return exp > nowInSeconds;
  } catch (e) {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const hasValidToken = isTokenValid(token);
  return hasValidToken ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
