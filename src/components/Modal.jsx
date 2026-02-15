"use client";

import Image from "next/image";
import { useState } from "react";

export default function Modal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-blue-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:bg-blue-700 w-8 h-8 flex items-center justify-center rounded"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product Image */}
          <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-7xl mb-6">
            <Image
              src={product.img}
              alt={product.title}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Section - Specs */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                المواصفات
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Pricing & Details */}
            <div>
              <div className="mb-6">
                <h3 className="text-sm text-gray-600 mb-2">السعر</h3>
                <div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">
                    {product.price}
                  </p>
                  {product.originalPrice && (
                    <p className="text-lg text-gray-500 line-through">
                      {product.originalPrice}
                    </p>
                  )}
                </div>
              </div>

              {/* Badge & Features */}
              <div className="mb-6">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {product.badge}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                احصل على تكييف هواء عالي الجودة مع ضمان شامل وخدمة متميزة.
                منتجنا يوفر لك الراحة والكفاءة في استهلاك الطاقة.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                 <a
                  href={`https://wa.me/201007596703?text=Hi, I am interested in ${product.title} - please provide more details.`}
                  target="_blank"
                  rel="noopener noreferrer">
                  اطلب الآن
                </a>
                </button>
                <a
                  href={`https://wa.me/201007596703?text=Hi, I am interested in ${product.title} - please provide more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />
                  تحدث عبر واتس آب
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              لماذا تختارنا؟
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">⏱️</div>
                <p className="font-semibold">تركيب سريع</p>
                <p className="text-sm text-gray-600">في نفس اليوم</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="font-semibold">ضمان شامل</p>
                <p className="text-sm text-gray-600">حتى 15 سنة</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl mb-2">🔧</div>
                <p className="font-semibold">صيانة مجانية</p>
                <p className="text-sm text-gray-600">سنة واحدة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
