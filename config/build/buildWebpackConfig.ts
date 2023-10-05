import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';
import buildLoader from './buildLoaders';
import { buildPugins } from './buildPlugins';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';
import path from 'path';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode,
    context: __dirname,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename:'js/[name].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
      devtoolModuleFilenameTemplate: 'eCRF:///[resource-path]',
      assetModuleFilename: (pathData) => {
        const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name].[hash][ext][query]`;
      }
    },
    plugins: buildPugins(options),
    resolve: buildResolvers(options),
    module: {
      rules: buildLoader(options),
    },
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-cheap-module-source-map' : 'source-map',
}}
