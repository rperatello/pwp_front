const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Folhinha Net',
    themeColor: '#2596be',
    msTileColor: '#000000',
    manifestOptions: {
      name: 'Folhinha Net',
      short_name: "FolNet",
      start_url: '.',
      display: 'standalone',
      theme_color: '#2596be'
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // manifestPath : "src/manifest.json",
    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // }
  }
})
