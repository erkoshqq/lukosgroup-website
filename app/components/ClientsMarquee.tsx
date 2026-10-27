"use client";

import { motion } from "framer-motion";
import LogoMarquee from "./LogoMarquee";

// Замени на реальные логотипы клиентов
const clients = [
  { name: "АлЭС", logo: "/clients/AlES.png" },
  { name: "Богатырь Комир", logo: "/clients/bogatyr.webp" },
  { name: "Kazakhmys", logo: "/clients/kazakhmys.png" },
  { name: "Казатомпром", logo: "/clients/kazatomprom.png" },
  { name: "Казхром", logo: "/clients/kazchrome.jpg" },
  { name: "KazMinerals", logo: "/clients/kazminerals.png" },
  { name: "КазМунайГаз", logo: "/clients/kazmunaygaz.webp" },
  { name: "ПетроКазахстан", logo: "/clients/petrokazakhstan.webp" },
  { name: "Темир жолы", logo: "/clients/temirzholy.avif" },
];

export default function ClientsMarquee() {
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

        <LogoMarquee items={clients} />

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
    </section>
  );
}
