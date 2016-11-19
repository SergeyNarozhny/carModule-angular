module.exports = {
	entry: './car.module.js',
	output: {
		path: './static',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['/usr/local/lib/node_modules/babel-preset-es2015']
				}
			}
		]
	},
	resolveLoader: {
		fallback: '/usr/local/lib/node_modules'
	}
};
