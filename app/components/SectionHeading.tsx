// Заголовок секции в стиле Engineering: подпись капсом + крупный заголовок + пояснение.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      <p className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">{title}</h2>
      {description && (
        <p className={`text-gray-600 text-lg max-w-3xl ${center ? "mx-auto" : ""}`}>{description}</p>
      )}
    </div>
  );
}
