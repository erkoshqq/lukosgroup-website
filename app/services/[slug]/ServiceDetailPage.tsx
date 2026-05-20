"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { Service, services } from "../data";

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((s) => s.id === slug);
  if (!service) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDesc,
    "provider": {
      "@type": "Organization",
      "name": "LUKOS GROUP",
      "url": "https://lukosgroup.kz",
      "telephone": "+77089537178",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Караганда",
        "addressCountry": "KZ"
      }
    },
    "areaServed": "Kazakhstan",
    "url": `https://lukosgroup.kz/services/${service.id}`
  };
  
  const Icon = service.icon;



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] w-full bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          {/* Хлебные крошки */}
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-6"
          >
            <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-10 h-10 text-blue-300" />
            </div>
            <div>
              <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-3">Услуги</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-xl text-blue-100 max-w-3xl">{service.shortDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Описание */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-xl leading-relaxed">{service.fullDesc}</p>
          </motion.div>

          {/* Когда необходимо */}
          {service.cases.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-blue-900" />
                В каких случаях необходимо
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {service.cases.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Этапы */}
          {service.stages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Этапы работы</h2>
              <div className="space-y-6">
                {service.stages.map((stage, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-blue-900">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-900 rounded-full" />
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">{stage.title}</h3>
                    <ul className="space-y-2">
                      {stage.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-600">
                          <span className="text-blue-900 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Вывод */}
          {service.conclusion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-900"
            >
              <p className="text-gray-700 font-medium leading-relaxed text-lg">{service.conclusion}</p>
            </motion.div>
          )}

          {/* Назад + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft size={18} />
              Все услуги
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}