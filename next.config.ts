import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 85],  // ← все значения которые используешь
    formats: ['image/webp'],
  },
};

export default nextConfig;
