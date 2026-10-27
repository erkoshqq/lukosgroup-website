import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import DivisionPageHero from '../../components/DivisionPageHero'
import ContactForm from '../../components/ContactForm'
import Reveal from '../../components/Reveal'
import { contactInfo } from '../../components/contactInfo'
import { categories } from '../data'

const extraFields = [
  { name: 'category', label: 'Категория', options: [...categories.map((c) => c.title), 'Другое'] },
  { name: 'customerType', label: 'Тип заказчика', options: ['Бизнес', 'Государственный сектор'] },
  { name: 'brand', label: 'Бренд', placeholder: 'Например, Dell или любой другой' },
  { name: 'quantity', label: 'Количество', placeholder: 'Сколько единиц' },
  { name: 'deadline', label: 'Желаемый срок поставки', placeholder: 'Например, до конца месяца' },
]

export const metadata: Metadata = {
  title: 'Контакты — Lukos Technologies | Заказать поставку оборудования',
  description:
    'Свяжитесь с Lukos Technologies: +7 (708) 953-71-78, info@lukosgroup.kz. Караганда, ул. Орлова 113/2. Подберём оборудование и посчитаем стоимость по вашему ТЗ.',
  openGraph: {
    title: 'Контакты — Lukos Technologies',
    description: 'Заявка на поставку ИТ-оборудования.',
    url: 'https://lukosgroup.kz/technologies/contact',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

const iconBox = 'w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'
const row = 'flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'

export default function Page() {
  return (
    <>
      <DivisionPageHero
        eyebrow="СВЯЖИТЕСЬ С НАМИ"
        title="Контакты"
        description="Готовы ответить на ваши вопросы, подобрать оборудование и посчитать стоимость поставки"
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
                  division="Lukos Technologies"
                  placeholder="Опишите задачу или приложите ссылку на ТЗ..."
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
