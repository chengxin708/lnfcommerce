import { ProductList } from "@/components/ProductList";
import { Folio, btnPrimary, btnSecondary, cardCls, monoLabel } from "@/components/ui";
import { site } from "@/lib/site";

// Re-render daily so the "New" badge on product cards expires on its own.
export const revalidate = 86400;

// Home page in the lnfitservices.com style: type-led hero, numbered mono folios, card grids.
export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-heading">
        <div className="relative mx-auto flex min-h-[62vh] max-w-5xl flex-col justify-center px-5 py-20 sm:px-8">
          {/* Quiet dot-grid motif with one iris dot, same as the LNF IT hero */}
          <div aria-hidden="true" className="pointer-events-none absolute right-8 top-16 hidden h-[220px] w-[220px] lg:block">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: "radial-gradient(var(--color-line-strong) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
                WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 72%)",
                maskImage: "radial-gradient(circle at center, black 35%, transparent 72%)",
              }}
            />
            <span className="absolute left-[96px] top-[80px] h-1.5 w-1.5 rounded-full bg-accent" />
          </div>

          <p className={`${monoLabel} text-ink-3`}>Publisher · Apps · Games</p>
          <h1
            id="hero-heading"
            className="mt-3 max-w-3xl text-[clamp(2.4rem,6.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-ink"
          >
            We publish apps and games people{" "}
            <span className="relative inline-block">
              keep
              <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-accent" />
            </span>{" "}
            coming back to.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
            {site.legalName} builds and publishes mobile apps and casual games on the App Store, Google Play
            and the web.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#games" className={btnPrimary}>
              See our games
            </a>
            <a href={`mailto:${site.supportEmail}`} className={btnSecondary}>
              Contact us
            </a>
          </div>
          <p className={`${monoLabel} mt-8 text-ink-3`}>App Store · Google Play · Web</p>
        </div>
      </section>

      <section id="games" aria-labelledby="games-heading" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Folio left="01 — Games" right="Play" />
          <h2 id="games-heading" className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Games.
          </h2>
          <p className="mt-2 text-ink-2">Casual games for phones and the browser.</p>
          <div className="mt-8">
            <ProductList kind="game" />
          </div>
        </div>
      </section>

      <section id="apps" aria-labelledby="apps-heading" className="scroll-mt-20 border-y border-line bg-panel">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Folio left="02 — Apps" right="Tools" />
          <h2 id="apps-heading" className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Apps.
          </h2>
          <p className="mt-2 text-ink-2">Practical tools for small businesses.</p>
          <div className="mt-8">
            <ProductList kind="app" />
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <Folio left="03 — Contact" right="Support" />
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-ink">
                Questions about an app or game?
              </h2>
              <p className="mt-3 text-ink-2">We reply within 1 business day.</p>
            </div>
            <div className={`${cardCls} p-6`}>
              <p className={`${monoLabel} text-ink-3`}>Email</p>
              <a href={`mailto:${site.supportEmail}`} className="mt-1 block text-lg font-medium">
                {site.supportEmail}
              </a>
              <p className={`${monoLabel} mt-5 text-ink-3`}>Address</p>
              <p className="mt-1 text-ink-2">{site.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
