import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": [
          {
            loader: "@svgr/webpack",
            options: { svgo: true },
          },
        ],
      },
    },
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'framer-motion', 'lucide-react'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        }
      ]
    }
  ]
};

export default nextConfig;
