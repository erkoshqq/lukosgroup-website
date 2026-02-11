import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import CTAConsultation from "./components/CTAConsultation";
import BitrixWidget from './components/BitrixWidget';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Оставьте только fallback title (если страница не установит свой)
  metadataBase: new URL('https://lukosgroup.kz'),
  
  // Общие для всех страниц
  authors: [{ name: 'LUKOS GROUP' }],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '68842502712a1169',
    yandex: 'c48008d0d9d66101',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LUKOS GROUP',
    description: 'Техническое обследование и дефектоскопия',
    url: 'https://lukosgroup.kz',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-708-953-71-78',
      contactType: 'customer service',
      availableLanguage: ['Russian', 'Kazakh']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KZ',
      addressLocality: 'Караганда',
      streetAddress: 'район им. Казыбек би ул. Орлова, стр. 113/2'
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