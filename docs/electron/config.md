# webSecurity

# nodeIntegration

https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration

官网 加载本地图片使用

``` js

app.on('ready', () => {
  registerLocalResourceProtocol()
  ...
})

function registerLocalResourceProtocol() {
  protocol.registerFileProtocol('local-resource', (request, callback) => {
    const url = request.url.replace(/^local-resource:\/\//, '')
    // Decode URL to prevent errors when loading filenames with UTF-8 chars or chars like "#"
    const decodedUrl = decodeURI(url) // Needed in case URL contains spaces
    try {
      return callback(decodedUrl)
    }
    catch (error) {
      console.error('ERROR: registerLocalResourceProtocol: Could not get file path:', error)
    }
  })
}

```
