import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/buildOptions';
import { enviroments } from './deploy.configs';
import CopyPlugin from 'copy-webpack-plugin'

export function buildPugins({
  paths,
  isDev,
  stand,
  isLocal
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const baseURL = isLocal ? '' : enviroments[stand].api
  console.log('definePlugin', baseURL);
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __IS_LOCAL__: JSON.stringify(isLocal),
      __BASE_URL__: JSON.stringify(baseURL),
    }),
    new CopyPlugin({
      patterns: [{
        from: paths.htaccess,
      }]
    })
]

  if(isDev){
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
  }

  return plugins;
}
