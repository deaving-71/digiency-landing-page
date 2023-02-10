/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "scontent.faae2-2.fna.fbcdn.net",
    ],
  },
}

module.exports = nextConfig
