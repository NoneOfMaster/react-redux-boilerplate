const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './client/rootMount',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'someEnvVarKey'",
        'API_URL': "'someEnvVarValue'",
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    })
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client'),
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader',
      },
      // imgs
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        // options: {
        //   name: '[path][name].[hash].[ext]',
      },
    ]
  },
}
