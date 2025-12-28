import {useCallback, useEffect, useState} from "react";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem("isDarkMode", String(next));
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }, []);

  return { isDarkMode, toggleTheme };
};
