"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext"; // عدل المسار

export default function FAQ() {
  const { language } = useApp();
  const [openItems, setOpenItems] = useState({});

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions from our customers",

      ctaTitle: "Didn't find your answer?",
      ctaDesc: "Contact us now and we'll be happy to help",
      callNow: "Call Now",
      whatsapp: "Chat on WhatsApp",

      faqs: [
        {
          id: 1,
          question: "How long does AC installation take?",
          answer:
            "Installation usually takes between 2–4 hours depending on the AC type and outdoor unit location. Our team ensures professional and accurate setup.",
        },
        {
          id: 2,
          question: "Do your products include warranty?",
          answer:
            "Yes! All products come with a manufacturer warranty ranging from 3–15 years depending on the model, plus one year free service warranty.",
        },
        {
          id: 3,
          question: "Do you provide periodic maintenance?",
          answer:
            "Yes, we offer scheduled maintenance services at competitive prices. We recommend maintenance every 6 months for optimal performance.",
        },
        {
          id: 4,
          question: "What is the installation cost?",
          answer:
            "Installation cost depends on the AC type and installation location. Contact us for a free detailed quotation.",
        },
        {
          id: 5,
          question: "Do you work with all brands?",
          answer:
            "We work with leading international and local brands and have experience maintaining most popular AC systems.",
        },
        {
          id: 6,
          question: "How can I request emergency maintenance?",
          answer:
            "You can call us immediately or send a WhatsApp message. Our team is available 24/7 to assist you.",
        },
      ],
    },

    ar: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أكثر الأسئلة التي يسألها عملاؤنا",

      ctaTitle: "لم تجد إجابتك؟",
      ctaDesc: "اتصل بنا الآن وسنساعدك بكل سرور",
      callNow: "اتصل الآن",
      whatsapp: "تحدث على واتس",

      faqs: [
        {
          id: 1,
          question: "ما هي فترة تركيب التكييف؟",
          answer:
            "التركيب عادة يستغرق من 2-4 ساعات حسب نوع التكييف والوحدة الخارجية. فريقنا يعمل بكفاءة واحترافية لضمان التركيب الصحيح.",
        },
        {
          id: 2,
          question: "هل توجد ضمانات على المنتجات؟",
          answer:
            "نعم! كل منتج يأتي بضمان الشركة المصنعة من 3-15 سنة حسب النوع، بالإضافة إلى ضمان خدمة لمدة سنة كاملة.",
        },
        {
          id: 3,
          question: "هل تقدمون خدمة صيانة دورية؟",
          answer:
            "نعم، نقدم خدمات الصيانة الدورية بأسعار مميزة. نوصي بالصيانة كل 6 أشهر للحفاظ على كفاءة التكييف.",
        },
        {
          id: 4,
          question: "ما هو سعر التركيب؟",
          answer:
            "سعر التركيب يختلف حسب نوع ومكان التكييف. يمكنك التواصل معنا للحصول على عرض سعر مجاني.",
        },
        {
          id: 5,
          question: "هل تتعاملون مع جميع الماركات؟",
          answer:
            "نتعامل مع أفضل الماركات العالمية والمحلية ولدينا خبرة في صيانة معظم الأنواع المشهورة.",
        },
        {
          id: 6,
          question: "كيف يمكنني طلب خدمة صيانة طارئة؟",
          answer:
            "يمكنك الاتصال بنا فورًا أو إرسال رسالة عبر واتساب. فريقنا متاح 24/7 لخدمتك.",
        },
      ],
    },
  };

  const t = content[language];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {t.faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <svg
                  className={`w-5 h-5 text-blue-600 transition-transform ${
                    openItems[faq.id] ? "rotate-180" : ""
                  }`}
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
              </button>

              {openItems[faq.id] && (
                <div className="px-6 py-4 bg-white border-t">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">{t.ctaTitle}</h3>
          <p className="mb-6 text-blue-100">{t.ctaDesc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+201007596703"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              {t.callNow}
            </a>

            <a
              href="https://wa.me/201007596703"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
