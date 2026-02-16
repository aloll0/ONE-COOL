"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

const translations = {
  ar: {
    services: "الخدمات",
    products: "المنتجات",
    about: "عن الشركة",
    callNow: "اتصل الآن",
  },
  en: {
    services: "Services",
    products: "Products",
    about: "About",
    callNow: "Call Now",
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleDark, language, toggleLanguage, mounted } = useApp();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-gray-950 shadow-md"
            : "bg-white shadow-md"
          : isDark
            ? "bg-transparent"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className={`text-2xl font-bold ${
                isScrolled
                  ? isDark
                    ? "text-blue-400"
                    : "text-blue-600"
                  : "text-white"
              }`}
            >
              ONE COOL
            </span>
          </div>

          {/* Navigation Links */}
          <div
            className={`hidden md:flex gap-8 ${
              isScrolled
                ? isDark
                  ? "text-gray-300"
                  : "text-gray-700"
                : "text-white"
            }`}
          >
            <a
              href="#services"
              className="transition-colors hover:text-blue-400"
            >
              {t.services}
            </a>
            <a
              href="#products"
              className="transition-colors hover:text-blue-400"
            >
              {t.products}
            </a>
            <a href="#testimonials" className="transition-colors hover:text-blue-400">
              {t.about}
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? isDark
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-lg font-semibold transition-colors text-sm ${
                isScrolled
                  ? isDark
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {language === "ar" ? "EN" : "ع"}
            </button>

            {/* Call Now Button */}
            <a
              href="tel:+201007596703"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              {t.callNow}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
