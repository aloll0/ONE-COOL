"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext"; // عدل المسار
import ProductCard from "./ProductCard";
import Modal from "./Modal";

export default function Products() {
  const { language } = useApp();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  /* ================= TRANSLATIONS ================= */

  const content = {
    en: {
      sectionTitle: "Our AC Products",
      sectionDesc:
        "Choose from our wide selection of high-quality air conditioning units for every budget and requirement",
      viewAll: "View All Products",

      products: [
        {
          id: 1,
          title: "EcoMineral 1.5 HP Inverter AC",
          badge: "Best Seller",
          img: "/c1.png",
        },
        {
          id: 2,
          title: "CoolPro 2.0 HP Window AC",
          badge: "Popular",
          img: "/c1.png",
        },
        {
          id: 3,
          title: "AirMax 1.5 HP Split System",
          badge: "Premium",
          img: "/c1.png",
        },
        {
          id: 4,
          title: "AirMax 1.5 HP Split System",
          badge: "Premium",
          img: "/c2.png",
        },
        {
          id: 5,
          title: "AirMax 1.5 HP Split System",
          badge: "Premium",
          img: "/c2.png",
        },
        {
          id: 6,
          title: "AirMax 1.5 HP Split System",
          badge: "Premium",
          img: "/c2.png",
        },
        {
          id: 7,
          title: "AirMax 1.5 HP Split System",
          badge: "Premium",
          img: "/c3.png",
        },
        {
          id: 8,
          title: "AirMax 1.5 HP Split System",
          badge: "Premium",
          img: "/c3.png",
        },
        {
          id: 9,
          title: "AirMax 1.5 HP Split System",
          badge: "Premium",
          img: "/c3.png",
        },
        {
          id: 10,
          title: "Split air conditioner Haier 1.5 HP, cool, Smart Cool",
          badge: "Premium",
          img: "/haier.webp",
        },
        {
          id: 11,
          title: "Split air conditioner Haier 2.25 HP, cool, Smart Cool",
          badge: "Premium",
          img: "/haier.webp",
        },
        {
          id: 12,
          title: "Split air conditioner Haier 3 HP, cool, Smart Cool",
          badge: "Premium",
          img: "/haier.webp",
        },
      ],
    },

    ar: {
      sectionTitle: "منتجات التكييف",
      sectionDesc:
        "اختر من مجموعتنا الواسعة من أجهزة التكييف عالية الجودة المناسبة لكل الميزانيات والاحتياجات",
      viewAll: "عرض كل المنتجات",

      products: [
        {
          id: 1,
          title: "مكيف هواء كاريير أوبتيماكس برو، 1.5 حصان، مضخة حرارية",
          badge: "الأكثر مبيعًا",
          img: "/c1.png",
        },
        {
          id: 2,
          title: "مكيف هواء كاريير أوبتيماكس برو، 2.25 حصان، مضخة حرارية",
          badge: "الأكثر طلبًا",
          img: "/c1.png",
        },
        {
          id: 3,
          title: "مكيف هواء كاريير أوبتيماكس برو، 3 حصان، مضخة حرارية",
          badge: "فئة مميزة",
          img: "/c1.png",
        },
        {
          id: 4,
          title: " ميديا ​​ميشن برو 1.5 حصان، بارد ساخن، انفرتر",
          badge: "فئة مميزة",
          img: "/c2.png",
        },
        {
          id: 5,
          title: " ميديا ​​ميشن برو 2.25 حصان، بارد ساخن، انفرتر",
          badge: "فئة مميزة",
          img: "/c2.png",
        },
        {
          id: 6,
          title: " ميديا ​​ميشن برو 3 حصان، بارد ساخن، انفرتر",
          badge: "فئة مميزة",
          img: "/c2.png",
        },
        {
          id: 7,
          title: "تكييف سبليت AirMax قدرة 1.5 حصان",
          badge: "فئة مميزة",
          img: "/c3.png",
        },
        {
          id: 8,
          title: "تكييف سبليت AirMax قدرة 1.5 حصان",
          badge: "فئة مميزة",
          img: "/c3.png",
        },
        {
          id: 9,
          title: "تكييف كاريير 2.25 حصان اوبتيمكس بارد",
          badge: "فئة مميزة",
          img: "/c3.png",
        },
        {
          id: 10,
          title: "مكيف هواء سبليت هاير 1.5 حصان، تبريد سمارت",
          badge: "فئة مميزة",
          img: "/haier.webp",
        },
        {
          id: 11,
          title: "مكيف هواء سبليت هاير 2.25 حصان، تبريد سمارت",
          badge: "فئة مميزة",
          img: "/haier.webp",
        },
        {
          id: 12,
          title: "مكيف هواء سبليت هاير 3 حصان، تبريد سمارت",
          badge: "فئة مميزة",
          img: "/haier.webp",
        },
      ],
    },
  };

  const t = content[language];

  /* ================= UI ================= */

  return (
    <>
      <section id="products" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t.sectionTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.sectionDesc}
            </p>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
              />
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              {t.viewAll}
            </button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
}
