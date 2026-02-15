"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // من localStorage
    const savedDark = localStorage.getItem("isDark") === "true";
    const savedLang = localStorage.getItem("language") || "ar";
    setIsDark(savedDark);
    setLanguage(savedLang);

    if (savedDark) {
      document.documentElement.classList.add("dark");
    }
    if (savedLang === "en") {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.classList.remove("rtl");
    } else {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.classList.add("rtl");
    }
  }, []);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("isDark", newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleLanguage = () => {
    const newLang = language === "ar" ? "en" : "ar";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.setAttribute("lang", newLang);

    if (newLang === "en") {
      document.documentElement.classList.remove("rtl");
    } else {
      document.documentElement.classList.add("rtl");
    }
  };

  return (
    <AppContext.Provider
      value={{ isDark, toggleDark, language, toggleLanguage, mounted }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
