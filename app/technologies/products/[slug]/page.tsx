import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import DivisionPageHero from '../../../components/DivisionPageHero'
import SectionHeading from '../../../components/SectionHeading'
import Reveal from '../../../components/Reveal'
import TechCTA from '../../TechCTA'
import { categories, brandByName } from '../../data'
import BrandLogo from '../../../components/BrandLogo'
import { getBrandLogo } from '../../partnerLogos'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) return {}
  const title = `${category.title} — поставка в Казахстане | Lukos Technologies`
  const description = `${category.text} Бренды: ${category.brands.join(', ')}. Подбор по ТЗ, поставка, монтаж и настройка.`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://lukosgroup.kz/technologies/products/${category.slug}`,
      siteName: 'LUKOS GROUP',
      locale: 'ru_KZ',
      type: 'website',
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  if (!category) notFound()

  const others = categories.filter((c) => c.slug !== category.slug)

  return (
    <>
      <DivisionPageHero
        eyebrow="ОБОРУДОВАНИЕ"
        title={category.title}
        description={category.text}
      />

      <section className="w-full bg-white py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading
            eyebrow="БРЕНДЫ"
            title="Бренды в этой категории"
            description="Официальный дилер производителей, оборудование которых мы поставляем"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.brands.map((name, i) => {
              const brand = brandByName(name)
              if (!brand) return null
              const logo = getBrandLogo(brand.slug)
              return (
                <Reveal key={name} delay={(i % 3) * 0.1}>
                  <Link
                    href={`/technologies/brands/${brand.slug}`}
                    className="block h-full bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <BrandLogo name={brand.name} logo={logo} className="h-16 w-[200px] mb-4" />
                    <p className="text-gray-600 leading-relaxed">{brand.text}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeading eyebrow="ЕЩЁ ПОСТАВЛЯЕМ" title="Другое оборудование" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {others.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.slug} delay={i * 0.08}>
                  <Link
                    href={`/technologies/products/${c.slug}`}
                    className="block h-full bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                  </Link>
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
