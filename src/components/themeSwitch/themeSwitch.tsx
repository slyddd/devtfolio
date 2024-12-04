import { useTheme } from "./hooks/useTheme.ts";
import { Moon02Icon as Moon, Sun02Icon as Sun } from "hugeicons-react";
import "./styles/themeSwitch.css";

export function ThemeSwitch() {
  const { theme, handleTheme } = useTheme();

  return (
    <button id="themeSwitch" onClick={handleTheme}>
      {theme ? <Sun /> : <Moon />}
    </button>
  );
}
