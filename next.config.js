/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n : {
    locales: ["is", "en"],
    defaultLocale: "is",
  }
}

module.exports = nextConfig
