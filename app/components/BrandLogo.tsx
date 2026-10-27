// Логотип бренда в рамке фиксированного размера.
// Логотип вписывается в рамку с сохранением пропорций (object-contain), поэтому
// широкие и узкие логотипы занимают одинаковое по размеру место.
// Если файла логотипа нет — показывается название текстом.
export default function BrandLogo({
  name,
  logo,
  className = "h-16 w-[200px]",
  align = "left",
}: {
  name: string;
  logo?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`flex items-center ${align === "center" ? "justify-center" : ""} ${className}`}>
      {logo ? (
        <img
          src={logo}
          alt={name}
          className={`w-full h-full object-contain ${align === "center" ? "object-center" : "object-left"}`}
        />
      ) : (
        <span className="text-2xl font-bold text-blue-900 leading-tight">{name}</span>
      )}
    </div>
  );
}
