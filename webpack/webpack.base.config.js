import { merge }  from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
//import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import NodePolyfillPlugin from"node-polyfill-webpack-plugin";
import path from 'path';
import { fileURLToPath } from 'url';
import  webpack from 'webpack';


 const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name', __dirname);


let webpackBaseConfig = () => {
  return merge([
    {
      //target: "node",
      externals:{
        "fs": "commonjs fs",
        "net": "commonjs net",
        //"express": "express",
    },
      mode: 'production',
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
            test: /\.module\.(sa|sc|c)ss$/,
            use: [
              {
              loader:'style-loader',
            
              },
              {
                loader: 'css-loader',
               
              },
              'sass-loader'
            ]
          },
          {
            
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader,
  
              'css-loader',
              'sass-loader',
              
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
      resolve:{
        fallback:{
          "async_hooks": false
        }
      },
     
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: 'index.html'
        }),
        new webpack.DefinePlugin({
          'process.platform': JSON.stringify(process.platform)
        }),
       
        new NodePolyfillPlugin(),
        new MiniCssExtractPlugin({

          
        })
      ],
      devServer: {
        historyApiFallback: true,
        
          static: {
            directory: path.join(__dirname, 'dist'),
              
            }
        }
    
    
    
  }]);
    };
   export default webpackBaseConfig();