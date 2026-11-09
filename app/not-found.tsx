import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Server, Wrench } from 'lucide-react'
import GroupHeader from './components/GroupHeader'
import DivisionPageHero from './components/DivisionPageHero'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Страница не найдена | LUKOS GROUP',
}

const divisions = [
  { href: '/engineering', icon: Building2, name: 'Lukos Engineering', text: 'Техническое обследование зданий, дефектоскопия' },
  { href: '/technologies', icon: Server, name: 'Lukos Technologies', text: 'Поставка серверного и ИТ-оборудования' },
  { href: '/maintenance', icon: Wrench, name: 'Lukos Maintenance', text: 'Обслуживание и ремонт оборудования' },
]

export default function NotFound() {
  return (
    <>
      <GroupHeader />
      <DivisionPageHero
        eyebrow="ОШИБКА 404"
        title="Страница не найдена"
        description="Возможно, адрес изменился или страница была удалена. Выберите направление, чтобы продолжить."
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
        >
          На главную
        </Link>
      </DivisionPageHero>

      <section className="w-full bg-white py-20 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {divisions.map((d) => {
            const Icon = d.icon
            return (
              <Link
                key={d.href}
                href={d.href}
                className="block bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-900" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{d.name}</h2>
                <p className="text-gray-600 leading-relaxed">{d.text}</p>
              </Link>
            )
          })}
        </div>
      </section>

      <Footer />
    </>
  )
}
