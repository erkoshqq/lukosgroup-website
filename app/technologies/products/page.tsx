import type { Metadata } from 'next'
import Link from 'next/link'
import { Search } from 'lucide-react'
import DivisionPageHero from '../../components/DivisionPageHero'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'
import TechCTA from '../TechCTA'
import { categories, brandByName } from '../data'

export const metadata: Metadata = {
  title: 'Оборудование — Lukos Technologies | Серверы, СХД, сети, ИБП',
  description:
    'Поставка серверного оборудования, систем хранения данных, сетевых решений, рабочих станций, ИБП и печатной техники ведущих производителей. Lukos Technologies, Казахстан.',
  openGraph: {
    title: 'Оборудование — Lukos Technologies',
    description: 'Серверы, СХД, сети, рабочие станции, ИБП и печатная техника.',
    url: 'https://lukosgroup.kz/technologies/products',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="ОБОРУДОВАНИЕ"
        title="Что мы поставляем"
        description="Серверы, хранение данных, сети, рабочие места, питание и печать — подберём технику под ваше ТЗ"
      />

      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="КАТЕГОРИИ"
            title="Шесть направлений поставки"
            description="У каждой категории указаны бренды, оборудование которых мы поставляем"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.slug} delay={(i % 3) * 0.1}>
                  <article
                    id={c.slug}
                    className="scroll-mt-28 h-full flex flex-col bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      <Link href={`/technologies/products/${c.slug}`} className="hover:text-blue-700 transition-colors">
                        {c.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{c.text}</p>

                    <div className="mt-auto pt-5 border-t border-gray-200">
                      <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-3">Бренды</p>
                      <div className="flex flex-wrap gap-2">
                        {c.brands.map((b) => {
                          const brand = brandByName(b)
                          const cls = 'text-sm text-blue-900 bg-blue-100 rounded-md px-3 py-1'
                          return brand ? (
                            <Link key={b} href={`/technologies/brands/${brand.slug}`} className={`${cls} hover:bg-blue-200 transition-colors`}>
                              {b}
                            </Link>
                          ) : (
                            <span key={b} className={cls}>{b}</span>
                          )
                        })}
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Search className="w-7 h-7 text-blue-900" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Не нашли нужную позицию?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Каталог пока не онлайн, а мы работаем с более чем 150 международными брендами —
                  опишите задачу, и мы подберём оборудование.
                </p>
              </div>
              <Link
                href="/technologies/brands"
                className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Все бренды
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TechCTA />
    </>
  )
}
