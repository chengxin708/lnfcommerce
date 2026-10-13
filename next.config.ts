import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain static site. Cache Components stays off so /apps/[slug] can use
  // dynamicParams = false with an empty catalog.
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
