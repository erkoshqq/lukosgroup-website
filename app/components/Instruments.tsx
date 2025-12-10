"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";

const outerRing = [
  { id: 1, name: "Магус-М", category: "Магнитопорошковый контроль", img: "/instrum/magus-m.jpg" },
  { id: 2, name: "OmniScan MX2", category: "Ультразвуковой контроль", img: "/instrum/OmniScanMX2.jpg" },
  { id: 3, name: "Olympus 38DL PLUS", category: "Ультразвуковой толщиномер", img: "/instrum/Olympus38DLPLUS.jpg" },
  { id: 4, name: "MagnaFORM", category: "Вихретоковый контроль", img: "/instrum/MagnaFORM.jpg" },
  { id: 5, name: "УД2-3C", category: "Ультразвуковой дефектоскоп", img: "/instrum/ud23c.jpg" },
  { id: 6, name: "АРМС-МГ4", category: "Дефектоскоп арматуры", img: "/instrum/armsmg4.jpg" },
  { id: 7, name: "РПД 180 С", category: "Рентген аппарат", img: "/instrum/RPD180.jpg" },
  { id: 8, name: "BALTECH VP-3470", category: "Вибродиагностика", img: "/instrum/baltech.jpg" },
  { id: 9, name: "ОКО-3", category: "Георадар", img: "/instrum/oko3.jpg" },
  { id: 10, name: "Молоток Шмидта", category: "Контроль прочности", img: "/instrum/molotok.jpg" },
  { id: 11, name: "ПОИСК-2.6", category: "Измеритель защитного слоя", img: "/instrum/poisk26.webp" },
  { id: 12, name: "А1209", category: "УЗ толщиномер", img: "/instrum/1209.jpg" },
  { id: 13, name: "GeoMax Zoom 10", category: "Тахеометр", img: "/instrum/GeoMax-Zoom-10-1.jpg" },
  { id: 14, name: "LEICA TS06plus", category: "Тахеометр", img: "/instrum/LEICA TS06plus R500.jpg" }
];

const innerRing = [
  { id: 15, name: "RGK N-32", category: "Оптический нивелир", img: "/instrum/RGK N-32.webp" },
  { id: 16, name: "СПЕКТР-4", category: "Диагностика свай", img: "/instrum/spektr4.jpg" },
  { id: 17, name: "ИДС-2", category: "Длина свай", img: "/instrum/ids2.jpg" },
  { id: 18, name: "А1040 MIRA", category: "УЗ томограф", img: "/instrum/А1040-MIRA.jpg" },
  { id: 19, name: "УТ-111", category: "УЗ толщиномер", img: "/instrum/ut111.jpg" },
  { id: 20, name: "Testo 875-1", category: "Тепловизор", img: "/instrum/Testo.jpg" },
  { id: 21, name: "Лазерный дальномер", category: "Измерение", img: "/instrum/RZA60.webp" },
  { id: 22, name: "AMO DIST 50G", category: "Лазерный дальномер", img: "/instrum/amodist50g.jpg" },
  { id: 23, name: "УКС МГ4С", category: "Георадарный комплекс", img: "/instrum/mg4c.jpg" },
  { id: 24, name: "Набор КК", category: "Капиллярный контроль", img: "/instrum/KK.jpg" },
  { id: 25, name: "Комплект ВИК", category: "Визуальный контроль", img: "/instrum/VIK.png" },
  { id: 26, name: "ИПС - МГ 4.03", category: "Измеритель прочности бетона", img: "/instrum/mg403.jpg" }
];

const outerColor = "#1e3a8a"; 
const innerColor = "#1e40af"; 


export default function EquipmentDoubleRing() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const allEquipment = useMemo(() => [...outerRing, ...innerRing], []);
  
  // Desktop constants
  const centerX = 400;
  const centerY = 400;
  const outerRadius = 350;
  const outerInnerRadius = 270;
  const innerRadius = 260;
  const innerInnerRadius = 180;

  // Мемоизируем вычисления путей
  const arcs = useMemo(() => {
    const createArc = (index: number, total: number, outerR: number, innerR: number) => {
      const startAngle = (index * 360) / total - 90;
      const endAngle = ((index + 1) * 360) / total - 90;
      
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      
      const x1 = centerX + outerR * Math.cos(startRad);
      const y1 = centerY + outerR * Math.sin(startRad);
      const x2 = centerX + outerR * Math.cos(endRad);
      const y2 = centerY + outerR * Math.sin(endRad);
      
      const x3 = centerX + innerR * Math.cos(endRad);
      const y3 = centerY + innerR * Math.sin(endRad);
      const x4 = centerX + innerR * Math.cos(startRad);
      const y4 = centerY + innerR * Math.sin(startRad);
      
      const largeArc = ((endAngle - startAngle + 360) % 360) > 180 ? 1 : 0;
      
      return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L ${x3.toFixed(2)} ${y3.toFixed(2)} A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4.toFixed(2)} ${y4.toFixed(2)} Z`;
    };

    const getImagePosition = (index: number, total: number, radius: number) => {
      const angle = ((index * 360) / total + (360 / total) / 2 - 90) * Math.PI / 180;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      };
    };

    return {
      outer: outerRing.map((_, i) => ({
        path: createArc(i, outerRing.length, outerRadius, outerInnerRadius),
        imgPos: getImagePosition(i, outerRing.length, (outerRadius + outerInnerRadius) / 2)
      })),
      inner: innerRing.map((_, i) => ({
        path: createArc(i, innerRing.length, innerRadius, innerInnerRadius),
        imgPos: getImagePosition(i, innerRing.length, (innerRadius + innerInnerRadius) / 2)
      }))
    };
  }, []);

  const hoveredEquipment = allEquipment.find(e => e.id === hoveredId);

  // Mobile view - simple grid
  if (isMobile) {
    return (
      <section className="min-h-screen w-full bg-gradient-to-b from-gray-500 to-gray-300 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-4">
              НАШЕ ОБОРУДОВАНИЕ
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              26 единиц современного оборудования
            </h2>
            <p className="text-gray-600 text-sm">
              Высокоточные приборы для диагностики и контроля
            </p>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {allEquipment.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {item.category}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900 mb-1">100%</p>
              <p className="text-xs text-gray-600">собственная база</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900 mb-1">11</p>
              <p className="text-xs text-gray-600">категорий</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-900 mb-1">99.4%</p>
              <p className="text-xs text-gray-600">точность</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop view - optimized donut chart
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-300 to-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-6">
            НАШЕ ОБОРУДОВАНИЕ
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4"
          >
            26 единиц современного оборудования
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
          >
            Высокоточные приборы для диагностики и контроля состояния объектов
          </motion.p>
        </div>

        {/* Double Ring Chart */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <svg 
              width="800" 
              height="800" 
              viewBox="0 0 800 800" 
              className="max-w-full h-auto"
              style={{ willChange: 'auto' }}
            >
              {/* Outer Ring */}
              {outerRing.map((item, index) => {
                const { path, imgPos } = arcs.outer[index];
                const isHovered = hoveredId === item.id;
                
                return (
                  <g key={item.id}>
                    <path
                      d={path}
                      fill={outerColor}
                      opacity={hoveredId === null ? 0.9 : isHovered ? 1 : 0.3}
                      stroke="white"
                      strokeWidth="3"
                      className="cursor-pointer transition-opacity duration-200"
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    />
                    
                    <foreignObject
                      x={imgPos.x - 30}
                      y={imgPos.y - 30}
                      width="60"
                      height="60"
                      className="pointer-events-none"
                    >
                      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border-2 border-white">
                        <img 
                          src={item.img} 
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
              
              {/* Inner Ring */}
              {innerRing.map((item, index) => {
                const { path, imgPos } = arcs.inner[index];
                const isHovered = hoveredId === item.id;
                
                return (
                  <g key={item.id}>
                    <path
                      d={path}
                      fill={innerColor}
                      opacity={hoveredId === null ? 0.9 : isHovered ? 1 : 0.3}
                      stroke="white"
                      strokeWidth="3"
                      className="cursor-pointer transition-opacity duration-200"
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    />
                    
                    <foreignObject
                      x={imgPos.x - 25}
                      y={imgPos.y - 25}
                      width="50"
                      height="50"
                      className="pointer-events-none"
                    >
                      <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border-2 border-white">
                        <img 
                          src={item.img} 
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
              
              <circle
                cx={centerX}
                cy={centerY}
                r={innerInnerRadius - 5}
                fill="white"
                className="pointer-events-none"
              />
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 flex flex-col items-center justify-center text-center px-6">
                <AnimatePresence mode="wait">
                  {hoveredEquipment ? (
                    <motion.div
                      key={hoveredEquipment.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-500">
                        <img 
                          src={hoveredEquipment.img} 
                          alt={hoveredEquipment.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {hoveredEquipment.name}
                      </h3>
                      <p className="text-base text-gray-600 font-medium">
                        {hoveredEquipment.category}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-7xl font-bold text-blue-900 mb-3">26</div>
                      <p className="text-gray-600 text-xl">единиц</p>
                      <p className="text-sm text-gray-400 mt-4">Наведите на сектор</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-12"
        >
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold text-blue-900 mb-2">100%</p>
            <p className="text-sm text-gray-600">сертифицированных оборудований</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold text-blue-900 mb-2">11</p>
            <p className="text-sm text-gray-600">категорий контроля</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-6xl font-bold text-blue-900 mb-2">99.4%</p>
            <p className="text-sm text-gray-600">точность измерений</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}