const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
	chainWebpack: config => {
		config.resolve.alias['@'] = `${rootPath}/src/`;

		config.module
			.rule('scss')
			.test(/\.scss$/)
			.use('vue-style-loader')
			.loader('vue-style-loader')
			.end();

		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
                    @import "./src/assets/scss/config/_variables.scss";
                    @import "./src/assets/scss/helpers/_mixins.scss";
                `
			}
		}
	}
};
