import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/entities/service/model/data";
import { ServiceDetailPage } from "@/views/service-detail/ui/ServiceDetailPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Услуга не найдена" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
