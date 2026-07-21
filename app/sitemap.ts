import type { MetadataRoute } from "next";
import { SITE } from "./site";

/* One real page, so one entry. The in-page sections (#goc, #promo, …) are
   deliberately absent: fragment URLs are not separate documents and listing
   them tends to get the whole sitemap treated as noise. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
