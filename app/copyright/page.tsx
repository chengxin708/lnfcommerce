import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Copyright & IP",
  description: `How to report content in a ${site.legalName} app or game that you believe infringes your copyright or trademark.`,
};

// Rights holders should reach us before filing a store complaint, so this page says plainly
// what to send and what we do with it.
export default function CopyrightPage() {
  return (
    <article className="wrap prose py-12">
      <h1>Copyright &amp; intellectual property</h1>
      <p>
        {site.legalName} respects the rights of artists, musicians, developers and brand owners. If
        you believe that artwork, music, sound, text, a name or any other content in one of our apps
        or games uses your work without permission, please tell us. We review every notice and act
        quickly.
      </p>

      <h2>How to send a notice</h2>
      <p>
        Email <strong className="select-all">{site.supportEmail}</strong> with the subject line{" "}
        <strong>Copyright notice</strong> (or <strong>Trademark notice</strong>) and include:
      </p>
      <ol>
        <li>Your name, company (if any), postal address, phone number and email.</li>
        <li>
          The work you own: a description, and a link or copy that shows it (for example the
          original track, artwork or registration number).
        </li>
        <li>
          Where it appears in our product: the app or game name, the platform (App Store, Google
          Play, a web portal or our website) and, if you can, a screenshot or a description of where
          you saw or heard it.
        </li>
        <li>
          A statement that you have a good-faith belief that the use is not authorized by the
          owner, its agent or the law.
        </li>
        <li>
          A statement that the information in your notice is accurate and, under penalty of
          perjury, that you are the owner or are authorized to act for the owner.
        </li>
        <li>Your physical or electronic signature.</li>
      </ol>
      <p>
        You can also write to us at {site.legalName}, {site.address}.
      </p>

      <h2>What happens next</h2>
      <ul>
        <li>We confirm that we received your notice within 2 business days.</li>
        <li>
          We check the content against our asset records. If it is or may be infringing, we remove
          or replace it in the next update and, where possible, disable it sooner.
        </li>
        <li>We tell you what we did. If we believe the content is ours to use, we explain why.</li>
      </ul>
      <p>
        Contacting us directly is usually the fastest way to get content removed. A notice that
        is knowingly false can create legal liability for the sender, so please only report
        content you have a real reason to believe is yours.
      </p>

      <h2>Our own content</h2>
      <p>
        The names, logos, artwork, music and code in our apps and games belong to {site.legalName}{" "}
        or are used under license. Please do not copy or redistribute them without permission. For
        licensing or permission requests, email {site.supportEmail}.
      </p>

      <p>
        See also our <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </article>
  );
}
