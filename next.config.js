/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfigWithPWA = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io/"],
  },
  pwa: {
    dest: "public",
    cacheOnFrontEndNav: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io/"],
  },
};

module.exports = nextConfigWithPWA;
