import type { Metadata } from 'next'
import Link from 'next/link'
import { Activity } from 'lucide-react'
import DivisionPageHero from '../components/DivisionPageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import MaintCTA from './MaintCTA'
import Timeline from './Timeline'
import { GearPair, VibrationPanel, EquipmentIcon } from './visuals'
import { services, principles, equipment, industries } from './data'

export const metadata: Metadata = {
  title: 'Lukos Maintenance — обслуживание и ремонт промышленного оборудования | LUKOS GROUP',
  description:
    'Lukos Maintenance — сервисное обслуживание и ремонт динамического оборудования на производстве: приводы, редукторы, насосы, конвейеры. Собственная бригада на объекте заказчика, учёт работ в SAP заказчика.',
  openGraph: {
    title: 'Lukos Maintenance — обслуживание и ремонт оборудования',
    description: 'Бригада на объекте заказчика: плановое и аварийное обслуживание, сварка, электрика, запчасти.',
    url: 'https://lukosgroup.kz/maintenance',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

const highlights = [
  { value: 'Своя бригада', label: 'механики, электрики, сварщики' },
  { value: 'SAP', label: 'учёт работ в системе заказчика' },
  { value: 'ОТ и ПБ', label: 'специалист по КСУ в штате' },
  { value: 'Опыт', label: 'на действующем пищевом производстве' },
]

const gridPattern = {
  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
  backgroundSize: '50px 50px',
}

export default function Page() {
  return (
    <>
      <DivisionPageHero
        tall
        eyebrow="LUKOS MAINTENANCE"
        title="Обслуживание и ремонт оборудования на вашем производстве"
        description="Собственная бригада работает на объекте заказчика по заявкам, в его системах учёта и по его стандартам безопасности."
        visual={<GearPair className="w-full h-auto" />}
      >
        <div className="flex flex-col sm:flex-row gap-3 mt-10 mb-14">
          <Link
            href="/maintenance/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
          >
            Оставить заявку
          </Link>
          <Link
            href="/maintenance/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
          >
            Услуги
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1100px]">
          {highlights.map((h) => (
            <div key={h.value} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{h.value}</p>
              <p className="text-sm text-blue-100">{h.label}</p>
            </div>
          ))}
        </div>
      </DivisionPageHero>

      {/* Услуги */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="УСЛУГИ"
            title="Что мы делаем"
            description="От планового обслуживания до аварийного ремонта: механика, электрика, сварка и запчасти"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.slug} delay={(i % 4) * 0.08}>
                  <Link
                    href={`/maintenance/services#${s.slug}`}
                    className="group block h-full bg-gray-50 p-7 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-900 rounded-xl flex items-center justify-center transition-colors duration-300">
                        <Icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
                      </div>
                      {s.isNew && (
                        <span className="text-xs font-medium text-blue-900 bg-blue-100 rounded-full px-3 py-1">
                          Новая услуга
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{s.text}</p>
                  </Link>
                </Reveal>
              )
            })}
            <Reveal delay={0.24}>
              <Link
                href="/maintenance/contact"
                className="flex flex-col justify-between h-full bg-blue-900 text-white p-7 rounded-2xl hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-3">Не нашли нужную работу?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Опишите задачу: мы оценим объём и подскажем, можем ли взяться за неё.
                </p>
                <span className="text-sm font-semibold underline underline-offset-4">Обсудить задачу</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Оборудование */}
      <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-gray-900">
        <div className="absolute inset-0 opacity-10" style={gridPattern} />
        <div className="relative max-w-[1600px] mx-auto">
          <div className="mb-16 text-center">
            <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-4">ОБОРУДОВАНИЕ</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">С чем мы работаем</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Динамическое оборудование на действующих производствах
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {equipment.map((e, i) => (
              <Reveal key={e.type} delay={i * 0.08}>
                <div className="h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                  <EquipmentIcon type={e.type} className="w-24 h-24 mx-auto text-blue-200 mb-5" />
                  <h3 className="text-lg font-semibold text-white mb-2">{e.title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Вибродиагностика */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-900 bg-blue-100 rounded-full px-3 py-1 mb-6">
              <Activity className="w-4 h-4" />
              Новая услуга
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Вибродиагностика: находим неисправность до поломки
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Оцениваем состояние приводов, редукторов и насосов по вибрации: видим
              развивающийся дефект заранее и планируем ремонт, а не останавливаем линию
              аварийно.
            </p>
            <Link
              href="/maintenance/services#vibration"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Подробнее
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <VibrationPanel />
          </Reveal>
        </div>
      </section>

      {/* Как работаем */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="КАК МЫ РАБОТАЕМ"
            title="От заявки до акта"
            description="Простой и понятный порядок: мы подстраиваемся под процессы предприятия"
          />
          <Timeline />
          <div className="text-center mt-16">
            <Link
              href="/maintenance/process"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Подробнее о порядке работы
            </Link>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="ПОЧЕМУ МЫ"
            title="Что важно предприятию"
            description="Работаем так, чтобы вам не приходилось перестраивать свои процессы"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{p.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Отрасли */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
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
                    className={`h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 ${
                      ind.highlight ? 'border-l-4 border-l-blue-900' : ''
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

      <MaintCTA />
    </>
  )
}
