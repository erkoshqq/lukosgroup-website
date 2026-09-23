import type { Metadata } from 'next'
import AboutPageHero from './AboutPage';

export const metadata: Metadata = {
  title: 'О компании LUKOS GROUP - 7 лет опыта в техническом обследовании',
  description: 'LUKOS GROUP - лидер в области технического обследования зданий в Казахстане. 7 лет опыта, 3300+ объектов, собственная лаборатория, команда из 26 экспертов.',
  keywords: 'о компании lukos, техническое обследование караганда, лаборатория неразрушающего контроля, аттестованные эксперты',
  openGraph: {
    title: 'О компании LUKOS GROUP',
    description: '7 лет опыта, 3300+ объектов, 26 экспертов',
    url: 'https://lukosgroup.kz/about',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
};

export default function Page() {
  return <AboutPageHero />
}