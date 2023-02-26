/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['prisma'],
    swcPlugins: [['next-superjson-plugin', {}]],

    appDir: true,
  },
};

module.exports = nextConfig;
