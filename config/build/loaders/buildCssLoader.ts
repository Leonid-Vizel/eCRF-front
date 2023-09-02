import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "../types/buildOptions";
import webpack from "webpack";
import path from "path";

export function buildCssLoader(isDev: BuildOptions["isDev"]): webpack.RuleSetRule {
    return {
        test: /\.s[ac]ss$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: isDev
                  ? '[path][name]__[local]--[hash:base64:8]'
                  : '[hash:base64:8]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
          ,
        ],
      }
}