/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_G_KEY: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    NEXT_PUBLIC_IMAGE_API_KEY: process.env.NEXT_PUBLIC_IMAGE_API_KEY,
  },
};

module.exports = nextConfig;
