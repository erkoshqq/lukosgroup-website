import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TechnologiesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lukos Technologies',
    parentOrganization: {
      '@type': 'Organization',
      name: 'LUKOS GROUP',
      url: 'https://lukosgroup.kz',
    },
    description: 'Поставка серверного и сетевого оборудования',
    url: 'https://lukosgroup.kz/technologies',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header brand="technologies" />
      {children}
      <Footer brand="technologies" />
    </>
  );
}
