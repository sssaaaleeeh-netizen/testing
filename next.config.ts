import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.salla.sa" },
      { protocol: "https", hostname: "**.salla.com" },
    ],
  },
  outputFileTracingIncludes: {
    "/api/download": ["./private-downloads/**"],
  },
};

export default nextConfig;
