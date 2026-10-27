import type { Metadata } from 'next'
import Link from 'next/link'
import DivisionPageHero from '../../components/DivisionPageHero'
import SectionHeading from '../../components/SectionHeading'
import Reveal from '../../components/Reveal'
import BrandLogo from '../../components/BrandLogo'
import TechCTA from '../TechCTA'
import { brandList } from '../data'
import { getBrandLogo } from '../partnerLogos'

export const metadata: Metadata = {
  title: 'Бренды — официальный дилер Lenovo, Dell, HP, HPE, Cisco, Huawei | Lukos Technologies',
  description:
    'Lukos Technologies — официальный дилер Lenovo, Dell, HP, HPE, Huawei, Cisco, Synology, APC by Schneider Electric, Legrand, ASUS, Acer, DIGIS. Поставляем оборудование более 150 международных брендов.',
  openGraph: {
    title: 'Бренды — Lukos Technologies',
    description: 'Официальный дилер ведущих производителей ИТ-оборудования.',
    url: 'https://lukosgroup.kz/technologies/brands',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="БРЕНДЫ"
        title="Официальный дилер ведущих производителей"
        description="Работаем напрямую с мировыми брендами ИТ-оборудования и поставляем технику более 150 международных производителей"
      />

      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="ОФИЦИАЛЬНЫЙ ДИЛЕР"
            title="Наши партнёры"
            description="Бренды, по которым мы работаем как официальный дилер"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandList.map((b, i) => (
              <Reveal key={b.name} delay={(i % 4) * 0.08}>
                <Link
                  href={`/technologies/brands/${b.slug}`}
                  className="block h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <BrandLogo name={b.name} logo={getBrandLogo(b.slug)} className="h-16 w-[200px] mb-4" />
                  <p className="text-gray-600 leading-relaxed">{b.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <div className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl text-center">
              <p className="text-5xl md:text-6xl font-bold mb-4">150+</p>
              <h3 className="text-2xl font-semibold mb-4">международных брендов</h3>
              <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
                Помимо перечисленных, поставляем оборудование других производителей.
                Нужного бренда нет в списке — напишите, и мы подберём решение.
              </p>
              <Link
                href="/technologies/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Запросить предложение
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TechCTA />
    </>
  )
}
