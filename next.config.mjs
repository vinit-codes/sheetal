/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pixels.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com", // ← ADD THIS LINE
      },
    ],
  },
  env: {
    FEATURED_PRODUCTS_CATEGORY_ID: process.env.FEATURED_PRODUCTS_CATEGORY_ID,
  },
};

export default nextConfig;
