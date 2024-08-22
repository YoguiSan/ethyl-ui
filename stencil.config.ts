import { Config } from '@stencil/core';
import babel from '@rollup/plugin-babel';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ethyl-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  rollupPlugins: {
    before: [
      /*
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs(),
      */
      babel({
        exclude: 'node_modules',
        presets: ['@babel/env', '@babel/preset-react'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
    ],
  },
  plugins: [
    sass(),
  ]
};
