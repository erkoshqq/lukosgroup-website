import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import DivisionPageHero from '../../../components/DivisionPageHero'
import SectionHeading from '../../../components/SectionHeading'
import Reveal from '../../../components/Reveal'
import TechCTA from '../../TechCTA'
import { brandList, categoriesForBrand } from '../../data'
import BrandLogo from '../../../components/BrandLogo'
import { getBrandLogo } from '../../partnerLogos'

export function generateStaticParams() {
  return brandList.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const brand = brandList.find((b) => b.slug === slug)
  if (!brand) return {}
  const title = `Официальный дилер ${brand.name} в Казахстане | Lukos Technologies`
  const description = `${brand.text}. Lukos Technologies — официальный дилер ${brand.name}: подбор по ТЗ, поставка, монтаж и настройка.`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://lukosgroup.kz/technologies/brands/${brand.slug}`,
      siteName: 'LUKOS GROUP',
      locale: 'ru_KZ',
      type: 'website',
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = brandList.find((b) => b.slug === slug)
  if (!brand) notFound()

  const logo = getBrandLogo(brand.slug)
  const cats = categoriesForBrand(brand.name)
  const others = brandList.filter((b) => b.slug !== brand.slug)

  return (
    <>
      <DivisionPageHero
        eyebrow="ОФИЦИАЛЬНЫЙ ДИЛЕР"
        title={brand.name}
        description={brand.text}
      />

      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Reveal className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 flex items-center justify-center h-56">
                <BrandLogo name={brand.name} logo={logo} align="center" className="h-24 w-full max-w-[280px]" />
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Поставка оборудования {brand.name}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Lukos Technologies — официальный дилер {brand.name}. Подбираем оборудование под
                ваше ТЗ, поставляем, монтируем и настраиваем на месте.
              </p>

              {cats.length > 0 && (
                <>
                  <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">
                    КАТЕГОРИИ ОБОРУДОВАНИЯ
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {cats.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/technologies/products/${c.slug}`}
                        className="text-sm text-blue-900 bg-blue-100 rounded-lg px-4 py-2 hover:bg-blue-200 transition-colors"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading eyebrow="ПАРТНЁРЫ" title="Другие бренды" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {others.map((b) => (
              <Link
                key={b.slug}
                href={`/technologies/brands/${b.slug}`}
                className="flex items-center justify-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-lg font-bold text-gray-700"
              >
                {b.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TechCTA />
    </>
  )
}
