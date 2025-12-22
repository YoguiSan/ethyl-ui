import { Config } from '@stencil/core';
import babel from '@rollup/plugin-babel';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ethyl-ui',
  outputTargets: [
    reactOutputTarget({
      outDir: 'dist/react-wrappers',
      customElementsDir: 'components',  // MUST match above dir
      stencilPackageName: 'ethyl-ui',
      includeImportCustomElements: true,
    }),
    {
      type: 'dist-custom-elements',
      dir: 'components',  // Creates dist/components/eui-button.js
      generateDistribution: true,
      customElementsExportBehavior: 'single-export-module',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
