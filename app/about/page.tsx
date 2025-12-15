"use client";

import { motion } from "framer-motion";
import { Building2, Target, MapPin, TrendingUp, Shield, Search, Microscope, FileCheck, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";

export default function AboutPageHero() {
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

  // Фотографии с объектов
  const projectPhotos = [
    { id: 1, image: "/projects/amc.png", title: "Антенно-мачтовые сооружения" },
    { id: 2, image: "/projects/electrostancia.png", title: "Электростанция" },
    { id: 3, image: "/projects/elevator.png", title: "Элеватор" },
    { id: 4, image: "/projects/gres1.png", title: "ГРЭСы" },
    { id: 5, image: "/projects/lep.png", title: "Линия электропередачи" },
    { id: 6, image: "/projects/object.png", title: "Промышленный объект" },
    { id: 7, image: "/projects/prom.png", title: "Промышленный объект" },
    { id: 8, image: "/projects/voennayabaza.png", title: "Военная база" },
    { id: 9, image: "/projects/dom.png", title: "Гражданское здание" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/70 z-10"></div>
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-gray-800"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-6"
            >
              О КОМПАНИИ
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Обеспечиваем безопасность и надежность объектов
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed"
            >
              Компания Lukos Group занимается комплексным техническим обследованием зданий и сооружений, 
              обеспечивая безопасность и надежность объектов различного назначения по всему Казахстану
            </motion.p>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">7 лет</p>
                <p className="text-sm text-gray-400">опыта работы</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">3400+</p>
                <p className="text-sm text-gray-400">обследованных объектов</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">70%</p>
                <p className="text-sm text-gray-400">снижение риска аварий</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-white mb-1">12.3М</p>
                <p className="text-sm text-gray-400">м² обследовано</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs tracking-wider uppercase">Прокрутить</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Story & Mission Section */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-6">
                НАША ИСТОРИЯ
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                За годы работы мы заработали безупречную репутацию
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Компания Lukos Group реализовала множество проектов по оценке технического состояния зданий, 
                  инженерных сетей и строительных конструкций. В штате компании работают высококвалифицированные 
                  аттестованные эксперты с глубокими знаниями и многолетним опытом.
                </p>
                <p className="text-lg">
                  Для выполнения работ используются современные методы диагностики, включая инструментальные обследования, 
                  лабораторные испытания материалов и мониторинг деформационных процессов. Собственный комплект оборудования 
                  позволяет оперативно и точно проводить обследование объектов любой сложности.
                </p>
                <p className="text-lg">
                  От жилых домов до промышленных и инфраструктурных сооружений — мы готовы работать с объектами 
                  любого масштаба и уровня сложности.
                </p>
              </div>

              {/* Image Placeholder - Team Photo */}
              <div className="mt-8 relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/spina.jpg" 
                  alt="Команда Lukos Group на объекте"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Наша команда на объекте</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Mission Card */}
              <div className="bg-blue-900 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Наша миссия</h3>
                <p className="text-blue-100 leading-relaxed">
                  Обеспечение безопасности и надежности зданий и сооружений через комплексную техническую 
                  диагностику и профессиональные рекомендации по их эксплуатации и усилению.
                </p>
              </div>

              {/* Geography */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">География работы</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Наша деятельность охватывает все регионы Казахстана. Специалисты готовы выезжать на объекты 
                      в труднодоступных районах с использованием мобильных лабораторий.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Labs */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Мобильные лаборатории</h3>
                    <p className="text-gray-600 leading-relaxed">
                      В нашем арсенале — мобильные лаборатории для проведения исследований непосредственно 
                      на строительных площадках, что обеспечивает оперативность и точность результатов.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Placeholder - Equipment */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/random1.jpg" 
                  alt="Лаборатория и оборудование"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Современное оборудование</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Directions Section */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
              КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
              Комплексный подход к безопасности объектов
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Применяем передовые технологии и постоянно совершенствуем подходы для обеспечения 
              наиболее точных и достоверных результатов
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Оценка несущей способности
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Комплексная оценка несущей способности конструкций и определение степени износа
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Выявление дефектов
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Обнаружение скрытых дефектов с использованием современных методов диагностики
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Microscope className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Лабораторные испытания
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Испытания материалов и мониторинг деформационных процессов
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Рекомендации по усилению
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Разработка рекомендаций по усилению и восстановлению элементов
              </p>
            </motion.div>
          </div>

          {/* Image Gallery - Work Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/spinairuletka.jpg" 
                alt="Процесс обследования"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">Инструментальное обследование</p>
              </div>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/nursipribor.jpg" 
                alt="Лабораторные испытания"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">Лабораторные испытания</p>
              </div>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/spinaipribor.jpg" 
                alt="Работа на объекте"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium">Работа на объекте</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
              НАШИ КЛИЕНТЫ
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">
              Сотрудничаем с крупнейшими компаниями
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Солидность компании подтверждается сотрудничеством с крупнейшими строительными 
              организациями и государственными заказчиками
            </p>
          </motion.div>

          {/* Clients Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 items-center"
          >
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors grayscale hover:grayscale-0">
              <img 
                src="/clients/kazmunaygaz.webp" 
                alt="АО НК КазМунайГаз"
                className="max-w-full h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors grayscale hover:grayscale-0">
              <img 
                src="/clients/kaztransoil.png" 
                alt="АО КазТрансОйл"
                className="max-w-full h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors grayscale hover:grayscale-0">
              <img 
                src="/clients/kazakhmys.png" 
                alt="Kazakhmys"
                className="max-w-full h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors grayscale hover:grayscale-0">
              <img 
                src="/clients/kazchrome.jpg" 
                alt="Kazchrome"
                className="max-w-full h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors grayscale hover:grayscale-0">
              <img 
                src="/clients/temirzholy.avif" 
                alt="Қазақстан темір жолы"
                className="max-w-full h-16 object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors grayscale hover:grayscale-0">
              <img 
                src="/clients/bogatyr.webp" 
                alt="Богатырь комир"
                className="max-w-full h-16 object-contain"
              />
            </div>
          </motion.div>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-xl text-gray-700 font-medium">
              Доверие таких крупных игроков рынка — результат нашего профессионализма, 
              надежности и безупречного качества работ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Photos Gallery */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
              НАШИ ОБЪЕКТЫ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Фотографии с реальных объектов
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              От жилых комплексов до крупных промышленных и инфраструктурных сооружений
            </p>
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
              {projectPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-shrink-0 w-80 md:w-96 group/card cursor-pointer"
                  onClick={() => setSelectedImage(photo.image)}
                >
                  <div className="relative h-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group-hover/card:scale-[1.02]">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover/card:opacity-100 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-blue-900" />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white font-medium text-lg">{photo.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Hint for Mobile */}
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
          
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Project"
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