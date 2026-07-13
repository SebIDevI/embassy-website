"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useState } from "react";
import CountUp from "./CountUp";
import FillText from "./FillText";
import SplitLines from "./SplitLines";
import SplitWords from "./SplitWords";
import DetailCards from "./DetailCards";
import Typewriter from "./Typewriter";

/* ── data ───────────────────────────────────────────────────────────────
   Placeholder Unsplash images are kept from the original mockup — swap the
   ids / phLabel entries for real assets later; markup below stays untouched. */

const img = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const HERO_STATS = [
  { n: "8", l: "Proiecte" },
  { n: "72K", l: "Flystack reach" },
  { n: "4", l: "Industrii" },
  { n: "5+", l: "Ani experiență" },
];

const MARQUEE = [
  "Girls Own Cosmetics", "Maves Dental", "True Dental Care", "Flystack Drone Shows",
  "Driving Hero", "Osteopath Concept", "Chiropractor.ro", "Kiss FM", "Pepsi",
  "Michelin", "Vascony Atelier",
];

type Detail = { label: string; value: string; text: string; tags: string[] };
type Project = {
  id: string;
  bg: string;
  index: string;
  cat: string;
  name: string[];
  headline: string;
  desc: string;
  details: [Detail, Detail, Detail];
  results: { n: string; l: string }[];
  strip: [string, string];
  bgVideo?: string;
  stripVideos?: string[]; // landscape (16:9) videos in the strip cells (1–2)
  reels?: [string, string]; // portrait (9:16) videos in the reels band
  heroReels?: string[]; // portrait reels shown as the hero background (GOC / TDC)
  next?: string;
};

const PROJECTS: Project[] = [
  {
    id: "goc",
    bg: "photo-1596462502278-27bfdc403348",
    index: "01 / 07",
    cat: "Beauty · Cosmetics · Influencer",
    name: ["GIRLS OWN", "COSMETICS"],
    headline: "De la audit la strategie națională în 90 de zile",
    desc: "Brand premium de cosmetice fondat de artista Lora. Strategie editorială completă, redesign feed, sistem creator și producție Reels — cont @girlsowncosmetics crescut la 21K followers.",
    details: [
      { label: "Ce am făcut", value: "Full SM", text: "Audit brand, redesign feed Instagram, strategie 12 luni, plan creator cu Lora, producție Reels lunare.", tags: ["Instagram", "Reels", "Creator Strategy"] },
      { label: "Rezultate", value: "+6.2K", text: "Followers organici în 6 luni. Reach mediu Reel crescut cu 340%. Engagement rate: 4.6%.", tags: ["Organic", "+340% Reach"] },
      { label: "Status", value: "Activ", text: "Colaborare continuă. @girlsowncosmetics · 21K followers · 540 postări gestionate.", tags: ["Ongoing", "@girlsowncosmetics"] },
    ],
    results: [
      { n: "21K", l: "Followers actuali" },
      { n: "4.6%", l: "Engagement rate" },
      { n: "+340%", l: "Reach per Reel" },
      { n: "540", l: "Postări gestionate" },
    ],
    strip: ["photo-1522335789203-aabd1fc54bc9", "photo-1620916566398-39f1143ab7be"],
    heroReels: [
      "/Reel 1 Sf Elena - GOC16052026 - 2.mp4",
      "/0606 (1)(26).mp4",
      "/Reel cremă de ochi funny GOC16052026 - 3.mp4",
    ],
    next: "02 — Maves Dental →",
  },
  {
    id: "maves",
    bg: "photo-1629909613654-28e377c37b09",
    index: "02 / 07",
    cat: "Medical · Dental · Premium",
    name: ["MAVES", "DENTAL"],
    headline: "O clinică dentară devenită brand de lifestyle",
    desc: "Clinică stomatologică premium — Dr. Veronica Manole. Am construit prezența digitală de la zero: identitate vizuală, sistem de conținut pe 5 piloni, Reels educaționale și de rezultate.",
    details: [
      { label: "Ce am făcut", value: "Build 0→1", text: "Identitate vizuală Instagram, sistem 5 piloni de conținut, producție Reels, raportare lunară.", tags: ["Visual ID", "Content System", "Reels"] },
      { label: "Rezultate", value: "3.2K", text: "Followers în primele 4 luni de la zero. Reach mediu Reel: 22K. Save rate postări: 8.4%.", tags: ["0 → 3.2K", "22K reach/Reel"] },
      { label: "Tip proiect", value: "SM + ID", text: "Social media management complet + identitate vizuală digitală. Brand book inclus.", tags: ["Ongoing", "București"] },
    ],
    results: [
      { n: "3.2K", l: "Followers / 4 luni" },
      { n: "22K", l: "Reach mediu Reel" },
      { n: "8.4%", l: "Save rate" },
      { n: "5", l: "Piloni conținut" },
    ],
    strip: ["photo-1588776814546-1ffedbe47425", "photo-1609840114035-3c981b782dfe"],
    bgVideo: "/maves/Maves v3.mp4",
    reels: ["/maves/2.mp4", "/maves/Maves feedback.mp4"],
    next: "03 — True Dental Care →",
  },
  {
    id: "tdc",
    bg: "photo-1606811971618-4486d14f3f99",
    index: "03 / 07",
    cat: "Medical · Dental · Paid",
    name: ["TRUE", "DENTAL", "CARE"],
    headline: "Organic + Meta Ads cu CPL sub media industriei",
    desc: "Management complet de social media, campanii Meta Ads orientate pe lead generation și producție de conținut editorial lunar coordonat printr-un singur plan de comunicare.",
    details: [
      { label: "Ce am făcut", value: "SM + ADS", text: "Social media management, Meta Ads lead gen + awareness, producție conținut, raportare lunară.", tags: ["Meta Ads", "Lead Gen", "Raportare"] },
      { label: "Rezultate", value: "-38%", text: "Sub media CPL a industriei. 480 leads în prima lună de campanie la 12 RON/lead.", tags: ["480 Leads/lună", "CPL 12 RON"] },
      { label: "Canale", value: "Meta", text: "Instagram + Facebook + Meta Ads. Buget media gestionat cu optimizare continuă pe date.", tags: ["Instagram", "Facebook", "Paid"] },
    ],
    results: [
      { n: "480", l: "Leads / primă lună" },
      { n: "12₺", l: "Cost per lead (RON)" },
      { n: "-38%", l: "Sub media industriei" },
      { n: "2x", l: "ROI campanii" },
    ],
    strip: ["photo-1588776814546-ec1b5e48b4b0", "photo-1460925895917-afdab827c52f"],
    heroReels: ["/truedental/1.mp4", "/truedental/2.mp4", "/truedental/4.mp4"],
    next: "04 — Osteopath Concept →",
  },
  {
    id: "osteopath",
    bg: "photo-1544367567-0f2fcb009e0b",
    index: "04 / 07",
    cat: "Medical · Osteopatie · Chiropractică",
    name: ["OSTEOPATH", "CONCEPT"],
    headline: "4 locații. Un singur brand. O singură voce.",
    desc: "Rețea multi-locație de osteopatie și chiropractică în București, Târgoviște, Ploiești și Constanța. Am construit infrastructura de comunicare digitală și strategia de marketing pentru toate locațiile simultan.",
    details: [
      { label: "Ce am făcut", value: "Multi-loc", text: "Strategie de marketing unificată pentru 4 locații, producție conținut adaptat per clinică, campanii de recuperare pacienți, pachet corporate wellness.", tags: ["4 Locații", "Strategie", "Corporate"] },
      { label: "Rezultate", value: "+90 zile", text: "Plan de recuperare venit în 90 de zile implementat. Pachete wellness corporate Esențial/Recomandat/Premium lansate. Locația Ploiești — lansată și activă.", tags: ["Revenue Recovery", "B2B Wellness"] },
      { label: "Status", value: "Activ", text: "Colaborare strategică continuă. Co-management activ locație București. Website: osteopathconcept.com", tags: ["Ongoing", "4 Cities"] },
    ],
    results: [
      { n: "4", l: "Locații active" },
      { n: "90 z", l: "Plan recuperare venit" },
      { n: "3", l: "Pachete wellness" },
      { n: "B2B", l: "Corporate Wellness" },
    ],
    strip: ["photo-1576091160550-2173dba999ef", "photo-1571019613454-1cb2f99b2d8b"],
    next: "05 — Chiropractor.ro →",
  },
  {
    id: "chiropractor",
    bg: "photo-1519824145371-296894a0daa9",
    index: "05 / 07",
    cat: "Medical · Chiropractică · Community",
    name: ["CHIRO", "PRACTOR", ".RO"],
    headline: "O comunitate medicală construită de la zero",
    desc: 'Cont dedicat comunității de specialiști și pacienți în chiropractică din România — creat și gestionat de Embassy Network. @chiropractor.ro — "by @embassy.network".',
    details: [
      { label: "Ce am făcut", value: "Community", text: "Creare cont, strategie de conținut educațional, producție 521 postări, management comunitate de specialiști și pacienți.", tags: ["Community Build", "Educational", "521 Postări"] },
      { label: "Rezultate", value: "2K+", text: "Followers pe @chiropractor.ro pornind de la zero. Cont 100% organic, fără paid. 521 postări publicate.", tags: ["0 → 2K+", "100% Organic"] },
      { label: "Tip", value: "Owned", text: "Cont deținut și operat de Embassy Network. Colaborează cu specialiști: hello@embassy-agency.com", tags: ["Embassy Owned", "Medical Niche"] },
    ],
    results: [
      { n: "2K+", l: "Followers" },
      { n: "521", l: "Postări publicate" },
      { n: "34", l: "Following (cont curat)" },
      { n: "100%", l: "Creștere organică" },
    ],
    strip: ["photo-1559757175-5700dde675bc", "photo-1530026405186-ed1f139313f8"],
    heroReels: ["/chiropactor/1.mp4", "/chiropactor/Clip 13.mp4", "/chiropactor/Clip 5.mp4"],
    next: "06 — Flystack Drone Shows →",
  },
  {
    id: "flystack",
    bg: "photo-1473968512647-3e447244af8f",
    index: "06 / 07",
    cat: "Tech · Events · Entertainment",
    name: ["FLYSTACK", "DRONE", "SHOWS"],
    headline: "Website, brand digital și 72K followers",
    desc: "Furnizor premium global de spectacole cu drone — București & Londra. Embassy Agency a construit digital-ul complet: website, strategie social media și 72K followers organici.",
    details: [
      { label: "Ce am făcut", value: "Full Stack", text: "Website complet, strategie și management social media, producție conținut video, creștere audiență organică la 72K.", tags: ["Web", "Social", "Video", "Brand"] },
      { label: "Rezultate", value: "72K", text: "Followers pe @flystackdroneshows. 335 postări. Cont pornit de la zero, 100% organic.", tags: ["0 → 72K", "Organic"] },
      { label: "Credit", value: "Official", text: '"powered by Embassy Agency" — menționat public pe flystackdroneshows.com. Client activ global.', tags: ["București & Londra", "Ongoing"] },
    ],
    results: [
      { n: "72K", l: "Followers Instagram" },
      { n: "335", l: "Postări produse" },
      { n: "1", l: "Website construit" },
      { n: "Global", l: "Prezență internațională" },
    ],
    strip: ["photo-1506947411487-a56738267384", "photo-1527977966376-1c8408f9f108"],
    bgVideo: "/flystack/NOVA RENDER FINAL CUTS (1).mp4",
    stripVideos: ["/flystack/Aftermovie Neversea x Flystack (1).mp4"],
    next: "07 — Driving Hero →",
  },
  {
    id: "drivinghero",
    bg: "photo-1568772585407-9361f9bf3a87",
    index: "07 / 07",
    cat: "Auto · Events · Festival",
    name: ["DRIVING", "HERO"],
    headline: "Primul festival auto de conducere defensivă din România",
    desc: "Bootcamp competitiv de conducere defensivă — parteneriat Romania Driving Experience & Politehnica București. Festival 3 zile la Motorpark, premiu 5.000€. Comunicare digitală completă a evenimentului.",
    details: [
      { label: "Ce am făcut", value: "Event SM", text: "Comunicare lansare și festival, conținut pre/during/post eveniment, campanii awareness și înregistrări.", tags: ["Event Marketing", "Launch", "Community"] },
      { label: "Rezultate", value: "Mii", text: "Mii de șoferi înscriși. Festival 3 zile, expo auto, drift taxi, karting. Acoperire media națională.", tags: ["@driving.hero", "Motorpark 2024"] },
      { label: "Context", value: "2024", text: "7–9 Iunie 2024, Motorpark România. 16 finaliști, premiu 5.000€. Ediția 2025 în pregătire.", tags: ["Ediția I", "Național"] },
    ],
    results: [
      { n: "3", l: "Zile festival" },
      { n: "16", l: "Finaliști competiție" },
      { n: "5K€", l: "Premiu mare" },
      { n: "25K", l: "Audiență RDE" },
    ],
    strip: ["photo-1541348263662-e068662d82af", "photo-1558618666-fcd25c85cd64"],
    bgVideo: "/drivinghero/POST 1 (1) (1).mp4",
    stripVideos: ["/drivinghero/Post 1 (2).mp4", "/drivinghero/Post 1 (1) (2).mp4"],
  },
];

const PROMO = [
  { img: "photo-1598488035139-bdbb2231ce04", alt: "Kiss FM", tag: "Radio · Entertainment", name: "KISS FM", desc: "Animații 3D și materiale motion graphics pentru campanii de promovare ale postului de radio lider național.", delay: "" },
  { img: "photo-1629203851122-3726ecdf080e", alt: "Pepsi", tag: "FMCG · Beverage", name: "PEPSI", desc: "Producție animații 3D pentru activări de brand și campanii digitale. Visual storytelling de impact pentru audiențe de masă.", delay: "d1" },
  { img: "photo-1558618666-fcd25c85cd64", alt: "Michelin", tag: "Auto · Premium", name: "MICHELIN", desc: "Animații 3D pentru prezentarea produselor și comunicare premium. Motion graphics adaptate standardelor globale Michelin.", delay: "d2" },
];

const GRAFICA = [
  { phLabel: ["Brand Book", "Maves Dental", "— upload imagine —"], tag: "Brand Book · Dental", name: ["MAVES DENTAL", "BRAND BOOK"], desc: "Identitate vizuală completă — paletă culori, tipografie, sistem grid, tone of voice, aplicații digital și print.", delay: "" },
  { phLabel: ["Logo Design", "Vascony Atelier", "— upload imagine —"], tag: "Logo · Fashion Atelier", name: ["VASCONY", "ATELIER"], desc: "Design de logo pentru atelier de modă — identitate premium cu caracter artizanal și eleganță contemporană.", delay: "d1" },
];

const WEBSITES = [
  { url: "flystackdroneshows.com", href: "https://flystackdroneshows.com", img: "photo-1506947411487-a56738267384", alt: "Flystack website", tag: "Tech · Entertainment", name: "FLYSTACK DRONE SHOWS", desc: "Website complet pentru furnizorul premium global de spectacole cu drone. Design cinematic, animații, secțiuni de proiecte și contact.", delay: "" },
  { url: "osteopathconcept.com", href: "https://osteopathconcept.com", img: "photo-1576091160550-2173dba999ef", alt: "Osteopath website", tag: "Medical · Multi-locație", name: "OSTEOPATH CONCEPT", desc: "Website pentru rețea de clinici de osteopatie și chiropractică — 4 locații, programări online, prezentare servicii și echipă.", delay: "d1" },
  { url: "chiropractor.ro", href: "https://chiropractor.ro", img: "photo-1559757175-5700dde675bc", alt: "Chiropractor website", tag: "Medical · Community", name: "CHIROPRACTOR.RO", desc: "Platformă de comunitate pentru specialiști și pacienți în chiropractică. Creat și operat de Embassy Network.", delay: "" },
  { url: "drivinghero.ro", href: "https://drivinghero.ro", img: "photo-1568772585407-9361f9bf3a87", alt: "Driving Hero website", tag: "Auto · Festival", name: "DRIVING HERO", desc: "Website festival și competiție — inscrieri, program, bilete. Design auto dinamic adaptat publicului tânăr și pasionat.", delay: "d1" },
];

/* join strings with <br/> between them */
function Lines({ items }: { items: string[] }) {
  return (
    <>
      {items.map((t, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {t}
        </Fragment>
      ))}
    </>
  );
}

function NavLogo() {
  // Flattened vector traced from the brand PDF (Embassy Network_Black Logo).
  // ™ is a real vector glyph here — no font dependency.
  return (
    <svg className="logo-svg" viewBox="0 0 398.8 103.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M 98.777344 22.105469 C 94.8125 23.496094 93.226562 26.566406 94.019531 31.128906 L 107.898438 26.171875 C 106.3125 23 103.140625 20.519531 98.777344 22.105469 M 120.191406 31.921875 C 120.488281 31.820312 120.886719 31.921875 120.886719 32.316406 C 122.074219 38.363281 118.011719 45.503906 108.59375 48.972656 C 97.292969 53.035156 88.765625 48.378906 85.394531 38.859375 C 81.828125 28.949219 85.890625 20.023438 96.695312 16.160156 C 107.503906 12.292969 116.425781 16.753906 120.488281 27.558594 C 120.589844 27.855469 120.390625 28.152344 120.09375 28.351562 L 96.003906 36.976562 C 98.480469 42.726562 101.949219 44.414062 106.710938 42.726562 C 109.980469 41.539062 111.863281 39.257812 111.566406 35.589844 C 111.566406 35.292969 111.765625 34.894531 112.0625 34.796875 Z M 120.191406 31.921875" />
      <path d="M 133.972656 37.175781 L 134.167969 48.476562 C 134.167969 48.773438 133.871094 49.070312 133.574219 49.070312 L 124.058594 49.070312 C 123.761719 49.070312 123.460938 48.773438 123.460938 48.476562 L 123.660156 37.175781 L 123.5625 16.457031 C 123.5625 16.160156 123.859375 15.863281 124.15625 15.863281 L 133.078125 15.863281 C 133.476562 15.863281 133.671875 16.160156 133.671875 16.457031 L 133.476562 20.023438 C 135.953125 16.851562 139.226562 15.070312 143.785156 15.070312 C 148.839844 15.070312 152.3125 17.050781 153.996094 21.3125 C 157.070312 16.257812 160.738281 15.070312 164.902344 15.070312 C 172.136719 15.070312 176.300781 19.132812 176.300781 27.957031 L 176.300781 37.078125 L 176.402344 48.378906 C 176.402344 48.675781 176.101562 48.972656 175.804688 48.972656 L 166.386719 48.972656 C 165.992188 48.972656 165.792969 48.675781 165.792969 48.378906 L 165.992188 37.078125 L 165.992188 28.054688 C 165.992188 24.089844 164.207031 22.105469 161.429688 22.105469 C 158.65625 22.105469 155.085938 25.675781 155.085938 32.417969 L 155.085938 37.078125 L 155.285156 48.378906 C 155.285156 48.675781 154.988281 48.972656 154.691406 48.972656 L 145.371094 48.972656 C 144.976562 48.972656 144.777344 48.675781 144.777344 48.378906 L 144.976562 37.078125 L 144.976562 28.054688 C 144.976562 24.089844 143.289062 22.105469 140.414062 22.105469 C 137.539062 22.105469 134.070312 25.675781 134.070312 32.417969 Z M 133.972656 37.175781" />
      <path d="M 197.316406 43.125 C 202.574219 43.222656 205.347656 39.457031 205.347656 32.714844 C 205.347656 25.378906 202.574219 21.710938 197.515625 21.808594 C 192.460938 21.808594 189.683594 25.28125 189.683594 32.121094 C 189.488281 39.257812 192.261719 43.125 197.316406 43.125 M 200.191406 49.765625 C 195.730469 49.765625 192.261719 48.277344 189.785156 45.601562 L 189.980469 48.574219 C 189.980469 48.875 189.683594 49.171875 189.386719 49.171875 L 180.070312 49.171875 C 179.671875 49.171875 179.472656 48.875 179.472656 48.574219 L 179.671875 26.566406 L 179.472656 4.558594 C 179.472656 4.261719 179.769531 3.964844 180.070312 3.964844 L 189.386719 3.964844 C 189.785156 3.964844 189.980469 4.261719 189.980469 4.558594 L 189.882812 19.726562 C 192.363281 16.851562 195.929688 15.265625 200.390625 15.265625 C 210.601562 15.265625 215.957031 22.703125 215.957031 32.417969 C 215.957031 42.132812 210.007812 49.765625 200.191406 49.765625" />
      <path d="M 236.078125 43.320312 C 241.136719 43.320312 243.910156 39.753906 243.910156 32.714844 C 244.011719 25.675781 241.234375 21.808594 236.277344 21.710938 C 231.023438 21.613281 228.25 25.28125 228.25 32.121094 C 228.347656 39.554688 231.125 43.320312 236.078125 43.320312 M 244.308594 49.070312 C 243.910156 49.070312 243.714844 48.773438 243.714844 48.476562 L 243.8125 45.207031 C 241.332031 48.082031 237.765625 49.667969 233.203125 49.667969 C 222.992188 49.667969 217.640625 42.230469 217.640625 32.515625 C 217.640625 22.800781 223.6875 15.167969 233.402344 15.167969 C 237.863281 15.167969 241.332031 16.65625 243.8125 19.332031 L 243.613281 16.355469 C 243.613281 16.058594 243.910156 15.761719 244.207031 15.761719 L 253.527344 15.761719 C 253.925781 15.761719 254.121094 16.058594 254.121094 16.355469 L 253.925781 32.417969 L 254.121094 48.378906 C 254.121094 48.675781 253.824219 48.972656 253.527344 48.972656 Z M 244.308594 49.070312" />
      <path d="M 274.046875 49.863281 C 263.640625 49.863281 256.898438 45.898438 256.601562 38.5625 C 256.601562 38.265625 256.898438 37.96875 257.195312 37.96875 L 266.117188 37.96875 C 266.515625 37.96875 266.710938 38.265625 266.710938 38.5625 C 267.011719 42.332031 269.6875 43.917969 274.542969 43.917969 C 278.609375 43.917969 280.886719 42.429688 280.886719 39.851562 C 280.886719 33.507812 257.394531 39.652344 257.394531 25.773438 C 257.394531 18.835938 263.34375 15.167969 273.058594 15.167969 C 282.773438 15.167969 288.820312 18.636719 289.414062 25.578125 C 289.511719 25.875 289.214844 26.171875 288.820312 26.171875 L 280.292969 26.171875 C 279.898438 26.171875 279.699219 25.875 279.601562 25.578125 C 279.003906 22.703125 277.121094 21.015625 272.859375 21.015625 C 269.390625 21.015625 267.308594 22.207031 267.308594 24.980469 C 267.308594 31.328125 290.800781 24.882812 290.800781 38.960938 C 290.800781 45.898438 283.761719 49.863281 274.046875 49.863281" />
      <path d="M 309.933594 49.863281 C 299.527344 49.863281 292.785156 45.898438 292.488281 38.5625 C 292.488281 38.265625 292.785156 37.96875 293.082031 37.96875 L 302.003906 37.96875 C 302.402344 37.96875 302.597656 38.265625 302.597656 38.5625 C 302.898438 42.332031 305.574219 43.917969 310.429688 43.917969 C 314.496094 43.917969 316.773438 42.429688 316.773438 39.851562 C 316.773438 33.507812 293.28125 39.652344 293.28125 25.773438 C 293.28125 18.835938 299.230469 15.167969 308.945312 15.167969 C 318.660156 15.167969 324.707031 18.636719 325.300781 25.578125 C 325.398438 25.875 325.101562 26.171875 324.707031 26.171875 L 316.179688 26.171875 C 315.785156 26.171875 315.585938 25.875 315.488281 25.578125 C 314.890625 22.703125 313.007812 21.015625 308.746094 21.015625 C 305.277344 21.015625 303.195312 22.207031 303.195312 24.980469 C 303.195312 31.328125 326.6875 24.882812 326.6875 38.960938 C 326.6875 45.898438 319.648438 49.863281 309.933594 49.863281" />
      <path d="M 346.121094 59.976562 C 346.019531 60.273438 345.625 60.074219 345.226562 60.074219 L 336.503906 60.074219 C 336.207031 60.074219 335.808594 60.273438 335.910156 59.976562 L 339.875 49.46875 L 325.5 16.457031 C 325.398438 16.160156 325.597656 15.960938 325.894531 15.960938 L 336.402344 15.960938 C 336.800781 15.960938 337.097656 16.257812 337.195312 16.457031 L 345.027344 37.175781 L 351.472656 16.457031 C 351.570312 16.160156 351.867188 15.863281 352.265625 15.863281 L 361.585938 15.863281 C 361.980469 15.863281 362.179688 16.160156 361.980469 16.457031 Z M 346.121094 59.976562" />
      <path d="M 149.140625 92.789062 C 148.742188 92.789062 148.542969 92.492188 148.542969 92.195312 L 148.742188 76.828125 L 148.644531 60.175781 C 148.644531 59.878906 148.941406 59.578125 149.238281 59.578125 L 158.0625 59.578125 C 158.457031 59.578125 158.65625 59.878906 158.65625 60.175781 L 158.457031 63.742188 C 160.9375 60.867188 165 58.785156 170.054688 58.785156 C 177.691406 58.785156 182.546875 63.546875 182.546875 71.675781 L 182.546875 78.613281 L 182.746094 92.195312 C 182.746094 92.492188 182.449219 92.789062 182.152344 92.789062 L 172.832031 92.789062 C 172.433594 92.789062 172.238281 92.492188 172.238281 92.195312 L 172.335938 78.613281 L 172.335938 71.773438 C 172.335938 68.203125 170.054688 65.824219 166.882812 65.824219 C 163.117188 65.824219 159.050781 68.996094 159.050781 76.136719 L 159.050781 78.613281 L 159.25 92.195312 C 159.25 92.492188 158.953125 92.789062 158.65625 92.789062 Z M 149.140625 92.789062" />
      <path d="M 199.5 65.824219 C 195.535156 67.214844 193.949219 70.285156 194.742188 74.847656 L 208.621094 69.890625 C 207.035156 66.71875 203.859375 64.238281 199.5 65.824219 M 220.8125 75.640625 C 221.109375 75.539062 221.507812 75.640625 221.507812 76.035156 C 222.695312 82.082031 218.632812 89.222656 209.214844 92.691406 C 197.914062 96.753906 189.386719 92.097656 186.015625 82.578125 C 182.449219 72.664062 186.511719 63.742188 197.316406 59.878906 C 208.125 56.011719 217.046875 60.472656 221.109375 71.375 C 221.210938 71.675781 221.011719 72.070312 220.714844 72.171875 L 196.523438 80.792969 C 199.003906 86.542969 202.472656 88.230469 207.230469 86.542969 C 210.503906 85.355469 212.386719 83.175781 212.089844 79.40625 C 212.089844 79.109375 212.289062 78.710938 212.585938 78.613281 Z M 220.8125 75.640625" />
      <path d="M 245.101562 91.601562 C 245.101562 91.898438 244.804688 92.292969 244.507812 92.394531 C 242.523438 93.085938 240.144531 93.484375 237.964844 93.484375 C 231.917969 93.484375 226.167969 90.609375 226.167969 83.074219 L 226.265625 66.421875 L 222.199219 66.421875 C 221.804688 66.421875 221.605469 66.121094 221.605469 65.824219 L 221.605469 60.175781 C 221.605469 59.878906 221.902344 59.578125 222.199219 59.578125 L 226.265625 59.578125 L 226.167969 51.847656 C 226.167969 51.550781 226.464844 51.253906 226.761719 51.253906 L 236.078125 51.253906 C 236.476562 51.253906 236.675781 51.550781 236.675781 51.847656 L 236.574219 59.578125 L 244.507812 59.578125 C 244.902344 59.578125 245.101562 59.878906 245.101562 60.175781 L 245.101562 65.824219 C 245.101562 66.121094 244.804688 66.421875 244.507812 66.421875 L 236.574219 66.421875 L 236.675781 82.777344 C 236.675781 85.652344 238.261719 86.542969 240.539062 86.542969 C 242.226562 86.542969 243.515625 86.246094 244.605469 85.949219 C 245 85.851562 245.199219 86.148438 245.199219 86.445312 Z M 245.101562 91.601562" />
      <path d="M 277.816406 92.789062 C 277.417969 92.789062 277.121094 92.492188 277.023438 92.195312 L 271.371094 67.808594 L 266.515625 92.195312 C 266.414062 92.492188 266.117188 92.789062 265.722656 92.789062 L 254.71875 92.789062 C 254.320312 92.789062 254.023438 92.492188 253.925781 92.195312 L 246.289062 60.175781 C 246.191406 59.878906 246.488281 59.578125 246.785156 59.578125 L 256.105469 59.578125 C 256.5 59.578125 256.800781 59.878906 256.800781 60.175781 L 260.863281 84.5625 L 265.820312 60.175781 C 265.917969 59.878906 266.214844 59.578125 266.613281 59.578125 L 278.015625 59.578125 C 278.410156 59.578125 278.707031 59.878906 278.808594 60.175781 L 283.566406 84.164062 L 287.828125 60.175781 C 287.828125 59.878906 288.226562 59.578125 288.523438 59.578125 L 296.949219 59.578125 C 297.34375 59.578125 297.542969 59.878906 297.445312 60.175781 L 289.613281 92.195312 C 289.511719 92.492188 289.214844 92.789062 288.820312 92.789062 Z M 277.816406 92.789062" />
      <path d="M 314.992188 87.140625 C 320.144531 87.140625 322.625 83.867188 322.625 76.234375 C 322.625 68.601562 320.144531 65.132812 314.992188 65.132812 C 309.738281 65.230469 307.257812 68.800781 307.257812 76.234375 C 307.257812 83.667969 309.835938 87.140625 314.992188 87.140625 M 314.992188 93.582031 C 303.292969 93.582031 296.550781 86.84375 296.550781 76.234375 C 296.550781 65.628906 303.292969 58.6875 314.992188 58.6875 C 326.6875 58.6875 333.332031 65.429688 333.332031 76.035156 C 333.332031 86.644531 326.789062 93.582031 314.992188 93.582031" />
      <path d="M 336.503906 92.789062 C 336.105469 92.789062 335.910156 92.492188 335.910156 92.195312 L 336.207031 76.136719 L 335.910156 60.175781 C 335.910156 59.878906 336.207031 59.578125 336.503906 59.578125 L 345.523438 59.480469 C 345.921875 59.480469 346.121094 59.679688 346.121094 59.976562 L 346.121094 65.230469 C 348.894531 61.265625 353.753906 59.382812 358.90625 59.382812 C 359.503906 59.382812 360 59.480469 360.492188 59.480469 C 360.890625 59.578125 361.089844 59.878906 361.089844 60.175781 L 361.089844 66.121094 C 361.089844 66.421875 360.792969 66.617188 360.492188 66.617188 C 360.097656 66.519531 359.601562 66.519531 359.203125 66.519531 C 351.769531 66.519531 346.316406 70.285156 346.417969 77.917969 L 346.417969 92.195312 C 346.417969 92.492188 346.121094 92.789062 345.820312 92.789062 Z M 336.503906 92.789062" />
      <path d="M 381.113281 85.851562 L 376.652344 78.515625 L 373.183594 82.480469 L 373.28125 92.195312 C 373.28125 92.492188 372.984375 92.789062 372.6875 92.789062 L 363.566406 92.789062 C 363.171875 92.789062 362.972656 92.492188 362.972656 92.195312 L 363.269531 70.1875 L 362.972656 48.179688 C 362.972656 47.882812 363.269531 47.585938 363.566406 47.585938 L 372.6875 47.585938 C 373.082031 47.585938 373.28125 47.882812 373.28125 48.179688 L 373.082031 69.988281 L 373.082031 71.972656 L 383.492188 59.976562 C 383.789062 59.679688 384.1875 59.480469 384.484375 59.480469 L 394.695312 59.480469 C 394.992188 59.480469 395.089844 59.777344 394.894531 59.976562 L 383.789062 71.476562 L 396.777344 92.195312 C 396.875 92.492188 396.679688 92.691406 396.378906 92.691406 L 385.476562 92.691406 C 385.078125 92.691406 384.683594 92.492188 384.582031 92.195312 Z M 381.113281 85.851562" />
      <path d="M 28.292969 61.066406 L 28.886719 80 L 49.707031 31.722656 L 83.414062 80.398438 L 15.40625 91.402344 L 22.839844 74.648438 L 22.742188 56.902344 L 3.3125 100.917969 L 96.894531 85.851562 L 47.921875 15.960938 Z M 28.292969 61.066406" />
      <path transform="translate(366.55 35.39)" d="M 5.78125 -17.28125 C 5.953125 -17.28125 6.125 -17.453125 6.125 -17.609375 L 6.078125 -23.1875 L 6.125 -27.0625 L 9.03125 -27.0625 C 9.203125 -27.0625 9.375 -27.234375 9.375 -27.40625 L 9.375 -28.8125 C 9.375 -28.984375 9.203125 -29.140625 9.03125 -29.140625 L 0.625 -29.140625 C 0.453125 -29.140625 0.296875 -28.984375 0.296875 -28.8125 L 0.296875 -27.40625 C 0.296875 -27.234375 0.453125 -27.0625 0.625 -27.0625 L 3.546875 -27.0625 L 3.578125 -23.1875 L 3.5 -17.609375 C 3.5 -17.453125 3.671875 -17.28125 3.828125 -17.28125 Z M 12.28125 -25.28125 L 15.15625 -17.578125 C 15.234375 -17.40625 15.40625 -17.28125 15.609375 -17.28125 L 17.078125 -17.28125 C 17.28125 -17.28125 17.453125 -17.40625 17.53125 -17.609375 L 20.203125 -24.9375 L 20.15625 -22.78125 L 20.15625 -17.609375 C 20.15625 -17.453125 20.328125 -17.28125 20.484375 -17.28125 L 22.359375 -17.28125 C 22.53125 -17.28125 22.6875 -17.453125 22.6875 -17.609375 L 22.65625 -23.1875 L 22.6875 -28.8125 C 22.6875 -28.984375 22.53125 -29.140625 22.359375 -29.140625 L 19.953125 -29.140625 C 19.734375 -29.140625 19.578125 -29.03125 19.484375 -28.8125 L 16.53125 -20.53125 L 13.40625 -28.859375 C 13.328125 -29.03125 13.15625 -29.140625 12.953125 -29.140625 L 10.375 -29.140625 C 10.203125 -29.140625 10.03125 -28.984375 10.03125 -28.8125 L 10.078125 -23.1875 L 10.03125 -17.609375 C 10.03125 -17.453125 10.203125 -17.28125 10.375 -17.28125 L 12.03125 -17.28125 C 12.203125 -17.28125 12.375 -17.453125 12.375 -17.609375 L 12.375 -22.78125 Z M 12.28125 -25.28125" />
    </svg>
  );
}

/* Prime an autoplay video for Safari/iOS. React's `muted` attr alone can fail
   to reflect (blocks autoplay), and iOS frequently ignores the `autoPlay`
   attribute for hydrated elements — it just parks on the poster. So force the
   muted *property* + inline attrs, then kick play() once it can actually play.
   The play() promise rejects on non-user-gesture blocks; swallow it. */
const primeVideo = (el: HTMLVideoElement | null) => {
  if (!el) return;
  el.muted = true;
  el.defaultMuted = true;
  el.setAttribute("muted", "");
  el.setAttribute("playsinline", "");
  el.setAttribute("webkit-playsinline", ""); // legacy iOS
  const tryPlay = () => {
    const p = el.play();
    if (p) p.catch(() => {});
  };
  if (el.readyState >= 2) tryPlay();
  else el.addEventListener("canplay", tryPlay, { once: true });
};

/* pick the device-appropriate encode: foo.mp4 → foo-phone.mp4 / foo-desktop.mp4 */
const videoVariant = (path: string, mobile: boolean) =>
  path.replace(/\.mp4$/i, mobile ? "-phone.mp4" : "-desktop.mp4");

/* poster frame shown while the video loads: foo.mp4 → foo-poster.webp */
const videoPoster = (path: string) => path.replace(/\.mp4$/i, "-poster.webp");

/* track the mobile breakpoint (matches the CSS 900px switch) */
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return mobile;
}

/* portrait reels as a hero background — desktop: all side by side in one panel;
   mobile: one at a time, advancing to the next when each ends. (GOC, TDC) */
function ReelsHero({ videos }: { videos: string[] }) {
  const isMobile = useIsMobile();
  const [idx, setIdx] = useState(0);

  if (isMobile) {
    return (
      <div className="goc-reels-mobile">
        {/* key remounts on index change so the next reel loads + autoplays from 0 */}
        <video
          key={idx}
          ref={primeVideo}
          src={encodeURI(videoVariant(videos[idx], isMobile))}
          poster={encodeURI(videoPoster(videos[idx]))}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setIdx((i) => (i + 1) % videos.length)}
        />
      </div>
    );
  }

  return (
    <div className="goc-reels">
      {videos.map((v) => (
        <video
          key={v}
          ref={primeVideo}
          className="goc-reel"
          src={encodeURI(videoVariant(v, isMobile))}
          poster={encodeURI(videoPoster(v))}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ))}
    </div>
  );
}

/* Fullscreen video modal — opens with sound + controls (user gesture), closes
   on backdrop click / × / Esc, and locks page scroll while open. */
function VideoModal({ src, onClose }: { src: string | null; onClose: () => void }) {
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;
  return (
    <div className="vmodal" onClick={onClose} role="dialog" aria-modal="true">
      <button className="vmodal-close" onClick={onClose} aria-label="Închide">
        ×
      </button>
      <video
        className="vmodal-video"
        src={encodeURI(videoVariant(src, isMobile))}
        poster={encodeURI(videoPoster(src))}
        autoPlay
        controls
        playsInline
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const closeModal = useCallback(() => setModalSrc(null), []);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const els = Array.from(document.querySelectorAll<HTMLElement>(".embassy-portfolio .r"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const t = entry.target as HTMLElement;
            window.setTimeout(() => t.classList.add("v"), i * 70);
            obs.unobserve(t);
          }
        });
      },
      { threshold: 0.06 },
    );
    els.forEach((el) => obs.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? "scrolled" : undefined}>
        <Link href="/" className="nav-back">Embassy Network</Link>
        <a href="#hero" className="nav-logo" aria-label="Embassy Network — sus">
          <NavLogo />
        </a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div id="hero-bg" />
        <div className="hero-c r">
          <p className="hero-eyebrow">Selected Works · 2023 — 2025</p>
          <h1 className="h1">OUR<br /><FillText className="out">WORK</FillText><br />SPEAKS</h1>
          <p className="hero-sub r d1">8 proiecte. 4 industrii. Un singur standard: calitate fără compromisuri.</p>
          <div className="hero-stats r d2">
            {HERO_STATS.map((s, i) => (
              <div className="stat" key={s.l}>
                <div className="stat-n"><CountUp value={s.n} index={i} /></div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-scroll"><div className="s-line" />scroll</div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="sl r">Portofoliu</div>
        <p className="intro-t r d1">
          <SplitWords className="dim" text="Fiecare proiect e o poveste." /><br />
          Strategie pusă în practică, conținut construit cu intenție, rezultate care rămân.
        </p>
      </section>

      {/* MARQUEE — 3 copies so the loop unit always exceeds the viewport (no gap on ultrawide) */}
      <div className="mq">
        <div className="mq-t">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="mi" key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* CAPITOL I — SOCIAL MEDIA */}
      <div className="section-title">
        <div>
          <div className="sl r">Capitol I</div>
          <h2 className="r d1">SOCIAL<br />MEDIA &amp;<br /><FillText className="out">MARKETING</FillText></h2>
        </div>
        <p className="r d2">Strategie, conținut și comunitate pentru branduri din medical, beauty, tech și entertainment.</p>
      </div>

      {/* PROJECT SCENES */}
      {PROJECTS.map((p) => (
        <Fragment key={p.id}>
          <div className="ps" id={p.id}>
            {p.heroReels ? (
              <ReelsHero videos={p.heroReels} />
            ) : p.bgVideo ? (
              <video
                className="ps-bg-video"
                ref={primeVideo}
                src={encodeURI(videoVariant(p.bgVideo, isMobile))}
                poster={encodeURI(videoPoster(p.bgVideo))}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              <div className="ps-bg" style={{ backgroundImage: `url('${img(p.bg, 2000)}')` }} />
            )}
            <div className="ov-b" />
            <div className="ov-l" />
            <div className="pc">
              <div className="r">
                <div className="pi">{p.index}</div>
                <div className="p-ind">{p.cat}</div>
                <SplitLines className="pn" items={p.name} />
              </div>
              <div className="pr r d1">
                <div className="pt">{p.headline}</div>
                <p className="pd">{p.desc}</p>
              </div>
            </div>
          </div>

          <DetailCards details={p.details} />

          <div className="res">
            <div className="rg r">
              {p.results.map((r, i) => (
                <div className="rc" key={r.l}>
                  <div className="rn"><CountUp value={r.n} index={i} /></div>
                  <div className="rl">{r.l}</div>
                </div>
              ))}
            </div>
          </div>

          {p.reels ? (
            <div className="reels-band">
              {p.reels.map((v, i) => (
                <button
                  type="button"
                  className="reel-card"
                  key={i}
                  onClick={() => setModalSrc(v)}
                  aria-label="Redă videoclipul pe tot ecranul"
                >
                  <video ref={primeVideo} src={encodeURI(videoVariant(v, isMobile))} poster={encodeURI(videoPoster(v))} autoPlay muted loop playsInline preload="metadata" />
                  <span className="reel-play" aria-hidden>
                    ⤢
                  </span>
                </button>
              ))}
            </div>
          ) : p.stripVideos ? (
            <div
              className="strip strip-video"
              style={{ gridTemplateColumns: `repeat(${p.stripVideos.length}, 1fr)` }}
            >
              {p.stripVideos.map((v, i) => (
                <button
                  type="button"
                  className="si si-video"
                  key={i}
                  onClick={() => setModalSrc(v)}
                  aria-label="Redă videoclipul pe tot ecranul"
                >
                  <video ref={primeVideo} src={encodeURI(videoVariant(v, isMobile))} poster={encodeURI(videoPoster(v))} autoPlay muted loop playsInline preload="metadata" />
                  <span className="si-play" aria-hidden>
                    ⤢
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="strip">
              {p.strip.map((s, i) => (
                <div className="si" key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img(s, 900)} alt="" />
                </div>
              ))}
            </div>
          )}

          {p.next && (
            <div className="conn r">
              <span className="cl">Următor</span>
              <div className="cln" />
              <span className="cn">{p.next}</span>
            </div>
          )}
        </Fragment>
      ))}

      {/* QUOTE */}
      <div className="qs">
        <div className="qb" style={{ backgroundImage: `url('${img("photo-1557804506-669a67965ba0", 2000)}')` }} />
        <div className="qo" />
        <div className="qc r">
          <div className="qm">&ldquo;</div>
          <Typewriter className="qt" text="Embassy Network nu e doar o agenție — e un partener care înțelege businessul tău și construiește comunicarea ca și cum ar fi a lor." />
          <p className="qa">Client · Portofoliu Embassy Network</p>
        </div>
      </div>

      {/* CAPITOL II — MATERIALE PROMO */}
      <div className="section-title" id="promo">
        <div>
          <div className="sl r">Capitol II</div>
          <h2 className="r d1">MATERIALE<br />DE<br /><FillText className="out">PROMOVARE</FillText></h2>
        </div>
        <p className="r d2">Animații 3D, motion graphics și producție vizuală pentru branduri naționale și internaționale.</p>
      </div>

      <div className="promo-intro">
        <p className="intro-t r" style={{ fontSize: "clamp(24px,2.8vw,40px)" }}>
          <SplitWords className="dim" text="Producție vizuală care depășește ecranul." /><br />
          Animații 3D și motion graphics pentru Kiss FM, Pepsi și Michelin.
        </p>
      </div>

      <div className="promo-grid" style={{ margin: "0 64px", border: "1px solid var(--line)" }}>
        {PROMO.map((c) => (
          <div className={`promo-card r${c.delay ? ` ${c.delay}` : ""}`} key={c.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="promo-card-img" src={img(c.img, 800)} alt={c.alt} />
            <div className="promo-card-ov" />
            <div className="promo-card-content">
              <span className="promo-tag">{c.tag}</span>
              <div className="promo-name">{c.name}</div>
              <p className="promo-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="promo-note">
        <p>* Animațiile 3D și materialele de promovare vor fi vizualizate în această secțiune. Conținutul final va fi actualizat cu fișierele video exportate.</p>
      </div>

      {/* CAPITOL III — GRAFICĂ */}
      <div className="section-title" id="grafica">
        <div>
          <div className="sl r">Capitol III</div>
          <h2 className="r d1">GRAFICĂ &amp;<br /><FillText className="out">IDENTITATE</FillText></h2>
        </div>
        <p className="r d2">Brand books, identitate vizuală și design grafic pentru clienți cu standarde premium.</p>
      </div>

      <div className="grafica-grid" style={{ margin: "0 64px", border: "1px solid var(--line)" }}>
        {GRAFICA.map((g) => (
          <div className={`gc gc-tall r${g.delay ? ` ${g.delay}` : ""}`} key={g.tag}>
            <div className="gc-placeholder">
              <p className="gc-ph-label"><Lines items={g.phLabel} /></p>
            </div>
            <div className="gc-ov" />
            <div className="gc-content">
              <span className="gc-tag">{g.tag}</span>
              <div className="gc-name"><Lines items={g.name} /></div>
              <p className="gc-desc">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="promo-note" style={{ marginTop: "1px" }}>
        <p>* Imaginile finale din brand book și logo vor fi uploadate în această secțiune. Placeholder-ele sunt rezervate pentru materialele livrate.</p>
      </div>

      {/* CAPITOL IV — WEBSITES */}
      <div className="section-title" id="websites">
        <div>
          <div className="sl r">Capitol IV</div>
          <h2 className="r d1">WEB<br /><FillText className="out">DESIGN</FillText></h2>
        </div>
        <p className="r d2">Website-uri construite pentru conversie, estetică premium și experiență de utilizator fără fricțiune.</p>
      </div>

      <div className="web-grid" style={{ margin: "0 64px", border: "1px solid var(--line)" }}>
        {WEBSITES.map((w) => (
          <div className={`wc r${w.delay ? ` ${w.delay}` : ""}`} key={w.url}>
            <div className="wc-browser">
              <div className="browser-bar">
                <div className="browser-dots"><div className="bdot" /><div className="bdot" /><div className="bdot" /></div>
                <div className="browser-url">{w.url}</div>
              </div>
              <div className="browser-body">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(w.img, 900)} alt={w.alt} />
              </div>
            </div>
            <div className="wc-info">
              <span className="wc-tag">{w.tag}</span>
              <div className="wc-name">{w.name}</div>
              <p className="wc-desc">{w.desc}</p>
              <a href={w.href} className="wc-url" target="_blank" rel="noopener noreferrer">{w.url} ↗</a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-b">
        <div className="cta-bg" />
        <div className="cta-ov" />
        <div className="cta-c r">
          <p className="cta-eye">Vrei să fii următorul proiect?</p>
          <h2 className="cta-t">HAI SĂ<br /><FillText className="out">CONSTRUIM</FillText><br />ÎMPREUNĂ</h2>
          <br />
          <a href="mailto:hello@embassynetwork.ro" className="cta-e">hello@embassynetwork.ro</a><br />
          <Link href="/" className="btn-s" style={{ marginTop: "28px" }}>← Înapoi la site</Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <a href="#hero" className="fl" aria-label="Embassy Network — sus">
          <svg className="logo-svg" viewBox="0 0 100 103.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="26.9,61.6 27.5,80.7 48.5,32 82.5,81.1 13.9,92.2 21.4,75.3 21.3,57.4 1.7,101.8 96.1,86.6 46.7,16.1" />
          </svg>
        </a>
        <p className="fc">© 2025 Embassy Network™ · Portfolio</p>
        <ul className="flinks">
          <li><a href="#goc">Social Media</a></li>
          <li><a href="#promo">Promo</a></li>
          <li><a href="#grafica">Grafică</a></li>
          <li><a href="#websites">Web</a></li>
        </ul>
      </footer>

      <VideoModal src={modalSrc} onClose={closeModal} />
    </>
  );
}
