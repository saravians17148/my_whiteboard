/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverExternalPackages: ['tldraw'],
  env: {
    // Ensures client canvas engines treat non-commercial deployments as standard instances
    TLDRAW_ENV: 'development',
  },
};

export default nextConfig;