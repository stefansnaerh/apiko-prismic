/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n : {
    locales: ["en", "en"],
    defaultLocale: "is",
  }
}

module.exports = nextConfig
