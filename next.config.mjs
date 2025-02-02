/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  swcMinify: true,
  productionBrowserSourceMaps: false,
  output: "standalone",
  trailingSlash: true,
};

export default nextConfig;
