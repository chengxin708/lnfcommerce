import type { Metadata } from "next";
import { ProductPage, productMetadata, staticParams } from "@/components/ProductPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return staticParams("app");
}

export async function generateMetadata({ params }: PageProps<"/apps/[slug]">): Promise<Metadata> {
  return productMetadata("app", (await params).slug);
}

export default async function AppPage({ params }: PageProps<"/apps/[slug]">) {
  return <ProductPage kind="app" slug={(await params).slug} />;
}
