"use client";

import { useState } from "react";
import Link from "next/link";
import BrandLogo from "../components/BrandLogo";
import { TechIcon, type TechIconType } from "./visuals";

export interface ConfiguratorCategory {
  slug: string;
  title: string;
  text: string;
  brands: { name: string; slug: string; logo?: string }[];
}

// Блок "Что вам нужно?": выбор категории показывает бренды и ведёт на форму
// с уже выбранной категорией.
export default function Configurator({ categories }: { categories: ConfiguratorCategory[] }) {
  const [active, setActive] = useState(categories[0].slug);
  const current = categories.find((c) => c.slug === active) ?? categories[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
      {/* Категории */}
      <div
        role="tablist"
        aria-label="Категории оборудования"
        className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
      >
        {categories.map((c) => {
          const selected = c.slug === active;
          return (
            <button
              key={c.slug}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c.slug)}
              className={`flex items-center gap-4 shrink-0 text-left rounded-xl px-5 py-4 border transition-colors ${
                selected
                  ? "bg-white text-blue-900 border-white shadow-lg"
                  : "bg-white/5 text-blue-100 border-white/15 hover:bg-white/10"
              }`}
            >
              <TechIcon type={c.slug as TechIconType} className="w-8 h-8 shrink-0" />
              <span className="text-base font-medium whitespace-nowrap lg:whitespace-normal">{c.title}</span>
            </button>
          );
        })}
      </div>

      {/* Содержимое */}
      <div
        role="tabpanel"
        className="lg:col-span-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-10"
      >
        <div className="flex items-start gap-6 mb-8">
          <TechIcon type={current.slug as TechIconType} className="w-16 h-16 text-blue-200 shrink-0" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{current.title}</h3>
            <p className="text-blue-100 leading-relaxed max-w-2xl">{current.text}</p>
          </div>
        </div>

        <p className="text-xs text-blue-300 tracking-[0.2em] uppercase mb-4">Доступные бренды</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {current.brands.map((b) => (
            <Link
              key={b.slug}
              href={`/technologies/brands/${b.slug}`}
              className="bg-white rounded-xl h-20 px-4 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <BrandLogo
                name={b.name}
                logo={b.logo}
                align="center"
                className="h-12 w-full"
                fallbackClassName="text-base font-bold text-blue-900 text-center leading-tight"
              />
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/technologies/contact?category=${current.slug}`}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
          >
            Запросить предложение
          </Link>
          <Link
            href={`/technologies/products/${current.slug}`}
            className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Подробнее о категории
          </Link>
        </div>
      </div>
    </div>
  );
}
