import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "", // Leave empty for default ports (80 for HTTP, 443 for HTTPS)
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
