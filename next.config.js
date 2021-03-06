require('dotenv').config()
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL
  },
  cssLoaderOptions: {
    url: false
  }
})
