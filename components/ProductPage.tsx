import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, type Product } from "@/lib/products";
import { site } from "@/lib/site";

const STORE_LABELS = {
  appStore: "Download on the App Store",
  googlePlay: "Get it on Google Play",
  tiktok: "Play on TikTok",
} as const;

export function find(kind: Product["kind"], slug: string) {
  return products.find((p) => p.kind === kind && p.slug === slug);
}

export function staticParams(kind: Product["kind"]) {
  return products.filter((p) => p.kind === kind).map((p) => ({ slug: p.slug }));
}

export function productMetadata(kind: Product["kind"], slug: string): Metadata {
  const product = find(kind, slug);
  return product ? { title: product.name, description: product.tagline } : {};
}

export function ProductPage({ kind, slug }: { kind: Product["kind"]; slug: string }) {
  const product = find(kind, slug);
  if (!product) notFound();

  const storeLinks = (Object.keys(STORE_LABELS) as (keyof typeof STORE_LABELS)[]).filter(
    (key) => product.links[key],
  );

  return (
    <article className="wrap prose py-12">
      <h1>{product.name}</h1>
      <p className="meta">
        {kind === "game" ? "Game" : "App"} by {site.legalName}
      </p>
      <p>{product.description}</p>

      {storeLinks.length > 0 ? (
        <ul>
          {storeLinks.map((key) => (
            <li key={key}>
              <a href={product.links[key]} target="_blank" rel="noopener noreferrer">
                {STORE_LABELS[key]}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="meta">Coming soon.</p>
      )}

      <h2>Privacy</h2>
      <p>
        {product.name} follows the <Link href="/privacy">{site.legalName} Privacy Policy</Link>.
      </p>
      {product.extraData && product.extraData.length > 0 && (
        <>
          <p>In addition, {product.name}:</p>
          <ul>
            {product.extraData.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </>
      )}

      <h2>Support</h2>
      <p>
        Email <span className="select-all">{site.supportEmail}</span> and mention {product.name}.
        To delete your account or data, see <Link href="/delete-account">Delete your account</Link>.
      </p>
    </article>
  );
}
