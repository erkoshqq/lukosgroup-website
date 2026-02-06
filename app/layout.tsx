import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import CTAConsultation from "./components/CTAConsultation";
import BitrixWidget from './components/BitrixWidget';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LUKOS GROUP - Техническое обследование и дефектоскопия',
  description: 'Группа компаний LUKOS GROUP специализируется на техническом обследовании зданий, дефектоскопии и неразрушающем контроле. 3300+ объектов, 26 экспертов, 7 лет опыта.',
  keywords: 'техническое обследование, дефектоскопия, неразрушающий контроль, обследование зданий, Караганда, Казахстан, НК, испытания материалов',
  authors: [{ name: 'LUKOS GROUP' }],
  openGraph: {
    title: 'LUKOS GROUP - Техническое обследование зданий',
    description: 'Комплексные технические обследования и неразрушающий контроль',
    url: 'https://lukosgroup.kz',
    siteName: 'LUKOS GROUP',
    //images: ['/og-image.jpg'],
    locale: 'ru_KZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '68842502712a1169',
    yandex: 'c48008d0d9d66101',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD структурированные данные
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LUKOS GROUP',
    description: 'Техническое обследование и дефектоскопия',
    url: 'https://lukosgroup.kz',
    // logo: 'https://lukosgroup-website.vercel.app/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-708-953-71-78',
      contactType: 'customer service',
      availableLanguage: ['Russian', 'Kazakh']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KZ',
      addressLocality: 'Караганда, район им. Казыбек би ул. Орлова, стр. 113/2'
    }
  };

  return (
    <html lang="ru">
      <head>
        {/* Структурированные данные для Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Мета-тег для подтверждения Яндекса */}
        <meta name="yandex-verification" content="c48008d0d9d66101" />
      </head>
      <body>
        <SmoothScroll/>
        <BitrixWidget />
        <Header />
        {children}
        <CTAConsultation/>
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}