/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'is5-ssl.mzstatic.com',
      'is1-ssl.mzstatic.com',
      'is2-ssl.mzstatic.com',
      'is4-ssl.mzstatic.com',
      'is3-ssl.mzstatic.com'
    ],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
