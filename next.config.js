<<<<<<< HEAD
/**
 * Minimal Next.js config for App Router setup.
 * Kept simple so this scaffold works in most environments.
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
};

module.exports = nextConfig;
=======
/**
 * Minimal Next.js config for App Router setup.
 * Kept simple so this scaffold works in most environments.
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
