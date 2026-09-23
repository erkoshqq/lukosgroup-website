import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Оставьте только fallback title (если страница не установит свой)
  metadataBase: new URL('https://lukosgroup.kz'),

  // Общие для всех страниц группы
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
  return (
    <html lang="ru">
      <head>
        {/* Мета-тег для подтверждения Яндекса */}
        <meta name="yandex-verification" content="c48008d0d9d66101" />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
