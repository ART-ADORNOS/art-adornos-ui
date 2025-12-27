import StartupProvider from "../../modules/startup/context/StartupProvider";
import ProtectedRoute from "./ProtectedRoute";

const ProtectedStartupRoute = ({ children }) => (
  <StartupProvider>
    <ProtectedRoute>{children}</ProtectedRoute>
  </StartupProvider>
);

export default ProtectedStartupRoute;
