import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useMemo} from "react";

import {AuthProvider} from "./shared/providers/AuthContext";
import {NotificationProvider} from "./shared/providers/alertProvider";
import {DashboardTypeProvider} from "./shared/providers/dashboardTypeProvider";
import ThemeContext from "./shared/providers/ThemeContent";

import ProtectedRoute from "./shared/routes/ProtectedRoute";
import ProtectedStartupRoute from "./shared/routes/ProtectedStartupRoute";
import {useTheme} from "./shared/hooks/useTheme";

import {fallbackRoute, protectedRoutes, protectedStartupRoutes, publicRoutes} from "./core/constants/routes/appRoutes";

function App() {
  const { isDarkMode, toggleTheme } = useTheme();

  const themeValue = useMemo(
    () => ({ isDarkMode, toggleTheme }),
    [isDarkMode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`${isDarkMode ? "dark" : "light"} min-h-screen flex flex-col`}>
        <NotificationProvider>
          <AuthProvider>
            <DashboardTypeProvider>
              <Router>
                <Routes>
                  {publicRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                  ))}

                  {protectedRoutes.map(({ path, element }) => (
                    <Route
                      key={path}
                      path={path}
                      element={<ProtectedRoute>{element}</ProtectedRoute>}
                    />
                  ))}

                  {protectedStartupRoutes.map(({ path, element }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <ProtectedStartupRoute>
                          {element}
                        </ProtectedStartupRoute>
                      }
                    />
                  ))}

                  <Route {...fallbackRoute} />
                </Routes>
              </Router>
            </DashboardTypeProvider>
          </AuthProvider>
        </NotificationProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
