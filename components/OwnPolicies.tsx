import type { ReactNode } from "react";
import { products } from "@/lib/products";

// On the company Privacy, Terms and Delete-account pages: lists the products that use
// their own page instead. Renders nothing when no product has one.
export function OwnPolicies({
  field,
  children,
}: {
  field: "privacyUrl" | "termsUrl" | "deleteAccountUrl";
  children: ReactNode;
}) {
  const items = products.filter((p) => p[field]);
  if (items.length === 0) return null;
  return (
    <>
      {children}
      <ul>
        {items.map((p) => (
          <li key={p.slug}>
            {p.name}:{" "}
            <a href={p[field]} target="_blank" rel="noopener noreferrer">
              {p[field]!.replace("https://", "")}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
