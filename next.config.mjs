/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "/portfolio",
  },
  assetPrefix: "/portfolio",
};

export default nextConfig;
