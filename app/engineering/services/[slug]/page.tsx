import { notFound } from "next/navigation";
import { services } from "../data";
import ServiceDetailPage from "./ServiceDetailPage";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `https://lukosgroup.kz/services/${service.id}`,
      siteName: "LUKOS GROUP",
      locale: "ru_KZ",
      type: "website",
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();
  return <ServiceDetailPage slug={slug} />;
}