import type { Metadata } from 'next'
import HomePage from './HomePage'

export const metadata: Metadata = {
  title: 'LUKOS GROUP - Техническое обследование зданий в Казахстане | Дефектоскопия',
  description: 'Профессиональное техническое обследование зданий и сооружений, дефектоскопия, неразрушающий контроль. 3300+ объектов, 26 экспертов. Лицензированная лаборатория в Караганде.',
  keywords: 'техническое обследование зданий, дефектоскопия караганда, неразрушающий контроль, обследование конструкций, НК металла, экспертиза зданий',
  openGraph: {
    title: 'LUKOS GROUP - Техническое обследование зданий',
    description: '3300+ обследованных объектов по Казахстану. Лицензии и аккредитации',
    url: 'https://lukosgroup.kz',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function Page() {
  return <HomePage />
}