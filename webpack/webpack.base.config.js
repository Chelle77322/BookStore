import {merge}  from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);


let webpackBaseConfig = () => {
  return merge([
    {
      mode: 'none',
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
      module: {
    
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
          test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            }
          },
          {
            
              test: /\.(sa|sc|c)ss$/,
              use: [
    {loader:'css-loader', 
    options: {
      sourceMap: true,
    },},
                
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                  },
                },
                
              ]
            
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
            },
          },
        
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html'
        })
      ],
  }]);
    };
   export default webpackBaseConfig();