import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SITE } from "./site";
import Coolvetica from "next/font/local";
import Dopestyle from "next/font/local";
import Franky from "next/font/local";
import Comic from "next/font/local";
import Holyfat from "next/font/local";
import Monday from "next/font/local";
import Lemonmilk from "next/font/local";
import Pro from "next/font/local";
import ProBlack from "next/font/local";
import Graphik from "next/font/local";
import GraphikThin from "next/font/local";
import GraphikExtralight from "next/font/local";
import GraphikLight from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "400", "700", "900"],
  preload: false,
  variable: "--font-montserrat",
});

const coolvetica = Coolvetica({
  src: "../public/fonts/coolvetica rg.otf",
  preload: false,
  variable: "--font-coolvetica",
});
const dopestyle = Dopestyle({
  src: "../public/fonts/Dopestyle.ttf",
  preload: false,
  variable: "--font-dopestyle",
});
const franky = Franky({
  src: "../public/fonts/Franky.otf",
  preload: false,
  variable: "--font-franky",
});
const comic = Comic({
  src: "../public/fonts/Hey Comic.otf",
  preload: false,
  variable: "--font-comic",
});
const holyfat = Holyfat({
  src: "../public/fonts/Holyfat.ttf",
  preload: false,
  variable: "--font-holyfat",
});
const monday = Monday({
  src: "../public/fonts/Kids Monday.otf",
  preload: false,
  variable: "--font-monday",
});
const lemonmilk = Lemonmilk({
  src: "../public/fonts/LEMONMILK-Regular.otf",
  preload: false,
  variable: "--font-lemonmilk",
});
const pro = Pro({
  src: "../public/fonts/CharlevoixPro-Bold.otf",
  preload: false,
  variable: "--font-pro",
});
const proBlack = ProBlack({
  src: "../public/fonts/CharlevoixPro-Black.otf",
  preload: false,
  variable: "--font-proBlack",
});
const graphik = Graphik({
  src: "../public/fonts/GraphikRegular.otf",
  preload: false,
  variable: "--font-graphik",
});
const graphikThin = GraphikThin({
  src: "../public/fonts/GraphikThin.otf",
  preload: false,
  variable: "--font-graphikThin",
});
const graphikExtralight = GraphikExtralight({
  src: "../public/fonts/GraphikExtralight.otf",
  preload: false,
  variable: "--font-graphikExtralight",
});
const graphikLight = GraphikLight({
  src: "../public/fonts/GraphikLight.otf",
  preload: false,
  variable: "--font-graphikLight",
});

export const metadata: Metadata = {
  /* Makes every relative URL below (canonical, OG image, sitemap refs) resolve
     against the canonical origin instead of localhost at build time. */
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    /* future pages get "Ceva | Embassy Network" for free */
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [
    { name: "Baciu Valentin" },
    { name: "Ene Cosmin" },
    { name: "Catrina Sebastian" },
  ],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Echipa Embassy Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  /* meta keywords was dropped: Google has ignored it since 2009 and it only
     advertised the target terms to competitors. */
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* was lang="en" on a wholly Romanian site — it mislabels the page for
       search engines, translation prompts and screen readers alike */
    <html lang={SITE.lang} style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${montserrat.className} ${coolvetica.variable} ${dopestyle.variable} ${franky.variable} ${comic.variable} ${holyfat.variable} ${monday.variable} ${lemonmilk.variable} ${pro.variable} ${proBlack.variable} ${graphik.variable} ${graphikThin.variable} ${graphikExtralight.variable} ${graphikLight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
