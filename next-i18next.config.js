const path = require('path')

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  localePath:
    typeof window === 'undefined'
      ? path.resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
}