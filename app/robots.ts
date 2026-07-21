import type { MetadataRoute } from "next";
import { SITE } from "./site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /* Next's build output — nothing here is a landing page, and letting it be
         crawled just spends budget on hashed asset URLs. */
      disallow: ["/_next/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
