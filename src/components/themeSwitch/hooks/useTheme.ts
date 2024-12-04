import { useEffect, useState } from "react";

export function useTheme() {
  const actualTheme = localStorage.getItem("theme") === "dark";
  const [theme, setTheme] = useState(actualTheme);

  useEffect(() => {
    if (actualTheme) {
      document.documentElement.classList.add("dark");
    }
  }, [actualTheme]);

  const handleTheme = () => {
    localStorage.setItem("theme", theme ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
    setTheme(!theme);
  };

  return { theme, handleTheme };
}
