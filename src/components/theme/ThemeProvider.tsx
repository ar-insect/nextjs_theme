"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "brand";
type FontSizeScale = "sm" | "md" | "lg";
type RadiusScale = "sm" | "md" | "lg";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  fontSize: FontSizeScale;
  setFontSize: (size: FontSizeScale) => void;
  radius: RadiusScale;
  setRadius: (scale: RadiusScale) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "app-theme";
const FONT_STORAGE_KEY = "app-font-size";
const RADIUS_STORAGE_KEY = "app-radius-scale";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "brand") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function getInitialFontSize(): FontSizeScale {
  if (typeof window === "undefined") return "md";
  const stored = window.localStorage.getItem(FONT_STORAGE_KEY);
  if (stored === "sm" || stored === "md" || stored === "lg") return stored;
  return "md";
}

function getInitialRadius(): RadiusScale {
  if (typeof window === "undefined") return "md";
  const stored = window.localStorage.getItem(RADIUS_STORAGE_KEY);
  if (stored === "sm" || stored === "md" || stored === "lg") return stored;
  return "md";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [fontSize, setFontSizeState] = useState<FontSizeScale>("md");
  const [radius, setRadiusState] = useState<RadiusScale>("md");

  useEffect(() => {
    setThemeState(getInitialTheme());
    setFontSizeState(getInitialFontSize());
    setRadiusState(getInitialRadius());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-font-size", fontSize);
    window.localStorage.setItem(FONT_STORAGE_KEY, fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-radius", radius);
    window.localStorage.setItem(RADIUS_STORAGE_KEY, radius);
  }, [radius]);

  const setTheme = (value: Theme) => {
    setThemeState(value);
  };

  const toggleTheme = () => {
    setThemeState((current) => {
      const order: Theme[] = ["light", "dark", "brand"];
      const index = order.indexOf(current);
      const nextIndex = index === -1 ? 0 : (index + 1) % order.length;
      return order[nextIndex];
    });
  };

  const setFontSize = (value: FontSizeScale) => {
    setFontSizeState(value);
  };

  const setRadius = (value: RadiusScale) => {
    setRadiusState(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        fontSize,
        setFontSize,
        radius,
        setRadius
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be uxed within ThemeProvider");
  }
  return context;
}
