"use client";

import AboutIntro from "./components/AboutIntro";
import ServicesSlider from "./components/ServicesSlider";
import CompletedProjects from "./components/CompletedProjects";
import ClientsMarquee from "./components/ClientsMarquee";
import CertificatesSlider from "./components/CertificatesSlider";
import TestimonialsSlider from "./components/TestimonialsSlider";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import Link from 'next/link'

// Замени обычный импорт на динамический
// const EquipmentDoubleRing = dynamic(
//   () => import('./components/Instruments'),
//   { ssr: false }
// );
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
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/90 to-gray-700/90" />



        {/* Контент */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">


                  {/* Декоративная абстракция справа */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-40 hidden xl:block pointer-events-none z-0">
          <svg viewBox="0 0 680 520" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {[220, 180, 140, 100, 60].map((r, i) => (
              <circle key={r} cx="340" cy="260" r={r} fill="none" stroke="#ffffff"
                strokeWidth="3" opacity="1" />
            ))}
            <line x1="120"  y1="260" x2="560" y2="260" stroke="#ffffff" strokeWidth="3" opacity="1"/>
            <line x1="340" y1="40"  x2="340" y2="480" stroke="#ffffff" strokeWidth="3" opacity="1"/>
            <line x1="184" y1="104" x2="496" y2="416" stroke="#ffffff" strokeWidth="3" opacity="1"/>
            <line x1="496" y1="104" x2="184" y2="416" stroke="#ffffff" strokeWidth="3" opacity="1"/>
            <circle cx="340" cy="260" r="20" fill="#38bdf8" opacity="1"/>
            {[[80,80,80,120,120,80],[600,80,600,120,560,80],[80,440,80,400,120,440],[600,440,600,400,560,440]].map(([x1,y1,x2,y2,x3,y3],i) => (
              <path key={i} d={`M${x1} ${y1} L${x2} ${y2} M${x1} ${y1} L${x3} ${y3}`}
                stroke="#ffffff" strokeWidth="3" fill="none" opacity="1"/>
            ))}
            <text x="340" y="505" textAnchor="middle" fontFamily="monospace"
              fontSize="15" fill="#ffffff" opacity="1" letterSpacing="5">LUKOS NDT SCAN</text>
          </svg>
        </div>

          {/* Бейдж доверия */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-6 mt-10"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 text-sm font-medium tracking-wide uppercase">
              3400+ обследованных объектов в Казахстане
            </span>
          </motion.div>

          {/* Заголовок */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-4xl leading-tight mb-6"
          >
            Узнайте реальное состояние вашего объекта
          </motion.h1>

          {/* Подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Техническое обследование зданий, дефектоскопия и НК металлов —
            с официальным заключением и расчётами
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/request"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-base"
            >
              Получить консультацию
            </a>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Наши услуги →
            </Link>
          </motion.div>
        </div>
      </section>
      
      <AboutIntro />
      <ServicesSlider/>
      {/* <EquipmentDoubleRing/> */}

      <CompletedProjects/>
      <EquipmentAppleDock/>
      {/* <TestimonialsSlider/> */}
      <ClientsMarquee/>
      <CertificatesSlider/>
    </>
  );
}