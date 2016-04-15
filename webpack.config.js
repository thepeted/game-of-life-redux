const path = require('path');

const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  styles: path.join(__dirname, 'style')
};

const common = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
},
  plugins: [
    new HtmlWebPackPlugin({
      title: 'react-babel-sass-starter',
      template: 'html!./index.html'
    })
  ],
  module: {
    loaders: [
       {
         test: /.jsx?$/,
         loaders: ['babel'],
         include: PATHS.src
       }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

if (TARGET === 'start' || !TARGET){
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      //windows and vm users may need alternative host and port settings
      host: process.env.HOST,
      port: process.env.PORT
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css', 'postcss'],
          include: PATHS.styles
        },
         {
           test: /\.scss$|.sass$/,
           loaders: ['style', 'css', 'postcss', 'sass'],
           include: PATHS.styles
         }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        saveDev: true
      })
    ],
    postcss: function(){
      return [autoprefixer];
    }
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss'),
          include: PATHS.styles
        },
         {
           test: /\.scss$|.sass$/,
           loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
           include: PATHS.styles
         }
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css"),
      new CleanWebpackPlugin([PATHS.build]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ],
    postcss: function(){
      return [autoprefixer];
    }
  });
}
