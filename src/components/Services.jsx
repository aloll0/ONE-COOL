"use client";

import { useApp } from "@/context/AppContext"; // عدل المسار حسب مشروعك

export default function Services() {
  const { language } = useApp();

  const content = {
    en: {
      sectionTitle: "Our Services",
      sectionDesc:
        "Comprehensive AC solutions tailored to meet all your cooling needs",
      learnMore: "Learn More →",
      services: [
        {
          id: 1,
          title: "Installation",
          description:
            "Expert AC installation with professional setup and testing to ensure optimal performance.",
          icon: "⚙️",
          color: "blue",
        },
        {
          id: 2,
          title: "Maintenance",
          description:
            "Regular maintenance services to keep your AC running smoothly and efficiently year-round.",
          icon: "🔧",
          color: "cyan",
        },
        {
          id: 3,
          title: "Repair",
          description:
            "Fast and reliable repair services for all AC issues, backed by our expert technicians.",
          icon: "🛠️",
          color: "indigo",
        },
        {
          id: 4,
          title: "Central AC",
          description:
            "Complete central air conditioning solutions for homes and commercial spaces.",
          icon: "❄️",
          color: "blue",
        },
      ],
    },

    ar: {
      sectionTitle: "خدماتنا",
      sectionDesc:
        "حلول متكاملة لأنظمة التكييف مصممة لتلبية جميع احتياجات التبريد الخاصة بك",
      learnMore: "اعرف المزيد ←",
      services: [
        {
          id: 1,
          title: "تركيب التكييف",
          description:
            "تركيب احترافي لأجهزة التكييف مع إعداد واختبار كامل لضمان أفضل أداء ممكن.",
          icon: "⚙️",
          color: "blue",
        },
        {
          id: 2,
          title: "الصيانة",
          description:
            "خدمات صيانة دورية للحفاظ على كفاءة جهاز التكييف والعمل بسلاسة طوال العام.",
          icon: "🔧",
          color: "cyan",
        },
        {
          id: 3,
          title: "الإصلاح",
          description:
            "خدمات إصلاح سريعة وموثوقة لجميع أعطال التكييف بواسطة فنيين متخصصين.",
          icon: "🛠️",
          color: "indigo",
        },
        {
          id: 4,
          title: "التكييف المركزي",
          description:
            "حلول متكاملة لأنظمة التكييف المركزي للمنازل والمساحات التجارية.",
          icon: "❄️",
          color: "blue",
        },
      ],
    },
  };

  const t = content[language];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    cyan: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100",
    indigo: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.sectionDesc}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.map((service) => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                colorClasses[service.color]
              }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href="#"
                className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                {t.learnMore}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
