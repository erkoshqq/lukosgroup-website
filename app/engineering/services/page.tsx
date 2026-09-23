import type { Metadata } from 'next'
import ServicesPage from './ServicePage';

export const metadata: Metadata = {
  title: 'Услуги - Техническое обследование, Дефектоскопия, НК | LUKOS GROUP',
  description: 'Полный спектр услуг: техническое обследование зданий, дефектоскопия металлоконструкций, лабораторные испытания, геодезическая съемка, поверочный расчёт, геологические изыскания.',
  keywords: 'услуги технического обследования, дефектоскопия услуги, неразрушающий контроль цена, обследование зданий стоимость, лабораторные испытания',
  openGraph: {
    title: 'Услуги LUKOS GROUP - Полный цикл обследования',
    description: 'Техническое обследование, дефектоскопия, лабораторные испытания, геодезия',
    url: 'https://lukosgroup.kz/services',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
};

export default function Page() {
  return <ServicesPage />
}