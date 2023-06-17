import { createContext, useState } from "react";

export const ThemeContext = createContext();
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "dark" ? setTheme((prev) => "light") : setTheme((prev) => "dark");
  };
  const value = {
    theme,
    toggleTheme
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
