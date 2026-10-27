import fs from 'fs'
import path from 'path'
import type { MarqueeItem } from '../components/LogoMarquee'
import { brandList } from './data'

const extensions = ['svg', 'png', 'webp', 'jpg', 'jpeg', 'avif']

// Дополнительные ключевые слова для поиска файла (если имя файла не совпадает с slug бренда).
const aliases: Record<string, string[]> = {
  apc: ['apc', 'schneider'],
}

const normalize = (s: string) => s.toLowerCase().replace(/logo/g, '').replace(/[^a-z0-9]/g, '')

function listLogoFiles(): { file: string; key: string; ext: string }[] {
  const dir = path.join(process.cwd(), 'public', 'partners')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .map((file) => {
      const ext = path.extname(file).slice(1).toLowerCase()
      return { file, ext, key: normalize(path.basename(file, path.extname(file))) }
    })
    .filter((f) => extensions.includes(f.ext))
}

// Серверная функция: ищет логотип бренда в public/partners.
// Находит файл без учёта регистра и суффикса "-logo": lenovo.svg, Lenovo.png, lenovo-logo.webp.
// Для коротких ключей (hp, hpe) допускается только точное совпадение, чтобы не перепутать HP и HPE.
export function getBrandLogo(slug: string): string | undefined {
  const keys = aliases[slug] ?? [slug]
  const files = listLogoFiles().sort((a, b) => extensions.indexOf(a.ext) - extensions.indexOf(b.ext))

  for (const key of keys) {
    const exact = files.find((f) => f.key === key)
    if (exact) return `/partners/${exact.file}`
  }
  for (const key of keys) {
    if (key.length < 4) continue
    const partial = files.find((f) => f.key.includes(key))
    if (partial) return `/partners/${partial.file}`
  }
  return undefined
}

// Для ленты партнёров. Если файла нет — логотип не задаётся, лента показывает название текстом.
export function getPartnerItems(): MarqueeItem[] {
  return brandList.map((b) => ({ name: b.name, logo: getBrandLogo(b.slug) }))
}

// Для страниц, где нужна карта slug -> путь к логотипу.
export function getBrandLogos(): Record<string, string | undefined> {
  return Object.fromEntries(brandList.map((b) => [b.slug, getBrandLogo(b.slug)]))
}
