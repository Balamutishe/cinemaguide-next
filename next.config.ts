import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cinemaguide.skillbox.cc/**")],
  },
};

export default nextConfig;
