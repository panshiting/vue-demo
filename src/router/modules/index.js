const files = require.context('./', false, /\.js$/)

let commonRoutes = {}

files.keys().forEach(key => {
  if (key === './index.js') {
    return false
  }
  commonRoutes = { ...commonRoutes, ...files(key).default }
})

export default commonRoutes
