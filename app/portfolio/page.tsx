import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Portfolio from "./Portfolio";
import "./portfolio.css";

const bebas = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio — Embassy Network™",
  description:
    "Selected works — social media, materiale de promovare, grafică și web design pentru branduri din medical, beauty, tech și entertainment.",
};

export default function PortfolioPage() {
  return (
    <div className={`embassy-portfolio ${bebas.variable} ${inter.variable}`}>
      <Portfolio />
    </div>
  );
}
