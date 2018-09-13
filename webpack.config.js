const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
module.exports = {
  // the entry file for the bundle
  entry: 
  path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    filename: 'app.js',
    path: 
    path.resolve(__dirname, 'client/dist/js'),
  },
  watch: true,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: 'public'
  },

  module: {

    // apply loaders to files that meet given conditions

    // npm install --save-dev babel-plugin-transform-es2015-destructuring
    // npm install --save-dev babel-plugin-transform-object-rest-spread
    loaders: [{
      test: /\.jsx?$/,  
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"],
        plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
      }
    },  {
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ])
    }],
  },


  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes

  plugins: [
    new HtmlWebpackPlugin({
      template: './server/static/index.html'
    })
  ]
};
