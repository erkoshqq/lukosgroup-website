import {
  Server,
  HardDrive,
  Network,
  Monitor,
  BatteryCharging,
  Printer,
  ClipboardList,
  FileCheck,
  Truck,
  Wrench,
} from 'lucide-react'

export const categories = [
  {
    slug: 'servers',
    icon: Server,
    title: 'Серверное оборудование',
    text: 'Серверы для корпоративной инфраструктуры, виртуализации и ресурсоёмких задач.',
    brands: ['Dell', 'HPE', 'Lenovo', 'ASUS'],
  },
  {
    slug: 'storage',
    icon: HardDrive,
    title: 'Системы хранения данных',
    text: 'СХД и сетевые хранилища (NAS) для надёжного хранения данных и резервного копирования.',
    brands: ['Dell', 'HPE', 'Synology'],
  },
  {
    slug: 'network',
    icon: Network,
    title: 'Сетевые решения',
    text: 'Оборудование для построения корпоративных сетей и телеком-инфраструктуры.',
    brands: ['Cisco', 'Huawei'],
  },
  {
    slug: 'workstations',
    icon: Monitor,
    title: 'Рабочие станции и ПК',
    text: 'Компьютеры и рабочие станции для офиса и профессиональных задач.',
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer'],
  },
  {
    slug: 'power',
    icon: BatteryCharging,
    title: 'ИБП и электротехника',
    text: 'Бесперебойное питание, защита электросетей и инфраструктурные решения.',
    brands: ['APC by Schneider Electric', 'Legrand'],
  },
  {
    slug: 'printing',
    icon: Printer,
    title: 'Печатная техника',
    text: 'Печатная техника для офиса и бизнеса.',
    brands: ['HP'],
  },
]

export const steps = [
  {
    icon: ClipboardList,
    title: 'Подбор по ТЗ',
    text: 'Подбираем оборудование строго под технические требования заказчика, без привязки к конкретному производителю.',
  },
  {
    icon: FileCheck,
    title: 'Участие в закупках',
    text: 'Участвуем в объявленных государственных и коммерческих закупках в качестве поставщика: готовим заявку по опубликованным требованиям.',
  },
  {
    icon: Truck,
    title: 'Поставка',
    text: 'Предлагаем альтернативные решения от ведущих мировых брендов, если они соответствуют требованиям и выгоднее по цене или срокам.',
  },
  {
    icon: Wrench,
    title: 'Монтаж и настройка',
    text: 'Устанавливаем, настраиваем и вводим оборудование в эксплуатацию.',
  },
]

export const brandList = [
  { slug: 'lenovo', name: 'Lenovo', text: 'Компьютерная техника и серверные решения' },
  { slug: 'dell', name: 'Dell', text: 'Серверы, системы хранения данных и рабочие станции' },
  { slug: 'hp', name: 'HP', text: 'ПК, печатная техника и ИТ-решения для бизнеса' },
  { slug: 'hpe', name: 'HPE', text: 'Корпоративные серверы, СХД и ИТ-инфраструктура' },
  { slug: 'huawei', name: 'Huawei', text: 'Телеком и ИТ-оборудование, сетевые и облачные решения' },
  { slug: 'cisco', name: 'Cisco', text: 'Сетевое оборудование для корпоративных сетей' },
  { slug: 'synology', name: 'Synology', text: 'Системы хранения данных (NAS)' },
  { slug: 'apc', name: 'APC by Schneider Electric', text: 'Бесперебойное питание и защита электросетей' },
  { slug: 'legrand', name: 'Legrand', text: 'Электротехническое оборудование и инфраструктурные решения' },
  { slug: 'asus', name: 'ASUS', text: 'Компьютерная техника и серверные решения' },
  { slug: 'acer', name: 'Acer', text: 'Компьютерная техника и решения для бизнеса' },
  { slug: 'digis', name: 'DIGIS', text: 'Дистрибуция профессионального аудио-видео и ИТ-оборудования' },
]

// Категории, в которых представлен бренд (выводятся из списка категорий).
export function categoriesForBrand(brandName: string) {
  return categories.filter((c) => c.brands.includes(brandName))
}

export function brandByName(name: string) {
  return brandList.find((b) => b.name === name)
}
