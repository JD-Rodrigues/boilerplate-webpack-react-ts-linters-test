/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob')
const path = require('path')

const entryFiles = glob.sync('./src/**/*.{ts,tsx}')
const entryMap = { shared: 'lodash' }

entryFiles.forEach(entryFile => {
  const moduleName = path.basename(entryFile, path.extname(entryFile))
  entryMap[moduleName] = {
    import: `./${entryFile}`,
    dependOn: 'shared'
  }
})

module.exports = entryMap
