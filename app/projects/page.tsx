import type { Metadata } from 'next'
import ProjectsPage from './ProjectsPage';

export const metadata: Metadata = {
  title: 'Проекты LUKOS GROUP - 3300+ выполненных объектов по Казахстану',
  description: 'Портфолио выполненных проектов: промышленные объекты, жилые комплексы, инфраструктура. Работаем с КазМунайГаз, Kazakhmys, КазАтомПром и др.',
  keywords: 'проекты обследования зданий, кейсы технического обследования, портфолио дефектоскопии, реализованные проекты караганда',
  openGraph: {
    title: 'Проекты LUKOS GROUP',
    description: '3300+ объектов по всему Казахстану',
    url: 'https://lukosgroup.kz/projects',
    siteName: 'LUKOS GROUP',
    locale: 'ru_KZ',
    type: 'website',
  },
};

export default function Page() {
  return <ProjectsPage />
}