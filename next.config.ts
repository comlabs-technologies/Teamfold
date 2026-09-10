import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    /**
     * The largest image on the page renders at ~420px CSS width and the
     * sources themselves top out at 1800px, so generating 3840px variants
     * only wastes bytes and upscales. Cap the ladder at 1920.
     */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;
