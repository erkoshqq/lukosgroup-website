import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Search, Cpu } from 'lucide-react'
import DivisionPageHero from '../../components/DivisionPageHero'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'
import MaintCTA from '../MaintCTA'
import { industries } from '../data'

export const metadata: Metadata = {
  title: 'О направлении — Lukos Maintenance | LUKOS GROUP',
  description:
    'Lukos Maintenance — сервисное направление группы компаний LUKOS: обслуживание и ремонт динамического оборудования на производственных предприятиях. Опыт на действующем пищевом производстве.',
  openGraph: {
    title: 'О направлении — Lukos Maintenance',
    description: 'Сервис и ремонт оборудования на производстве, опора на группу компаний LUKOS.',
    url: 'https://lukosgroup.kz/maintenance/about',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

const groupLinks = [
  {
    icon: Search,
    title: 'Lukos Engineering',
    text: 'Техническое обследование зданий и дефектоскопия: более 6 лет опыта в инженерной диагностике.',
    href: '/engineering',
  },
  {
    icon: Cpu,
    title: 'Lukos Technologies',
    text: 'Поставка серверного и ИТ-оборудования для бизнеса и государственного сектора.',
    href: '/technologies',
  },
]

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="О НАПРАВЛЕНИИ"
        title="Сервис, на который можно опереться"
        description="Lukos Maintenance — направление группы компаний LUKOS по обслуживанию и ремонту динамического оборудования на производстве"
      />

      {/* О направлении */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-6">ЧЕМ МЫ ЗАНИМАЕМСЯ</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                Бригада на вашем объекте
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Мы обслуживаем и ремонтируем динамическое оборудование на производственных
                  предприятиях: приводы, редукторы, насосы, конвейеры, линии упаковки.
                  Собственная бригада работает на объекте заказчика по заявкам.
                </p>
                <p className="text-lg">
                  Работаем в системах учёта заказчика и по его стандартам безопасности:
                  без лишней бюрократии и без необходимости перестраивать ваши процессы.
                </p>
                <p className="text-lg">
                  Механика, электрика, сварка, запчасти и диагностика выполняются одной командой:
                  не нужно координировать нескольких подрядчиков.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="space-y-8">
              <div className="bg-blue-900 text-white p-8 rounded-2xl">
                <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-3">ОПЫТ</p>
                <h3 className="text-2xl font-semibold mb-4">Действующее производство</h3>
                <p className="text-blue-100 leading-relaxed">
                  Есть опыт обслуживания действующего пищевого производства, где жёсткие
                  требования к безопасности и учёту работ. Работаем по заявкам, учитываем
                  работы в SAP заказчика и соблюдаем правила ОТ и ПБ.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Группа компаний LUKOS</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Опираемся на ресурсы и опыт группы: техническое обследование и
                      дефектоскопия с 6-летней историей, инжиниринг и поставки оборудования.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Отрасли */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="ОТРАСЛИ"
            title="Где мы работаем"
            description="Предприятия, на которых есть динамическое оборудование: приводы, редукторы, насосы и конвейеры"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <Reveal key={ind.title} delay={i * 0.1}>
                  <div
                    className={`h-full p-8 rounded-2xl ${
                      ind.highlight ? 'bg-white shadow-sm border-l-4 border-l-blue-900' : 'bg-white shadow-sm'
                    }`}
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{ind.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{ind.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Группа */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="ГРУППА LUKOS"
            title="Другие направления группы"
            description="Одна команда: инжиниринг, технологии и промышленный сервис"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
            {groupLinks.map((g, i) => {
              const Icon = g.icon
              return (
                <Reveal key={g.title} delay={i * 0.1}>
                  <Link
                    href={g.href}
                    className="block h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{g.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{g.text}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <MaintCTA />
    </>
  )
}
