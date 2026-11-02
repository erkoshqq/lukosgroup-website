import type { Metadata } from 'next'
import Link from 'next/link'
import DivisionPageHero from '../components/DivisionPageHero'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import MaintCTA from './MaintCTA'
import { services, steps, principles } from './data'

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
  { value: 'Pepsi', label: 'опыт на действующем производстве' },
]

export default function Page() {
  return (
    <>
      <DivisionPageHero
        tall
        eyebrow="LUKOS MAINTENANCE"
        title="Обслуживание и ремонт оборудования на вашем производстве"
        description="Собственная бригада работает на объекте заказчика по заявкам, в его системах учёта и по его стандартам безопасности."
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.1}>
                  <Link
                    href={`/maintenance/services#${s.slug}`}
                    className="block h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-blue-900" />
                      </div>
                      {s.isNew && (
                        <span className="text-xs font-medium text-blue-900 bg-blue-100 rounded-full px-3 py-1">
                          Новая услуга
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.text}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Как работаем */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="КАК МЫ РАБОТАЕМ"
            title="От заявки до акта"
            description="Простой и понятный порядок: мы подстраиваемся под процессы предприятия"
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
          <div className="text-center mt-12">
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
      <section className="w-full bg-white py-24 md:py-32 px-6">
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
                  <div className="h-full bg-gray-50 p-8 rounded-2xl border border-gray-200">
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

      {/* Кейс */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl">
              <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-4">ОПЫТ</p>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Обслуживание действующего производства Pepsi
              </h3>
              <p className="text-blue-100 leading-relaxed mb-8 max-w-3xl">
                Работаем на действующем пищевом производстве Pepsi в Алматы, где жёсткие
                требования к безопасности и учёту работ: заявки, выезд бригады, учёт в SAP
                заказчика, соблюдение правил ОТ и ПБ.
              </p>
              <Link
                href="/maintenance/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                О направлении
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <MaintCTA />
    </>
  )
}
