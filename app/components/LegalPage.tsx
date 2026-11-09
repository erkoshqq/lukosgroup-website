import GroupHeader from "./GroupHeader";
import DivisionPageHero from "./DivisionPageHero";
import Footer from "./Footer";

// Каркас юридических страниц: шапка группы, синий hero, текст документа, футер.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <GroupHeader />
      <DivisionPageHero eyebrow="ДОКУМЕНТЫ" title={title} description={`Редакция от ${updated}`} />

      <section className="w-full bg-white py-20 md:py-28 px-6">
        <div
          className="max-w-[900px] mx-auto
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mt-12 [&_h2]:mb-4
            [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-gray-600 [&_ul]:leading-relaxed [&_ul]:mb-4
            [&_a]:text-blue-700 [&_a]:underline [&_a:hover]:text-blue-900"
        >
          {children}
        </div>
      </section>

      <Footer />
    </>
  );
}
