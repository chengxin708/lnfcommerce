import type { Metadata } from "next";
import Link from "next/link";
import { Figtree } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.brand,
    template: `%s · ${site.brand}`,
  },
  description: `${site.legalName} publishes mobile apps and games on the App Store, Google Play and other platforms.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-[var(--line)]">
          <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4">
            <Link href="/" className="text-[15px] font-bold text-[var(--ink)] no-underline">
              {site.brand}
            </Link>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
              <Link href="/apps" className="text-[var(--ink)] no-underline hover:text-[var(--cobalt)]">
                Apps
              </Link>
              <Link href="/games" className="text-[var(--ink)] no-underline hover:text-[var(--cobalt)]">
                Games
              </Link>
              <Link href="/support" className="text-[var(--ink)] no-underline hover:text-[var(--cobalt)]">
                Support
              </Link>
              <Link href="/privacy" className="text-[var(--ink)] no-underline hover:text-[var(--cobalt)]">
                Privacy
              </Link>
              <Link href="/terms" className="text-[var(--ink)] no-underline hover:text-[var(--cobalt)]">
                Terms
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-[var(--line)] text-sm text-[var(--muted)]">
          <div className="wrap flex flex-col gap-2 py-8 sm:flex-row sm:justify-between">
            <div>
              <p>© 2026 {site.legalName}</p>
              <p>{site.address}</p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/support">Support</Link>
              <Link href="/delete-account">Delete account</Link>
              <span className="select-all">{site.supportEmail}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
