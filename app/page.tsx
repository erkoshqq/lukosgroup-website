import type { Metadata } from 'next'
import GroupHomePage from './GroupHomePage'

export const metadata: Metadata = {
  title: 'LUKOS GROUP — Инженерия, технологии и промышленный сервис в Казахстане',
  description:
    'Группа компаний LUKOS: техническое обследование зданий и дефектоскопия (Engineering), поставка серверного и сетевого оборудования (Technologies), обслуживание производственных линий (Maintenance).',
  openGraph: {
    title: 'LUKOS GROUP — Инженерия, технологии и промышленный сервис',
    description: 'Три направления одной группы компаний в Казахстане.',
    url: 'https://lukosgroup.kz',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
}

export default function Page() {
  return <GroupHomePage />
}
