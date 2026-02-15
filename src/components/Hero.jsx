"use client";

import { useApp } from "@/context/AppContext"; // عدل المسار حسب مشروعك

export default function Hero() {
  const { language } = useApp();

  const content = {
    en: {
      title1: "Experience Premium",
      title2: "Cooling Solutions",
      description:
        "Professional AC installation, maintenance, and repair services. Keep your space comfortable year-round with our expert solutions.",
      explore: "Explore Products",
      consultation: "Get Free Consultation",
      exp: "10+ Years Experience",
      customers: "5000+ Happy Customers",
      support: "24/7 Support",
    },
    ar: {
      title1: "استمتع بأفضل",
      title2: "حلول التبريد",
      description:
        "خدمات احترافية لتركيب وصيانة وإصلاح أجهزة التكييف. حافظ على راحة مكانك طوال العام مع حلولنا المتخصصة.",
      explore: "تصفح المنتجات",
      consultation: "احصل على استشارة مجانية",
      exp: "أكثر من 10 سنوات خبرة",
      customers: "أكثر من 5000 عميل سعيد",
      support: "دعم فني 24/7",
    },
  };

  const t = content[language];

  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {t.title1} <span className="text-blue-200">{t.title2}</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {t.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto"
          >
            {t.explore}
          </a>

          <a
            href="tel:+201007596703"
            className="bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-300 w-full sm:w-auto border border-white"
          >
            {t.consultation}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex justify-center gap-8 text-white text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <span>✔</span>
            <span>{t.exp}</span>
          </div>

          <div className="flex items-center gap-2">
            <span>✔</span>
            <span>{t.customers}</span>
          </div>

          <div className="flex items-center gap-2">
            <span>✔</span>
            <span>{t.support}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
