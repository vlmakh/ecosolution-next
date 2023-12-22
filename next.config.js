/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    deviceSizes: [360, 480, 768, 1280, 1536, 2560],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
