"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Форма заявки в стиле Engineering (светлая). Лид уходит в Bitrix24 через /api/bitrix
// с пометкой направления.
export interface ExtraField {
  name: string;
  label: string;
  placeholder?: string;
  // Если заданы options — поле отображается как выпадающий список
  options?: string[];
}

export default function ContactForm({
  division,
  placeholder = "Опишите задачу...",
  submitLabel = "Отправить заявку",
  extraFields = [],
}: {
  division: string;
  placeholder?: string;
  submitLabel?: string;
  // Дополнительные поля (категория, количество и т.п.). Их значения добавляются в текст заявки.
  extraFields?: ExtraField[];
}) {
  const [form, setForm] = useState<Record<string, string>>({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Доп. поля уходят в Bitrix внутри комментария к заявке
    const extraLines = extraFields
      .filter((f) => form[f.name])
      .map((f) => `${f.label}: ${form[f.name]}`);
    const message = [...extraLines, form.message ? `\n${form.message}` : ""].join("\n").trim();

    try {
      const res = await fetch("/api/bitrix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, message, division }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 bg-white";
  const label = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={label}>Ваше имя *</label>
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Серик Сериков" className={input} />
      </div>
      <div>
        <label className={label}>Телефон *</label>
        <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+7 (700) 000-00-00" className={input} />
      </div>
      <div>
        <label className={label}>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@gmail.com" className={input} />
      </div>
      {extraFields.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {extraFields.map((f) => (
            <div key={f.name}>
              <label className={label}>{f.label}</label>
              {f.options ? (
                <select name={f.name} value={form[f.name] ?? ""} onChange={handleChange} className={input}>
                  <option value="">Не выбрано</option>
                  {f.options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input name={f.name} value={form[f.name] ?? ""} onChange={handleChange} placeholder={f.placeholder} className={input} />
              )}
            </div>
          ))}
        </div>
      )}
      <div>
        <label className={label}>Сообщение</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder={placeholder} className={`${input} resize-none`} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-60"
      >
        {status === "sending" ? "Отправляем..." : submitLabel}
        <ArrowRight className="w-5 h-5" />
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 text-center">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">Не удалось отправить заявку. Попробуйте позже или позвоните нам.</p>
      )}
      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
}
