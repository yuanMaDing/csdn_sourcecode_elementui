module.exports = {
    /*如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建*/
    //productionSourceMap: false,
    /*设置dev服务端口*/
    devServer: {
        port: 8080,
    },
    /*
     * 应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/ 或者 ./
     */
    publicPath: './',
    /*当运行 vue-cli-service build 时生成的生产环境构建文件的目录*/
    outputDir: 'dist',
    /*放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录*/
    assetsDir: 'assets',
    /*指定生成的 index.html 的输出路径 (相对于 outputDir)*/
    indexPath: 'index.html',
    /*
     * 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
     * 然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。
     * 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
     */
    filenameHashing: false,
    /**
     * 打包上传服务器时,去掉代码中的console.log() 日志
     */
    chainWebpack(config) {
        console.log("======================process.env", process.env.NODE_ENV)
        config.when(process.env.NODE_ENV !== 'development', config => {
            config.optimization.minimizer('terser').tap(options => {
                options[0].terserOptions.compress.drop_console = true
                return options
            })
        })
    },
    css: {
        loaderOptions: {
            // 全局配置一个scss文件
            sass: {
                prependData: `@import"@/assets/global.base.scss";`
            }
        }
    }
}