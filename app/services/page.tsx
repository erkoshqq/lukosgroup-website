"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Check, FileText, Search, Microscope, Calculator, Layers, X, CameraIcon } from "lucide-react";

const services = [
  {
    id: "technical-inspection",
    icon: FileText,
    title: "Техническое обследование",
    shortDesc: "Комплексная оценка состояния строительных конструкций и инженерных систем здания",
    image: "/images/nursipribor.jpg",
    galleryImages: [
      "/images/pribor1.jpg",
      "/images/spinaipribor.jpg",
      "/images/soinaipribor2.jpg"
    ],
    fullDesc: "Техническое обследование — это комплекс мероприятий, направленный на оценку текущего состояния строительных конструкций, инженерных систем и отдельных элементов здания для выявления дефектов, оценки надежности, устойчивости и определения возможности дальнейшей безопасной эксплуатации объекта.",
    cases: [
      "Реконструкция или капитальный ремонт",
      "Изменение функционального назначения здания",
      "Продление срока эксплуатации",
      "Возникновение аварийных ситуаций или обнаружение деформаций",
      "Подготовка к сносу или демонтажу",
      "Оценка объекта перед покупкой или продажей"
    ],
    stages: [
      {
        title: "Подготовительный этап",
        items: [
          "Сбор информации: изучение проектной документации, технических паспортов",
          "Визуальный осмотр: предварительная оценка состояния конструкций",
          "Планирование обследования: определение зон контроля, выбор методов"
        ]
      },
      {
        title: "Полевая диагностика",
        items: [
          "Обследование несущих конструкций: проверка фундаментов, стен, перекрытий",
          "Диагностика инженерных систем: анализ электросетей, водопровода, вентиляции",
          "Неразрушающий контроль: ультразвуковая, радиографическая дефектоскопия",
          "Материаловедческая экспертиза: определение прочности и износа материалов",
          "Геодезические измерения: контроль осадок, кренов, отклонений"
        ]
      },
      {
        title: "Обработка и анализ данных",
        items: [
          "Анализ результатов замеров и исследований",
          "Расчет несущей способности по нормативам (СП, ГОСТ)",
          "Оценка степени износа и прогнозирование поведения конструкций"
        ]
      },
      {
        title: "Техническое заключение",
        items: [
          "Описание обследованных конструкций и их состояния",
          "Перечень выявленных дефектов с классификацией",
          "Выводы о надежности и безопасности здания",
          "Рекомендации по ремонту, усилению или реконструкции"
        ]
      }
    ],
    conclusion: "На основе всех выполненных работ заказчик получает заключение, который служит основой для принятия решений о ремонте, реконструкции или сносе здания."
  },
  {
    id: "defectoscopy",
    icon: Search,
    title: "Дефектоскопия",
    shortDesc: "Выявление внутренних и поверхностных дефектов конструкций неразрушающими методами",
    image: "/images/nursipribor.jpg",
    galleryImages: [
      "/images/pribor1.jpg",
      "/images/spinaipribor.jpg",
      "/images/soinaipribor2.jpg"
    ],
    fullDesc: "Дефектоскопия — это метод диагностики строительных конструкций для выявления внутренних и поверхностных дефектов. Особенно важна при оценке несущей способности зданий, так как скрытые повреждения могут стать причиной аварийных ситуаций.",
    cases: [],
    stages: [
      {
        title: "Методы контроля",
        items: [
          "Неразрушающие методы: ультразвуковой, радиографический, магнитный",
          "Визуальный и измерительный контроль",
          "Вихретоковый и капиллярный контроль",
          "Акустическая эмиссия и тепловой контроль"
        ]
      },
      {
        title: "Этапы проведения",
        items: [
          "Подготовка поверхности: очистка от грязи, ржавчины и краски",
          "Выбор метода контроля: в зависимости от материала и дефектов",
          "Проведение измерений: сканирование или зондирование конструкций",
          "Анализ результатов: определение характера и масштабов повреждений",
          "Документирование: фиксация дефектов, фотофиксация, карта повреждений"
        ]
      }
    ],
    conclusion: "Методы дефектоскопии позволяют выявлять дефекты без нарушения целостности конструкций, что критически важно для эксплуатируемых зданий."
  },
  {
    id: "laboratory-tests",
    icon: Microscope,
    title: "Лабораторные испытания",
    shortDesc: "Определение физических, механических и химических характеристик материалов",
    image: "/images/nursipribor.jpg",
    galleryImages: [
      "/images/pribor1.jpg",
      "/images/spinaipribor.jpg",
      "/images/soinaipribor2.jpg"
    ],
    fullDesc: "Лабораторные испытания — это комплекс исследований, направленных на определение физических, механических и химических характеристик материалов. Исследования дополняют инструментальное обследование, давая точную картину состояния здания.",
    cases: [],
    stages: [
      {
        title: "Испытания бетона",
        items: [
          "Прочность на сжатие, растяжение и изгиб",
          "Плотность, водопоглощение, морозостойкость",
          "Глубина карбонизации и степень коррозии арматуры"
        ]
      },
      {
        title: "Испытания металлических конструкций",
        items: [
          "Прочность, твердость, пластичность металла",
          "Толщина защитных покрытий",
          "Анализ коррозии и структуры сплава"
        ]
      },
      {
        title: "Испытания кирпича и камня",
        items: [
          "Прочность на сжатие и изгиб",
          "Морозостойкость и водопоглощение",
          "Износостойкость и стойкость к агрессивным средам"
        ]
      },
      {
        title: "Процесс испытаний",
        items: [
          "Отбор проб на объекте: керны бетона, образцы металла",
          "Подготовка образцов до стандартных размеров",
          "Тестирование на оборудовании по ГОСТ и СП",
          "Анализ результатов и сравнение с нормативами",
          "Оценка качества материалов и расчет остаточного ресурса"
        ]
      }
    ],
    conclusion: "По итогам испытаний заказчик получает подробный отчет с описанием характеристик материалов и выявленных дефектов."
  },
  {
    id: "geodetic-survey",
    icon: CameraIcon,
    title: "Геодезическая съемка",
    shortDesc: "Высокоточные измерения геометрии сооружений, деформаций и осадок",
    image: "/images/nursipribor.jpg",
    galleryImages: [
      "/images/pribor1.jpg",
      "/images/spinaipribor.jpg",
      "/images/soinaipribor2.jpg"
    ],
    fullDesc: "Геодезическая съемка — это комплекс измерений и расчетов для определения пространственного положения элементов здания. Позволяет зафиксировать состояние конструкций, выявить деформации, контролировать осадки и оценить геометрию сооружений.",
    cases: [],
    stages: [
      {
        title: "Виды работ",
        items: [
          "Обмерные работы для фиксации размеров конструкций",
          "Проверка вертикальности стен и колонн",
          "Контроль осадок и прогибов высокоточным нивелированием",
          "Фасадная съемка для выявления отклонений и дефектов"
        ]
      },
      {
        title: "Оборудование и технологии",
        items: [
          "Тахеометры для угловых и линейных измерений",
          "Лазерные сканеры для 3D-моделирования",
          "Нивелиры для контроля высотных отметок",
          "Спутниковые системы для координатной привязки"
        ]
      },
      {
        title: "Этапы работы",
        items: [
          "Изучение проектной документации",
          "Определение ключевых точек для измерений",
          "Полевые работы с использованием оборудования",
          "Обработка данных и составление отчета"
        ]
      }
    ],
    conclusion: "Высокая точность измерений гарантирует достоверность результатов и возможность принятия обоснованных решений."
  },
  {
    id: "verification-calculation",
    icon: Calculator,
    title: "Поверочный расчёт",
    shortDesc: "Расчет прочности и несущей способности конструкций на основе фактических данных",
    image: "/images/nursipribor.jpg",
    galleryImages: [
      "/images/pribor1.jpg",
      "/images/spinaipribor.jpg",
      "/images/soinaipribor2.jpg"
    ],
    fullDesc: "Поверочный расчет — это комплексная процедура расчета прочности, устойчивости и несущей способности строительных конструкций на основе фактических характеристик здания.",
    cases: [],
    stages: [
      {
        title: "Программное обеспечение",
        items: [
          "ЛИРА САПР: моделирование поведения здания под нагрузками",
          "SCAD: точный анализ распределения усилий",
          "3D-модели для визуализации напряжений и деформаций"
        ]
      },
      {
        title: "Процесс расчета",
        items: [
          "Сбор фактических данных об объекте",
          "Создание расчетной модели конструкций",
          "Моделирование различных типов нагрузок",
          "Анализ напряженно-деформированного состояния",
          "Оценка соответствия нормативным требованиям"
        ]
      },
      {
        title: "Результаты",
        items: [
          "Технический отчет с оценкой несущей способности",
          "Схемы напряжений и деформаций конструкций",
          "Заключение о возможности эксплуатации здания",
          "Рекомендации по усилению элементов при необходимости"
        ]
      }
    ],
    conclusion: "Поверочный расчет позволяет принять обоснованные решения о безопасности и дальнейшей эксплуатации объекта."
  },
  {
    id: "geological-survey",
    icon: Layers,
    title: "Геологические изыскания",
    shortDesc: "Исследование грунтового основания и его влияния на конструкции здания",
    fullDesc: "Геологические изыскания — это комплекс исследований грунтового основания и геологических условий территории для оценки их влияния на здание. Помогают определить свойства грунтов, уровень грунтовых вод, выявить геодинамические процессы.",
    cases: [],
    stages: [
      {
        title: "Полевые работы",
        items: [
          "Шурфы или буровые скважины для отбора проб",
          "Зондирование грунтов и статические испытания",
          "Определение уровня грунтовых вод",
          "Нивелирование для контроля осадок конструкций"
        ]
      },
      {
        title: "Лабораторные исследования",
        items: [
          "Физико-механические свойства грунтов",
          "Плотность, влажность, пористость",
          "Несущая способность и деформируемость",
          "Агрессивность грунтовых вод к бетону и металлу"
        ]
      },
      {
        title: "Анализ и рекомендации",
        items: [
          "Выявление причин деформаций и просадок",
          "Оценка геодинамических процессов (оползни, пучение)",
          "Рекомендации по укреплению основания",
          "Разработка мероприятий по усилению фундамента"
        ]
      }
    ],
    conclusion: "Результаты изысканий позволяют продлить срок эксплуатации сооружения и предотвратить аварийные ситуации."
  }
];

export default function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setTimeout(() => setExpandedId(id), 500);
    }
  };

  const openLightbox = (image: string, index: number = 0) => {
    setLightboxImage(image);
    setActiveGalleryIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 flex items-center">
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
              НАШИ УСЛУГИ
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl">
              Комплексные решения для безопасности объектов
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl leading-relaxed">
              От технического обследования до геологических изысканий — полный спектр услуг 
              для оценки состояния зданий и сооружений
            </p>

            {/* Quick Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-300" />
                    </div>
                    <span className="text-white text-sm text-center font-medium leading-tight">
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                {/* Header - Always Visible */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="p-8 cursor-pointer"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-blue-900" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <ChevronDown className="w-6 h-6 text-gray-600" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4 border-t border-gray-100">
                        {/* Image Gallery */}
                        {service.image && (
                          <div className="mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Main Image */}
                              <div 
                                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                                onClick={() => openLightbox(service.image, 0)}
                              >
                                <img 
                                  src={service.image} 
                                  alt={service.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                  <Search className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                              </div>

                              {/* Gallery Grid */}
                              {service.galleryImages && service.galleryImages.length > 0 && (
                                <div className="grid grid-cols-2 gap-4">
                                  {service.galleryImages.slice(0, 3).map((img, idx) => (
                                    <div 
                                      key={idx}
                                      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                                      onClick={() => openLightbox(img, idx + 1)}
                                    >
                                      <img 
                                        src={img} 
                                        alt={`${service.title} ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                      />
                                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <Search className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                      </div>
                                    </div>
                                  ))}
                                  {service.galleryImages.length > 3 && (
                                    <div 
                                      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-blue-900/90 flex items-center justify-center"
                                      onClick={() => openLightbox(service.galleryImages[3], 4)}
                                    >
                                      <span className="text-white text-2xl font-semibold">
                                        +{service.galleryImages.length - 3}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Full Description */}
                        <p className="text-gray-700 text-lg leading-relaxed mb-8">
                          {service.fullDesc}
                        </p>

                        {/* Cases (if exists) */}
                        {service.cases.length > 0 && (
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <Check className="w-5 h-5 text-blue-900" />
                              В каких случаях необходимо
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                              {service.cases.map((case_item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                  <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-gray-700">{case_item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Stages */}
                        {service.stages.length > 0 && (
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                              Этапы работы
                            </h3>
                            <div className="space-y-6">
                              {service.stages.map((stage, i) => (
                                <div key={i} className="relative pl-8 border-l-2 border-blue-900">
                                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-900 rounded-full"></div>
                                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                                    {stage.title}
                                  </h4>
                                  <ul className="space-y-2">
                                    {stage.items.map((item, j) => (
                                      <li key={j} className="flex items-start gap-3 text-gray-600">
                                        <span className="text-blue-900 mt-1">•</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Conclusion */}
                        {service.conclusion && (
                          <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-900">
                            <p className="text-gray-700 font-medium leading-relaxed">
                              {service.conclusion}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Не нашли нужную услугу?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Свяжитесь с нами для консультации — мы подберем оптимальное решение для вашего объекта
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Получить консультацию
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}