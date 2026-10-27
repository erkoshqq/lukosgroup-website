import type { Metadata } from 'next'
import Link from 'next/link'
import DivisionPageHero from '../components/DivisionPageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import LogoMarquee from '../components/LogoMarquee'
import TechCTA from './TechCTA'
import { categories, steps } from './data'
import { getPartnerItems } from './partnerLogos'

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
  { value: '12', label: 'брендов — официальный дилер' },
  { value: '150+', label: 'международных брендов' },
  { value: '6', label: 'категорий оборудования' },
  { value: 'Гос + бизнес', label: 'наши заказчики' },
]

export default function Page() {
  const partners = getPartnerItems()

  return (
    <>
      <DivisionPageHero
        tall
        eyebrow="LUKOS TECHNOLOGIES"
        title="Комплексные поставки ИТ-инфраструктуры"
        description="Серверы, системы хранения данных и сетевые решения для бизнеса и государственного сектора. Подбираем технику строго под ваше ТЗ."
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
            {categories.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.slug} delay={i * 0.08}>
                  <Link
                    href={`/technologies/products/${c.slug}`}
                    className="block h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{c.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{c.text}</p>
                  </Link>
                </Reveal>
              )
            })}
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

      {/* Как работаем */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="КАК МЫ РАБОТАЕМ"
            title="От ТЗ до ввода в эксплуатацию"
            description="Берём на себя весь цикл: подбор, поставку, монтаж и настройку"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Бренды */}
      <section className="w-full bg-white py-24 md:py-32 overflow-hidden border-y border-gray-200">
        <div className="px-6">
          <SectionHeading
            eyebrow="ПАРТНЁРЫ"
            title="Официальный дилер ведущих производителей"
            description="Работаем напрямую с мировыми брендами и поставляем оборудование более 150 международных производителей"
          />
        </div>

        <LogoMarquee items={partners} />

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
