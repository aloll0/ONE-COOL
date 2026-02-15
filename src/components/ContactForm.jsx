"use client";

import { useState } from "react";

export default function ContactForm() {
  const [lang, setLang] = useState("ar"); // ar | en
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const content = {
    ar: {
      title: "احصل على عرض سعر مجاني",
      subtitle: "املأ النموذج وسنتواصل معك في أقرب وقت",
      name: "الاسم بالكامل",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      service: "نوع الخدمة",
      message: "الرسالة",
      submit: "أرسل الطلب عبر واتس آب",
      sending: "جاري الإرسال...",
      success: "✓ شكراً! سيتم فتح واتس آب الآن",
      call: "أو اتصل بنا مباشرة:",
      privacy: "لن نشارك بياناتك مع أي طرف ثالث",
    },
    en: {
      title: "Get a Free Quote",
      subtitle: "Fill out the form and we will contact you shortly",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email",
      service: "Service Type",
      message: "Message",
      submit: "Send via WhatsApp",
      sending: "Sending...",
      success: "✓ Thank you! WhatsApp will open now",
      call: "Or call us directly:",
      privacy: "Your data will never be shared",
    },
  };

  const serviceLabels = {
    ar: {
      installation: "تركيب تكييف جديد",
      maintenance: "صيانة دورية",
      repair: "إصلاح وعطل",
      cleaning: "تنظيف وتعقيم",
      other: "خدمة أخرى",
    },
    en: {
      installation: "New AC Installation",
      maintenance: "Periodic Maintenance",
      repair: "Repair Service",
      cleaning: "Cleaning & Sanitization",
      other: "Other",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "installation",
    message: "",
  });

  const t = content[lang];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert(lang === "ar" ? "رقم هاتف غير صحيح" : "Invalid phone number");
      return;
    }

    setLoading(true);

    const message =
      lang === "ar"
        ? `اسمي: ${formData.name}
رقم هاتفي: ${formData.phone}
البريد الإلكتروني: ${formData.email}
الخدمة: ${serviceLabels.ar[formData.service]}
الرسالة: ${formData.message}`
        : `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${serviceLabels.en[formData.service]}
Message: ${formData.message}`;

    const whatsappLink = `https://wa.me/201007596703?text=${encodeURIComponent(
      message,
    )}`;

    const newWindow = window.open(whatsappLink, "_blank");

    if (newWindow) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setLoading(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "installation",
          message: "",
        });
      }, 2000);
    } else {
      setLoading(false);
    }
  };

  return (
    <section
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="py-16 bg-gradient-to-r from-blue-600 to-blue-700"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Language Switch */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold"
          >
            {lang === "ar" ? "English" : "العربية"}
          </button>
        </div>

        {/* Header */}
        <div className="text-center text-white mb-10">
          <h2 className="text-4xl font-bold mb-3">{t.title}</h2>
          <p className="text-blue-100">{t.subtitle}</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t.name}
              className="w-full border p-3 rounded-lg"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={t.phone}
              className="w-full border p-3 rounded-lg"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.email}
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >
              {Object.entries(serviceLabels[lang]).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.message}
              className="w-full border p-3 rounded-lg resize-none"
            />

            {submitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                {t.success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              {loading ? t.sending : t.submit}
            </button>

            <p className="text-center text-gray-500 text-sm">{t.privacy}</p>

            <div className="text-center">
              <p>{t.call}</p>
              <a
                href="tel:+201007596703"
                className="text-blue-600 font-bold text-lg"
              >
                +20 100 759 6703
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
