import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">ONE COOL</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for professional AC installation,
              maintenance, and repair services years ago.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Repair
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Central AC
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  AC Units
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Spare Parts
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Warranties
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a
                  href="tel:+201007596703"
                  className="hover:text-white transition-colors"
                >
                  +20 100 759 6703
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />
                </span>
                <a
                  href="https://www.facebook.com/share/198kQe4qTG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={16}
                    height={16}
                  />
                </span>
                <a
                  href="https://www.facebook.com/share/1C3VD1HiRz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook Company
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:abaswaled96@gmail.com"
                  className="hover:text-white"
                >
                  abaswaled96@gmail.com
                </a>
              </li>
              <li className="text-gray-500">Mansoura, Egypt</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; 2026 ONE COOL. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
