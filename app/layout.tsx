import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["100", "200", "400", "700", "900"],
  variable: "--font-montserrat",
});

const coolvetica = Coolvetica({
  src: "../public/fonts/coolvetica rg.otf",
  variable: "--font-coolvetica",
});
const dopestyle = Dopestyle({
  src: "../public/fonts/Dopestyle.ttf",
  variable: "--font-dopestyle",
});
const franky = Franky({
  src: "../public/fonts/Franky.otf",
  variable: "--font-franky",
});
const comic = Comic({
  src: "../public/fonts/Hey Comic.otf",
  variable: "--font-comic",
});
const holyfat = Holyfat({
  src: "../public/fonts/Holyfat.ttf",
  variable: "--font-holyfat",
});
const monday = Monday({
  src: "../public/fonts/Kids Monday.otf",
  variable: "--font-monday",
});
const lemonmilk = Lemonmilk({
  src: "../public/fonts/LEMONMILK-Regular.otf",
  variable: "--font-lemonmilk",
});
const pro = Pro({
  src: "../public/fonts/CharlevoixPro-Bold.otf",
  variable: "--font-pro",
});
const proBlack = ProBlack({
  src: "../public/fonts/CharlevoixPro-Black.otf",
  variable: "--font-proBlack",
});
const graphik = Graphik({
  src: "../public/fonts/GraphikRegular.otf",
  variable: "--font-graphik",
});
const graphikThin = GraphikThin({
  src: "../public/fonts/GraphikThin.otf",
  variable: "--font-graphikThin",
});
const graphikExtralight = GraphikExtralight({
  src: "../public/fonts/GraphikExtralight.otf",
  variable: "--font-graphikExtralight",
});
const graphikLight = GraphikLight({
  src: "../public/fonts/GraphikLight.otf",
  variable: "--font-graphikLight",
});

export const metadata: Metadata = {
  title: "Embassy Agency",
  description:
    "Embassy contribuie la digitalizarea afacerilor. Pornind de la clipuri pe social media, astazi lucram pentru a contura povestea brandului tau.",
  applicationName: "Embassy Agency",
  authors: [
    { name: "Baciu Valentin" },
    { name: "Ene Cosmin" },
    { name: "Catrina Sebastian" },
  ],
  creator: "Catrina Sebastian",
  publisher: "Embassy Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${montserrat.className} ${coolvetica.variable} ${dopestyle.variable} ${franky.variable} ${comic.variable} ${holyfat.variable} ${monday.variable} ${lemonmilk.variable} ${pro.variable} ${proBlack.variable} ${graphik.variable} ${graphikThin.variable} ${graphikExtralight.variable} ${graphikLight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
