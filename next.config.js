/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io/"],
  },
  pwa: {
    dest: "public",
    cacheOnFrontEndNav: true,
  },
});

module.exports = nextConfig;
