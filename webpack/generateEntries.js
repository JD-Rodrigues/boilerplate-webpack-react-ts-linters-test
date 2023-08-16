/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob')
const path = require('path')

const entryFiles = glob.sync('./src/**/*.{ts,tsx}').filter(file => !file.endsWith('.d.ts'))

const sharedModules = entryFiles.map( entryFile => `./${entryFile}`)
  .filter(file => !file.endsWith('main.tsx')
  )

const entryMap = { shared: sharedModules }

entryFiles.forEach(entryFile => {
  const moduleName = path.basename(entryFile, path.extname(entryFile))
  entryMap[moduleName] = {
    import: `./${entryFile}`,
    dependOn: 'shared'
  }
})

module.exports = entryMap