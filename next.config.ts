import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages에서 이미지 최적화 비활성화
  },
  basePath: "/lunatic_front_rebase",
  assetPrefix: "https://sum37.github.io/lunatic_front_rebase/",
  trailingSlash: true, // GitHub Pages에서 정적 파일 경로 문제 해결
};

export default nextConfig;
