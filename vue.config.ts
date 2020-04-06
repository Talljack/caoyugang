// vue config module
// tslint:disable-next-line: no-var-requires
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    filenameHashing: false,
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('src'))
        .set('style', resolve('src/common/style'))
        .set('components', resolve('src/components'))
        .set('pages', resolve('src/pages'));
    }
};