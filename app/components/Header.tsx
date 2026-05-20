"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { title: "Техническое обследование", href: "/services/technical-inspection" },
  { title: "Дефектоскопия",            href: "/services/defectoscopy" },
  { title: "Лабораторные испытания",   href: "/services/laboratory-tests" },
  { title: "Геодезическая съемка",     href: "/services/geodetic-survey" },
  { title: "Поверочный расчёт",        href: "/services/verification-calculation" },
  { title: "Геологические изыскания",  href: "/services/geological-survey" },
];

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsCompact(current > lastScroll && current > 80);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Закрываем дропдаун при клике вне
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 text-white bg-black/40 backdrop-blur-lg transition-all duration-500">
        <nav className={`max-w-7xl mx-auto px-6 py-6 flex items-center transition-all duration-500 ${isCompact ? "justify-center" : "justify-between"}`}>
          
          <Link href="/" className="text-3xl font-bold">
            <span className="font-light">lukos</span>
            <span className="font-bold">group</span>
          </Link>

          <ul className={`hidden md:flex gap-15 text-xl transition-all duration-500 items-center ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}`}>
            <li><Link href="/about" className="hover:text-blue-400">О нас</Link></li>

            {/* Услуги с дропдауном */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(v => !v)}
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                Услуги
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-blue-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                  <div className="p-2">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-3 text-base rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-white/10 p-2">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-base rounded-lg hover:bg-white/10 transition-colors text-blue-300"
                    >
                      Все услуги →
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li><Link href="/projects" className="hover:text-blue-400">Проекты</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Контакты</Link></li>
          </ul>

          <Link
            href="/request"
            className={`hidden md:flex text-xl rounded-lg hover:bg-white/10 p-2 transition-all duration-500 ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}`}
          >
            Связаться
          </Link>

          <button className="md:hidden absolute right-6" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 ${menuOpen ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <aside className={`absolute right-0 top-0 h-full w-72 bg-blue-950 p-6 text-white transition-transform duration-300 overflow-y-auto ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold">Меню</span>
            <button onClick={() => setMenuOpen(false)}><X size={26} /></button>
          </div>

          <nav className="flex flex-col gap-4 text-lg">
            <Link href="/about" onClick={() => setMenuOpen(false)}>О нас</Link>

            {/* Услуги раскрываются в мобильном */}
            <div>
              <p className="text-blue-300 text-sm uppercase tracking-widest mb-2">Услуги</p>
              <div className="flex flex-col gap-2 pl-2">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base text-white/80 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projects" onClick={() => setMenuOpen(false)}>Проекты</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link>
            <Link href="/request" onClick={() => setMenuOpen(false)} className="mt-6 px-4 py-3 rounded-lg bg-white/10 text-center">
              Связаться
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}