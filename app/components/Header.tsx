"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        // скроллим вниз → компактный режим
        setIsCompact(true);
      } else {
        // скроллим вверх → полный режим
        setIsCompact(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className="fixed top-0 w-full z-50 text-white transition-all duration-500 ease-in-out bg-black/40 backdrop-blur-lg"
    >
      <nav className={`
        max-w-7xl mx-auto px-6 py-6 flex items-center transition-all duration-500 ease-in-out
        ${isCompact ? "justify-center" : "justify-between"}
      `}>
        <Link href="/" className="text-3xl font-bold">
          <span className="font-light">lukos</span>
          <span className="font-bold">group</span>
        </Link>

        <ul className={`
          flex gap-15 text-xl transition-all duration-500 ease-in-out
          ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}
        `}>
          <li><Link href="/about" className="hover:text-blue-400">О нас</Link></li>
          <li><Link href="/services" className="hover:text-blue-400">Услуги</Link></li>
          <li><Link href="/projects" className="hover:text-blue-400">Проекты</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Контакты</Link></li>
        </ul>

        <Link
          href="/request"
          className={`
            flex text-xl rounded-lg hover:bg-white/10 transition-all duration-500 ease-in-out p-2
            ${isCompact ? "opacity-0 pointer-events-none absolute" : "opacity-100"}
          `}
        >
          Связаться
        </Link>
      </nav>
    </header>
  );
}