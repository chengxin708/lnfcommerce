import type { Metadata } from "next";
import Link from "next/link";
import { OwnPolicies } from "@/components/OwnPolicies";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account",
};

// Google Play "Delete account URL" for every LNF COMMERCE INC app. Must name the
// developer, let people request deletion without the app, and say what is kept.
export default function DeleteAccountPage() {
  return (
    <article className="wrap prose py-12">
      <h1>Delete your account and data</h1>
      <p className="meta">
        For all apps and games published by {site.legalName} on the App Store, Google Play, TikTok
        and other platforms.
      </p>

      <OwnPolicies field="deleteAccountUrl">
        <p>
          These apps have their own accounts, which are deleted on the app&apos;s own page instead:
        </p>
      </OwnPolicies>

      <h2>How to request deletion</h2>
      <p>You can use either option. You do not need to have the app installed.</p>
      <ul>
        <li>
          <strong>In the app:</strong> open Settings → Delete account, and confirm.
        </li>
        <li>
          <strong>By email:</strong> send an email to{" "}
          <strong className="select-all">{site.supportEmail}</strong> with the subject &quot;Delete
          my account&quot;. Include the app name, the platform (App Store, Google Play or TikTok),
          and your account email or user ID. Send it from the email address on your account if you
          have one, so we can confirm the request is yours.
        </li>
      </ul>

      <h2>Before you delete</h2>
      <p>
        Deleting your account does not cancel a subscription. Cancel it first in your store account:
        on iPhone, Settings → your name → Subscriptions; on Android, Google Play → Payments &amp;
        subscriptions → Subscriptions.
      </p>

      <h2>What we delete</h2>
      <ul>
        <li>Your account and profile (name, email address, sign-in identifiers).</li>
        <li>Content you created or saved in the app.</li>
        <li>Game progress, scores and in-app items.</li>
        <li>Device and usage data linked to your account.</li>
      </ul>
      <p>
        We also ask our service providers to delete this data. Deleted data and purchased in-app
        items cannot be restored.
      </p>

      <h2>What we keep, and for how long</h2>
      <ul>
        <li>
          Purchase and transaction records, for as long as tax and accounting law requires
          (usually up to 7 years).
        </li>
        <li>
          Records needed to prevent fraud or abuse, or to resolve a dispute, for up to 90 days.
        </li>
      </ul>

      <h2>When it happens</h2>
      <p>
        We complete deletion within 30 days of your request and confirm by email. Uninstalling an
        app does not delete your account.
      </p>

      <p>
        More detail is in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </article>
  );
}
