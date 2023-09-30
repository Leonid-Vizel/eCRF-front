export type BuildMode = 'development' | 'production';

export enum Stand {
  DEV = 'dev',
  PROD = 'prod'
}

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  favicon: string;
  htaccess: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  stand: string;
  server: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
  stand: Stand;
  isLocal: boolean
}
