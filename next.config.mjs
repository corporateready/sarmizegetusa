/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 1920],
    minimumCacheTTL: 60,
    qualities: [25, 50, 65, 85],
  },
  productionBrowserSourceMaps: false,
  async rewrites() {
    return [
      {
        source: "/posthog-assets/:path*",
        destination: "https://eu-assets.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
