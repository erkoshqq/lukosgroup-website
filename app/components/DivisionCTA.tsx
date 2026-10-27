"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import { contactInfo } from "./contactInfo";

// Блок "Оставьте заявку" в конце страниц направления — по структуре как CTAConsultation у Engineering.
export default function DivisionCTA({
  division,
  eyebrow,
  title,
  text,
  benefits,
  placeholder,
  submitLabel,
}: {
  division: string;
  eyebrow: string;
  title: string;
  text: string;
  benefits: string[];
  placeholder?: string;
  submitLabel?: string;
}) {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-gray-900">
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

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">{text}</p>

            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-300" />
                  </div>
                  <p className="text-white">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/20 flex flex-wrap gap-6">
              {contactInfo.phones.map((p) => (
                <a key={p.href} href={p.href} className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>{p.label}</span>
                </a>
              ))}
              <a href={contactInfo.email.href} className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email.label}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Оставьте заявку</h3>
              <ContactForm division={division} placeholder={placeholder} submitLabel={submitLabel} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
