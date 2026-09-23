import Header from "../components/Header";
import Footer from "../components/Footer";
import CTAConsultation from "../components/CTAConsultation";
import BitrixWidget from "../components/BitrixWidget";

export default function EngineeringLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lukos Engineering',
    parentOrganization: {
      '@type': 'Organization',
      name: 'LUKOS GROUP',
      url: 'https://lukosgroup.kz',
    },
    description: 'Техническое обследование и дефектоскопия',
    url: 'https://lukosgroup.kz/engineering',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-708-953-71-78',
      contactType: 'customer service',
      availableLanguage: ['Russian', 'Kazakh'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'KZ',
      addressLocality: 'Караганда',
      streetAddress: 'район им. Казыбек би ул. Орлова, стр. 113/2',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BitrixWidget />
      <Header brand="engineering" />
      {children}
      <CTAConsultation />
      <Footer brand="engineering" />
    </>
  );
}
