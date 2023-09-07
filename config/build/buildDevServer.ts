import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/buildOptions';
import { enviroments } from './deploy.configs';

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
  console.log('devServer', enviroments[options.stand].api);
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
        target: enviroments[options.stand].api,
        changeOrigin: true,
      },
    },
  };
}
