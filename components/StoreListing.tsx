import Image from "next/image";
import Link from "next/link";
import type { Listing, Product } from "@/lib/products";
import { site } from "@/lib/site";
import { cardCls, monoLabel } from "@/components/ui";

// App Store–style product page: icon header with the store buttons, a facts strip,
// a row of screenshots, the description in sections, and an information table.
// Used for products that set `listing` in lib/products.ts; the rest keep the plain page.

const STORES = [
  { key: "appStore", small: "Download on the", big: "App Store" },
  { key: "googlePlay", small: "Get it on", big: "Google Play" },
] as const;

function StoreButtons({ product }: { product: Product }) {
  const stores = STORES.filter((s) => product.links[s.key]);
  if (stores.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {stores.map((s) => (
        <a
          key={s.key}
          href={product.links[s.key]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-[9.5rem] flex-1 flex-col rounded-xl sm:flex-none sm:min-w-[10.5rem] bg-ink px-5 py-2 leading-tight text-on-ink no-underline shadow-card transition-colors hover:bg-ink/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <span className="text-[11px] text-on-ink/75">{s.small}</span>
          <span className="text-lg font-semibold tracking-tight">{s.big}</span>
        </a>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="text-xl font-semibold tracking-tight text-ink">{children}</h2>;
}

export function StoreListing({ product }: { product: Product & { listing: Listing } }) {
  const { listing } = product;
  const shot = listing.screenshotSize;
  const structured = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS, Android",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <article className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />

      {/* Header: icon, name, subtitle, developer, store buttons */}
      <header className="flex items-start gap-4 sm:items-center sm:gap-8">
        {product.icon && (
          <Image
            src={product.icon}
            alt=""
            width={512}
            height={512}
            priority
            className="h-24 w-24 shrink-0 rounded-[22.5%] border border-line shadow-raise sm:h-44 sm:w-44"
          />
        )}
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">{product.name}</h1>
          <p className="mt-1 text-[15px] leading-snug text-ink-2 sm:mt-1.5 sm:text-lg">{listing.subtitle}</p>
          <p className="mt-1 text-sm">
            <Link href="/">{site.legalName}</Link>
          </p>
          <p className="mt-1 hidden text-sm text-ink-3 sm:block">{listing.price}</p>
          <div className="mt-5 hidden sm:block">
            <StoreButtons product={product} />
          </div>
        </div>
      </header>
      {/* On phones the buttons sit under the header, full width */}
      <div className="mt-5 sm:hidden">
        <StoreButtons product={product} />
        <p className="mt-2 text-sm text-ink-3">{listing.price}</p>
      </div>

      {/* Facts strip */}
      <dl className="mt-10 flex overflow-x-auto border-y border-line py-4 [scrollbar-width:none]">
        {listing.facts.map((f, i) => (
          <div
            key={f.label}
            className={`flex min-w-[7.5rem] flex-1 flex-col items-center px-4 text-center ${i > 0 ? "border-l border-line" : ""}`}
          >
            <dt className={`${monoLabel} text-ink-3`}>{f.label}</dt>
            <dd className="mt-1.5 text-xl font-semibold text-ink-2">{f.value}</dd>
            {f.note && <dd className="mt-0.5 text-xs text-ink-3">{f.note}</dd>}
          </div>
        ))}
      </dl>

      {/* Screenshots: one row, swipe or scroll sideways */}
      <section aria-label="Screenshots" className="mt-10">
        <SectionTitle>Preview</SectionTitle>
        <div className="-mx-5 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
          {listing.screenshots.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={shot.width}
              height={shot.height}
              unoptimized
              loading={i < 3 ? "eager" : "lazy"}
              className="h-[26rem] w-auto shrink-0 snap-start rounded-3xl border border-line shadow-card sm:h-[32rem]"
            />
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="mt-10 border-t border-line pt-10">
        <div className="max-w-3xl space-y-4 text-[17px] leading-relaxed text-ink">
          {listing.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2">
          {listing.sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="text-base font-semibold text-ink">{sec.title}</h3>
              <ul className="mt-2 space-y-2 text-[15px] leading-relaxed text-ink-2">
                {sec.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="mt-12 border-t border-line pt-10">
        <SectionTitle>App Privacy</SectionTitle>
        <div className={`${cardCls} mt-4 max-w-3xl p-5 text-[15px] leading-relaxed text-ink-2`}>
          <p>
            {product.name} follows the <Link href="/privacy">{site.legalName} Privacy Policy</Link>. You do not need an
            account to use it.
          </p>
          {product.extraData && product.extraData.length > 0 && (
            <ul className="mt-3 space-y-2">
              {product.extraData.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-3" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Information */}
      <section className="mt-12 border-t border-line pt-10">
        <SectionTitle>Information</SectionTitle>
        <dl className="mt-4 grid max-w-4xl gap-x-10 sm:grid-cols-2">
          {listing.information.map((row) => (
            <div key={row.label} className="flex flex-col border-b border-line py-3">
              <dt className="text-sm text-ink-3">{row.label}</dt>
              <dd className="mt-0.5 text-[15px] text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Support */}
      <section className="mt-12 border-t border-line pt-10">
        <SectionTitle>Support</SectionTitle>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-2">
          Questions about {product.name}? Email{" "}
          <span className="select-all text-ink">{product.supportEmail ?? site.supportEmail}</span>. See also{" "}
          <Link href="/support">Support</Link>, <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/delete-account">Delete your data</Link>.
        </p>
        <div className="mt-6">
          <StoreButtons product={product} />
        </div>
      </section>
    </article>
  );
}
