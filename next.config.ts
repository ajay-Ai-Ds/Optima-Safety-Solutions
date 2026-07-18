import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Serve AVIF first (best compression), fall back to WebP — massive LCP improvement
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 1 year in browser
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://www.optimasafetysolutions.in https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://www.clarity.ms https://*.clarity.ms; font-src 'self' data:; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
