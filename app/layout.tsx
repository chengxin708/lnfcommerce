import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { btnPrimary, navLink } from "@/components/ui";
import { site } from "@/lib/site";
import "./globals.css";

// Same type pairing as lnfitservices.com.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.brand,
    template: `%s · ${site.brand}`,
  },
  description: `${site.legalName} publishes mobile apps and games on the App Store, Google Play and other platforms.`,
  verification: {
    // Meta Business portfolio "LNF Commerce Inc" domain verification.
    other: { "facebook-domain-verification": "mrzuflhw60si9m3fx7se6dp6lj2zi1" },
  },
};

const NAV = [
  { href: "/games", label: "Games" },
  { href: "/apps", label: "Apps" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas">
        <header className="sticky top-0 z-30 border-b border-line bg-surface/80 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
            {/* The logo is the full "LNF / COMMERCE" lockup (same circuit-trace mark as LNF IT Services) */}
            <Link href="/" aria-label={site.brand} className="flex items-center no-underline">
              <Image src="/logo.png" alt={site.brand} width={1000} height={452} priority className="h-8 w-auto sm:h-9" />
            </Link>
            <nav className="flex items-center gap-4">
              <div className="hidden items-center gap-4 sm:flex">
                {NAV.map((n) => (
                  <Link key={n.href} href={n.href} className={navLink}>
                    {n.label}
                  </Link>
                ))}
                <span className="h-4 w-px bg-line-strong" aria-hidden="true" />
              </div>
              <a href={`mailto:${site.supportEmail}`} className={btnPrimary}>
                Contact
              </a>
            </nav>
          </div>
          {/* Small screens: links on their own row */}
          <nav className="mx-auto flex max-w-5xl gap-4 overflow-x-auto px-5 pb-2 sm:hidden">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={navLink}>
                {n.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-line bg-panel">
          <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Image src="/logo.png" alt={site.brand} width={1000} height={452} className="h-7 w-auto" />
                <a href={`mailto:${site.supportEmail}`} className="text-sm">
                  {site.supportEmail}
                </a>
              </div>
              <nav className="flex flex-wrap items-center gap-4">
                <Link href="/privacy" className={navLink}>
                  Privacy Policy
                </Link>
                <Link href="/terms" className={navLink}>
                  Terms of Service
                </Link>
                <Link href="/support" className={navLink}>
                  Support
                </Link>
                <Link href="/copyright" className={navLink}>
                  Copyright
                </Link>
                <Link href="/delete-account" className={navLink}>
                  Delete account
                </Link>
              </nav>
            </div>
            <p className="mt-8 font-mono text-[11px] text-ink-3">
              © 2026 {site.legalName} · {site.address}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
