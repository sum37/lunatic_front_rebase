import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 이미지 최적화 기능 비활성화
  },
  basePath: "/lunatic_front_rebase",
  assetPrefix: "/lunatic_front_rebase/", // GitHub Pages에서 _next/static/이 올바르게 동작하도록 설정
  trailingSlash: true, // HTML 파일 확장자 처리
};

export default nextConfig;
