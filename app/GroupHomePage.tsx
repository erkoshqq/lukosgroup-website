"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Server, Wrench, ArrowUpRight } from "lucide-react";
import Footer from "./components/Footer";

const divisions = [
  {
    key: "engineering",
    href: "/engineering",
    name: "Engineering",
    role: "Инженерная диагностика",
    description:
      "Техническое обследование зданий и сооружений, дефектоскопия, лабораторные испытания и неразрушающий контроль.",
    facts: ["3400+ обследованных объектов", "Государственная лицензия", "Работа по всему Казахстану"],
    icon: Building2,
    accent: {
      text: "text-sky-400",
      border: "hover:border-sky-400/50",
      dot: "bg-sky-400",
      iconBg: "bg-sky-400/10",
    },
  },
  {
    key: "technologies",
    href: "/technologies",
    name: "Technologies",
    role: "Поставка оборудования",
    description:
      "Комплексные поставки ИТ-инфраструктуры: серверы, СХД и сети для бизнеса и государственного сектора.",
    facts: ["Официальный дилер Lenovo, Dell, HP, Cisco и др.", "Более 150 международных брендов", "Бизнес и государственный сектор"],
    icon: Server,
    accent: {
      text: "text-cyan-400",
      border: "hover:border-cyan-400/50",
      dot: "bg-cyan-400",
      iconBg: "bg-cyan-400/10",
    },
  },
  {
    key: "maintenance",
    href: "/maintenance",
    name: "Maintenance",
    role: "Промышленный сервис",
    description:
      "Техническое обслуживание производственных линий и оборудования на заводах — плановое и аварийное.",
    facts: ["Обслуживание на территории заказчика"],
    icon: Wrench,
    accent: {
      text: "text-amber-400",
      border: "hover:border-amber-400/50",
      dot: "bg-amber-400",
      iconBg: "bg-amber-400/10",
    },
  },
];

export default function GroupHomePage() {
  return (
    <div className="bg-gray-950 text-white">
      <div className="flex flex-col relative md:h-screen md:overflow-hidden">
        {/* Мягкое фоновое свечение — растягивается на весь экран, независимо от ширины контента */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] bg-sky-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute -bottom-48 left-1/3 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[120px]" />
        </div>

        {/* Тонкая верхняя панель — не полноценный навбар направления, это и есть главная */}
        <header className="relative z-10 max-w-[1600px] mx-auto w-full px-6 py-6 flex items-center justify-between shrink-0">
          <span className="text-2xl">
            <span className="font-light">lukos</span>
            <span className="font-bold">group</span>
          </span>
          <a
            href="#contacts"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition-colors"
          >
            Связаться
          </a>
        </header>

        {/* Hero + карточки — вместе занимают весь оставшийся экран, ровно 100vh вместе с хедером */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center gap-10 px-6 py-16 md:py-0 max-w-[1600px] mx-auto w-full"
        >
          <div className="text-center max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4 text-balance">
              Инженерия, технологии и промышленный сервис — в одной группе компаний
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Три направления, каждое сфокусировано на своей задаче: обследуем здания,
              поставляем технику и обслуживаем производство. Начните с того, что вам нужно.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {divisions.map((d) => {
              const Icon = d.icon;
              return (
                <Link
                  key={d.key}
                  href={d.href}
                  className={`group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 transition-colors ${d.accent.border}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${d.accent.iconBg}`}>
                      <Icon className={`w-5 h-5 ${d.accent.text}`} />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors" />
                  </div>

                  <h2 className="text-lg font-semibold mb-1">
                    <span className="font-light text-gray-400">lukos</span> {d.name}
                  </h2>
                  <p className={`text-sm mb-3 ${d.accent.text}`}>{d.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{d.description}</p>

                  <ul className="mt-auto space-y-1.5 pt-3 border-t border-white/10">
                    {d.facts.map((fact) => (
                      <li key={fact} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className={`w-1 h-1 rounded-full ${d.accent.dot}`} />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
