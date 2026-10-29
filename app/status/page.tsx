import type { Metadata } from "next";
import { StatusGate } from "@/components/StatusGate";

// Internal progress page: not linked anywhere, not indexed, content is encrypted (see StatusGate).
export const metadata: Metadata = {
  title: "Internal",
  robots: { index: false, follow: false, nocache: true },
};

export default function StatusPage() {
  return (
    <article className="wrap prose py-12">
      <StatusGate />
    </article>
  );
}
