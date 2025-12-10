"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Инициализация Lenis
    const lenis = new Lenis({
      duration: 1.5, // длительность прокрутки (чем больше, тем плавнее)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing функция
      smoothWheel: true,
      wheelMultiplier: 0.5,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Функция анимации
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Очистка при размонтировании
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}