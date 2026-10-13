import type { Metadata } from "next";
import { ProductList } from "@/components/ProductList";

export const metadata: Metadata = {
  title: "Games",
};

export default function GamesPage() {
  return (
    <div className="wrap prose py-12">
      <h1>Games</h1>
      <ProductList kind="game" />
    </div>
  );
}
