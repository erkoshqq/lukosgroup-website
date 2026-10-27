import type { Metadata } from 'next'
import { Layers, FileCheck, Handshake, Building2, Landmark } from 'lucide-react'
import DivisionPageHero from '../../components/DivisionPageHero'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'
import TechCTA from '../TechCTA'

export const metadata: Metadata = {
  title: 'О направлении — Lukos Technologies | LUKOS GROUP',
  description:
    'Lukos Technologies поставляет серверное оборудование, СХД и сетевые решения для бизнеса и госсектора, поставляет оборудование в том числе по итогам закупок. Подбор строго по ТЗ, без привязки к производителю.',
  openGraph: {
    title: 'О направлении — Lukos Technologies',
    description: 'Поставки ИТ-инфраструктуры для бизнеса и госсектора.',
    url: 'https://lukosgroup.kz/technologies/about',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

const principles = [
  {
    icon: Layers,
    title: 'Без привязки к производителю',
    text: 'Подбираем оборудование строго по техническим требованиям заказчика и, когда это выгодно, предлагаем альтернативные решения от ведущих мировых брендов.',
  },
  {
    icon: FileCheck,
    title: 'Участие в закупках',
    text: 'Участвуем в государственных и коммерческих закупках в качестве поставщика: готовим заявку строго по опубликованным требованиям заказчика.',
  },
  {
    icon: Handshake,
    title: 'Работа с производителями',
    text: 'Сотрудничаем с ведущими мировыми производителями, поэтому отвечаем за качество поставляемой продукции и реализуемых проектов.',
  },
]

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="О НАПРАВЛЕНИИ"
        title="Поставляем ИТ-инфраструктуру под задачу заказчика"
        description="Lukos Technologies — направление группы компаний LUKOS по комплексным поставкам серверного оборудования, систем хранения данных и сетевых решений"
      />

      {/* История и подход */}
      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-6">ЧЕМ МЫ ЗАНИМАЕМСЯ</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                Не просто поставка — готовое решение
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Lukos Technologies специализируется на комплексных поставках ИТ-инфраструктуры,
                  включая серверное оборудование, системы хранения данных (СХД) и сетевые решения,
                  в том числе по итогам государственных и коммерческих закупок.
                </p>
                <p className="text-lg">
                  Мы подбираем и поставляем оборудование в строгом соответствии с техническими
                  требованиями заказчика, без привязки к конкретным производителям, и можем
                  предложить альтернативные решения от ведущих мировых брендов.
                </p>
                <p className="text-lg">
                  После поставки монтируем и настраиваем оборудование на месте и вводим его
                  в эксплуатацию — заказчику не нужно искать отдельных исполнителей.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="space-y-8">
              <div className="bg-blue-900 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4">Наш подход</h3>
                <p className="text-blue-100 leading-relaxed">
                  Подобрать именно то оборудование, которое подходит под ТЗ заказчика,
                  и довести проект до рабочего состояния — с поставкой, монтажом и настройкой.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Бизнес</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Коммерческие компании, которым нужна инфраструктура под конкретную задачу:
                      серверы, хранение данных, сеть, рабочие места.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Landmark className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Государственный сектор</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Участвуем в объявленных закупках и поставляем оборудование по заключённым договорам.
                      Есть реализованные проекты и в госсекторе, и в бизнесе.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Принципы */}
      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="ПРИНЦИПЫ РАБОТЫ"
            title="Как мы строим работу с заказчиком"
            description="Три принципа, на которых держатся наши поставки"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="h-full bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <TechCTA />
    </>
  )
}
