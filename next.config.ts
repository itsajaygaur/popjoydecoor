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
      {
        // Only the landing page exists so far, so send the placeholder root to it.
        // Temporary on purpose: a real home page is still to be migrated, and a
        // permanent redirect would be cached by browsers long after it ships.
        source: "/",
        destination: "/ballon-decoration-in-delhi-ncr/",
        permanent: false,
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
