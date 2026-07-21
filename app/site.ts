/* Single source of truth for anything that has to agree across <head> metadata,
   JSON-LD, robots.txt and the sitemap. Change a value here, not in four places.

   `url` is the www host on purpose: the apex (embassynetwork.ro) answers with a
   308 to https://www.embassynetwork.ro, so www is the canonical origin. Pointing
   canonical/OG/sitemap at the apex would make every URL a redirect hop.

   Note: embassynetwork.com is an unrelated organisation that happens to share the
   name — deliberately not referenced anywhere here. */
export const SITE = {
  url: "https://www.embassynetwork.ro",
  name: "Embassy Network",
  legalName: "Embassy Network",
  locale: "ro_RO",
  lang: "ro",

  title: "Embassy Network — Branding, Social Media & Web Design",
  description:
    "Agenție de branding și marketing: strategie, social media, producție video, grafică și web design. 15+ proiecte în medical, beauty, tech și entertainment.",

  email: "hello@embassynetwork.ro",
  /* E.164 for schema.org / tel: links */
  phones: ["+40770458136", "+40720846002"],

  /* ── FILL THESE IN ──────────────────────────────────────────────────────
     Both are optional for the build — the JSON-LD below simply omits whatever
     is left blank, so nothing breaks and Google never sees an empty field.

     address: needed for the LocalBusiness schema to actually earn local
     results. Google wants a real, verifiable address (ideally matching your
     Google Business Profile). While `street` is empty the page falls back to
     plain Organization schema.

     sameAs: your official profile URLs (Instagram, Facebook, LinkedIn, TikTok,
     YouTube). These are what tie this domain to your brand entity — worth more
     than usual here, since a same-named .com already ranks for "embassy
     network". */
  address: {
    street: "",
    city: "București",
    region: "București",
    postalCode: "",
    country: "RO",
  },
  sameAs: [] as string[],
} as const;

/* LocalBusiness only once there is a street to put in it; otherwise the softer
   Organization type, which carries no address expectations. */
export function buildJsonLd() {
  const hasAddress = SITE.address.street.trim().length > 0;

  return {
    "@context": "https://schema.org",
    "@type": hasAddress ? "LocalBusiness" : "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    image: `${SITE.url}/og.jpg`,
    telephone: SITE.phones,
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    ...(hasAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.region,
            postalCode: SITE.address.postalCode,
            addressCountry: SITE.address.country,
          },
          priceRange: "$$",
        }
      : {}),
    areaServed: { "@type": "Country", name: "România" },
    knowsLanguage: ["ro", "en"],
  };
}
