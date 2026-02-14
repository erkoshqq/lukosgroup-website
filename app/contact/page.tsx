import type { Metadata } from 'next'
import ContactPage from './ContactPage';

export const metadata: Metadata = {
  title: 'Контакты LUKOS GROUP - Техническое обследование в Караганде',
  description: 'Свяжитесь с нами: +7 (708) 953-71-78, lukosgroupkz@gmail.com. Офис в Караганде, ул. Орлова 113/2. Работаем по всему Казахстану. Бесплатная консультация.',
  keywords: 'контакты lukos group, техническое обследование караганда контакты, дефектоскопия телефон, заказать обследование здания',
  openGraph: {
    title: 'Контакты LUKOS GROUP',
    description: 'Караганда, ул. Орлова 113/2. Телефон: +7 (708) 953-71-78',
    url: 'https://lukosgroup.kz/contact',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
};

export default function Page() {
  return <ContactPage />
}