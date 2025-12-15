"use client";

import { useState } from "react";
import { MessageSquare, Phone, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BitrixWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChat = () => {
    // Здесь будет код открытия чата Bitrix24
    console.log("Opening Bitrix chat");
    // window.Bitrix24?.LiveChat?.open();
  };

  const handleCallback = () => {
    // Открытие формы обратного звонка
    console.log("Opening callback form");
    // window.Bitrix24?.CallBack?.open();
  };

  const handleContactForm = () => {
    // Открытие формы контактов
    console.log("Opening contact form");
    // window.Bitrix24?.Form?.open();
  };

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
            <motion.button
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.1 }}
              onClick={handleOpenChat}
              className="group relative w-14 h-14 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all"
              title="Открыть чат"
            >
              <MessageSquare className="w-6 h-6 text-white" />
              <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Онлайн чат
              </span>
            </motion.button>

            {/* Callback Button */}
            <motion.button
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.15 }}
              onClick={handleCallback}
              className="group relative w-14 h-14 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all"
              title="Обратный звонок"
            >
              <Phone className="w-6 h-6 text-white" />
              <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Обратный звонок
              </span>
            </motion.button>

            {/* Contact Form Button */}
            <motion.button
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              exit={{ x: 100 }}
              transition={{ delay: 0.2 }}
              onClick={handleContactForm}
              className="group relative w-14 h-14 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transition-all"
              title="Контактная форма"
            >
              <FileText className="w-6 h-6 text-white" />
              <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Связаться с нами
              </span>
            </motion.button>
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