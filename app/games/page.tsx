import type { Metadata } from "next";
import { ProductList } from "@/components/ProductList";

// Re-render daily so the "New" badge on product cards expires on its own.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Games",
};

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Games</h1>
      <div className="mt-8" />
      <ProductList kind="game" />
    </div>
  );
}
