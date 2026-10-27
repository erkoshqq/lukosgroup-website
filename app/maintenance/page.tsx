import type { Metadata } from 'next'
import { Wrench, Factory, Clock3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lukos Maintenance — обслуживание промышленного оборудования | LUKOS GROUP',
  description:
    'Lukos Maintenance — техническое обслуживание производственных линий и промышленного оборудования на заводах в Казахстане.',
  openGraph: {
    title: 'Lukos Maintenance — промышленный сервис',
    description: 'Обслуживание производственных линий и оборудования на заводах.',
    url: 'https://lukosgroup.kz/maintenance',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <section className="max-w-[900px] mx-auto px-6 pt-40 pb-20">
        <div className="flex items-center gap-2 text-amber-400 text-sm mb-6">
          <Wrench className="w-4 h-4" />
          Lukos Maintenance
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
          Обслуживание производственных линий и оборудования
        </h1>

        <p className="text-gray-400 text-base leading-relaxed mb-4">
          Lukos Maintenance — направление группы компаний LUKOS, которое занимается
          техническим обслуживанием оборудования и производственных линий на заводах:
          плановым и аварийным.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-12">
          Раздел пока в разработке — если у вас есть задача по обслуживанию производства,
          опишите её нам, и мы обсудим, чем можем помочь.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <Factory className="w-5 h-5 text-amber-400 mb-3" />
            <p className="text-sm text-gray-300">Работаем на территории заказчика, на действующем производстве</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <Clock3 className="w-5 h-5 text-amber-400 mb-3" />
            <p className="text-sm text-gray-300">Плановое и аварийное обслуживание</p>
          </div>
        </div>

        <a
          href="#contacts"
          className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-medium text-gray-950 hover:bg-amber-400 transition-colors"
        >
          Обсудить задачу
        </a>
      </section>
    </div>
  )
}
