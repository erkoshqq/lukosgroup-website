"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    
    setTimeout(() => {
      alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-300 text-sm tracking-[0.2em] uppercase mb-6">
              СВЯЖИТЕСЬ С НАМИ
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Контакты
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Готовы ответить на все ваши вопросы и подобрать оптимальное решение для вашего объекта
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                Наши контакты
              </h2>

              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                    <a href="tel:+77001234567" className="text-gray-600 hover:text-blue-900 transition-colors block">
                      +7 (708) 258-66-88
                    </a>
                    <a href="tel:+77007654321" className="text-gray-600 hover:text-blue-900 transition-colors block">
                      +7 (776) 357-05-72
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@lukosgroup.kz" className="text-gray-600 hover:text-blue-900 transition-colors">
                      lukosgroupkz@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
                    <p className="text-gray-600">
                      Республика Казахстан<br />
                      г. Караганда, район им. Казыбек би ул. Орлова, стр. 113/2
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Режим работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 18:00<br />
                      Сб-Вс: Выходной
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Photo */}
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/office.png" 
                  alt="Офис Lukos Group"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Наш офис</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Отправить сообщение
                </h2>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Серик Сериков"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="+7 (700) 000-00-00"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Тема обращения
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                    >
                      <option value="">Выберите тему</option>
                      <option value="inspection">Техническое обследование</option>
                      <option value="defectoscopy">Дефектоскопия</option>
                      <option value="laboratory">Лабораторные испытания</option>
                      <option value="geodetic">Геодезическая съемка</option>
                      <option value="calculation">Поверочный расчёт</option>
                      <option value="geological">Геологические изыскания</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                        <MessageSquare className="w-5 h-5 text-gray-400" />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Опишите ваш объект или задачу..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Отправка...
                      </>
                    ) : (
                      <>
                        Отправить сообщение
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </div>
              </div>

              {/* Quick Response Info */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-2">Быстрый ответ</h3>
                <p className="text-gray-600 text-sm">
                  Мы отвечаем на все обращения в течение 1 часа в рабочее время
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Как нас найти
            </h2>
            <p className="text-gray-600 text-lg">
              Наш офис находится в центре города, удобная транспортная доступность
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Replace with actual map embed */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d161.02953348072043!2d73.09217531992667!3d49.777178147866884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42434752f899ce23%3A0xecaf807ba69f371c!2z0YPQuy4g0J7RgNC70L7QstCwIDExMy8yLCDQmtCw0YDQsNCz0LDQvdC00LAgMTAwMDAw!5e0!3m2!1sru!2skz!4v1765017770344!5m2!1sru!2skz" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-12 items-center">
              <div>
                <p className="text-4xl font-bold text-blue-900 mb-2">3447</p>
                <p className="text-gray-600">реализованных проектов</p>
              </div>
              <div className="h-16 w-px bg-gray-300"></div>
              <div>
                <p className="text-4xl font-bold text-blue-900 mb-2">7+</p>
                <p className="text-gray-600">лет на рынке</p>
              </div>
              <div className="h-16 w-px bg-gray-300"></div>
              <div>
                <p className="text-4xl font-bold text-blue-900 mb-2">150+</p>
                <p className="text-gray-600">довольных клиентов</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}