/**
 * @type {import{'next'}.nextConfig}
 */

const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  i18n,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized:true,
  },
  reactStrictMode: true
}

module.exports = nextConfig
