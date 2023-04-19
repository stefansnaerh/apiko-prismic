/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n : {
    locales: ["is"],
    defaultLocale: "is",
  }
}

module.exports = nextConfig
