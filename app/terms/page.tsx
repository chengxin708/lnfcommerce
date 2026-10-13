import type { Metadata } from "next";
import Link from "next/link";
import { OwnPolicies } from "@/components/OwnPolicies";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <article className="wrap prose py-12">
      <h1>Terms of Service</h1>
      <p className="meta">Effective {site.policiesEffective}</p>

      <p>
        These terms are an agreement between you and {site.legalName} (&quot;we&quot;,
        &quot;us&quot;) for the use of our mobile apps and games, including our TikTok Mini Games,
        and this website (together, the &quot;Services&quot;). By using the Services, you agree to
        these terms. If you do not agree, do not use the Services.
      </p>

      <OwnPolicies field="termsUrl">
        <p>These apps have their own terms, which apply to them instead of these:</p>
      </OwnPolicies>

      <h2>1. Who can use the Services</h2>
      <p>
        You must be at least 13 years old to use the Services. If you are under the age of majority
        where you live, you must have permission from a parent or guardian, who also agrees to these
        terms.
      </p>

      <h2>2. Platform terms</h2>
      <p>
        You also use our apps under the terms of the platform you get them from, such as the Apple
        Media Services Terms and Conditions, the Google Play Terms of Service or TikTok&apos;s Terms
        of Service. If these terms conflict with the platform&apos;s terms on payments or refunds,
        the platform&apos;s terms apply.
      </p>
      <h3>Apps downloaded from the Apple App Store</h3>
      <ul>
        <li>
          These terms are between you and {site.legalName} only, not Apple. We, not Apple, are
          responsible for the app and its content.
        </li>
        <li>
          Your license is limited to using the app on Apple-branded devices you own or control, as
          permitted by the Usage Rules in the Apple Media Services Terms and Conditions.
        </li>
        <li>
          Apple has no obligation to provide maintenance or support for the app. Please contact us
          instead.
        </li>
        <li>
          If the app fails to conform to any applicable warranty, you may notify Apple and Apple
          will refund the purchase price, if any. To the extent the law allows, Apple has no other
          warranty obligation for the app.
        </li>
        <li>
          We, not Apple, are responsible for handling any claims relating to the app, including
          product liability, legal or regulatory compliance, consumer protection and intellectual
          property infringement claims.
        </li>
        <li>
          You confirm that you are not located in a country subject to a U.S. Government embargo,
          and that you are not on any U.S. Government list of prohibited or restricted parties.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce
          them against you.
        </li>
      </ul>

      <h2>3. License</h2>
      <p>
        We grant you a personal, limited, non-exclusive, non-transferable, revocable license to use
        our apps for your own non-commercial purposes. We and our licensors own the apps, including
        their code, design, artwork, music, characters and trademarks.
      </p>

      <h2>4. Your content and account</h2>
      <p>
        Some apps let you create an account or save your own content. You are responsible for
        keeping your login details safe and for the content you add. You keep ownership of your
        content and give us permission to store and process it only to provide the app to you.
      </p>

      <h2>5. Purchases, subscriptions and virtual items</h2>
      <ul>
        <li>
          Purchases are processed by Apple, Google Play, TikTok or the platform you use. Refunds are
          handled under the platform&apos;s refund policies, except where the law requires
          otherwise.
        </li>
        <li>
          Some apps offer subscriptions. A subscription renews automatically at the end of each
          period until you cancel it in your store account. Deleting the app does not cancel a
          subscription.
        </li>
        <li>
          Our games may offer virtual items, such as coins, hints, extra lives or ad removal, that
          you can earn or buy. Virtual items are licensed to you, not sold. They have no cash value
          and cannot be exchanged for money or transferred to another person.
        </li>
        <li>
          If something you paid for does not arrive, contact us through our{" "}
          <Link href="/support">Support page</Link> with your order ID and we will fix it.
        </li>
        <li>
          We may change, rebalance or remove virtual items and features as our apps evolve. If we
          shut down an app with paid content, we will give at least 30 days&apos; notice in the
          app.
        </li>
      </ul>

      <h2>6. Ads</h2>
      <p>
        Some of our apps show ads. Some ads are optional rewarded ads: if you choose to watch one to
        the end, you receive the reward shown before the ad starts.
      </p>

      <h2>7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use cheats, bots, modified app clients or exploits;</li>
        <li>reverse engineer, decompile or copy our apps, except as the law allows;</li>
        <li>add content that is unlawful or infringes someone else&apos;s rights;</li>
        <li>interfere with the Services or other people&apos;s use of them;</li>
        <li>use the Services for anything unlawful.</li>
      </ul>
      <p>
        If you break these rules, we may remove items gained unfairly or suspend your access to the
        app.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we collect and use information.
      </p>

      <h2>9. Changes to the Services and these terms</h2>
      <p>
        We update our apps regularly and may change or discontinue features. We may also update
        these terms. When we do, we will change the effective date above, and for material changes
        we will give notice in the affected apps. If you keep using the Services after the change,
        you accept the new terms.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        The Services are provided &quot;as is&quot; and &quot;as available&quot;. To the extent
        the law allows, we disclaim all warranties, express or implied, including merchantability,
        fitness for a particular purpose and non-infringement. We do not promise that the Services
        will be uninterrupted or error-free.
      </p>

      <h2>11. Limitation of liability</h2>
      <p>
        To the extent the law allows, we are not liable for indirect, incidental, special,
        consequential or punitive damages, or for lost data or profits. Our total liability for any
        claim relating to the Services is limited to the greater of the amount you paid us in the 12
        months before the claim, or US $50. Some places do not allow these limits, so they may not
        apply to you.
      </p>

      <h2>12. Governing law</h2>
      <p>
        These terms are governed by the laws of the State of {site.governingState}, United States,
        without regard to its conflict of law rules. This does not take away any consumer
        protection rights you have under the law of the country where you live.
      </p>

      <h2>13. Contact</h2>
      <p>
        {site.legalName}
        <br />
        {site.address}
        <br />
        <span className="select-all">{site.supportEmail}</span>
      </p>
    </article>
  );
}
