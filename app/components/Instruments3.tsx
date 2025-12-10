"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const equipment = [
{
    "id": 1,
    "name": "Магус-М",
    "category": "Магнитопорошковый контроль",
    "img": "/instrum/magus-m.jpg",
    "description": "Универсальный магнитопорошковый дефектоскоп для контроля сварных швов и деталей.",
    "specs": ["Диапазон толщин: 0.5–50 мм", "Вес: 2.5 кг", "Питание: аккумулятор 12 В"]
  },
  {
    "id": 2,
    "name": "OmniScan MX2",
    "category": "Ультразвуковой контроль",
    "img": "/instrum/OmniScanMX2.jpg",
    "description": "Современный ультразвуковой дефектоскоп с цифровой обработкой сигналов.",
    "specs": ["Диапазон частот: 0.2–20 МГц", "Вес: 3 кг", "Батарея: 6 часов работы"]
  },
  {
    "id": 3,
    "name": "Olympus 38DL PLUS",
    "category": "Ультразвуковой толщиномер",
    "img": "/instrum/Olympus38DLPLUS.jpg",
    "description": "Портативный ультразвуковой толщиномер для измерения толщины от коррозированных труб до тонких многослойных материалов.",
    "specs": ["Диапазон толщин: 0.08–635 мм", "Вес: 0.814 кг", "Батарея: до 14 часов"]
  },
  {
    "id": 4,
    "name": "MagnaFORM",
    "category": "Вихретоковый контроль",
    "img": "/instrum/MagnaFORM.jpg",
    "description": "Вихретоковый массивный инспектор для контроля сварных швов углеродистой стали.",
    "specs": ["Вес: 0.965 кг (с зондом)", "Размеры: 158x128x90 мм", "Частоты: до 10 МГц"]
  },
  {
    "id": 5,
    "name": "УД2-3C",
    "category": "Ультразвуковой дефектоскоп",
    "img": "/instrum/ud23c.jpg",
    "description": "Компактный ультразвуковой дефектоскоп для теневого и зеркально-эхо теневого контроля.",
    "specs": ["Температура: -20 до +50°C", "Размеры: 280x282x? мм", "Питание: 220В AC"]
  },
  {
    "id": 6,
    "name": "АРМС-МГ4",
    "category": "Дефектоскоп арматуры",
    "img": "/instrum/armsmg4.jpg",
    "description": "Ультразвуковой дефектоскоп для контроля сварных соединений арматуры диаметром 16-40 мм.",
    "specs": ["Диаметр арматуры: 16-40 мм", "Методы: теневой, зеркально-теневой", "Соответствует ГОСТ 23858"]
  },
  {
    "id": 7,
    "name": "РПД 180 С",
    "category": "Рентген аппарат",
    "img": "/instrum/RPD180.jpg",
    "description": "Переносной рентгеновский аппарат постоянного действия для неразрушающего контроля.",
    "specs": ["Напряжение: 180 кВ", "Переносной", "Для рентгеновского контроля"]
  },
  {
    "id": 8,
    "name": "BALTECH VP-3470",
    "category": "Вибродиагностика",
    "img": "/instrum/baltech.jpg",
    "description": "Универсальный виброанализатор для диагностики, балансировки и мониторинга оборудования.",
    "specs": ["Частоты: 0.5-10000 Гц", "Вес: 1 кг", "Батарея: 8 часов"]
  },
  {
    "id": 9,
    "name": "ОКО-3",
    "category": "Георадар",
    "img": "/instrum/oko3.jpg",
    "description": "Высокопроизводительный георадар для зондирования грунтов, сетей и объектов до 5 м.",
    "specs": ["Скорость: 380 скан/сек", "Точки: до 16384", "Глубина: до 5 м"]
  },
  {
    "id": 10,
    "name": "Молоток Шмидта",
    "category": "Контроль прочности",
    "img": "/instrum/molotok.jpg",
    "description": "Склерометр для неразрушающего контроля прочности бетона толщиной от 70 мм.",
    "specs": ["Прочность: 10-70 МПа", "Энергия удара: 2.207 Дж", "Соответствует ГОСТ 22690"]
  },
  {
    "id": 11,
    "name": "ПОИСК-2.6",
    "category": "Измеритель защитного слоя",
    "img": "/instrum/poisk26.webp",
    "description": "Вихретоковый измеритель толщины защитного слоя и диаметра арматуры в бетоне.",
    "specs": ["Слой: 5-130 мм", "Диаметр: 3-50 мм", "Вес: 0.54 кг"]
  },
  {
    "id": 12,
    "name": "А1209",
    "category": "УЗ толщиномер",
    "img": "/instrum/1209.jpg",
    "description": "Ультразвуковой толщиномер для неразрушающего контроля толщины материалов.",
    "specs": ["Портативный", "УЗ метод", "Для металлов и конструкций"]
  },
  {
    "id": 13,
    "name": "GeoMax Zoom 10",
    "category": "Тахеометр",
    "img": "/instrum/GeoMax-Zoom-10-1.jpg",
    "description": "Оптический тахеометр для точных геодезических измерений на стройплощадках.",
    "specs": ["Угловое расстояние", "Портативный", "Для топосъемки"]
  },
  {
    "id": 14,
    "name": "LEICA TS06plus",
    "category": "Тахеометр",
    "img": "/instrum/LEICA TS06plus R500.jpg",
    "description": "Рефлекторлессный тахеометр Leica для измерений до 500 м без призмы.",
    "specs": ["Дальность: 500 м рефлекторлесс", "Точность: 2.5''", "ПЗС матрица"]
  },
  {
    "id": 15,
    "name": "RGK N-32",
    "category": "Оптический нивелир",
    "img": "/instrum/RGK N-32.webp",
    "description": "Оптический нивелир 32x увеличением для высотных измерений.",
    "specs": ["Увеличение: 32x", "Точность: 2 мм/км", "Компенсатор"]
  },
  {
    "id": 16,
    "name": "СПЕКТР-4",
    "category": "Диагностика свай",
    "img": "/instrum/spektr4.jpg",
    "description": "Прибор для диагностики свай по распространению упругих волн.",
    "specs": ["Для свай", "УЗ метод", "Глубина контроля"]
  },
  {
    "id": 17,
    "name": "ИДС-2",
    "category": "Длина свай",
    "img": "/instrum/ids2.jpg",
    "description": "Измеритель длины свай динамическим методом.",
    "specs": ["Длина свай", "Динамика", "Портативный"]
  },
  {
    "id": 18,
    "name": "А1040 MIRA",
    "category": "УЗ томограф",
    "img": "/instrum/А1040-MIRA.jpg",
    "description": "Ультразвуковой томограф для 3D визуализации дефектов в бетоне.",
    "specs": ["3D визуализация", "Портативная антенна", "Для конструкций"]
  },
  {
    "id": 19,
    "name": "УТ-111",
    "category": "УЗ толщиномер",
    "img": "/instrum/ut111.jpg",
    "description": "Простой ультразвуковой толщиномер для труб и листов.",
    "specs": ["Толщина: 1-200 мм", "Портативный", "Аккумулятор"]
  },
  {
    "id": 20,
    "name": "Testo 875-1",
    "category": "Тепловизор",
    "img": "/instrum/Testo.jpg",
    "description": "Инфракрасный тепловизор для поиска утечек и перегревов.",
    "specs": ["Разрешение: 160x120", "Темп. -20 до +280°C", "Вес: 0.5 кг"]
  },
  {
    "id": 21,
    "name": "Лазерный дальномер",
    "category": "Измерение",
    "img": "/instrum/RZA60.webp",
    "description": "Лазерный дальномер для точных расстояний до 60 м.",
    "specs": ["Дальность: 60 м", "Точность: ±1.5 мм", "Перезарядка"]
  },
  {
    "id": 22,
    "name": "AMO DIST 50G",
    "category": "Лазерный дальномер",
    "img": "/instrum/amodist50g.jpg",
    "description": "Беспроводной лазерный дальномер с Bluetooth до 50 м.",
    "specs": ["Дальность: 50 м", "Bluetooth", "Гольф функции"]
  },
  {
    "id": 23,
    "name": "УКС МГ4С",
    "category": "Георадарный комплекс",
    "img": "/instrum/mg4c.jpg",
    "description": "Георадарный комплекс для поиска коммуникаций и объектов.",
    "specs": ["Многоканальный", "Глубина: несколько метров", "Мобильный"]
  },
  {
    "id": 24,
    "name": "Набор КК",
    "category": "Капиллярный контроль",
    "img": "/instrum/KK.jpg",
    "description": "Набор для капиллярно-дефектоскопического контроля поверхностей.",
    "specs": ["Для трещин", "Пенетранты", "Разработчик"]
  },
  {
    "id": 25,
    "name": "Комплект ВИК",
    "category": "Визуальный контроль",
    "img": "/instrum/VIK.png",
    "description": "Комплект для визуально-измерительного контроля дефектов.",
    "specs": ["Лупы", "Осветители", "Шаблоны"]
  },
  {
    "id": 26,
    "name": "ИПС - МГ 4.03",
    "category": "Измеритель прочности бетона",
    "img": "/instrum/mg403.jpg",
    "description": "Ударный прибор для контроля прочности бетона.",
    "specs": ["Прочность: до 100 МПа", "Ударный метод", "Портативный"]
  }
];

export default function EquipmentAppleDock() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalItems = equipment.length;

  const touchStartX = useRef<number | null>(null);

  // Detect mobile once + on resize
  useEffect(() => {
    const detect = () => setIsMobile(window.innerWidth < 768);
    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  // Swipe controls
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const delta = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(delta) > 50) {
      delta < 0 ? handleNext() : handlePrev();
    }

    touchStartX.current = null;
  };

  const handlePrev = () =>
    setCenterIndex((prev) => (prev - 1 + totalItems) % totalItems);

  const handleNext = () =>
    setCenterIndex((prev) => (prev + 1) % totalItems);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Oval layout
  const getItemStyle = (index: number) => {
    let diff = index - centerIndex;

    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    const angle = (diff / totalItems) * Math.PI * 2;

    const radiusX = isMobile ? 160 : 300;
    const radiusY = isMobile ? 50 : 80;

    const x = Math.sin(angle) * radiusX;
    const y = Math.cos(angle) * radiusY;

    const scale = isMobile
      ? 0.55 + 0.25 * Math.cos(angle)
      : 0.6 + 0.3 * Math.cos(angle);

    const opacity = 0.55 + 0.45 * Math.cos(angle);
    const zIndex = Math.round(scale * 100);

    return { x, y, scale, opacity, zIndex, rad: angle };
  };

  const currentEquipment = equipment[centerIndex];

  return (
    <section
      className="min-h-screen w-full bg-gray-900 py-16 px-4 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto text-center text-white mb-12">
        <p className="text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
          НАШЕ ОБОРУДОВАНИЕ
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Современная приборная база
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          {totalItems} единиц высокоточного оборудования для неразрушающего контроля
        </p>
      </div>

      {/* 3D ОВАЛ */}
      <div
        className="relative h-[350px] md:h-[500px] flex items-center justify-center"
        style={{ perspective: "1500px" }}
      >
        {equipment.map((item, index) => {
          const { x, y, scale, opacity, zIndex, rad } = getItemStyle(index);
          const isCenter = index === centerIndex;

          return (
            <motion.div
              key={item.id}
              className="absolute cursor-pointer"
              style={{ zIndex }}
              animate={{
                x,
                y,
                scale,
                opacity,
                z: Math.cos(rad) * 100,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              onClick={() => setCenterIndex(index)}
            >
              <div
                className={`rounded-2xl overflow-hidden shadow-xl ${
                  isMobile
                    ? isCenter ? "w-44 h-44" : "w-32 h-32"
                    : isCenter ? "w-72 h-72" : "w-56 h-56"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {isCenter && (
                  <div className="absolute inset-0 rounded-2xl ring-4 ring-blue-500 ring-opacity-60" />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* NAVIGATION BUTTONS — HIDDEN ON MOBILE */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 z-50 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          </>
        )}
      </div>

      {/* INFO PANEL */}
      <div className="mt-10 max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEquipment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="text-center text-white bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {currentEquipment.name}
            </h3>

            <p className="text-blue-400 text-base md:text-lg mb-3">
              {currentEquipment.category}
            </p>

            <p className="text-gray-300 text-sm md:text-base mb-3">
              {currentEquipment.description}
            </p>

            <ul className="text-gray-300 text-left list-disc list-inside text-sm md:text-base">
              {currentEquipment.specs?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}