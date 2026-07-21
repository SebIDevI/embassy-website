import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Dev-only: lets the phone on the LAN hit `next dev` for mobile testing.
     Ignored in production builds. */
  allowedDevOrigins: ["192.168.137.214"],
  async redirects() {
    return [
      /* The portfolio used to live at /portfolio and is now the homepage.
         Permanent (308) so anything already linking to or indexed at that URL
         passes its value on to / instead of turning into a 404. */
      { source: "/portfolio", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
