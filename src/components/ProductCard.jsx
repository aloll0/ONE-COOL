import Image from "next/image";

export default function ProductCard({ product, onQuickView }) {
  const whatsappMessage = `Hi, I am interested in ${product.title} - please provide more details.`;
  const whatsappLink = `https://wa.me/201007596703?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden group">
        {/* Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-400 group-hover:scale-110 transition-transform">
          <Image
            src={product.img}
            alt={product.title}
            width={150}
            height={150}
            className="object-cover w-full"
          />
        </div>
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {product.badge}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          {product.title}
        </h3>

        {/* Specs
        <div className="mb-4 flex-1">
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            {product.specs.map((spec, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="text-blue-600 font-semibold">•</span>
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Price */}
        <div className="mb-4 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
            {product.price}
          </p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              {product.originalPrice}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          {/* Quick View Button */}
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Quick View
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
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-600 transition-colors"
            title="Chat on WhatsApp"
          >
            <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
