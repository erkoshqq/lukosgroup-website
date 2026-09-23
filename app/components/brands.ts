// Конфиг брендов группы компаний LUKOS.
// Header и Footer используют этот файл, чтобы под каждое направление
// подставлять свой логотип, свою навигацию и свои ссылки,
// не дублируя разметку компонентов.

export type BrandKey = "engineering" | "technologies" | "maintenance";

export interface NavItem {
  title: string;
  href: string;
  // Выпадающий список (как "Услуги" у Engineering). Необязателен.
  dropdown?: { title: string; href: string }[];
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface BrandConfig {
  key: BrandKey;
  // Показывается в навбаре после "LUKOS", напр. "Engineering"
  shortLabel: string;
  // Главная страница направления, напр. "/engineering"
  homeHref: string;
  nav: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  footerCompanyLinks: FooterLink[];
  footerServiceLinks: FooterLink[];
}

export const brands: Record<BrandKey, BrandConfig> = {
  engineering: {
    key: "engineering",
    shortLabel: "engineering",
    homeHref: "/engineering",
    ctaHref: "/engineering/request",
    ctaLabel: "Связаться",
    nav: [
      { title: "О направлении", href: "/engineering/about" },
      {
        title: "Услуги",
        href: "/engineering/services",
        dropdown: [
          { title: "Техническое обследование", href: "/engineering/services/technical-inspection" },
          { title: "Дефектоскопия", href: "/engineering/services/defectoscopy" },
          { title: "Лабораторные испытания", href: "/engineering/services/laboratory-tests" },
          { title: "Геодезическая съемка", href: "/engineering/services/geodetic-survey" },
          { title: "Поверочный расчёт", href: "/engineering/services/verification-calculation" },
          { title: "Геологические изыскания", href: "/engineering/services/geological-survey" },
        ],
      },
      { title: "Проекты", href: "/engineering/projects" },
      { title: "Контакты", href: "/engineering/contact" },
    ],
    footerCompanyLinks: [
      { title: "О направлении", href: "/engineering/about" },
      { title: "Услуги", href: "/engineering/services" },
      { title: "Проекты", href: "/engineering/projects" },
      { title: "Контакты", href: "/engineering/contact" },
    ],
    footerServiceLinks: [
      { title: "Техническое обследование", href: "/engineering/services#technical" },
      { title: "Дефектоскопия", href: "/engineering/services#defectoscopy" },
      { title: "Лабораторные испытания", href: "/engineering/services#laboratory" },
      { title: "Геодезическая съемка", href: "/engineering/services#geodetic" },
      { title: "Поверочный расчет", href: "/engineering/services#geodetic" },
      { title: "Геологические изыскания", href: "/engineering/services#geodetic" },
    ],
  },

  // Заготовки — наполним, когда будем делать сами разделы.
  technologies: {
    key: "technologies",
    shortLabel: "technologies",
    homeHref: "/technologies",
    ctaHref: "/technologies/request",
    ctaLabel: "Связаться",
    nav: [
      { title: "О направлении", href: "/technologies/about" },
      { title: "Оборудование", href: "/technologies/products" },
      { title: "Контакты", href: "/technologies/contact" },
    ],
    footerCompanyLinks: [
      { title: "О направлении", href: "/technologies/about" },
      { title: "Оборудование", href: "/technologies/products" },
      { title: "Контакты", href: "/technologies/contact" },
    ],
    footerServiceLinks: [],
  },

  maintenance: {
    key: "maintenance",
    shortLabel: "maintenance",
    homeHref: "/maintenance",
    ctaHref: "/maintenance/request",
    ctaLabel: "Связаться",
    nav: [
      { title: "О направлении", href: "/maintenance/about" },
      { title: "Услуги", href: "/maintenance/services" },
      { title: "Контакты", href: "/maintenance/contact" },
    ],
    footerCompanyLinks: [
      { title: "О направлении", href: "/maintenance/about" },
      { title: "Услуги", href: "/maintenance/services" },
      { title: "Контакты", href: "/maintenance/contact" },
    ],
    footerServiceLinks: [],
  },
};
