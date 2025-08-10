// src/hooks/useThemeToggle.js
import { useEffect, useState } from "react";

const useThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
  }, [bgColor, textColor]);
  useEffect(() => {
    if (isDarkMode) {
      setIsDark("dark");
      localStorage.setItem("theme", "dark");
      setBgColor("#000000");
      setTextColor("#ffffff");
    } else {
      setIsDark("light");
      localStorage.setItem("theme", "light");
        setBgColor("#ffffff");
        setTextColor("#000000");
    }
  }, [isDarkMode]);

  return {isDarkMode, isDark, toggleTheme, bgColor, textColor };
};

export default useThemeToggle;
