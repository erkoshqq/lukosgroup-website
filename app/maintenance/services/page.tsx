import type { Metadata } from 'next'
import Link from 'next/link'
import DivisionPageHero from '../../components/DivisionPageHero'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'
import MaintCTA from '../MaintCTA'
import { VibrationPanel } from '../visuals'
import { services } from '../data'

export const metadata: Metadata = {
  title: 'Услуги — Lukos Maintenance | Обслуживание и ремонт оборудования',
  description:
    'Плановое и аварийное обслуживание, ремонт приводов, редукторов, насосов, конвейеров и линий упаковки. Сварочные и слесарные работы, электромонтаж, запчасти, вибродиагностика, датчики и КИПиА.',
  openGraph: {
    title: 'Услуги — Lukos Maintenance',
    description: 'Обслуживание и ремонт динамического оборудования на производстве.',
    url: 'https://lukosgroup.kz/maintenance/services',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="УСЛУГИ"
        title="Обслуживание и ремонт оборудования"
        description="Механика, электрика, сварка, запчасти и диагностика: полный цикл для действующего производства"
      />

      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="ЧТО МЫ ДЕЛАЕМ"
            title="Наши услуги"
            description="Работаем на объекте заказчика, по заявкам предприятия"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon

              // Вибродиагностика — новая услуга, показываем её крупно и с иллюстрацией
              if (s.slug === 'vibration') {
                return (
                  <Reveal key={s.slug} className="md:col-span-2">
                    <article
                      id={s.slug}
                      className="scroll-mt-28 rounded-2xl bg-linear-to-br from-blue-900 via-blue-800 to-gray-900 p-8 md:p-12 text-white"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                              <Icon className="w-7 h-7 text-blue-100" />
                            </div>
                            <span className="text-xs font-medium text-blue-900 bg-blue-100 rounded-full px-3 py-1">
                              Новая услуга
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-semibold mb-4">{s.title}</h3>
                          <p className="text-blue-100 leading-relaxed mb-4">{s.text}</p>
                          <p className="text-blue-100 leading-relaxed">
                            Видим развивающийся дефект заранее и планируем ремонт, а не
                            останавливаем линию аварийно.
                          </p>
                        </div>
                        <VibrationPanel />
                      </div>
                    </article>
                  </Reveal>
                )
              }

              return (
                <Reveal key={s.slug} delay={(i % 2) * 0.1}>
                  <article
                    id={s.slug}
                    className="scroll-mt-28 h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-blue-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{s.text}</p>
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
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Не нашли нужную работу?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Опишите задачу: мы оценим объём и подскажем, можем ли взяться за неё.
                </p>
              </div>
              <Link
                href="/maintenance/contact"
                className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Обсудить задачу
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <MaintCTA />
    </>
  )
}
