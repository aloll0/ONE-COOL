"use client";

import { useApp } from "@/context/AppContext"; // عدل المسار

export default function Testimonials() {
  const { language } = useApp();

  const content = {
    en: {
      title: "What Our Customers Say",
      subtitle:
        "Don't just take our word for it — read reviews from our satisfied customers",

      stats: [
        { number: "10000+", label: "Happy Customers" },
        { number: "30+", label: "Years Experience" },
        { number: "4.9★", label: "Average Rating" },
      ],

      testimonials: [
        {
          id: 1,
          name: "Ahmed Mohamed",
          city: "Cairo",
          rating: 5,
          comment:
            "Excellent service! The AC works perfectly and the team was professional and punctual.",
        },
        {
          id: 2,
          name: "Fatma Ali",
          city: "Giza",
          rating: 5,
          comment:
            "Best decision I made! Great price and outstanding quality. After-sales service is amazing.",
        },
        {
          id: 3,
          name: "Mahmoud Hassan",
          city: "Cairo",
          rating: 5,
          comment:
            "Professional installation and fast maintenance. I've used it for a year with zero issues.",
        },
        {
          id: 4,
          name: "Laila Ibrahim",
          city: "Alexandria",
          rating: 5,
          comment:
            "Easy communication and excellent service. The cooling is powerful and the warranty gives peace of mind.",
        },
      ],
    },

    ar: {
      title: "آراء عملائنا",
      subtitle: "لا تأخذ كلامنا فقط، اقرأ تقييمات عملائنا الراضين عن خدماتنا",

      stats: [
        { number: "10000+", label: "عميل سعيد" },
        { number: "30+", label: "سنوات خبرة" },
        { number: "4.9★", label: "متوسط التقييم" },
      ],

      testimonials: [
        {
          id: 1,
          name: "أحمد محمد",
          city: "القاهرة",
          rating: 5,
          comment:
            "خدمة ممتازة جداً! التكييف مستقر وشغل راقي. الفريق احترافي وملتزم بالمواعيد.",
        },
        {
          id: 2,
          name: "فاطمة علي",
          city: "الجيزة",
          rating: 5,
          comment:
            "أفضل اختيار قمت به! السعر مناسب والجودة عالية جداً. خدمة ما بعد البيع رائعة.",
        },
        {
          id: 3,
          name: "محمود حسن",
          city: "القاهرة",
          rating: 5,
          comment:
            "التركيب احترافي والصيانة سريعة. استخدمت المنتج لسنة ولا توجد أي مشاكل.",
        },
        {
          id: 4,
          name: "ليلى إبراهيم",
          city: "الإسكندرية",
          rating: 5,
          comment:
            "موقعهم وسهل التواصل معهم. التكييف بارد جداً والضمان يعطيك راحة البال.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 border-blue-600"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {testimonial.comment}
              </p>

              {/* User */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white rounded-lg shadow-lg p-8">
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
