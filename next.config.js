/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imdb-api.com', 'image.tmdb.org'],
  },
  experimental: { images: { allowFutureImage: true } }
}

module.exports = nextConfig
