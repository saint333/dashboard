/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images:{
    loader: "imgix",
    path: "/",
    domains: ['https://dashboard-knrd.onrender.com/'],
  }
};

export default nextConfig;
