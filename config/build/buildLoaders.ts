import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';
import { buildCssLoader } from './loaders/buildCssLoader';
import path from 'path';

export default function buildLoader(
  options: BuildOptions,
): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const sourceMapLoader = {
    test: /\.(js)$/,
    use: ["source-map-loader"],
    exclude: [path.join(process.cwd(), 'node_modules')],
    enforce: "pre" as webpack.RuleSetRule["enforce"]
}

  const assetsModule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  }

  const assestFonts = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }

  const cssLoader = buildCssLoader(options.isDev)

  // const fileLoader = {
  //   test: /\.(png|jpe?g|gif)$/i,
  //   use: [
  //     {
  //       loader: 'file-loader',
  //     },
  //   ],
  // };

  const babelLoader = {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  };

  return [
    typescriptLoader, 
    cssLoader, 
    svgLoader, 
    babelLoader,
    assestFonts,
    // fileLoader,
    assetsModule,
    sourceMapLoader,
  ];
}
