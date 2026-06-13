import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.salla.sa" },
      { protocol: "https", hostname: "**.salla.com" },
    ],
  },
};

export default nextConfig;
