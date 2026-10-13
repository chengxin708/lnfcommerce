import { ProductList } from "@/components/ProductList";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="wrap prose py-12">
      <h1>{site.legalName}</h1>
      <p>We publish mobile apps and games on the App Store, Google Play and other platforms.</p>

      <h2>Apps</h2>
      <ProductList kind="app" />

      <h2>Games</h2>
      <ProductList kind="game" />

      <h2>Contact</h2>
      <p>
        <span className="select-all">{site.supportEmail}</span>
        <br />
        {site.address}
      </p>
    </div>
  );
}
