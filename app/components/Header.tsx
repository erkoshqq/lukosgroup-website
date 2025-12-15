"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 text-white bg-black/40 backdrop-blur-lg transition-all duration-500">
        <nav
          className={`
            max-w-7xl mx-auto px-6 py-6 flex items-center transition-all duration-500
            ${isCompact ? "justify-center" : "justify-between"}
          `}
        >
          {/* LOGO */}
          <Link href="/" className="text-3xl font-bold">
            <span className="font-light">lukos</span>
            <span className="font-bold">group</span>
          </Link>

          {/* DESKTOP MENU (ТВОЙ, НЕ ТРОНУТ) */}
          <ul
            className={`
              hidden md:flex gap-15 text-xl transition-all duration-500
              ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}
            `}
          >
            <li><Link href="/about" className="hover:text-blue-400">О нас</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Услуги</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Проекты</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Контакты</Link></li>
          </ul>

          {/* DESKTOP BUTTON */}
          <Link
            href="/request"
            className={`
              hidden md:flex text-xl rounded-lg hover:bg-white/10 p-2 transition-all duration-500
              ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}
            `}
          >
            Связаться
          </Link>

          {/* MOBILE BURGER */}
          <button
            className="md:hidden absolute right-6"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-50 ${menuOpen ? "" : "pointer-events-none"}`}>
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* menu */}
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-blue-950 p-6 text-white
          transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold">Меню</span>
            <button onClick={() => setMenuOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg">
            <Link href="/about" onClick={() => setMenuOpen(false)}>О нас</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Услуги</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)}>Проекты</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link>
            <Link
              href="/request"
              onClick={() => setMenuOpen(false)}
              className="mt-6 px-4 py-3 rounded-lg bg-white/10 text-center"
            >
              Связаться
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
