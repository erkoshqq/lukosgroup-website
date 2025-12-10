"use client";

import { motion } from "framer-motion";

// Замени на реальные логотипы клиентов
const clients = [
  { id: 1, name: "Клиент 1", logo: "/clients/AlES.png" },
  { id: 2, name: "Клиент 2", logo: "/clients/bogatyr.webp" },
  { id: 3, name: "Клиент 3", logo: "/clients/kazakhmys.png" },
  { id: 4, name: "Клиент 4", logo: "/clients/kazatomprom.png" },
  { id: 5, name: "Клиент 5", logo: "/clients/kazchrome.jpg" },
  { id: 6, name: "Клиент 6", logo: "/clients/kazminerals.png" },
  { id: 7, name: "Клиент 7", logo: "/clients/kazmunaygaz.webp" },
  { id: 8, name: "Клиент 8", logo: "/clients/petrokazakhstan.webp" },
  { id: 9, name: "Клиент 9", logo: "/clients/temirzholy.avif" },
];

export default function ClientsMarquee() {
  // Дублируем массив для бесшовной прокрутки
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="w-full bg-white py-20 overflow-hidden border-y border-gray-200">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
            НАШИ КЛИЕНТЫ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Нам доверяют
          </h2>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling logos */}
          <div className="flex flex-nowrap gap-12 animate-marquee hover:pause-marquee">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-base">
            Более <span className="font-semibold text-blue-900">100+ компаний</span> доверили нам обследование своих объектов
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}