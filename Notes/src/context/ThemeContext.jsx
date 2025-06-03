// File: ThemeContext.jsx
import { useEffect, useState, createContext } from "react";

// ✅ Create the context
export const Themecontext = createContext();

// ✅ ThemeProvider component to wrap around the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // ✅ Load saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark"); // ✅ Fix this line
    }
  }, []);

  // ✅ Save theme to localStorage and apply class to <html>
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // ✅ Toggle between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // ❌ Your return was outside the component — move this inside
  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      {children}
    </Themecontext.Provider>
  );
};
