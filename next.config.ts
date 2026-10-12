import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Matches the WordPress URLs (e.g. /ballon-decoration-in-delhi-ncr/) so existing rankings carry over.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        // The indexed URL keeps the "ballon" spelling; send the correct spelling to it.
        source: "/balloon-decoration-in-delhi-ncr",
        destination: "/ballon-decoration-in-delhi-ncr/",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
