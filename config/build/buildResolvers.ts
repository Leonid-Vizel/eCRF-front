import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';
import path from 'path';

export default function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {src: path.resolve(__dirname, 'src'), root: __dirname},
    mainFiles: ['index'],
  };
}
