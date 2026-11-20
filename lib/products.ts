// Catalog of everything LNF COMMERCE INC publishes. Add one entry per app or game.
// Apps get a page at /apps/<slug>, games at /games/<slug> — use that URL as the
// website / marketing URL in App Store Connect, Play Console and TikTok, unless the
// product has its own website.
export type Product = {
  slug: string; // URL segment, lowercase-with-dashes; keep it stable once live
  name: string; // store listing title, or its brand part (e.g. "BreezeBiz" for "BreezeBiz: Bills & Bookings")
  kind: "app" | "game";
  tagline: string;
  icon?: string; // square icon under /public, shown on the product cards
  added: string; // YYYY-MM-DD the product was first listed on this site
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
  // Set these only when the product has its own website, policies or support address.
  // Its page, and the company Privacy, Terms and Delete-account pages, then point there.
  website?: string;
  privacyUrl?: string;
  termsUrl?: string;
  deleteAccountUrl?: string;
  supportEmail?: string;
};

export const products: Product[] = [
  {
    slug: "breezebiz",
    icon: "/products/breezebiz.png",
    added: "2026-10-13",
    name: "BreezeBiz",
    kind: "app",
    tagline: "Run your shop from your phone.",
    description:
      "BreezeBiz is the app for one-person shops: nail techs, home chefs, resellers, repair pros and other small businesses. Each shop gets its own page at one link, where customers book appointments, order products or the weekly menu, and message the owner. From their phone, owners write up bills and text them to customers, mark them paid by Zelle, Venmo or cash, keep one calendar, and see simple reports for tax time. A built-in shop assistant drafts bookings and bills from a typed or spoken request. In English and Chinese. Free to start, no card needed.",
    status: "live", // web app is live; Play and App Store listings are not public yet
    links: {},
    packageName: "app.breezebiz.provider",
    website: "https://breezebiz.app",
    privacyUrl: "https://breezebiz.app/privacy",
    termsUrl: "https://breezebiz.app/terms",
    deleteAccountUrl: "https://breezebiz.app/delete-account",
    supportEmail: "support@breezebiz.app",
  },
  {
    slug: "qbouncy-kingdom",
    icon: "/products/qbouncy-kingdom.png",
    added: "2026-10-13",
    name: "QBouncy Kingdom",
    kind: "game",
    tagline: "Link jellies and wake up the kingdom.",
    description:
      "QBouncy Kingdom is a link-and-match puzzle game. Draw a line through three or more jellies of the same color, in any of eight directions, to pop them. Long chains turn into special jellies that clear rows, blast areas or change colors. Beat the bosses of the Gray Fog across 100 levels in five worlds. Free to play, no account needed, and it works offline.",
    status: "live",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.lnfcommerce.qkingdom",
    },
    packageName: "com.lnfcommerce.qkingdom",
  },
  {
    slug: "timber-siege",
    icon: "/products/timber-siege.png",
    added: "2026-10-28",
    name: "Timber Siege: Hold Till Dawn",
    kind: "game",
    tagline: "Chop by day, defend your lodge by night.",
    description:
      "Timber Siege is a cozy action-defense game. Gather wood by day, repair your fence and build towers, then hold off waves of boars, wolves, bears, rhinos and rock monkeys until the sun comes up. Pick a hero, upgrade your lodge across ten levels, and play alone or with friends in online co-op. Free to play, no account needed.",
    status: "live",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.lnfcommerce.timbersiege",
    },
    packageName: "com.lnfcommerce.timbersiege",
    extraData: [
      "Anonymous play statistics (game opened, time played, ads watched) sent to our own server. They are not linked to your name or account.",
      "Online co-op: while you play with friends, a room code, your hero choice and the live game state are relayed through our game server.",
      "Optional save code: if you create one, your game progress is stored on our server under that code so you can restore it on another device.",
    ],
  },
  {
    slug: "tables-set",
    icon: "/products/tables-set.png",
    added: "2026-11-20",
    name: "Table's Set",
    kind: "game",
    tagline: "Play Mahjong and Hold'em together—no tiles or chips needed.",
    description:
      "Table's Set turns your phones into a full set of tiles, cards and play-for-fun chips when friends gather around a table. Host a 4-player Mahjong match or a 2-to-9-player Texas Hold'em table, let everyone scan a QR code or enter a 4-digit room code to take their seat in the browser, and optionally place a tablet or TV in the middle as a shared table screen. Includes solo practice with computer players, a built-in hand and tenpai guide, spoken tile calls, optional peer-to-peer voice chat, and an offline scorekeeper for physical Mahjong sets. In English and Chinese. Free to play, with virtual chips that have no cash value.",
    status: "live",
    links: {},
    packageName: "com.lnfcommerce.tablesset",
    website: "https://tablesset.lnfcommerce.com",
    extraData: [
      "Live table play: while you are in a room, your table display name, seat, room code and live hand state are relayed through our game server so everyone at the table stays in sync.",
      "Optional account: you can play as a guest, or sign in with email, Google or Apple to keep your display name and saved player nicknames across devices. You can delete your account at any time inside the app (Account → Delete Account).",
      "Optional voice chat: if you join table voice chat, audio streams peer-to-peer between players in the room over WebRTC and is not recorded or stored by us.",
    ],
  },
];

export function productPath(p: Pick<Product, "kind" | "slug">) {
  return `/${p.kind === "game" ? "games" : "apps"}/${p.slug}`;
}

/** "Oct 13, 2026" for a YYYY-MM-DD date (fixed to UTC so it never shifts a day). */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

/** Days a product keeps its "New" badge after its `added` date. */
const NEW_DAYS = 30;

/** True while the product was added within the last NEW_DAYS days. Pages that show it revalidate daily so the badge drops off on its own. */
export function isNew(p: Pick<Product, "added">, now = Date.now()): boolean {
  return now - Date.parse(`${p.added}T00:00:00Z`) < NEW_DAYS * 86_400_000;
}
