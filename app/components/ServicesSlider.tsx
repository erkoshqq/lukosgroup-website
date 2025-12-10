"use client";

import { motion } from "framer-motion";
import { Building2, Search, Microscope, Calculator, Layers, CameraIcon } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Техническое обследование",
    description: "Комплексная оценка состояния здания с выявлением дефектов и определением возможности безопасной эксплуатации",
    icon: Building2,
    stats: { value: "2940+", label: "объектов" },
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    title: "Дефектоскопия",
    description: "Выявление скрытых дефектов неразрушающими методами контроля с точностью до 99.4%",
    icon: Search,
    stats: { value: "9", label: "методик НК" },
    color: "from-indigo-600 to-indigo-800"
  },
  {
    id: 3,
    title: "Лабораторные испытания",
    description: "Определение физико-механических характеристик материалов в аккредитованной лаборатории",
    icon: Microscope,
    stats: { value: "100%", label: "точность" },
    color: "from-violet-600 to-violet-800"
  },
  {
    id: 4,
    title: "Геодезическая съемка",
    description: "Высокоточные измерения деформаций, осадок и геометрии сооружений",
    icon: CameraIcon,
    stats: { value: "±1мм", label: "точность" },
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 5,
    title: "Поверочный расчёт",
    description: "Моделирование нагрузок и расчет несущей способности в ЛИРА САПР и SCAD",
    icon: Calculator,
    stats: { value: "3D", label: "моделирование" },
    color: "from-fuchsia-600 to-fuchsia-800"
  },
  {
    id: 6,
    title: "Геологические изыскания",
    description: "Исследование грунтовых условий с рекомендациями по укреплению фундамента",
    icon: Layers,
    stats: { value: "30м", label: "глубина" },
    color: "from-pink-600 to-pink-800"
  }
];

export default function ServicesGrid() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-sm text-blue-400 tracking-[0.3em] uppercase mb-4">
            НАШИ УСЛУГИ
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Полный цикл <br />технических решений
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            От обследования до укрепления — комплексный подход к безопасности вашего объекта
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.a
                key={service.id}
                href="/services"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">
                  {String(service.id).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                    <span className="text-2xl font-bold text-white">
                      {service.stats.value}
                    </span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {service.stats.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Подробнее
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}