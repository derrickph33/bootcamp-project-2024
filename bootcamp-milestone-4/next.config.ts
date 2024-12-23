import type { NextConfig } from "next";

const nextConfig = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};

module.exports = nextConfig;

export default nextConfig;
