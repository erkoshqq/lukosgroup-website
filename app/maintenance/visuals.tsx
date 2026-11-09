"use client";

import { useReducedMotion } from "framer-motion";

// ---------- Шестерни ----------

// Контур зубчатого колеса: трапециевидные зубья по окружности.
function gearPath(teeth: number, rOuter: number, rRoot: number, phase = 0) {
  const step = (2 * Math.PI) / teeth;
  const baseHalf = step * 0.27;
  const tipHalf = step * 0.14;
  const p = (ang: number, r: number) =>
    `${(Math.cos(ang) * r).toFixed(2)} ${(Math.sin(ang) * r).toFixed(2)}`;
  const parts: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a = phase + i * step;
    parts.push(`${i === 0 ? "M" : "L"}${p(a - baseHalf, rRoot)}`);
    parts.push(`L${p(a - tipHalf, rOuter)}`);
    parts.push(`L${p(a + tipHalf, rOuter)}`);
    parts.push(`L${p(a + baseHalf, rRoot)}`);
    parts.push(`A${rRoot} ${rRoot} 0 0 1 ${p(phase + (i + 1) * step - baseHalf, rRoot)}`);
  }
  return parts.join(" ") + " Z";
}

function spokes(count: number, r1: number, r2: number) {
  return Array.from({ length: count }, (_, i) => {
    const a = (i * 2 * Math.PI) / count;
    return `M${(Math.cos(a) * r1).toFixed(2)} ${(Math.sin(a) * r1).toFixed(2)}L${(Math.cos(a) * r2).toFixed(2)} ${(Math.sin(a) * r2).toFixed(2)}`;
  }).join("");
}

// Две сцепленные шестерни: передаточное число соответствует числу зубьев,
// фаза подобрана так, чтобы зубья входили во впадины при вращении.
const BIG = { teeth: 28, outer: 130, root: 112 };
const SMALL = { teeth: 14, outer: 69.5, root: 51.5 };
const PITCH_BIG = (BIG.outer + BIG.root) / 2;
const PITCH_SMALL = (SMALL.outer + SMALL.root) / 2;
const DISTANCE = PITCH_BIG + PITCH_SMALL;
const SMALL_PHASE = Math.PI + Math.PI / SMALL.teeth;

export function GearPair({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const bigPeriod = 70;
  const smallPeriod = (bigPeriod * SMALL.teeth) / BIG.teeth;

  return (
    <svg
      viewBox="-150 -150 420 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <g>
        <path d={gearPath(BIG.teeth, BIG.outer, BIG.root)} />
        <circle r="92" strokeOpacity="0.5" />
        <circle r="24" />
        <circle r="8" />
        <path d={spokes(6, 24, 92)} strokeOpacity="0.5" />
        {!reduce && (
          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur={`${bigPeriod}s`} repeatCount="indefinite" />
        )}
      </g>
      <g transform={`translate(${DISTANCE.toFixed(2)} 0)`}>
        <g>
          <path d={gearPath(SMALL.teeth, SMALL.outer, SMALL.root, SMALL_PHASE)} />
          <circle r="38" strokeOpacity="0.5" />
          <circle r="12" />
          <circle r="4" />
          <path d={spokes(5, 12, 38)} strokeOpacity="0.5" />
          {!reduce && (
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur={`${smallPeriod}s`} repeatCount="indefinite" />
          )}
        </g>
      </g>
    </svg>
  );
}

// ---------- Вибросигнал ----------

const W = 600;
const signalY = (x: number) => {
  const t = (x / W) * 2 * Math.PI;
  let v = 60 + 12 * Math.sin(t * 6) + 6 * Math.sin(t * 17 + 1) + 3 * Math.sin(t * 53);
  const m = (((x - 150) % 300) + 300) % 300;
  const dist = Math.min(m, 300 - m);
  v += 34 * Math.exp(-(dist * dist) / 50) * Math.sin(x * 0.9);
  return v;
};
const SIGNAL_POINTS = Array.from({ length: W / 2 + 1 }, (_, i) => `${i * 2},${signalY(i * 2).toFixed(1)}`).join(" ");
const BARS = Array.from({ length: 28 }, (_, i) =>
  i === 7 ? 64 : i === 14 ? 44 : 8 + Math.round(14 * Math.abs(Math.sin(i * 2.3)))
);

// Иллюстрация вибродиагностики: бегущий сигнал с импульсами и спектр с выделенным пиком.
export function VibrationPanel({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`rounded-2xl bg-gray-900 border border-white/10 p-6 text-blue-200 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-white">Вибросигнал</p>
        <span className="text-xs text-blue-300/80 bg-white/5 rounded-full px-3 py-1">иллюстрация</span>
      </div>

      <svg viewBox={`0 0 ${W} 120`} className="w-full h-auto" aria-hidden="true">
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" x2={W} y1={y} y2={y} stroke="white" strokeOpacity="0.08" />
        ))}
        <g fill="none" stroke="#7dd3fc" strokeWidth="1.6" strokeLinejoin="round">
          <g>
            <polyline points={SIGNAL_POINTS} />
            <polyline points={SIGNAL_POINTS} transform={`translate(${W} 0)`} />
            {!reduce && (
              <animateTransform attributeName="transform" type="translate" from="0 0" to={`-${W} 0`} dur="9s" repeatCount="indefinite" />
            )}
          </g>
        </g>
      </svg>

      <p className="text-sm font-medium text-white mt-5 mb-3">Спектр</p>
      <svg viewBox="0 0 280 80" className="w-full h-auto" aria-hidden="true">
        {BARS.map((h, i) => {
          const peak = i === 7 || i === 14;
          return (
            <rect
              key={i}
              x={i * 10 + 1}
              y={80 - h}
              width="7"
              height={h}
              rx="1.5"
              fill={peak ? "#7dd3fc" : "#60a5fa"}
              fillOpacity={peak ? 1 : 0.35}
            >
              {peak && !reduce && (
                <animate attributeName="fill-opacity" values="1;0.55;1" dur="2.4s" repeatCount="indefinite" />
              )}
            </rect>
          );
        })}
      </svg>
    </div>
  );
}

// ---------- Пиктограммы оборудования ----------

export type EquipmentType = "drive" | "gearbox" | "pump" | "conveyor" | "packaging";

export function EquipmentIcon({ type, className = "" }: { type: EquipmentType; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "drive" && (
        <>
          <rect x="8" y="22" width="34" height="22" rx="4" />
          <path d="M42 33h12M54 29v8" />
          <path d="M16 22v-6h18v6" />
          <path d="M16 28v10M22 28v10M28 28v10M34 28v10" />
          <path d="M12 44v6M38 44v6M8 50h34" />
        </>
      )}
      {type === "gearbox" && (
        <>
          <g transform="translate(23 38)">
            <path d={gearPath(10, 15, 11.5)} />
            <circle r="4" />
          </g>
          <g transform="translate(45 22)">
            <path d={gearPath(8, 10.5, 7.5, Math.PI / 8)} />
            <circle r="3" />
          </g>
        </>
      )}
      {type === "pump" && (
        <>
          <circle cx="32" cy="36" r="16" />
          <circle cx="32" cy="36" r="4" />
          {[0, 90, 180, 270].map((r) => (
            <path key={r} d="M32 36q6-2 8-9" transform={`rotate(${r} 32 36)`} />
          ))}
          <path d="M8 36h8M8 30v12" />
          <path d="M32 20V10M26 10h12" />
          <path d="M20 54h24M32 52v2" />
        </>
      )}
      {type === "conveyor" && (
        <>
          <rect x="6" y="38" width="52" height="12" rx="6" />
          <circle cx="12" cy="44" r="2.5" />
          <circle cx="52" cy="44" r="2.5" />
          <circle cx="24" cy="44" r="1.5" />
          <circle cx="32" cy="44" r="1.5" />
          <circle cx="40" cy="44" r="1.5" />
          <path d="M14 50v6M50 50v6" />
          <rect x="14" y="26" width="12" height="12" rx="1.5" />
          <rect x="32" y="30" width="10" height="8" rx="1.5" />
        </>
      )}
      {type === "packaging" && (
        <>
          <rect x="6" y="44" width="52" height="8" rx="4" />
          <rect x="10" y="32" width="12" height="12" rx="1.5" />
          <rect x="42" y="34" width="10" height="10" rx="1.5" />
          <path d="M28 8h14v10H28zM35 18v8M26 26h18" />
          <path d="M16 52v4M48 52v4" />
        </>
      )}
    </svg>
  );
}
