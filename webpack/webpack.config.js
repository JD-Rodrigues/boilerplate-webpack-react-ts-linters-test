// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/main/index',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  }
}
