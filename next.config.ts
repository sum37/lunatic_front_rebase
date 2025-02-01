import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // 이미지 최적화 기능 비활성화
  },
  basePath: '/lunatic_front_rebase',
  assetPrefix: '/lunatic_front_rebase/',
};

export default nextConfig;
