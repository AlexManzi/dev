"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "light", setTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, updateTheme] = useState("light");
  const [ready, setReady] = useState(false);
  const setTheme = (value) => updateTheme(value === "xp" ? "xp" : "light");

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      setTheme(savedTheme);
    } catch {
      // Keep the toggle usable when browser storage is unavailable.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still applies for this visit.
    }
  }, [theme, ready]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
