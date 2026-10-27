import type { CSSProperties } from "react";

export interface MarqueeItem {
  name: string;
  // Путь к логотипу в /public. Если не задан — показываем название текстом.
  logo?: string;
}

// Бесконечная бегущая лента логотипов.
// - набор логотипов повторяется `copies` раз, лента сдвигается ровно на один набор,
//   поэтому цикл бесшовный и на узких, и на очень широких экранах;
// - скорость не зависит от количества логотипов (secondsPerItem на один логотип);
// - пауза при наведении, отключается при prefers-reduced-motion.
export default function LogoMarquee({
  items,
  secondsPerItem = 4,
  copies = 4,
}: {
  items: MarqueeItem[];
  secondsPerItem?: number;
  copies?: number;
}) {
  const style = {
    animationDuration: `${items.length * secondsPerItem}s`,
    "--marquee-shift": `-${100 / copies}%`,
  } as CSSProperties;

  return (
    <div className="marquee relative overflow-hidden">
      {/* Затухание по краям */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="marquee-track flex w-max" style={style}>
        {Array.from({ length: copies }).map((_, copyIndex) => (
          <ul
            key={copyIndex}
            className="flex shrink-0 items-center"
            aria-hidden={copyIndex > 0 ? true : undefined}
          >
            {items.map((item) => (
              <li
                key={item.name}
                className="flex w-48 h-24 mx-6 shrink-0 items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-16 object-contain"
                  />
                ) : (
                  <span className="text-2xl font-bold text-gray-700 text-center leading-tight">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
