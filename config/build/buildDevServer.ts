import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/buildOptions';
import { enviroments } from './deploy.configs';

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    // hot: true,
    allowedHosts: [
      'all'
    ],
    static: {
      directory: (__dirname)
    },
    proxy: {
      '/api/net': {
        target: enviroments[options.stand].api,
        changeOrigin: true,
      },
    },
  };
}
