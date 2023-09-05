import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/buildOptions';
import path from 'path';

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: (__dirname)
    },
    proxy: {
      '/api/net': {
        target: 'https://ecrf.bioequivalencetrials.ru',
        changeOrigin: true
      },
    },
  };
}
