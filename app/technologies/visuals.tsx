"use client";

import { useReducedMotion } from "framer-motion";

// ---------- Серверная стойка для hero ----------
// Схема: стойка с серверами, коммутатор и СХД. Между ними бегут "пакеты данных",
// на серверах мигают индикаторы. Иллюстрация, а не реальное оборудование.

const RACK_UNITS = Array.from({ length: 6 }, (_, i) => 24 + i * 43);

export function ServerRack({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  const packets: { id: string; path: string; dur: number; begin: number }[] = [
    { id: "trk-p1", path: "M180 57H230", dur: 2.2, begin: 0 },
    { id: "trk-p2", path: "M180 223H230", dur: 2.6, begin: 0.8 },
    { id: "trk-p3", path: "M290 74V180", dur: 2.4, begin: 1.4 },
  ];

  return (
    <svg
      viewBox="0 0 360 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Стойка */}
      <rect x="10" y="10" width="170" height="280" rx="10" />
      {RACK_UNITS.map((y, i) => (
        <g key={y}>
          <rect x="22" y={y} width="146" height="36" rx="4" strokeOpacity="0.8" />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={78 + k * 20} y={y + 9} width="14" height="18" rx="2" strokeOpacity="0.45" />
          ))}
          <path d={`M150 ${y + 11}h8M150 ${y + 18}h8M150 ${y + 25}h8`} strokeOpacity="0.4" />
          <circle cx="36" cy={y + 18} r="3" fill="#7dd3fc" stroke="none">
            {!reduce && (
              <animate
                attributeName="opacity"
                values="1;0.25;1"
                dur={`${1.6 + (i % 3) * 0.5}s`}
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
          <circle cx="47" cy={y + 18} r="3" fill="#93c5fd" fillOpacity="0.6" stroke="none" />
        </g>
      ))}

      {/* Коммутатор */}
      <rect x="230" y="40" width="120" height="34" rx="5" />
      {Array.from({ length: 8 }, (_, k) => (
        <rect key={k} x={241 + k * 13} y="52" width="9" height="9" rx="1.5" strokeOpacity="0.55" />
      ))}
      <circle cx="240" cy="46" r="2" fill="#7dd3fc" stroke="none" />

      {/* СХД */}
      <rect x="230" y="180" width="120" height="86" rx="6" />
      {[0, 1].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <rect key={`${r}-${c}`} x={240 + c * 26} y={192 + r * 34} width="22" height="26" rx="2.5" strokeOpacity="0.5" />
        ))
      )}
      {[0, 1].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <circle key={`d${r}-${c}`} cx={251 + c * 26} cy={192 + r * 34 + 20} r="1.6" fill="#7dd3fc" stroke="none" fillOpacity="0.7" />
        ))
      )}

      {/* Линии связи */}
      {packets.map((p) => (
        <path key={p.id} id={p.id} d={p.path} strokeDasharray="3 4" strokeOpacity="0.55" />
      ))}
      {!reduce &&
        packets.map((p) => (
          <circle key={`dot-${p.id}`} r="3.2" fill="#bae6fd" stroke="none">
            <animateMotion dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite">
              <mpath href={`#${p.id}`} />
            </animateMotion>
          </circle>
        ))}
    </svg>
  );
}

// ---------- Пиктограммы категорий оборудования ----------

export type TechIconType = "servers" | "storage" | "network" | "workstations" | "power" | "printing";

// thin: тонкие линии, не зависящие от масштаба (для крупных иллюстраций в hero)
export function TechIcon({
  type,
  className = "",
  thin = false,
}: {
  type: TechIconType;
  className?: string;
  thin?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${className} ${thin ? "[&_*]:[vector-effect:non-scaling-stroke]" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={thin ? 1.3 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "servers" && (
        <>
          {[8, 26, 44].map((y) => (
            <g key={y}>
              <rect x="8" y={y} width="48" height="14" rx="3" />
              <circle cx="15" cy={y + 7} r="1.6" />
              <path d={`M24 ${y + 7}h8M36 ${y + 7}h8`} />
              <path d={`M50 ${y + 4}v6`} />
            </g>
          ))}
        </>
      )}
      {type === "storage" && (
        <>
          <ellipse cx="32" cy="16" rx="20" ry="7" />
          <path d="M12 16v12c0 4 9 7 20 7s20-3 20-7V16" />
          <path d="M12 28v12c0 4 9 7 20 7s20-3 20-7V28" />
          <path d="M12 40v8c0 4 9 7 20 7s20-3 20-7v-8" />
          <path d="M44 31h4M44 43h4" />
        </>
      )}
      {type === "network" && (
        <>
          <rect x="6" y="28" width="52" height="16" rx="3" />
          {[0, 1, 2, 3, 4].map((k) => (
            <rect key={k} x={12 + k * 9} y="34" width="5" height="5" rx="1" />
          ))}
          <path d="M16 28V16M32 28V11M48 28V16M20 44v9M44 44v9" />
          <circle cx="16" cy="13" r="3" />
          <circle cx="32" cy="8" r="3" />
          <circle cx="48" cy="13" r="3" />
          <circle cx="20" cy="56" r="3" />
          <circle cx="44" cy="56" r="3" />
        </>
      )}
      {type === "workstations" && (
        <>
          <rect x="8" y="10" width="48" height="32" rx="3" />
          <path d="M16 20h20M16 27h14" />
          <path d="M24 54h16M32 42v12" />
          <circle cx="48" cy="34" r="1.6" />
        </>
      )}
      {type === "power" && (
        <>
          <rect x="12" y="6" width="40" height="46" rx="5" />
          <path d="M20 14h24" />
          <path d="M35 24l-9 13h8l-3 11 11-15h-8z" />
          <path d="M22 52v6M42 52v6" />
        </>
      )}
      {type === "printing" && (
        <>
          <path d="M18 22V8h28v14" />
          <rect x="8" y="22" width="48" height="22" rx="4" />
          <rect x="18" y="34" width="28" height="20" rx="2" />
          <path d="M24 42h16M24 48h10" />
          <circle cx="48" cy="29" r="1.6" />
        </>
      )}
    </svg>
  );
}
