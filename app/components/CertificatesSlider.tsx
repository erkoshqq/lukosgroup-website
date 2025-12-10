"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

// Замени на реальные пути к сертификатам
const certificates = [
  { id: 1, image: "/certificates/1.jpg", title: "Сертификат 1" },
  { id: 2, image: "/certificates/2.jpg", title: "Сертификат 2" },
  { id: 3, image: "/certificates/3.jpg", title: "Сертификат 3" },
  { id: 4, image: "/certificates/4.jpg", title: "Сертификат 4" },
  { id: 5, image: "/certificates/5.jpg", title: "Сертификат 5" },
  { id: 6, image: "/certificates/6.jpg", title: "Сертификат 6" },
  { id: 7, image: "/certificates/7.jpg", title: "Сертификат 7" },
  { id: 8, image: "/certificates/8.jpg", title: "Сертификат 8" },
];

export default function CertificatesSlider() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <section className="w-full bg-gray-50 py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
              РАЗРЕШИТЕЛЬНАЯ ДОКУМЕНТАЦИЯ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
              Лицензии и аккредитации
            </h2>
          </motion.div>

          {/* Slider Container */}
          <div className="relative group">
            {/* Left Button */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-blue-800"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Right Button */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-blue-800"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable Container */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-shrink-0 w-72 group/card cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <div className="relative h-96 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group-hover/card:scale-[1.02]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-blue-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Hint */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm md:hidden"
          >
            <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Пролистайте для просмотра</span>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Certificate"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}