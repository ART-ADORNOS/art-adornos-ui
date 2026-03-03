import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useMemo} from "react";

import {AuthProvider} from "./shared/providers/AuthContext";
import {NotificationProvider} from "./shared/providers/alertProvider";
import ThemeContext from "./shared/providers/ThemeContent";

import ProtectedRoute from "./shared/routes/ProtectedRoute";
import {useTheme} from "./shared/hooks/useTheme";

import {fallbackRoute, protectedRoutes, publicRoutes} from "./core/routes/appRoutes";

function App() {
    const {isDarkMode, toggleTheme} = useTheme();

    const themeValue = useMemo(
        () => ({isDarkMode, toggleTheme}),
        [isDarkMode, toggleTheme]
    );

    return (
        <ThemeContext.Provider value={themeValue}>
            <div className={`${isDarkMode ? "dark" : "light"} min-h-screen flex flex-col`}>
                <NotificationProvider>
                    <AuthProvider>
                        <Router>
                            <Routes>
                                {publicRoutes.map(({path, element}) => (
                                    <Route key={path} path={path} element={element}/>
                                ))}

                                {protectedRoutes.map(({path, element, roles}) => (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={
                                            <ProtectedRoute allowedRoles={roles}>
                                                {element}
                                            </ProtectedRoute>
                                        }
                                    />
                                ))}

                                <Route {...fallbackRoute} />
                            </Routes>
                        </Router>
                    </AuthProvider>
                </NotificationProvider>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
