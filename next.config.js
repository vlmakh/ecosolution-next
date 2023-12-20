/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    deviceSizes: [360, 480, 768, 1280, 1536, 2560],
  },
};

module.exports = nextConfig;
