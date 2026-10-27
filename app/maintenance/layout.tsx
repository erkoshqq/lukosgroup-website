import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lukos Maintenance',
    parentOrganization: {
      '@type': 'Organization',
      name: 'LUKOS GROUP',
      url: 'https://lukosgroup.kz',
    },
    description: 'Техническое обслуживание производственных линий и оборудования',
    url: 'https://lukosgroup.kz/maintenance',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header brand="maintenance" />
      {children}
      <Footer brand="maintenance" />
    </>
  );
}
