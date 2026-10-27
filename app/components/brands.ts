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

// Акцентные цвета направления (полные классы Tailwind, чтобы они не вырезались при сборке)
export interface BrandTheme {
  text: string;
  button: string;
  leftBar: string;
  iconBg: string;
  hoverBorder: string;
  focusBorder: string;
}

export interface BrandConfig {
  key: BrandKey;
  theme: BrandTheme;
  // Показывается в навбаре после "lukos", напр. "Engineering"
  shortLabel: string;
  // Главная страница направления, напр. "/engineering"
  homeHref: string;
  nav: NavItem[];
  ctaHref: string;
  ctaLabel: string;
  // Короткое описание направления для футера
  description: string;
  footerCompanyLinks: FooterLink[];
  footerServiceLinks: FooterLink[];
}

export const brands: Record<BrandKey, BrandConfig> = {
  engineering: {
    key: "engineering",
    theme: {
      text: "text-sky-400",
      button: "bg-sky-500 text-gray-950 hover:bg-sky-400",
      leftBar: "border-l-sky-400/60",
      iconBg: "bg-sky-400/10",
      hoverBorder: "hover:border-sky-400/50",
      focusBorder: "focus:border-sky-400",
    },
    shortLabel: "Engineering",
    homeHref: "/engineering",
    ctaHref: "/engineering/request",
    ctaLabel: "Связаться",
    description: "Техническое обследование зданий, дефектоскопия и неразрушающий контроль по всему Казахстану.",
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

  technologies: {
    key: "technologies",
    theme: {
      text: "text-cyan-400",
      button: "bg-cyan-500 text-gray-950 hover:bg-cyan-400",
      leftBar: "border-l-cyan-400/60",
      iconBg: "bg-cyan-400/10",
      hoverBorder: "hover:border-cyan-400/50",
      focusBorder: "focus:border-cyan-400",
    },
    shortLabel: "Technologies",
    homeHref: "/technologies",
    ctaHref: "/technologies/contact",
    ctaLabel: "Связаться",
    description: "Комплексные поставки ИТ-инфраструктуры: серверы, СХД и сетевые решения для бизнеса и государственного сектора.",
    nav: [
      { title: "О направлении", href: "/technologies/about" },
      { title: "Оборудование", href: "/technologies/products" },
      { title: "Бренды", href: "/technologies/brands" },
      { title: "Контакты", href: "/technologies/contact" },
    ],
    footerCompanyLinks: [
      { title: "О направлении", href: "/technologies/about" },
      { title: "Оборудование", href: "/technologies/products" },
      { title: "Бренды", href: "/technologies/brands" },
      { title: "Контакты", href: "/technologies/contact" },
    ],
    footerServiceLinks: [],
  },

  maintenance: {
    key: "maintenance",
    theme: {
      text: "text-amber-400",
      button: "bg-amber-500 text-gray-950 hover:bg-amber-400",
      leftBar: "border-l-amber-400/60",
      iconBg: "bg-amber-400/10",
      hoverBorder: "hover:border-amber-400/50",
      focusBorder: "focus:border-amber-400",
    },
    shortLabel: "Maintenance",
    homeHref: "/maintenance",
    ctaHref: "#contacts",
    ctaLabel: "Связаться",
    description: "Техническое обслуживание производственных линий и промышленного оборудования на заводах.",
    nav: [
      { title: "Контакты", href: "#contacts" },
    ],
    footerCompanyLinks: [
      { title: "lukos group", href: "/" },
      { title: "Engineering", href: "/engineering" },
      { title: "Technologies", href: "/technologies" },
    ],
    footerServiceLinks: [],
  },
};

// Используется на корневой главной группы и в Footer, когда brand не задан.
export const groupInfo = {
  shortLabel: "GROUP",
  homeHref: "/",
  description: "Группа компаний в сфере инженерной диагностики, поставки технологий и промышленного сервиса.",
  footerCompanyLinks: [
    { title: "Engineering", href: "/engineering" },
    { title: "Technologies", href: "/technologies" },
    { title: "Maintenance", href: "/maintenance" },
  ] as FooterLink[],
};
