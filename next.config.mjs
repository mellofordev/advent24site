/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'i.ibb.co'],
    formats: ['image/webp'],
  },
};

export default nextConfig;
