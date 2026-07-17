"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import FillText from "./FillText";
import SplitLines from "./SplitLines";
import SplitWords from "./SplitWords";
import DetailCards from "./DetailCards";
import Typewriter from "./Typewriter";
import { useInViewport } from "./use-in-view";

/* ── data ───────────────────────────────────────────────────────────────
   Placeholder Unsplash images are kept from the original mockup — swap the
   ids / phLabel entries for real assets later; markup below stays untouched. */

/* Unsplash id → CDN url; a local path ("/GOG.webp") is served as-is. */
const img = (id: string, w: number) =>
  id.startsWith("/")
    ? id
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const HERO_STATS = [
  { n: "15+", l: "Proiecte" },
  { n: "4", l: "Industrii" },
  { n: "4+", l: "Ani experiență" },
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
  cat: string;
  name: string[];
  headline: string;
  desc: string;
  details: [Detail, Detail, Detail];
  results: { n: string; l: string }[];
  /* "<unsplash id | local path>" + optional "|<object-position>". The strip cell
     is landscape, so a portrait shot keeps only a ~46%-tall band of its height —
     the focal hint aims that band at the subject instead of the frame centre.
     1 entry → full-width cell, 2 → side by side. Omit for a video-only scene. */
  strip?: string[];
  /* portrait still gallery — 4-up single container on desktop, swipe carousel
     on phone. Full brightness, no fullscreen modal (unlike `strip`). */
  gallery?: string[];
  bgVideo?: string;
  stripVideos?: string[]; // landscape (16:9) videos in the strip cells (1–2)
  stripRatio?: string; // aspect-ratio for stripVideos cells; default "16 / 9". Square social clips → "1 / 1"
  stripStack?: boolean; // stack stripVideos vertically (one per row) instead of side by side
  reels?: string[]; // portrait (9:16) videos in the reels band
  heroReels?: string[]; // portrait reels shown as the hero background (GOC / TDC)
  youtube?: { id: string; poster: string }; // clip too big to self-host — links out
  next?: string;
};

const PROJECTS: Project[] = [
  {
    id: "goc",
    bg: "photo-1596462502278-27bfdc403348",
    cat: "Beauty · Brand Strategy · Social Media",
    name: ["GIRLS OWN", "COSMETICS"],
    headline: "UN BRAND NU SE CONSTRUIEȘTE ÎNTR-O CAMPANIE.",
    desc: "De aproape patru luni dezvoltăm comunicarea Girls Own Cosmetics printr-o strategie integrată, în care fiecare piesă de conținut contribuie la aceeași direcție. Rezultatul? O identitate mai coerentă, o comunitate mai implicată și o creștere constantă a vânzărilor.",
    details: [
      { label: "Rolul nostru", value: "Brand & Social Strategy", text: "Am construit direcția de comunicare a Girls Own Cosmetics, de la strategie și poziționare până la direcția creativă, producția de conținut și campaniile digitale. Fiecare acțiune face parte dintr-un sistem construit pentru creștere, nu din inițiative izolate.", tags: ["Strategy", "Content", "Paid Media", "Creative Direction"] },
      { label: "Rezultate", value: "3,5M Views", text: "În primele trei luni ale colaborării, strategia de conținut a generat peste 3,5 milioane de vizualizări, a atras aproape 2.000 de urmăritori noi și a consolidat vizibilitatea brandului printr-o comunicare coerentă și orientată spre performanță.", tags: ["First 3 Months", "+1.9K Followers"] },
      { label: "Status", value: "Parteneriat activ", text: "Colaborarea continuă prin dezvoltarea strategiei de comunicare, producția de conținut, optimizarea campaniilor și consolidarea prezenței digitale. Construim un brand cu o direcție clară și rezultate care evoluează în timp.", tags: ["Ongoing", "50+ Posts Managed"] },
    ],
    results: [
      { n: "3,5M", l: "Vizualizări în 3 luni" },
      { n: "+1,9K", l: "Urmăritori noi" },
      { n: "50+", l: "Postări gestionate" },
      { n: "Activ", l: "Parteneriat în desfășurare" },
    ],
    gallery: ["/GOG.webp", "/GOG2.webp", "/GOG3.webp", "/GOG4.webp"],
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
    cat: "Medical · Dental · Brand Building",
    name: ["MAVES", "DENTAL"],
    headline: "De la idee la identitate.",
    desc: "Maves Dental a început cu o viziune. Noi am transformat-o într-un brand. De la nume, logo și identitate vizuală, până la poziționare, website și direcția de comunicare, fiecare element a fost construit pentru a inspira încredere și a diferenția clinica încă din prima interacțiune.",
    details: [
      { label: "Rolul nostru", value: "Brand 0→1", text: "Am construit fundația brandului Maves Dental, definind identitatea vizuală, poziționarea și ecosistemul digital. De la logo și brandbook, până la website, sistemul de conținut și direcția de comunicare, fiecare element a fost creat pentru a susține dezvoltarea clinicii pe termen lung.", tags: ["Brand Identity", "Website", "Content System"] },
      { label: "Rezultate", value: "500K Views", text: "În primele trei luni de comunicare, strategia de conținut a generat peste 500.000 de vizualizări și a atras aproximativ 1000 de urmăritori organici, validând poziționarea și direcția brandului încă din etapa de lansare.", tags: ["First 3 Months", "+1000 Organic Followers"] },
      { label: "Parteneriat", value: "Brand + Digital", text: "Colaborarea continuă prin dezvoltarea comunicării și optimizarea prezenței digitale. De la identitatea de brand la conținut și website, construim un ecosistem coerent, gândit să susțină creșterea clinicii în fiecare etapă.", tags: ["Ongoing", "Bucharest"] },
    ],
    results: [
      { n: "500K", l: "Vizualizări în 3 luni" },
      { n: "+1000", l: "Urmăritori organici" },
      { n: "5", l: "Piloni de conținut" },
      { n: "1", l: "Brand construit de la zero" },
    ],
    bgVideo: "/maves/Maves v3.mp4",
    reels: ["/maves/14.mp4", "/maves/2.mp4", "/maves/Maves feedback.mp4"],
    next: "03 — True Dental Care →",
  },
  {
    id: "tdc",
    bg: "photo-1606811971618-4486d14f3f99",
    cat: "Medical · Dental · Brand Refresh",
    name: ["TRUE", "DENTAL CARE"],
    headline: "Încrederea începe înaintea consultației.",
    desc: "Am construit un sistem de comunicare care transformă primul contact cu brandul într-o experiență clară, coerentă și memorabilă.",
    details: [
      { label: "Rolul nostru", value: "Brand + Communication", text: "Am redefinit comunicarea True Dental Care printr-un sistem construit în jurul clarității, încrederii și consecvenței. De la direcția vizuală și strategia de conținut până la producția foto-video și gestionarea comunicării, fiecare element a fost gândit pentru a consolida percepția unui brand medical premium.", tags: ["Brand Strategy", "Content System", "Social Media"] },
      { label: "Rezultate", value: "200K Views", text: "Strategia de conținut a generat peste 200.000 de vizualizări organice și a atras 500 de urmăritori noi, consolidând vizibilitatea brandului și susținând o comunicare mai clară și mai coerentă.", tags: ["First 3 Months", "+500 Organic Followers"] },
      { label: "Parteneriat", value: "Brand Direction", text: "Colaborarea continuă prin dezvoltarea comunicării digitale și optimizarea constantă a conținutului. Construim o prezență coerentă, orientată spre încredere, educație și o experiență premium pentru fiecare pacient.", tags: ["Ongoing", "Cotroceni"] },
    ],
    results: [
      { n: "200K", l: "Vizualizări organice" },
      { n: "+500", l: "Urmăritori noi" },
      { n: "Ongoing", l: "Parteneriat activ" },
      { n: "Premium", l: "Poziționare de brand" },
    ],
    gallery: ["/truedental/image.webp", "/truedental/image2.webp", "/truedental/image3.webp", "/truedental/image4.webp"],
    heroReels: ["/truedental/1.mp4", "/truedental/2.mp4", "/truedental/4.mp4"],
    next: "04 — Osteopath Concept →",
  },
  {
    id: "osteopath",
    bg: "/osteopath/CXE05967.webp", // fallback — bgVideo is the live background
    cat: "Medical · Osteopatie · Chiropractică",
    name: ["OSTEOPATH", "CONCEPT"],
    headline: "4 locații. Un singur brand. O singură viziune.",
    desc: "O rețea medicală aflată în continuă dezvoltare are nevoie de mai mult decât promovare. Are nevoie de consecvență. Pentru Osteopath Concept, construim un sistem unitar de comunicare care conectează fiecare locație sub aceeași identitate de brand.",
    details: [
      { label: "Rolul nostru", value: "Brand Ecosystem", text: "Pentru Osteopath Concept dezvoltăm și coordonăm întregul ecosistem de comunicare al brandului. De la strategie, website și producție de conținut până la identitate vizuală, materiale pentru clinici și campanii digitale, fiecare element este construit pentru a susține dezvoltarea unei rețele medicale moderne.", tags: ["Brand Strategy", "Website", "Content System", "Creative"] },
      { label: "Servicii", value: "360° Communication", text: "Website, social media, producție video, materiale print, branding interior și comunicare digitală integrate într-un singur sistem.", tags: ["360°", "Website", "Production"] },
      { label: "Parteneriat", value: "Long-Term Development", text: "Colaborarea continuă prin dezvoltarea comunicării, lansarea noilor locații și consolidarea poziționării Osteopath Concept ca unul dintre cele mai puternice branduri din domeniul recuperării medicale.", tags: ["Ongoing", "Multi Location"] },
    ],
    results: [
      { n: "4", l: "Locații" },
      { n: "360°", l: "Comunicare" },
      { n: "Ongoing", l: "Parteneriat activ" },
      { n: "1", l: "Ecosistem de brand" },
    ],
    bgVideo: "/osteopath/video prezentare website.mp4",
    reels: ["/osteopath/0306(1).mp4", "/osteopath/Laurentiu-7septembrie-3.mp4"],
    next: "05 — Chiropractor.ro →",
  },
  {
    id: "chiropractor",
    bg: "photo-1519824145371-296894a0daa9",
    cat: "Medical · Chiropractică · Community",
    name: ["CHIROPRACTOR.RO"],
    headline: "Am construit mai mult decât un brand. Am construit un punct de referință.",
    desc: "Un hub creat de Embassy Network, care reunește expertiza într-un singur loc, prin educație, claritate și încredere.",
    details: [
      { label: "Rolul nostru", value: "Community Building", text: "Am creat Chiropractor.ro ca un proiect dedicat educației, informării și conectării comunității din jurul chiropracticii și terapiei manuale. Am dezvoltat întregul ecosistem: strategie, conținut, identitate digitală și managementul comunității.", tags: ["Education", "Community", "Content"] },
      { label: "Rezultate", value: "50K+ Followers", text: "O comunitate construită exclusiv prin conținut educațional și creștere organică. Cu peste 50.000 de urmăritori, 500+ materiale publicate și o strategie consecventă, Chiropractor.ro a devenit cel mai urmărit proiect din nișa sa.", tags: ["100% Organic", "500+ Posts"] },
      { label: "Proiect", value: "Embassy Original", text: "Un proiect inițiat și dezvoltat integral de Embassy Network, creat pentru a demonstra cum strategia, conținutul și consecvența pot transforma o nișă într-o comunitate activă și într-o sursă credibilă de informare.", tags: ["Owned Project", "Ongoing"] },
    ],
    results: [
      { n: "+50K", l: "Urmăritori" },
      { n: "521", l: "Postări publicate" },
      { n: "100%", l: "Creștere organică" },
      { n: "1 hub", l: "De specialiști medicali" },
    ],
    strip: ["/chiropactor/IMG_5310.webp", "/chiropactor/IMG_5190.webp|center bottom"],
    heroReels: ["/chiropactor/Clip 22.mp4", "/chiropactor/giovani.mp4", "/chiropactor/Clip 5.mp4"],
    next: "06 — Flystack Drone Shows →",
  },
  {
    id: "flystack",
    bg: "photo-1473968512647-3e447244af8f",
    cat: "Tech · Events · Entertainment",
    name: ["FLYSTACK DRONE SHOWS"],
    headline: "The show ends. The brand continues.",
    desc: "Am construit un ecosistem care transformă fiecare spectacol într-un activ de brand. De la website și strategie până la conținut cinematic și randări 3D, fiecare livrabil a fost creat pentru ca impactul unui show să continue mult după stingerea luminilor.",
    details: [
      { label: "Rolul nostru", value: "Digital Ecosystem", text: "Am construit ecosistemul digital al Flystack Drone Shows, reunind website-ul, strategia de comunicare, producția foto-video, aftermovie-urile și conținutul 3D într-un sistem unitar, creat pentru un brand cu ambiții internaționale.", tags: ["Website", "Content", "Video", "3D"] },
      { label: "Impact", value: "Brand in Motion", text: "Am transformat fiecare spectacol într-un activ de brand. De la randări 3D și conținut cinematic până la materiale pentru promovare și website, fiecare livrabil a fost gândit pentru ca impactul unui show să continue mult după stingerea luminilor.", tags: ["Digital Presence", "Multi-Format Content"] },
      { label: "Status", value: "Project Completed", text: "Am livrat întregul ecosistem digital pentru proiectele Flystack din România și Marea Britanie, oferind brandului o bază solidă pentru comunicare și dezvoltare internațională.", tags: ["Romania & UK", "Completed"] },
    ],
    results: [
      { n: "1", l: "Website construit" },
      { n: "Live Shows", l: "Filmări & aftermovies" },
      { n: "360°", l: "Producție foto-video & 3D" },
      { n: "Global", l: "Prezență internațională" },
    ],
    bgVideo: "/flystack/Aftermovie Casa Timis 17 Jan v4.mp4",
    stripVideos: ["/flystack/Aftermovie Neversea x Flystack (1).mp4", "/flystack/NOVA RENDER FINAL CUTS (1).mp4"],
    stripStack: true,
    next: "07 — Driving Hero →",
  },
  {
    id: "drivinghero",
    bg: "photo-1568772585407-9361f9bf3a87",
    cat: "Auto · Events · Festival",
    name: ["DRIVING", "HERO"],
    headline: "Primul festival auto de conducere defensivă din România",
    desc: "Bootcamp competitiv de conducere defensivă — parteneriat Romania Driving Experience & Politehnica București. Festival 3 zile la Motorpark, premiu 5.000€. Comunicare digitală completă a evenimentului.",
    details: [
      { label: "Rolul nostru", value: "Event Content", text: "Am dezvoltat identitatea vizuală a comunicării pentru Driving Hero prin conținut digital și materiale promoționale dedicate evenimentului. De la postările pentru social media până la vizualurile outdoor și materialele difuzate în parteneriate media, fiecare element a fost creat pentru a susține vizibilitatea festivalului.", tags: ["Digital Content", "Print", "Campaign Visuals"] },
      { label: "Impact", value: "Visible before. During. After.", text: "Am creat un sistem vizual coerent pentru toate etapele campaniei, contribuind la promovarea evenimentului atât în mediul digital, cât și prin materiale offline dedicate.", tags: ["Digital Campaign", "Event Visuals"] },
      { label: "Context", value: "National Event", text: "Driving Hero este un festival dedicat comunității auto, desfășurat la MotorPark România, care reunește competiții, demonstrații și experiențe dedicate pasionaților de motorsport.", tags: ["Edition I", "MotorPark România"] },
    ],
    results: [
      { n: "Social Media", l: "Comunicare digitală" },
      { n: "Print", l: "Materiale promoționale" },
      { n: "Outdoor", l: "Campanie Metro & locații partenere" },
      { n: "Event", l: "Identitate vizuală pentru festival" },
    ],
    bgVideo: "/drivinghero/POST 1 (1) (1).mp4",
    stripVideos: ["/drivinghero/Post 1 (2).mp4", "/drivinghero/Post 1 (1) (2).mp4"],
    stripRatio: "1 / 1", // these are 1280×1280 square social posts, not 16:9
    next: "08 — Race Box →",
  },
  /* TODO: placeholder copy + borrowed Unsplash imagery — swap for real assets. */
  {
    id: "racebox",
    bg: "photo-1568772585407-9361f9bf3a87",
    cat: "Auto · Tech · Motorsport",
    name: ["RACE", "BOX"],
    headline: "Lorem ipsum dolor sit amet, consectetur.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    details: [
      { label: "Ce am făcut", value: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua veniam quis.", tags: ["Lorem", "Ipsum", "Dolor"] },
      { label: "Rezultate", value: "000K Views", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", tags: ["3 Months", "+000 Followers"] },
      { label: "Status", value: "Lorem", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.", tags: ["Ongoing", "Lorem Ipsum"] },
    ],
    results: [
      { n: "000K", l: "Lorem ipsum dolor" },
      { n: "+000", l: "Consectetur adipiscing" },
      { n: "00", l: "Sed do eiusmod" },
      { n: "100%", l: "Tempor incididunt" },
    ],
    strip: ["photo-1552519507-da3b142c6e3d", "photo-1492144534655-ae79c964c9d7"],
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

/* Each card shows real work: `video` when that's all the project shot, otherwise
   a still. The clips are purpose-built encodes (public/webcards) — the sources
   are 16:9, 9:16 and 1:1, and none of them fit a 16:10 browser mockup; each is
   letterboxed into frame over a blurred fill of itself. `img` is the fallback. */
const WEBSITES: { url: string; href: string; img: string; video: string; alt: string; tag: string; name: string; desc: string; delay: string; pos?: string }[] = [
  { url: "flystackdroneshows.com", href: "https://flystackdroneshows.com", img: "photo-1506947411487-a56738267384", video: "/webcards/flystack.mp4", alt: "Flystack website", tag: "Tech · Entertainment", name: "FLYSTACK DRONE SHOWS", desc: "Website complet pentru furnizorul premium global de spectacole cu drone. Design cinematic, animații, secțiuni de proiecte și contact.", delay: "" },
  { url: "osteopathconcept.com", href: "https://osteopathconcept.com", img: "photo-1576091160550-2173dba999ef", video: "/webcards/osteopath.mp4", alt: "Osteopath website", tag: "Medical · Multi-locație", name: "OSTEOPATH CONCEPT", desc: "Website pentru rețea de clinici de osteopatie și chiropractică — 4 locații, programări online, prezentare servicii și echipă.", delay: "d1" },
  { url: "mavesdental.ro", href: "https://mavesdental.ro", img: "/webcards/maves-poster.webp", video: "/webcards/maves.mp4", alt: "Maves Dental website", tag: "Medical · Dental", name: "MAVES DENTAL", desc: "Website premium pentru clinica stomatologică Maves Dental — identitate de brand, prezentare servicii și experiență de programare clară.", delay: "" },
  { url: "virgilmanescu.ro", href: "https://virgilmanescu.ro", img: "/webcards/virgil.webp", video: "", alt: "Virgil Mănescu website", tag: "Personal Brand", name: "VIRGIL MĂNESCU", desc: "Website de prezentare personal — identitate digitală și poziționare online pentru brandul personal.", delay: "d1" },
  { url: "drivinghero.ro", href: "https://drivinghero.ro", img: "photo-1568772585407-9361f9bf3a87", video: "/webcards/drivinghero.mp4", alt: "Driving Hero website", tag: "Auto · Festival", name: "DRIVING HERO", desc: "Website festival și competiție — inscrieri, program, bilete. Design auto dinamic adaptat publicului tânăr și pasionat.", delay: "d1" },
  { url: "vasconylatelier.com", href: "https://www.vasconylatelier.com/", img: "/webcards/vascony.webp", video: "", alt: "Vascony l'Atelier website", tag: "Interior · Design", name: "VASCONY L'ATELIER", desc: "Website de prezentare pentru atelier de design interior și mobilier premium — galerie de proiecte și identitate rafinată.", delay: "", pos: "center" },
];

/* "03 / 08" — derived from position so adding a project can't strand a stale count */
const sceneIndex = (i: number, total: number) =>
  `${String(i + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

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

/* Lazy autoplay video. Shows the poster immediately but only attaches the
   <source> once the element is within 400px of the viewport (or right away for
   `eager`, above-the-fold clips) — a long page never fetches every video at
   once. Picks exactly ONE encode, phone OR desktop, never both: src stays unset
   until after mount, by which point the breakpoint is resolved. */
function LazyVideo({
  base,
  className,
  eager = false,
  loop = true,
  forceMobile,
  onEnded,
}: {
  base: string;
  className?: string;
  eager?: boolean;
  loop?: boolean;
  forceMobile?: boolean;
  onEnded?: () => void;
}) {
  const auto = useIsMobile();
  const mobile = forceMobile ?? auto;
  const [ref, inView] = useInViewport<HTMLVideoElement>({
    amount: 0,
    rootMargin: "400px",
    once: true,
  });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const active = mounted && (eager || inView);
  useEffect(() => {
    if (active && ref.current) primeVideo(ref.current);
  }, [active, ref]);

  return (
    <video
      ref={ref}
      className={className}
      src={active ? encodeURI(videoVariant(base, mobile)) : undefined}
      poster={encodeURI(videoPoster(base))}
      autoPlay
      muted
      loop={loop}
      playsInline
      preload={eager ? "auto" : "none"}
      onEnded={onEnded}
    />
  );
}

/* portrait reels as a hero background — desktop: all side by side in one panel;
   mobile: one at a time, advancing to the next when each ends. (GOC, TDC)
   `eager` loads immediately (first project, above the fold); others lazy-load. */
function ReelsHero({ videos, eager = false }: { videos: string[]; eager?: boolean }) {
  const isMobile = useIsMobile();
  const [idx, setIdx] = useState(0);

  if (isMobile) {
    return (
      <div className="goc-reels-mobile">
        {/* key remounts on index change so the next reel loads + autoplays from 0 */}
        <LazyVideo
          key={idx}
          base={videos[idx]}
          forceMobile
          eager={eager}
          loop={false}
          onEnded={() => setIdx((i) => (i + 1) % videos.length)}
        />
      </div>
    );
  }

  return (
    <div
      className="goc-reels"
      style={{ gridTemplateColumns: `repeat(${videos.length}, 1fr)` }}
    >
      {videos.map((v) => (
        <LazyVideo key={v} base={v} className="goc-reel" forceMobile={false} eager={eager} />
      ))}
    </div>
  );
}

/* Portrait still gallery: 4-up grid on desktop, swipe carousel on phone.
   Arrows are the carousel affordance — shown only on the phone layout (CSS),
   they scroll the native snap container by ~one card. */
function Gallery({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.82, behavior: "smooth" });
  };
  return (
    <div className="gallery-wrap">
      <div className="gallery" ref={ref}>
        {items.map((s, i) => {
          const [src, focal] = s.split("|");
          return (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              className="gi"
              key={i}
              src={img(src, 900)}
              alt=""
              loading="lazy"
              style={focal ? { objectPosition: focal } : undefined}
            />
          );
        })}
      </div>
      <button type="button" className="gallery-arrow ga-prev" onClick={() => scroll(-1)} aria-label="Imaginea anterioară">
        ‹
      </button>
      <button type="button" className="gallery-arrow ga-next" onClick={() => scroll(1)} aria-label="Imaginea următoare">
        ›
      </button>
    </div>
  );
}

/* A clip too heavy to self-host, parked on YouTube. Rather than an iframe (a
   third-party player that ignores the site's look and loads on sight), show
   YouTube's own thumbnail: blurred to fill the band, sharp on the card, and a
   plain link out. Costs one image. */
function YouTubeCard({ id, poster }: { id: string; poster: string }) {
  return (
    <a
      className="yt"
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="yt-bg" src={poster} alt="" aria-hidden />
      <div className="yt-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="yt-thumb" src={poster} alt="" />
        <div className="yt-play" aria-hidden>
          ▶
        </div>
      </div>
      <div className="yt-cta">View on YouTube ↗</div>
    </a>
  );
}

/* Fullscreen media modal — video opens with sound + controls (user gesture),
   stills open at full size. Closes on backdrop click / × / Esc, and locks page
   scroll while open. */
function MediaModal({ src, onClose }: { src: string | null; onClose: () => void }) {
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
      {/\.mp4$/i.test(src) ? (
        <video
          className="vmodal-video"
          src={encodeURI(videoVariant(src, isMobile))}
          poster={encodeURI(videoPoster(src))}
          autoPlay
          controls
          playsInline
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          className="vmodal-img"
          src={img(src, 2000)}
          alt=""
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const closeModal = useCallback(() => setModalSrc(null), []);

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
        {/* phone-only 2nd hero image; CSS crossfades it over #hero-bg every 10s */}
        <div id="hero-bg-2" aria-hidden />
        <div className="hero-c r">
          <p className="hero-eyebrow">Selected Works · 2023 — 2026</p>
          <h1 className="h1">OUR<br /><FillText className="out">WORK</FillText><br />SPEAKS</h1>
          <p className="hero-sub r d1">Fiecare proiect din acest portofoliu a pornit de la aceeași idee: make it impossible to ignore.</p>
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
          <SplitWords className="dim" text="FIECARE PROIECT E O OPORTUNITATE" /><br />
          SĂ CONSTRUIM<br />
          CEVA CARE RĂMÂNE.
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
      {PROJECTS.map((p, i) => (
        <Fragment key={p.id}>
          <div className="ps" id={p.id}>
            {p.heroReels ? (
              <ReelsHero videos={p.heroReels} eager={i === 0} />
            ) : p.bgVideo ? (
              <LazyVideo base={p.bgVideo} className="ps-bg-video" />
            ) : (
              <div className="ps-bg" style={{ backgroundImage: `url('${img(p.bg, 2000)}')` }} />
            )}
            <div className="ov-b" />
            <div className="ov-l" />
            <div className="pc">
              <div className="r">
                <div className="pi">{sceneIndex(i, PROJECTS.length)}</div>
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

          {p.reels && (
            <div className="reels-band">
              {p.reels.map((v, i) => (
                <button
                  type="button"
                  className="reel-card"
                  key={i}
                  onClick={() => setModalSrc(v)}
                  aria-label="Redă videoclipul pe tot ecranul"
                >
                  <LazyVideo base={v} />
                  <span className="reel-play" aria-hidden>
                    ⤢
                  </span>
                </button>
              ))}
            </div>
          )}

          {p.stripVideos ? (
            <div
              className="strip strip-video"
              style={{ gridTemplateColumns: p.stripStack ? "1fr" : `repeat(${p.stripVideos.length}, 1fr)` }}
            >
              {p.stripVideos.map((v, i) => (
                <button
                  type="button"
                  className="si si-video"
                  key={i}
                  style={{ aspectRatio: p.stripRatio ?? "16 / 9" }}
                  onClick={() => setModalSrc(v)}
                  aria-label="Redă videoclipul pe tot ecranul"
                >
                  <LazyVideo base={v} loop />
                  <span className="si-play" aria-hidden>
                    ⤢
                  </span>
                </button>
              ))}
            </div>
          ) : p.strip ? (
            <div
              className="strip"
              style={{ gridTemplateColumns: `repeat(${p.strip.length}, 1fr)` }}
            >
              {p.strip.map((s, i) => {
                const [src, focal] = s.split("|");
                return (
                  <button
                    type="button"
                    className="si si-img"
                    key={i}
                    onClick={() => setModalSrc(src)}
                    aria-label="Vezi imaginea pe tot ecranul"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img(src, 900)}
                      alt=""
                      style={focal ? { objectPosition: focal } : undefined}
                    />
                    <span className="si-zoom" aria-hidden>
                      ⤢
                    </span>
                  </button>
                );
              })}
            </div>
          ) : p.gallery ? (
            <Gallery items={p.gallery} />
          ) : null}

          {p.youtube && <YouTubeCard id={p.youtube.id} poster={p.youtube.poster} />}

          {p.next && (
            <div className="conn r">
              <span className="cl">Explorează mai departe</span>
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
                {w.video ? (
                  <LazyVideo base={w.video} />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={img(w.img, 900)} alt={w.alt} style={w.pos ? { objectPosition: w.pos } : undefined} />
                )}
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

      <MediaModal src={modalSrc} onClose={closeModal} />
    </>
  );
}
