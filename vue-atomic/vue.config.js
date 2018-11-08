// vue.config.js
module.exports = {
  // options...
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vueWithAtomic/'
    : '/',
  // assetsDir: process.env.NODE_ENV === 'production'
  // ? '/vueWithAtomic/'
  // : '',
}
