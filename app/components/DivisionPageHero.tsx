"use client";

import { motion } from "framer-motion";

// Hero внутренних страниц направления — тот же стиль, что у страниц Engineering:
// синий градиент, сетка, подпись капсом, крупный заголовок.
export default function DivisionPageHero({
  eyebrow,
  title,
  description,
  children,
  tall = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <section
      className={`relative w-full bg-linear-to-br from-blue-900 via-blue-800 to-gray-900 flex items-center ${
        tall ? "min-h-[80vh]" : "min-h-[50vh]"
      }`}
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 pt-40 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-6">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-[1100px]">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
