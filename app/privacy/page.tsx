import type { Metadata } from "next";
import Link from "next/link";
import { OwnPolicies } from "@/components/OwnPolicies";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="wrap prose py-12">
      <h1>Privacy Policy</h1>
      <p className="meta">Effective {site.policiesEffective}</p>

      <p>
        This policy explains what information {site.legalName} (&quot;we&quot;, &quot;us&quot;)
        collects when you use our mobile apps and games (together, &quot;our apps&quot;) or visit{" "}
        {site.url.replace("https://", "")}, how we use it, and the choices you have. It applies to
        our apps on the App Store and Google Play, our TikTok Mini Games, and any other platform
        where we publish.
        If an app collects anything beyond what is described here, its page on this website lists
        it.
      </p>

      <OwnPolicies field="privacyUrl">
        <p>These apps have their own privacy policy, which applies to them instead of this one:</p>
      </OwnPolicies>

      <h2>Information we collect</h2>
      <h3>Information from the platform you use</h3>
      <ul>
        <li>
          <strong>Apple:</strong> if you use Sign in with Apple, Apple shares an identifier with us
          and, if you choose, your name and email address. You can hide your email, in which case we
          receive a private relay address.
        </li>
        <li>
          <strong>Google Play:</strong> if you sign in with Google Play Games or Google, Google
          shares an identifier and your profile name with us.
        </li>
        <li>
          <strong>TikTok Mini Games:</strong> when you open one of our games in TikTok, TikTok gives
          us an anonymous identifier (an OpenID) that is unique to that game. If you choose to grant
          extra permissions, such as your display name and avatar, we receive those too. We never
          receive your TikTok password.
        </li>
      </ul>

      <h3>Information you give us</h3>
      <ul>
        <li>
          If an app lets you create an account, the email address, name or password you enter.
        </li>
        <li>Content you create or save in an app, such as notes, lists or settings.</li>
        <li>Messages you send to our support team.</li>
      </ul>

      <h3>Information created while you use our apps</h3>
      <ul>
        <li>Game progress, scores, settings and in-app items.</li>
        <li>
          Purchase and subscription records: what you bought, when, and the order ID from the
          platform. We do not receive or store your card or bank details. Payments are processed
          by Apple, Google Play, TikTok or the platform you use.
        </li>
      </ul>

      <h3>Device and usage information</h3>
      <ul>
        <li>
          Device model, operating system version, language, app version, IP address and crash
          reports, which we use to keep our apps working.
        </li>
        <li>
          Advertising identifiers collected by our advertising partners when ads are shown: the
          Android Advertising ID, and on iPhone and iPad the Identifier for Advertisers (IDFA), but
          only if you allow tracking when the app asks.
        </li>
      </ul>

      <h3>Device permissions</h3>
      <p>
        Some apps ask for access to features such as the camera, photos, notifications or location.
        An app only asks when you use the feature that needs it, and you can refuse or turn the
        permission off in your device settings at any time. The rest of the app keeps working. We
        do not access your contacts.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To provide our apps, save your data and progress, and restore them on a new device.</li>
        <li>To deliver purchases and subscriptions, and to resolve billing problems.</li>
        <li>To show ads, including rewarded ads you choose to watch, and to measure them.</li>
        <li>To fix bugs, prevent cheating, fraud and abuse, and improve our apps.</li>
        <li>To answer you when you contact support.</li>
        <li>To meet legal obligations.</li>
      </ul>

      <h2>Advertising partners and service providers</h2>
      <p>
        Some of our apps show ads from <strong>Google AdMob</strong> (on iOS and Android),{" "}
        <strong>Unity LevelPlay</strong> (Unity Ads and ironSource Ads, on Android) or{" "}
        <strong>TikTok</strong> (in TikTok Mini Games). These partners may collect device and
        advertising identifiers to show and measure ads, and may show personalized ads where the law
        allows and you have not opted out. Their use of data is governed by their own policies:
      </p>
      <ul>
        <li>
          Google:{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
            How Google uses information from sites or apps that use its services
          </a>
        </li>
        <li>
          Unity:{" "}
          <a href="https://unity.com/legal/game-player-and-app-user-privacy-policy" target="_blank" rel="noopener noreferrer">
            Unity Game Player and App User Privacy Policy
          </a>
        </li>
        <li>
          TikTok:{" "}
          <a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            TikTok Privacy Policy
          </a>
        </li>
      </ul>
      <p>
        We also use service providers that host our servers, store data and help us analyze
        crashes. They may process data only on our instructions. We share user data only with
        third parties that provide the same or equal protection of that data as described in this
        policy.
      </p>

      <h2>Selling and sharing</h2>
      <p>
        We do not sell your personal information for money. When our advertising partners use
        advertising identifiers to show personalized ads, some U.S. state laws treat this as
        &quot;sharing&quot; for targeted advertising. You can opt out at any time:
      </p>
      <ul>
        <li>
          On iPhone and iPad: Settings → Privacy &amp; Security → Tracking, and turn off tracking
          for our apps.
        </li>
        <li>
          On Android: Settings → Google → Ads → Delete advertising ID (or Opt out of Ads
          Personalization on older versions).
        </li>
        <li>In TikTok: Settings and privacy → Ads.</li>
        <li>
          By emailing us at <span className="select-all">{site.supportEmail}</span>.
        </li>
      </ul>

      <h2>Children</h2>
      <p>
        Our apps are not directed to children under 13, and we do not knowingly collect personal
        information from children under 13. If you believe a child under 13 has given us personal
        information, contact us and we will delete it.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep account data, saved content and game progress while you use the app and for up to
        24 months after your last use, so you can come back to it, unless you ask us to delete it
        sooner. We keep purchase records for as long as tax and accounting law requires. Crash and
        usage data is kept for up to 12 months.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can ask us to access, correct or delete the personal information we hold about you.
        Depending on where you live (for example California, other U.S. states, the EU or the UK),
        you may have additional rights, such as the right to data portability or to object to
        certain processing. We will not treat you differently for using these rights.
      </p>
      <p>
        You can withdraw consent you gave in an app (for example to tracking, notifications or
        location) at any time in your device settings. To delete your account and data, follow the
        steps on <Link href="/delete-account">Delete your account</Link>. For other requests, email{" "}
        <span className="select-all">{site.supportEmail}</span>. We may ask for your account email
        or in-app user ID to confirm the request is yours. We respond within 30 days.
      </p>

      <h2>Security</h2>
      <p>
        We protect information with encryption in transit and access controls on our systems. No
        method of storage or transmission is completely secure, so we cannot guarantee absolute
        security.
      </p>

      <h2>International transfers</h2>
      <p>
        We are based in the United States, and information may be processed in the United States
        and other countries where our service providers operate. Where required, we use appropriate
        safeguards for these transfers.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will update the effective date above. For material changes we
        will also give notice in the affected apps.
      </p>

      <h2>Contact</h2>
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
