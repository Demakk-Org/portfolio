/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    output: "export",
    trailingSlash: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
