import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
};

export default function SupportPage() {
  return (
    <article className="wrap prose py-12">
      <h1>Support</h1>
      <p>
        Email us at <strong className="select-all">{site.supportEmail}</strong>. Tell us which app
        or game you are using, where you got it (App Store, Google Play, TikTok or another
        platform), and your account email or user ID. In most of our apps the user ID is at the
        bottom of the Settings screen.
      </p>

      <h2>A purchase did not arrive</h2>
      <p>
        First, close the app completely and open it again, or tap Restore Purchases in the
        app&apos;s Settings. If it is still missing, email us with the order ID from your receipt:
      </p>
      <ul>
        <li>
          App Store: the order ID is in the receipt email from Apple, or at{" "}
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
            reportaproblem.apple.com
          </a>
          .
        </li>
        <li>
          Google Play: the order ID starts with <code>GPA.</code> and is in the receipt email from
          Google, or in{" "}
          <a href="https://play.google.com/store/account/orderhistory" target="_blank" rel="noopener noreferrer">
            your Google Play order history
          </a>
          .
        </li>
        <li>TikTok: open the purchase record in your TikTok wallet history.</li>
      </ul>

      <h2>Refunds and subscriptions</h2>
      <p>
        Payments are processed by the platform, so refunds are requested there and subscriptions
        are cancelled there. Deleting the app does not cancel a subscription.
      </p>
      <ul>
        <li>
          App Store: request a refund at{" "}
          <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
            reportaproblem.apple.com
          </a>
          . Cancel a subscription in{" "}
          <a href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener noreferrer">
            your Apple subscriptions
          </a>{" "}
          (or on iPhone: Settings → your name → Subscriptions).
        </li>
        <li>
          Google Play: see{" "}
          <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">
            Google Play refund policies
          </a>
          . Cancel a subscription in{" "}
          <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">
            your Google Play subscriptions
          </a>
          .
        </li>
        <li>TikTok: email us and we will help you.</li>
      </ul>

      <h2>Moving to a new phone</h2>
      <p>
        Sign in on the new phone with the same account you used before (your app account, Sign in
        with Apple, Google Play Games or TikTok) and your data and progress load automatically.
      </p>

      <h2>Delete your account or data</h2>
      <p>
        See <Link href="/delete-account">Delete your account</Link>. More detail is in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </article>
  );
}
