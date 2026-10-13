import Link from "next/link";
import { products, productPath, type Product } from "@/lib/products";

export function ProductList({ kind }: { kind: Product["kind"] }) {
  const items = products.filter((p) => p.kind === kind);
  if (items.length === 0) return <p className="meta">Coming soon.</p>;
  return (
    <ul>
      {items.map((p) => (
        <li key={p.slug}>
          <Link href={productPath(p)}>{p.name}</Link>
          {" — "}
          {p.tagline}
          {p.status === "coming-soon" && <span className="text-[var(--muted)]"> (coming soon)</span>}
        </li>
      ))}
    </ul>
  );
}
