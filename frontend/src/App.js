import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPages from "./pages/landingPages";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/Account";
import NotFoundPage from "./pages/NotFoundPage";
import ThemeContext from "./context/ThemeContent";
import LoginAdmin from "./pages/LoginAdmin";
import Register from './pages/register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Corregido a setIsDarkMode

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode"); // Corregido a storedTheme
    if (storedTheme === "true") {
      setIsDarkMode(true); // Corregido a setIsDarkMode
    }
  }, []);

  function toggleTheme() {
    setIsDarkMode(prevMode => { // Corregido a setIsDarkMode
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode.toString());
      return newMode;
    });
  }
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`${isDarkMode ? "dark" : "light"} min-h-screen flex flex-col`}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPages />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/admin" element={<LoginAdmin />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
        </AuthProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;