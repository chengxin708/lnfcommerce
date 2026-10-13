import type { Metadata } from "next";
import { ProductPage, productMetadata, staticParams } from "@/components/ProductPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return staticParams("game");
}

export async function generateMetadata({ params }: PageProps<"/games/[slug]">): Promise<Metadata> {
  return productMetadata("game", (await params).slug);
}

export default async function GamePage({ params }: PageProps<"/games/[slug]">) {
  return <ProductPage kind="game" slug={(await params).slug} />;
}
