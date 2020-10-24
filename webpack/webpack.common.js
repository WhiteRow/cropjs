const { merge } = require('webpack-merge');

const scripts = require('./components/scripts');
const directories = require('./components/directories');
const images = require('./components/images');
const extractFonts = require('./components/fonts.extract');
const extractHtml = require('./components/html.extract');
const extractSvgSprite = require('./components/svg.sprite');

const commonConfig = merge({
		entry: {
			app: directories.source + '/index.js',
		},

		target: 'web',

		resolve: {
			extensions: ['.js', '.json'],
			alias: {
				JsComponents: `${directories.source}/js/components`,
				StyleComponents: `${directories.source}/scss/components`,
			}
		},

		optimization: {
			splitChunks: {
				chunks: 'async',
				name: true
			}
		}
	},

	scripts(),
	images(),
	extractHtml(directories.source),
	extractFonts(),
	extractSvgSprite()
);

module.exports = commonConfig
