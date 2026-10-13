import type { Metadata } from "next";
import { ProductList } from "@/components/ProductList";

export const metadata: Metadata = {
  title: "Apps",
};

export default function AppsPage() {
  return (
    <div className="wrap prose py-12">
      <h1>Apps</h1>
      <ProductList kind="app" />
    </div>
  );
}
