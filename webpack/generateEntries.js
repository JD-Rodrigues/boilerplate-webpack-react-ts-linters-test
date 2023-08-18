/* eslint-disable @typescript-eslint/no-var-requires */
const glob = require('glob')
const path = require('path')
const {dependencies} = require('../package.json')

const entryFiles = glob.sync('./src/**/*.{ts,tsx}').filter(file => !file.endsWith('.d.ts'))

const sharedLibsPaths = Object.keys(dependencies)

const sharedModulesPaths = entryFiles.map( entryFile => `./${entryFile}`)
  .filter(file => !file.endsWith('main.tsx')
  )

const entryMap = { shared: [...sharedLibsPaths,...sharedModulesPaths] }

entryFiles.forEach(entryFile => {
  const moduleName = path.basename(entryFile, path.extname(entryFile))
  entryMap[moduleName] = {
    import: `./${entryFile}`,
    dependOn: 'shared'
  }
})

module.exports = entryMap
console.log(entryMap)