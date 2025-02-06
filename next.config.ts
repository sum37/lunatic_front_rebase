const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: isProd ? "/lunatic_front_rebase" : "", // 로컬에서는 basePath 없음
  assetPrefix: isProd
    ? "https://sum37.github.io/lunatic_front_rebase"
    : "", // 로컬에서는 assetPrefix 없음
  trailingSlash: true,
};

export default nextConfig;
