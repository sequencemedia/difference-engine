const presets = [
  [
    '@babel/env',
    {
      targets: {
        node: 'current'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

const plugins = [
  '@babel/proposal-export-default-from',
  '@babel/proposal-export-namespace-from',
  '@babel/proposal-class-properties',
  [
    'module-resolver', {
      root: ['./src'],
      cwd: 'babelrc',
      alias: {
        '@difference-engine': './src'
      }
    }
  ]
]

module.exports = {
  compact: true,
  comments: false,
  presets,
  plugins
}
