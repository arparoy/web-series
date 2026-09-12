/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'streambox-alpha.vercel.app' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'palang-tod-zaroorat-ten.vercel.app' },
      { protocol: 'https', hostname: 'charmsukh-jane-anjane-mein.vercel.app' },
      { protocol: 'https', hostname: 'riti-riwaj-mann-marzi.vercel.app' },
      { protocol: 'https', hostname: 'meetiikalhercollection.vercel.app' },
      { protocol: 'https', hostname: 'sites.google.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'drive-thirdparty.googleusercontent.com' },
    ],
  },
};

module.exports = nextConfig;
