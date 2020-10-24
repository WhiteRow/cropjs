const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(sc|sa)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader',
						},
						{
							loader: 'sass-loader',
						}
					]
				}
			]
		},

		plugins: [
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash].css',
				chunkFilename: '[id].css',
			})
		]
	};
};
