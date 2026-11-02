import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import DivisionPageHero from '../../components/DivisionPageHero'
import ContactForm from '../../components/ContactForm'
import Reveal from '../../components/Reveal'
import { contactInfo } from '../../components/contactInfo'
import { services } from '../data'

export const metadata: Metadata = {
  title: 'Контакты — Lukos Maintenance | Заявка на обслуживание оборудования',
  description:
    'Свяжитесь с Lukos Maintenance: +7 (708) 953-71-78, info@lukosgroup.kz. Заявка на плановое или аварийное обслуживание и ремонт оборудования.',
  openGraph: {
    title: 'Контакты — Lukos Maintenance',
    description: 'Заявка на обслуживание и ремонт промышленного оборудования.',
    url: 'https://lukosgroup.kz/maintenance/contact',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

const extraFields = [
  { name: 'workType', label: 'Тип работ', options: [...services.map((s) => s.title), 'Другое'] },
  { name: 'urgency', label: 'Срочность', options: ['Плановые работы', 'Аварийная ситуация'] },
  { name: 'company', label: 'Предприятие', placeholder: 'Название компании' },
  { name: 'site', label: 'Город / объект', placeholder: 'Где находится оборудование' },
]

const iconBox = 'w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'
const row = 'flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="СВЯЖИТЕСЬ С НАМИ"
        title="Контакты"
        description="Опишите задачу или аварийную ситуацию: мы свяжемся с вами, оценим объём работ и сроки"
      />

      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">Наши контакты</h2>

              <div className="space-y-6 mb-12">
                <div className={row}>
                  <div className={iconBox}>
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                    {contactInfo.phones.map((p) => (
                      <a key={p.href} href={p.href} className="text-gray-600 hover:text-blue-900 transition-colors block">
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className={row}>
                  <div className={iconBox}>
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a href={contactInfo.email.href} className="text-gray-600 hover:text-blue-900 transition-colors">
                      {contactInfo.email.label}
                    </a>
                  </div>
                </div>

                <div className={row}>
                  <div className={iconBox}>
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
                    <a href={contactInfo.address.href} className="text-gray-600 hover:text-blue-900 transition-colors">
                      Республика Казахстан<br />
                      {contactInfo.address.label}
                    </a>
                  </div>
                </div>

                <div className={row}>
                  <div className={iconBox}>
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Режим работы</h3>
                    <p className="text-gray-600">
                      {contactInfo.hours[0]}<br />
                      {contactInfo.hours[1]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/office.png" alt="Офис Lukos Group" fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Наш офис</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Отправить заявку</h2>
                <ContactForm
                  division="Lukos Maintenance"
                  placeholder="Какое оборудование, что нужно сделать..."
                  extraFields={extraFields}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
