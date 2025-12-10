"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Водовод протяженностью 1,8 км",
    desc: "Определение технических характеристик наружных сетей водоснабжения с использованием современных методов диагностики.",
    date: "2021",
    category: "Техническое обследование",
    img: "/images/photo1.jpg",
  },
  {
    id: 2,
    title: "Общеобразовательная средняя школа с интернатом",
    desc: "Комплексное техническое обследование и оценка состояния конструкций здания с выдачей заключения о возможности дальнейшей эксплуатации.",
    date: "2021",
    category: "Техническое обследование",
    img: "/images/nuray1.jpg",
  },
  {
    id: 3,
    title: "Детский сад и здание мастерской",
    desc: "Техническое обследование конструкций с оценкой возможности проведения капитального ремонта и перепланировки помещений.",
    date: "2021",
    category: "Техническое обследование",
    img: "/images/nursipribor.jpg",
  },
  {
    id: 4,
    title: "Тепловые насосные станции",
    desc: "Техническое обследование состояния конструкций с учетом диагностики грузоподъемного механизма и систем безопасности.",
    date: "2021",
    category: "Техническое обследование",
    img: "/images/spina2.jpg",
  }
];

export default function ProjectsSection() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-6">
            РЕАЛИЗОВАННЫЕ ПРОЕКТЫ
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight"
            >
              Опыт работы на крупных объектах
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              Собственная приборная база и современное оборудование для неразрушающего контроля строений, сварных швов и металлоконструкций
            </motion.p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                    {project.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Read More Link */}
                <button className="inline-flex items-center gap-2 text-blue-900 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-900 font-semibold text-base hover:gap-3 transition-all"
          >
            Все проекты
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}