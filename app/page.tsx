import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Portfolio from "./_portfolio/Portfolio";
import { SITE, buildJsonLd } from "./site";
import "./_portfolio/portfolio.css";

const bebas = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

/* `title.absolute` skips the "%s | Embassy Network" template from the layout —
   the brand is already in this title and would otherwise appear twice. */
export const metadata: Metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className={`embassy-portfolio ${bebas.variable} ${inter.variable}`}>
      {/* The hero background is a CSS background-image, so the browser only
          discovers it after the stylesheet parses — it is the LCP element and
          was starting late. One shot for every viewport now, so no `media`. */}
      <link rel="preload" as="image" href="/hero.webp" />
      {/* Identity graph for the brand. Rendered on the homepage only — one
          canonical @id per site is what search engines expect. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
      />
      <Portfolio />
    </div>
  );
}
