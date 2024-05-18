/**
 * @type {import{'next'}.nextConfig}
 */

//const { i18n } = require('./next-i18next.config.js')

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // basePath: isProd ? "/Portafolio-lite": '',
  output: "export",
  distDir: "dist",
  images: {
    unoptimized:true,
  },
  reactStrictMode: true
}

module.exports = nextConfig
