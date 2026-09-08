/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverExternalPackages: ['tldraw'],
  env: {
    // Prevents Tldraw client bundle from triggering production domain lockouts
    NEXT_PUBLIC_TLDRAW_ENV: 'development',
  },
};

export default nextConfig;