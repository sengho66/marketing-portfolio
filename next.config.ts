import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "starryhomestead.com",
        port: "",
        // pathname: '/my-bucket/**',
        search: "",
      },
    ],
  },
  output: "export",

  basePath: "/marketing-portfolio",
};

export default nextConfig;
