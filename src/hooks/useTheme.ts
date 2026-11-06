import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("airlink-theme", theme);
    } catch {
      // The site works without storage; the preference just will not persist.
    }
  }, [theme]);

  return {
    theme,
    toggle: () => setTheme((value) => (value === "dark" ? "light" : "dark")),
  };
}
