import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [];
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
  server: {
    port: 3001
  }
};

export default nextConfig;