"use client";

import { useState } from "react";
import { MessageSquare, Phone, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BitrixWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3 mb-3"
          >
            {/* Chat Button */}
            <motion.a
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.1 }}
              href="https://wa.me/77089537178" target="_blank" rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all"
              title="Написать в WhatsApp"
            >
              <MessageSquare className="w-6 h-6 text-white" />
              <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Написать в WhatsApp
              </span>
            </motion.a>

            {/* Callback Button */}
            <motion.a
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.15 }}
              href="tel:+77089537178"
              className="group relative w-14 h-14 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all"
              title="Позвонить"
            >
              <Phone className="w-6 h-6 text-white" />
              <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Позвонить
              </span>
            </motion.a>

            {/* Contact Form Button */}
            <motion.a
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.2 }}
              href="/engineering/contact"
              className="group relative w-14 h-14 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all"
              title="Оставить заявку"
            >
              <FileText className="w-6 h-6 text-white" />
              <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Оставить заявку
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-blue-900 hover:bg-blue-800 rounded-full flex items-center justify-center shadow-xl transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-900"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="w-7 h-7 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}