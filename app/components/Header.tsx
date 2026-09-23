"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { brands, type BrandKey } from "./brands";

export default function Header({ brand }: { brand: BrandKey }) {
  const config = brands[brand];

  const [isCompact, setIsCompact] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsCompact(current > lastScroll && current > 80);
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // Закрываем дропдаун при клике вне навигации
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 text-white bg-black/40 backdrop-blur-lg transition-all duration-500">
        <nav className={`max-w-7xl mx-auto px-6 py-6 flex items-center transition-all duration-500 ${isCompact ? "justify-center" : "justify-between"}`}>

          {/* Разделённый логотип: LUKOS ведёт на главную группы, название направления — на его главную */}
          <div className="flex items-baseline text-3xl shrink-0">
            <Link href="/" className="hover:text-blue-400 transition-colors font-light">
              lukos
            </Link>
            <span className="text-white/30 text-2xl font-light">/</span>
            <Link href={config.homeHref} className="hover:text-blue-300 transition-colors font-bold">
              {config.shortLabel}
            </Link>
          </div>

          <ul
            ref={dropdownRef}
            className={`hidden md:flex gap-12 text-xl transition-all duration-500 items-center ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}`}
          >
            {config.nav.map((item) => (
              <li key={item.href} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown((v) => (v === item.href ? null : item.href))}
                      className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                    >
                      {item.title}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${openDropdown === item.href ? "rotate-180" : ""}`}
                      />
                    </button>

                    {openDropdown === item.href && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-blue-950/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                        <div className="p-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-3 text-base rounded-lg hover:bg-white/10 transition-colors"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-white/10 p-2">
                          <Link
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-3 text-base rounded-lg hover:bg-white/10 transition-colors text-blue-300"
                          >
                            Все услуги →
                          </Link>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            href={config.ctaHref}
            className={`hidden md:flex text-xl rounded-lg hover:bg-white/10 p-2 transition-all duration-500 ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}`}
          >
            {config.ctaLabel}
          </Link>

          <button className="md:hidden absolute right-6" onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
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
            <div className="flex items-baseline text-lg font-bold">
              <Link href="/" onClick={() => setMenuOpen(false)}>lukos</Link>
              <span className="text-white/30 font-light">/</span>
              <Link href={config.homeHref} onClick={() => setMenuOpen(false)} className="text-blue-400">
                {config.shortLabel}
              </Link>
            </div>
            <button onClick={() => setMenuOpen(false)} aria-label="Закрыть меню"><X size={26} /></button>
          </div>

          <nav className="flex flex-col gap-4 text-lg">
            {config.nav.map((item) =>
              item.dropdown ? (
                <div key={item.href}>
                  <button
                    onClick={() => setOpenMobileDropdown((v) => (v === item.href ? null : item.href))}
                    className="flex items-center justify-between w-full text-blue-300 text-sm uppercase tracking-widest mb-2"
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${openMobileDropdown === item.href ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openMobileDropdown === item.href && (
                    <div className="flex flex-col gap-2 pl-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-base text-white/80 hover:text-white transition-colors"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.title}
                </Link>
              )
            )}

            <Link
              href={config.ctaHref}
              onClick={() => setMenuOpen(false)}
              className="mt-6 px-4 py-3 rounded-lg bg-white/10 text-center"
            >
              {config.ctaLabel}
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
