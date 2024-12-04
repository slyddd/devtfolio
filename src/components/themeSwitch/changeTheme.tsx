import { useTheme } from "./hooks/useTheme.ts";
import { Sun } from "../navbar/icons/sun.tsx";
import { Moon } from "../navbar/icons/moon.tsx";

export function ChangeTheme() {
  const { theme, handleTheme } = useTheme();

  return <button onClick={handleTheme}>{theme ? <Sun /> : <Moon />}</button>;
}
