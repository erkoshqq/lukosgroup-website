"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRef } from "react";



// Данные по областям (замени на реальные)
const regions = [
  { id: "KZ-AKM", name: "Акмолинская область", projects: 187, color: "#3b82f6" },
  { id: "KZ-AKT", name: "Актюбинская область", projects: 178, color: "#8b5cf6" },
  { id: "KZ-ALM", name: "Алматинская область", projects: 487, color: "#ec4899" },
  { id: "KZ-ATY", name: "Атырауская область", projects: 145, color: "#06b6d4" },
  { id: "KZ-VOS", name: "Восточно-Казахстанская область", projects: 32, color: "#6366f1" },
  { id: "KZ-ZHA", name: "Жамбылская область", projects: 98, color: "#ef4444" },
  { id: "KZ-ZAP", name: "Западно-Казахстанская область", projects: 123, color: "#14b8a6" },
  { id: "KZ-KAR", name: "Карагандинская область", projects: 356, color: "#a855f7" },
  { id: "KZ-KUS", name: "Костанайская область", projects: 87, color: "#f97316" },
  { id: "KZ-KZY", name: "Кызылординская область", projects: 21, color: "#84cc16" },
  { id: "KZ-MAN", name: "Мангистауская область", projects: 54, color: "#22d3ee" },
  { id: "KZ-PAV", name: "Павлодарская область", projects: 76, color: "#fb923c" },
  { id: "KZ-SEV", name: "Северо-Казахстанская область", projects: 65, color: "#c084fc" },
  { id: "KZ-YUZ", name: "Туркестанская область", projects: 143, color: "#4ade80" },
];


export default function KazakhstanMap() {
  const [hoveredRegion, setHoveredRegion] = useState<typeof regions[0] | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");

  const prevRegionRef = useRef<string | null>(null);
  const totalProjects = regions.reduce((sum, r) => sum + r.projects, 0);

  // Загружаем SVG
  useEffect(() => {
    fetch("/maps/kazakhstanHigh.svg")
      .then(res => res.text())
      .then(text => {
        // Убираем фиксированные размеры, сохраняем viewBox
        const modifiedSvg = text
          .replace(/width="[^"]*"/, 'width="100%"')
          .replace(/height="[^"]*"/, 'height="100%"');
        setSvgContent(modifiedSvg);
      })
      .catch(err => console.error("Error loading map:", err));
  }, []);

  // Обработчик клика по области на карте
useEffect(() => {
  if (!svgContent) return;

  const container = document.getElementById("kz-map-container");
  if (!container) return;

  const paths = container.querySelectorAll<SVGPathElement>("path[id^='KZ-']");

  paths.forEach((path) => {
    path.style.fill = "#CCCCCC";
    path.style.stroke = "#ffffff";
    path.style.strokeWidth = "1";
    path.style.cursor = "pointer";
    path.style.pointerEvents = "all";
  });

  const handleMove = (e: MouseEvent) => {
    const target = e.target as SVGPathElement;

    if (target?.tagName === "path" && target.id.startsWith("KZ-")) {
      const region = regions.find(r => r.id === target.id);
      setHoveredRegion(region || null);
    } else {
      setHoveredRegion(null);
    }
  };

  container.addEventListener("mousemove", handleMove);
  container.addEventListener("mouseleave", () => setHoveredRegion(null));

  return () => {
    container.removeEventListener("mousemove", handleMove);
  };
}, [svgContent]);


useEffect(() => {
  const container = document.getElementById("kz-map-container");
  if (!container) return;

  // сбрасываем предыдущий регион
  if (prevRegionRef.current) {
    const prevPath = container.querySelector<SVGPathElement>(
      `path#${prevRegionRef.current}`
    );
    if (prevPath) {
      prevPath.style.fill = "#CCCCCC";
    }
  }

  // красим текущий
  if (hoveredRegion) {
    const currentPath = container.querySelector<SVGPathElement>(
      `path#${hoveredRegion.id}`
    );
    if (currentPath) {
      currentPath.style.fill = hoveredRegion.color;
    }

    prevRegionRef.current = hoveredRegion.id;
  } else {
    prevRegionRef.current = null;
  }
}, [hoveredRegion]);



  return (
    <section className="w-full bg-white py-16 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
            ГЕОГРАФИЯ РАБОТ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Проекты по регионам Казахстана
          </h2>
          <p className="text-gray-600 text-lg">
            Наведите на регион, чтобы увидеть количество проектов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start">
  {/* Interactive SVG Map */}
  <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-4 lg:p-8 border border-gray-200">
    <div className="relative w-full bg-white rounded-xl shadow-lg p-4 lg:p-6">
      {/* Tooltip */}
      {hoveredRegion && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-2 lg:top-4 left-2 lg:left-4 bg-white shadow-xl rounded-xl p-2 lg:p-4 z-10 border-2"
          style={{ borderColor: hoveredRegion.color }}
        >
          <p className="font-semibold text-gray-900 text-sm lg:text-lg mb-1">
            {hoveredRegion.name}
          </p>
          <p className="text-xl lg:text-3xl font-bold mb-1" style={{ color: hoveredRegion.color }}>
            {hoveredRegion.projects}
          </p>
          <p className="text-xs lg:text-sm text-gray-500">проектов выполнено</p>
        </motion.div>
      )}

      {/* SVG Map */}
      {svgContent ? (
        <div
          id="kz-map-container"
          dangerouslySetInnerHTML={{ __html: svgContent }}
          className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-h-[400px] sm:[&>svg]:max-h-[500px] lg:[&>svg]:max-h-[600px]"
        />
      ) : (
        <div className="w-full aspect-[4/3] flex items-center justify-center">
          <div className="animate-pulse text-gray-400">
            Загрузка карты...
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Regions List */}
  <div className="bg-gray-50 rounded-2xl p-4 lg:p-6 max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto">
    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-4 bg-gray-50 pb-2">
      Все регионы ({regions.length})
    </h3>
    
    <div className="space-y-2">
      {regions
        .sort((a, b) => b.projects - a.projects)
        .map((region, index) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            onMouseEnter={() => setHoveredRegion(region)}
            onMouseLeave={() => setHoveredRegion(null)}
            className={`p-3 lg:p-4 rounded-xl cursor-pointer transition-all ${
              hoveredRegion?.id === region.id
                ? 'bg-blue-100 shadow-md scale-105'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 lg:gap-3">
                <div
                  className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full"
                  style={{ backgroundColor: region.color }}
                />
                <p className="font-medium text-gray-900 text-xs sm:text-sm">
                  {region.name}
                </p>
              </div>
              <p className="text-xl lg:text-2xl font-bold text-blue-900">
                {region.projects}
              </p>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: region.color }}
                initial={{ width: 0 }}
                animate={{ width: `${(region.projects / totalProjects) * 100}%` }}
                transition={{ duration: 0.8, delay: index * 0.03 }}
              />
            </div>
          </motion.div>
        ))}
    </div>
  </div>
</div>


        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">{totalProjects}</p>
            <p className="text-sm text-gray-700">Всего проектов</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-purple-900 mb-2">{regions.length}</p>
            <p className="text-sm text-gray-700">Регионов охвачено</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-green-900 mb-2">100%</p>
            <p className="text-sm text-gray-700">Покрытие РК</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold text-orange-900 mb-2">
              {Math.round(totalProjects / regions.length)}
            </p>
            <p className="text-sm text-gray-700">Среднее на регион</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        /* Custom scrollbar */
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </section>
  );
}