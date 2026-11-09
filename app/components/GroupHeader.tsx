import Link from "next/link";

// Простая шапка группы для служебных страниц (политика, условия, 404),
// где нет навигации конкретного направления.
export default function GroupHeader() {
  return (
    <header className="fixed top-0 w-full z-50 text-white bg-black/40 backdrop-blur-lg">
      <div className="max-w-[1600px] mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-3xl">
          <span className="font-light">lukos</span>
          <span className="font-bold">group</span>
        </Link>
        <Link href="/" className="text-sm text-gray-200 hover:text-white transition-colors">
          На главную
        </Link>
      </div>
    </header>
  );
}
