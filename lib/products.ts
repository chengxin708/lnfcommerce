// Catalog of everything LNF COMMERCE INC publishes. Add one entry per app or game.
// Apps get a page at /apps/<slug>, games at /games/<slug> — use that URL as the
// website / marketing URL in App Store Connect, Play Console and TikTok.
export type Product = {
  slug: string; // URL segment, lowercase-with-dashes; keep it stable once live
  name: string; // must match the store listing title
  kind: "app" | "game";
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  links: {
    appStore?: string; // https://apps.apple.com/app/id<number>
    googlePlay?: string; // https://play.google.com/store/apps/details?id=<package>
    tiktok?: string;
  };
  packageName?: string; // Android application ID / iOS bundle ID, e.g. com.lnfcommerce.example
  // Data this product collects beyond the company Privacy Policy (shown on its page).
  extraData?: string[];
};

export const products: Product[] = [];

export function productPath(p: Pick<Product, "kind" | "slug">) {
  return `/${p.kind === "game" ? "games" : "apps"}/${p.slug}`;
}
