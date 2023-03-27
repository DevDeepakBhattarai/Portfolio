/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
    loader: "akamai",
    path: "",
  },
  // basePath: "/Portfolio",
  // assetPrefix: "/Portfolio",
};

module.exports = nextConfig;
