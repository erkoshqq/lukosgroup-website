import type { Metadata } from 'next'
import Link from 'next/link'
import DivisionPageHero from '../components/DivisionPageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import LogoMarquee from '../components/LogoMarquee'
import ProcessTimeline from '../components/ProcessTimeline'
import TechCTA from './TechCTA'
import Configurator from './Configurator'
import { ServerRack, TechIcon, type TechIconType } from './visuals'
import { categories, steps, brandByName } from './data'
import { getPartnerItems, getBrandLogo } from './partnerLogos'

export const metadata: Metadata = {
  title: 'Lukos Technologies — поставка ИТ-инфраструктуры, серверов и СХД | LUKOS GROUP',
  description:
    'Lukos Technologies — комплексные поставки серверного оборудования, систем хранения данных и сетевых решений для бизнеса и государственного сектора. Официальный дилер Lenovo, Dell, HP, HPE, Huawei, Cisco и других.',
  openGraph: {
    title: 'Lukos Technologies — поставка ИТ-инфраструктуры',
    description: 'Серверы, СХД и сети: подбор по ТЗ, поставка, монтаж и настройка.',
    url: 'https://lukosgroup.kz/technologies',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

const stats = [
  { value: '150+', label: 'брендов - официальный дилер' },
  { value: '6', label: 'категорий оборудования' },
  { value: 'Под ключ', label: 'поставка, монтаж, настройка' },
]

const gridPattern = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
  backgroundSize: '50px 50px',
}

export default function Page() {
  const partners = getPartnerItems()

  // Данные для переключателя "Что вам нужно?" (только простые значения для клиентского компонента)
  const configCategories = categories.map((c) => ({
    slug: c.slug,
    title: c.title,
    text: c.text,
    brands: c.brands.flatMap((name) => {
      const b = brandByName(name)
      return b ? [{ name: b.name, slug: b.slug, logo: getBrandLogo(b.slug) }] : []
    }),
  }))

  return (
    <>
      <DivisionPageHero
        tall
        eyebrow="LUKOS TECHNOLOGIES"
        title="Комплексные поставки ИТ-инфраструктуры"
        description="Серверы, системы хранения данных и сетевые решения для бизнеса и государственного сектора. Подбираем технику строго под ваше ТЗ."
        visual={<ServerRack className="w-full h-auto" />}
      >
        <div className="flex flex-col sm:flex-row gap-3 mt-10 mb-14">
          <Link
            href="/technologies/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
          >
            Обсудить поставку
          </Link>
          <Link
            href="/technologies/products"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Оборудование
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1100px]">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-blue-100">{s.label}</p>
            </div>
          ))}
        </div>
      </DivisionPageHero>

      {/* Что поставляем */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="ОБОРУДОВАНИЕ"
            title="Что мы поставляем"
            description="Серверы, хранение данных, сети, рабочие места, питание и печать — всё для ИТ-инфраструктуры компании"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/technologies/products/${c.slug}`}
                  className="group flex items-start gap-6 h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-20 h-20 shrink-0 bg-blue-100 group-hover:bg-blue-900 rounded-2xl p-4 text-blue-900 group-hover:text-white transition-colors duration-300">
                    <TechIcon type={c.slug as TechIconType} className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{c.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{c.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/technologies/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Всё оборудование
            </Link>
          </div>
        </div>
      </section>

      {/* Что вам нужно? */}
      <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-gray-900">
        <div className="absolute inset-0 opacity-10" style={gridPattern} />
        <div className="relative max-w-[1600px] mx-auto">
          <div className="mb-14 text-center">
            <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-4">ПОДБОР</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Что вам нужно?</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Выберите категорию: покажем бренды, которые мы поставляем, и передадим выбор в заявку
            </p>
          </div>
          <Configurator categories={configCategories} />
        </div>
      </section>

      {/* Как работаем */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="КАК МЫ РАБОТАЕМ"
            title="От ТЗ до ввода в эксплуатацию"
            description="Берём на себя весь цикл: подбор, поставку, монтаж и настройку"
          />
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      {/* Бренды */}
      <section className="w-full bg-gray-50 py-24 md:py-32 overflow-hidden border-y border-gray-200">
        <div className="px-6">
          <SectionHeading
            eyebrow="ПАРТНЁРЫ"
            title="Официальный дилер ведущих производителей"
            description="Работаем напрямую с мировыми брендами и поставляем оборудование более 150 международных производителей"
          />
        </div>

        <LogoMarquee items={partners} fadeFrom="gray" />

        <div className="text-center mt-12 px-6">
          <Link
            href="/technologies/brands"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Все бренды
          </Link>
        </div>
      </section>

      <TechCTA />
    </>
  )
}
