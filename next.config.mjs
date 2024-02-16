/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
  },
  assetPrefix: "/portfolio",
};

export default nextConfig;
