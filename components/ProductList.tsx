import Image from "next/image";
import Link from "next/link";
import { formatDate, products, productPath, type Product } from "@/lib/products";
import { cardCls, monoLabel } from "@/components/ui";

const STORE_LABEL: Record<keyof Product["links"], string> = {
  appStore: "App Store",
  googlePlay: "Google Play",
  tiktok: "TikTok",
};

/** Card grid of one kind of product (same card style as the work cards on lnfitservices.com). */
export function ProductList({ kind }: { kind: Product["kind"] }) {
  const items = products.filter((p) => p.kind === kind);
  if (items.length === 0) return <p className="text-ink-2">Coming soon.</p>;
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => {
        const stores = (Object.keys(p.links) as (keyof Product["links"])[]).filter((k) => p.links[k]);
        return (
          <Link
            key={p.slug}
            href={productPath(p)}
            className={`${cardCls} group flex flex-col p-5 no-underline transition-shadow hover:shadow-raise`}
          >
            <div className="flex items-start justify-between gap-3">
              {p.icon ? (
                <Image src={p.icon} alt="" width={48} height={48} className="h-12 w-12 rounded-xl border border-line" />
              ) : (
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-lg font-semibold text-ink">
                  {p.name[0]}
                </span>
              )}
              <span className={`${monoLabel} ${p.status === "live" ? "text-accent" : "text-ink-3"}`}>
                {p.status === "live" ? "Live" : "Coming soon"}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink group-hover:text-accent">{p.name}</h3>
            <p className={`${monoLabel} mt-1 text-ink-3`}>
              {p.kind === "app" ? "App" : "Game"} · Added {formatDate(p.added)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">{p.tagline}</p>
            {stores.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {stores.map((k) => (
                  <span key={k} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-ink-2">
                    {STORE_LABEL[k]}
                  </span>
                ))}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
