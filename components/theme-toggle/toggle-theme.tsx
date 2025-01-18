"use client";

import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

enum Theme {
  light = "light",
  dark = "dark",
}

const ToggleTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  const toggleClick = () => {
    if (theme === Theme.dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", Theme.light);
      setTheme(Theme.light);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", Theme.dark);
      setTheme(Theme.dark);
    }
  };

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === Theme.dark);
    } else {
      const initialTheme = systemPrefersDark ? Theme.dark : Theme.light;
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  };

  useEffect(() => {
    initializeTheme();

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? Theme.dark : Theme.light;
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return (
    <button
      onClick={toggleClick}
      className="rounded-full shadow-md shadow-gray-5 p-1 cursor-pointer"
    >
      {theme === Theme.light ? (
        <FaMoon className="size-6 " />
      ) : (
        <FaSun className="size-6 " color="gray" />
      )}
    </button>
  );
};

export default ToggleTheme;