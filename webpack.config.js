const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let mode = 'development'
let target = 'web'
const plugins = [
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: './src/index.html',
	}),
]

if (process.env.NODE_ENV === 'production') {
	mode = 'production'
	target = 'browserslist'
}
if (process.env.SERVE) {
	plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
	mode,
	target,

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.(gif|svg|webp|ico)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: { publicPath: '' },
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},

			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},

			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: `./fonts/[name].[ext]`,
						},
					},
				],
			},
		],
	},

	plugins,

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	devtool: 'source-map',
	devServer: {
		static: './dist',
		hot: true,
		open: true,
		client: {
			overlay: true,
		},
		historyApiFallback: true,
		port: 3000,
	},
}
