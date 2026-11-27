import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { products, productPath } from "@/lib/products";
import { site } from "@/lib/site";

// One link (and one QR code) that works for any phone: /get/<slug> sends an iPhone or iPad
// to the App Store, an Android device to Google Play, and everything else to the product page.
// The "Share QR code" button on a listing page encodes this link.
export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return NextResponse.redirect(new URL("/", site.url), 302);

  const ua = request.headers.get("user-agent") ?? "";
  // iPadOS reports itself as a Mac; only touch Macs ("Mobile" in the UA) are iPads.
  const apple = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && /Mobile/.test(ua));
  const android = /Android/i.test(ua);
  const page = new URL(productPath(product), site.url).toString();
  const target = (apple && product.links.appStore) || (android && product.links.googlePlay) || page;

  const res = NextResponse.redirect(target, 302);
  res.headers.set("Cache-Control", "no-store"); // the answer depends on the device
  res.headers.set("Vary", "User-Agent");
  return res;
}
