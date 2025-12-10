"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, Ruler, FileText, Search, Microscope, Calculator, Layers, X } from "lucide-react";
import Image from "next/image";

const categories = [
  { id: "all", name: "Все проекты", icon: FileText },
  { id: "technical", name: "Техническое обследование", icon: FileText },
  { id: "defectoscopy", name: "Дефектоскопия", icon: Search },
  { id: "laboratory", name: "Лабораторные испытания", icon: Microscope },
  { id: "geodetic", name: "Геодезическая съемка", icon: MapPin },
  { id: "calculation", name: "Поверочный расчёт", icon: Calculator },
  { id: "geological", name: "Геологические изыскания", icon: Layers }
];

const projects = [
  {
    id: 1,
    title: "Водовод протяженностью 1,8 км",
    description: "Определение технических характеристик наружных сетей водоснабжения с использованием современных методов диагностики.",
    category: "technical",
    location: "Караганда",
    date: "2021",
    area: "1800 м",
    image: "/images/nuray1.jpg",
    services: ["Техническое обследование", "Дефектоскопия"],
    imageGallery: [
      "/images/nuray1.jpg",
      "/images/nuray2.jpg",
      "/images/nursipribor.jpg",
      "/images/photo1.jpg",
      "/projects/project-4.jpg",
      "/projects/project-5.jpg",
      "/projects/project-6.jpg",
      "/projects/project-7.jpg",
      "/projects/project-8.jpg",
      "/projects/project-9.jpg",
      "/projects/project-10.jpg",
      "/projects/project-11.jpg",
    ]
  },
  {
    id: 2,
    title: "Общеобразовательная средняя школа с интернатом",
    description: "Комплексное техническое обследование и оценка технического состояния конструкций здания с выдачей заключения о возможности дальнейшей эксплуатации.",
    category: "technical",
    location: "Астана",
    date: "2021",
    area: "8500 м²",
    image: "/projects/project-2.jpg",
    services: ["Техническое обследование", "Поверочный расчёт"]
  },
  {
    id: 3,
    title: "Детский сад и здание мастерской",
    description: "Техническое обследование конструкций с оценкой возможности проведения капитального ремонта и перепланировки помещений.",
    category: "technical",
    location: "Алматы",
    date: "2021",
    area: "3200 м²",
    image: "/projects/project-3.jpg",
    services: ["Техническое обследование", "Лабораторные испытания"]
  },
  {
    id: 4,
    title: "Тепловые насосные станции",
    description: "Техническое обследование состояния конструкций с учетом диагностики грузоподъемного механизма.",
    category: "defectoscopy",
    location: "Шымкент",
    date: "2021",
    area: "1500 м²",
    image: "/projects/project-4.jpg",
    services: ["Дефектоскопия", "Техническое обследование"]
  },
  {
    id: 5,
    title: "Производственный комплекс",
    description: "Комплексное обследование производственных цехов с оценкой несущей способности металлических конструкций.",
    category: "calculation",
    location: "Павлодар",
    date: "2022",
    area: "12000 м²",
    image: "/projects/project-5.jpg",
    services: ["Поверочный расчёт", "Дефектоскопия"]
  },
  {
    id: 6,
    title: "Жилой комплекс «Северное сияние»",
    description: "Техническое обследование многоквартирного дома перед проведением капитального ремонта фасада и кровли.",
    category: "technical",
    location: "Караганда",
    date: "2022",
    area: "15000 м²",
    image: "/projects/project-6.jpg",
    services: ["Техническое обследование", "Геодезическая съемка"]
  },
  {
    id: 7,
    title: "Торговый центр «Меридиан»",
    description: "Обследование несущих конструкций и фундамента торгового центра с применением неразрушающих методов контроля.",
    category: "defectoscopy",
    location: "Астана",
    date: "2022",
    area: "8900 м²",
    image: "/projects/project-7.jpg",
    services: ["Дефектоскопия", "Лабораторные испытания"]
  },
  {
    id: 8,
    title: "Мостовое сооружение через реку",
    description: "Техническое освидетельствование мостового перехода с проведением геодезических работ и оценкой состояния опор.",
    category: "geodetic",
    location: "Усть-Каменогорск",
    date: "2023",
    area: "450 м",
    image: "/projects/project-8.jpg",
    services: ["Геодезическая съемка", "Техническое обследование", "Дефектоскопия"]
  },
  {
    id: 9,
    title: "Складской терминал",
    description: "Исследование грунтового основания и оценка деформаций фундамента складского комплекса.",
    category: "geological",
    location: "Алматы",
    date: "2023",
    area: "6500 м²",
    image: "/projects/project-9.jpg",
    services: ["Геологические изыскания", "Техническое обследование"]
  },
  {
    id: 10,
    title: "Спортивный комплекс",
    description: "Лабораторные испытания образцов бетона и металлоконструкций купола спортивного сооружения.",
    category: "laboratory",
    location: "Шымкент",
    date: "2023",
    area: "5200 м²",
    image: "/projects/project-10.jpg",
    services: ["Лабораторные испытания", "Поверочный расчёт"]
  },
  {
    id: 11,
    title: "Промышленный цех",
    description: "Поверочный расчёт несущих конструкций после реконструкции производственного здания.",
    category: "calculation",
    location: "Караганда",
    date: "2023",
    area: "9800 м²",
    image: "/projects/project-11.jpg",
    services: ["Поверочный расчёт", "Техническое обследование"]
  },
  {
    id: 12,
    title: "Офисное здание «Бизнес-центр»",
    description: "Комплексное обследование высотного здания с применением всего спектра услуг компании.",
    category: "technical",
    location: "Астана",
    date: "2024",
    area: "18500 м²",
    image: "/projects/project-12.jpg",
    services: ["Техническое обследование", "Дефектоскопия", "Геодезическая съемка", "Поверочный расчёт"]
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query) ||
      project.date.toLowerCase().includes(query) ||
      project.area.toLowerCase().includes(query) ||
      project.services.some((service) =>
        service.toLowerCase().includes(query)
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-6">
              НАШИ ПРОЕКТЫ
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl">
              Реализованные проекты
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              Более 3447 успешно завершенных проектов по всему Казахстану — 
              от жилых комплексов до крупных промышленных объектов
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">3447</p>
                <p className="text-sm text-gray-300">завершенных проектов</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">12.3М</p>
                <p className="text-sm text-gray-300">м² обследовано</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">7+</p>
                <p className="text-sm text-gray-300">лет опыта</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-3xl font-bold text-white mb-2">100%</p>
                <p className="text-sm text-gray-300">выполненных работ</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Поиск по проектам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-500 mt-4">
            Найдено проектов: <span className="font-semibold text-gray-900">{filteredProjects.length}</span>
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Проекты не найдены. Попробуйте изменить фильтры.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveImage(project.imageGallery?.[0] ?? project.image);
                  }}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Services Tags */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.services.slice(0, 2).map((service, i) => (
                        <span key={i} className="bg-blue-900/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                      {project.services.length > 2 && (
                        <span className="bg-blue-900/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          +{project.services.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        <span>{project.area}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Image */}
            <div className="relative h-80">
            <Image
              src={activeImage!}
              alt={selectedProject.title}
              fill
              className="object-cover"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1">Дата</p>
                  <p className="font-semibold text-gray-900">{selectedProject.date}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1">Локация</p>
                  <p className="font-semibold text-gray-900">{selectedProject.location}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1">Площадь</p>
                  <p className="font-semibold text-gray-900">{selectedProject.area}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1">Услуги</p>
                  <p className="font-semibold text-gray-900">{selectedProject.services.length}</p>
                </div>
              </div>

              {/* Services List */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Выполненные услуги:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((service, i) => (
                    <span key={i} className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* HERE — ПУНКТ 4 (галерея) */}
              {selectedProject.imageGallery?.length && selectedProject.imageGallery.length > 1 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Фотографии с объекта:</h3>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {selectedProject.imageGallery?.map((img, i) => (
                      <div
                        key={i}
                        className={`relative w-32 h-20 rounded-lg overflow-hidden cursor-pointer border
                          ${activeImage === img ? "border-blue-600" : "border-transparent"}`}
                        onClick={() => setActiveImage(img)}
                      >
                        <Image
                          src={img}
                          alt="project photo"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}