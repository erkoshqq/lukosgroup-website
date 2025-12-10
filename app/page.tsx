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

// Замени обычный импорт на динамический
const EquipmentDoubleRing = dynamic(
  () => import('./components/Instruments'),
  { ssr: false }
);
const EquipmentAppleDock = dynamic(
  () => import('./components/Instruments3'),
  { ssr: false }
);


export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      <section className="h-screen w-full relative overflow-hidden bg-gray-800">
        
        {/* Очень тонкое видео на фоне */}
        <div className="absolute inset-0 opacity-15">
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

        {/* Легкое затемнение */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-700/900 to-gray-600/900"></div>

        {/* Контент */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
          


          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white max-w-5xl leading-tight mb-10"
          >
            Дефектоскопия и неразрушающий контроль бетона, металлов и сварки
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Полное обследование объектов с экспертизой, расчётами и документацией
          </motion.p>
        </div>
      </section>
      
      <AboutIntro />
      <ServicesSlider/>
      <EquipmentDoubleRing/>
      <EquipmentAppleDock/>
      <CompletedProjects/>
      <TestimonialsSlider/>
      <ClientsMarquee/>
      <CertificatesSlider/>
    </>
  );
}