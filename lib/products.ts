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
  // Set this to give the product an App Store–style page (icon header, store buttons,
  // facts strip, screenshots, sectioned description, information table) instead of the
  // plain text page. Keep the facts in step with the live store listings.
  listing?: Listing;
};

export type Listing = {
  subtitle: string; // one line under the name
  price: string; // e.g. "Free · In-App Purchases"
  facts: { label: string; value: string; note?: string }[]; // the strip under the header
  screenshots: { src: string; alt: string }[]; // portrait phone shots under /public, all the same size
  screenshotSize: { width: number; height: number };
  intro: string[]; // opening paragraphs of the description
  sections: { title: string; points: string[] }[];
  information: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "little-field-guide",
    icon: "/products/little-field-guide.png",
    added: "2026-11-27",
    name: "Little Field Guide: Dino & Co.",
    kind: "app",
    tagline: "From T. rex to blue whales: real-size 3D dinosaurs, dog breeds and sea animals.",
    description:
      "Little Field Guide is a 3D animal encyclopedia where every creature is shown at its real size. Explore 260+ dinosaurs, prehistoric animals, dog breeds and ocean animals in detailed 3D habitats, compare their sizes face to face, learn museum-style facts in nine languages, and cast a one-tap Animal Parade to your TV. Free with ads, no account needed.",
    status: "live",
    links: {
      appStore: "https://apps.apple.com/app/id6835717538",
      googlePlay: "https://play.google.com/store/apps/details?id=com.lnfcommerce.littlefieldguide",
    },
    packageName: "com.lnfcommerce.littlefieldguide",
    extraData: [
      "Favorites count: when you tap the heart on an animal, the app sends a random install number and the animal's ID to our server so we can show how many people have favorited it. The number is not linked to your name, account, device ID or advertising ID.",
      "Ads: the free version shows ads through Google AdMob. A one-time purchase removes them.",
    ],
    listing: {
      subtitle: "Real-size 3D animals and a parade for your TV",
      price: "Free · Offers In-App Purchases",
      facts: [
        { label: "Age", value: "4+", note: "Years old" },
        { label: "Category", value: "Education", note: "Reference" },
        { label: "Animals", value: "260+", note: "In real-size 3D" },
        { label: "Languages", value: "9", note: "EN, ZH, ES and 6 more" },
        { label: "Account", value: "None", note: "No sign-in" },
      ],
      screenshotSize: { width: 660, height: 1434 },
      screenshots: [
        { src: "/products/little-field-guide/01-meet.webp", alt: "A T. rex in 3D next to an adult for scale" },
        { src: "/products/little-field-guide/02-home.webp", alt: "The four worlds: dinosaurs, dogs, prehistoric life and ocean" },
        { src: "/products/little-field-guide/03-parade.webp", alt: "The Animal Parade show" },
        { src: "/products/little-field-guide/04-compare.webp", alt: "Two animals compared side by side" },
        { src: "/products/little-field-guide/05-quiz.webp", alt: "The find-it quiz with three cards" },
        { src: "/products/little-field-guide/06-wall.webp", alt: "The card wall with silhouettes to unlock" },
        { src: "/products/little-field-guide/07-dog.webp", alt: "A dog breed in 3D" },
        { src: "/products/little-field-guide/08-shark.webp", alt: "A shark in the ocean world" },
        { src: "/products/little-field-guide/09-mammoth.webp", alt: "A woolly mammoth in the prehistoric world" },
        { src: "/products/little-field-guide/10-learn.webp", alt: "Facts and questions about an animal" },
      ],
      intro: [
        "Ever wondered how big a T. rex really was standing next to you? How a Chihuahua measures up to a Great Dane, or a great white shark to a blue whale?",
        "Little Field Guide is a 3D animal encyclopedia where every creature is shown at its real size. Explore 260+ dinosaurs, prehistoric animals, dog breeds and ocean animals in detailed 3D habitats, compare their sizes face to face, learn museum-style facts, and cast a one-tap Animal Parade to your TV.",
      ],
      sections: [
        {
          title: "Real size in 3D",
          points: [
            "Every animal stands next to something familiar (an adult, a diver, a giraffe or the Statue of Liberty), so you feel at once how big or how tiny it really is.",
            "Size comparison, face to face: T. rex vs. Triceratops, Chihuahua vs. Great Dane, shark vs. blue whale.",
            "Spin 360°, zoom in, and tap to hear dinosaurs roar and dogs bark.",
          ],
        },
        {
          title: "One-tap Animal Parade on your TV",
          points: [
            "Tap Show: the animals walk onstage one by one, strike a pose and say their names, with music.",
            "Cast it to your TV and use your phone as the remote. A natural history show for the whole family.",
          ],
        },
        {
          title: "Four worlds to explore",
          points: [
            "Dinosaurs: 80 dinosaurs, from tiny Microraptor to giant Patagotitan, with T. rex, Triceratops, Spinosaurus, Velociraptor and Brachiosaurus.",
            "Prehistoric animals: pterosaurs, ancient sea reptiles, Ice Age giants like the woolly mammoth, and the first sea creatures.",
            "Dog breeds: 57 dog breeds with origin, breed group and real size.",
            "Ocean animals: 80+ sea animals and plants, from clownfish and sea turtles to sharks and whales.",
            "New animals arrive over the air, with no app update needed.",
          ],
        },
        {
          title: "Meet them all, collect every card",
          points: [
            "Every animal starts as a mystery silhouette card. Meet it to unlock it and watch your collection grow.",
            "Find-it quiz: hear a name, pick the right card out of three, and the real 3D animal steps out and roars.",
          ],
        },
        {
          title: "Facts in 9 languages",
          points: [
            "Museum-style facts for every animal (length, height, weight, diet, era and habitat), plus answers to the questions people actually ask.",
            "Read and listen in two languages side by side: English, Spanish, Chinese, French, Korean, Russian, Vietnamese, Filipino and Arabic.",
          ],
        },
        {
          title: "Good to know",
          points: [
            "Free to download, with ads. One purchase removes ads forever; no content is locked.",
            "No account and no sign-in. Animals you have seen stay on your device for offline viewing.",
            "Sizes follow mainstream published estimates. 3D models, art and narration are made with AI tools and checked by our team.",
          ],
        },
      ],
      information: [
        { label: "Provider", value: "LNF COMMERCE INC" },
        { label: "Category", value: "Education, Reference" },
        { label: "Compatibility", value: "iPhone and iPad with iOS 15 or later · Android 7.0 or later" },
        { label: "Languages", value: "English, Chinese, Spanish, French, Korean, Russian, Vietnamese, Filipino, Arabic" },
        { label: "Age rating", value: "4+" },
        { label: "Price", value: "Free" },
        { label: "In-app purchase", value: "Remove Ads, one-time" },
      ],
    },
  },
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
