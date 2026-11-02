import type { Metadata } from 'next'
import DivisionPageHero from '../../components/DivisionPageHero'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'
import MaintCTA from '../MaintCTA'
import { steps, principles, team } from '../data'

export const metadata: Metadata = {
  title: 'Как работаем — Lukos Maintenance | Сервис на объекте заказчика',
  description:
    'Порядок работы Lukos Maintenance: заявка от предприятия, выезд бригады, учёт работ в SAP заказчика, акт выполненных работ. Соблюдение требований ОТ и ПБ.',
  openGraph: {
    title: 'Как работаем — Lukos Maintenance',
    description: 'От заявки до акта: бригада на объекте, работа в системах заказчика.',
    url: 'https://lukosgroup.kz/maintenance/process',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="КАК МЫ РАБОТАЕМ"
        title="Подстраиваемся под процессы предприятия"
        description="Работаем по заявкам, в системах учёта заказчика и по его стандартам безопасности"
      />

      {/* Шаги */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeading
            eyebrow="ПОРЯДОК РАБОТЫ"
            title="От заявки до акта"
            description="Четыре понятных шага"
          />
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-blue-100 hidden md:block" />
            <div className="space-y-6">
              {steps.map((s, i) => {
                const Icon = s.icon
                return (
                  <Reveal key={s.title} delay={i * 0.1}>
                    <div className="relative flex gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <div className="relative z-10 w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-2">Шаг {i + 1}</p>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Принципы */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="НА ОБЪЕКТЕ"
            title="Как мы работаем на предприятии"
            description="Особенности, которые важны для действующего производства"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeading
            eyebrow="КОМАНДА"
            title="Кто выезжает на объект"
            description="Собственная команда, закрывающая весь цикл работ"
          />
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {team.map((t) => (
                <span key={t} className="text-base text-blue-900 bg-blue-100 rounded-lg px-5 py-3">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <MaintCTA />
    </>
  )
}
