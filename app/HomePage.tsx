"use client";

import AboutIntro from "./components/AboutIntro";
import ServicesSlider from "./components/ServicesSlider";
import CompletedProjects from "./components/CompletedProjects";
import ClientsMarquee from "./components/ClientsMarquee";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const EquipmentAppleDock = dynamic(
  () => import('./components/Instruments3'),
  { ssr: false }
);

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <section className="h-screen w-full relative overflow-hidden bg-gray-900">

        {/* Видео на фоне */}
        <div className="absolute inset-0 opacity-80">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Затемнение */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-800/90" />

        {/* Контент */}
        <div className="relative z-10 h-full flex items-center pt-20 px-6 md:px-16 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">

            {/* Левая часть */}
            <div className="flex flex-col">

              {/* Бейдж */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2 mb-3"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse flex-shrink-0" />
                <span className="text-sky-400 text-xs font-medium tracking-wide uppercase">
                  3400+ обследованных объектов в Казахстане
                </span>
              </motion.div>

              {/* Заголовок */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3"
              >
                Техническое обследование, дефектоскопия и диагностика строительных конструкций
              </motion.h1>

              {/* Подзаголовок */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-gray-300 text-sm md:text-base leading-relaxed mb-4"
              >
                Экспертное обследование зданий и сооружений с объективной оценкой технического
                состояния и подготовкой официальной инженерной документации.
              </motion.p>

              {/* Буллеты */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="flex flex-col gap-1.5 mb-5"
              >
                {[
                  "Государственная лицензия",
                  "Аттестованные эксперты",
                  "3400+ обследованных объектов",
                  "Работа по всему Казахстану",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-200 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                
                <a href="/request"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors text-sm md:text-base"
                >
                  Получить консультацию
                </a>
                
                <a href="/presentation.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm md:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                  </svg>
                  Скачать презентацию
                </a>
              </motion.div>
            </div>

            {/* Правая часть — сетка 5 фото как на макете */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="hidden lg:flex flex-col gap-3"
            >
              {/* Верхний ряд — левая шире правой */}
              <div className="grid gap-3 h-52 xl:h-60" style={{ gridTemplateColumns: '3fr 2fr' }}>
                {[
                  { src: "/images/building_corner.png", alt: "Здание" },
                  { src: "/images/storage.png", alt: "Металлоконструкции" },
                ].map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
                    className="relative overflow-hidden rounded-2xl bg-gray-800"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                ))}
              </div>

              {/* Нижний ряд — 3 фото */}
              <div className="grid grid-cols-3 gap-3 h-40 xl:h-48">
                {[
                  { src: "/images/laser.png", alt: "Колонны" },
                  { src: "/images/meter.png", alt: "Дефектоскоп" },
                  { src: "/images/bridge.png", alt: "Мост" },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.75 + i * 0.1 }}
                    className="relative overflow-hidden rounded-2xl bg-gray-800"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <AboutIntro />
      <ServicesSlider />
      <CompletedProjects />
      <EquipmentAppleDock />
      <ClientsMarquee />
    </>
  );
}