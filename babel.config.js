module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: 'last 1 version,> 1%,not dead',
        corejs: 3,
        useBuiltIns: 'usage' // 按需加载 减小打包体积 并自动引入core-js 和 regenerator-runtime
      }
    ],
    [
      '@babel/preset-typescript', // 引用Typescript插件
      {
        isTSX: true,
        jsxPragma: 'vue',
        allExtensions: true // 支持所有文件扩展名，否则在vue文件中使用ts会报错
      }
    ]
  ]
  const plugins = [
    '@babel/proposal-class-properties',
    "@vue/babel-plugin-jsx"
  ]

  return {
    presets,
    plugins
  }
}
