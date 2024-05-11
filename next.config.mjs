/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images:{
    loader: "imgix",
    path: "/",
    unoptimized: true,
  }
};

export default nextConfig;
