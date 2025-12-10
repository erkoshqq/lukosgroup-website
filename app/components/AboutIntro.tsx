"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";
import { Building2, Clock, Cpu, Users, Shield, Award, Lightbulb, Heart, TrendingUp } from "lucide-react";

export default function AboutIntro() {
  const [startCount, setStartCount] = useState(false);

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-300 via-white to-gray-300 py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP LABEL */}
        <div className="mb-8 md:mb-10">
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase">О компании</p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 pb-16 md:pb-20 relative">
          {/* Simplified lines - only main divider */}
          <div className="hidden lg:block absolute right-[34%] top-0 bottom-0 w-px bg-gray-200"></div>

          {/* LEFT SIDE TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 lg:pr-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
              Проводим техническое обследование зданий и сооружений, оказываем
              услуги по дефектоскопии, экспертизе ПБ, техническому надзору и
              аудиту
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:pl-16 justify-between"
          >
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              LUKOS GROUP - группа компаний, специализирующаяся на выполнении комплексных технических 
              обследований зданий и сооружений, включая дефектоскопию с использованием методов неразрушающего контроля.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 font-medium text-sm tracking-wide hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-md w-fit"
            >
              БОЛЬШЕ О КОМПАНИИ
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>

        {/* STATS GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setStartCount(true)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Building2 className="w-6 h-6 text-blue-900" />
              </div>
            </div>
            <p className="text-5xl md:text-6xl font-bold text-blue-900 mb-3">
              {startCount && <CountUp end={3447} duration={3} />}
            </p>
            <p className="text-base md:text-lg text-gray-600">объектов обследовано</p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Clock className="w-6 h-6 text-blue-900" />
              </div>
            </div>
            <p className="text-5xl md:text-6xl font-bold text-blue-900 mb-3">
              {startCount && <CountUp end={7} duration={3} />}
              <span className="text-3xl ml-2">лет</span>
            </p>
            <p className="text-base md:text-lg text-gray-600">ответственно работаем</p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Cpu className="w-6 h-6 text-blue-900" />
              </div>
            </div>
            <p className="text-5xl md:text-6xl font-bold text-blue-900 mb-3">
              {startCount && <CountUp end={14} duration={3} />}
            </p>
            <p className="text-base md:text-lg text-gray-600">видов оборудования НК</p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <Users className="w-6 h-6 text-blue-900" />
              </div>
            </div>
            <p className="text-5xl md:text-6xl font-bold text-blue-900 mb-3">
              {startCount && <CountUp end={26} duration={3} />}
            </p>
            <p className="text-base md:text-lg text-gray-600">экспертов в команде</p>
          </motion.div>
        </motion.div>

        {/* ПОЧЕМУ МЫ / ЦЕННОСТИ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 pt-20 border-t border-gray-200"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
              ПОЧЕМУ МЫ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Наши ценности
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Мы обеспечиваем безопасность и долговечность зданий и сооружений, предлагая объективные, 
              профессиональные и инновационные решения
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Безопасность */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Безопасность
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Обеспечиваем надежность объектов, снижая риски аварий и повышая уровень промышленной безопасности
                </p>
              </div>
            </motion.div>

            {/* Качество */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Award className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Качество
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Используем передовые технологии и строгие стандарты для точных и достоверных результатов
                </p>
              </div>
            </motion.div>

            {/* Профессионализм */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Профессионализм
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Команда высококвалифицированных специалистов с опытом работы в различных отраслях
                </p>
              </div>
            </motion.div>

            {/* Инновации */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Lightbulb className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Инновации
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Внедряем современные методы диагностики и контроля для повышения эффективности
                </p>
              </div>
            </motion.div>

            {/* Открытость */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <Heart className="w-7 h-7 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Открытость
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Стремимся к прозрачности, честности и долгосрочному сотрудничеству с партнерами
                </p>
              </div>
            </motion.div>

            {/* Миссия - занимает два столбца на десктопе */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group md:col-span-2 lg:col-span-1"
            >
              <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Наша миссия
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Обеспечиваем безопасность и долговечность зданий и сооружений через объективные и профессиональные решения
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}