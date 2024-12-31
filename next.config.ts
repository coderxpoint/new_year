import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output:"export",
  images:{
    unoptimized:true,
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.unsplash.com"
      }
    ]
  },
  typescript:{
    ignoreBuildErrors:true,
  }
};

export default nextConfig;
