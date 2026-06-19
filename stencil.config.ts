import { Config } from '@stencil/core';
import babel from '@rollup/plugin-babel';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

// ...existing code...
export const config: Config = {
  namespace: 'ethyl-ui',
  outputTargets: [
    reactOutputTarget({
      outDir: 'dist/react-wrappers',
      // generated custom element files live under dist/components
      customElementsDir: 'dist/components',
      stencilPackageName: 'ethyl-ui',
      includeImportCustomElements: true,
    }),
    {
      type: 'dist-custom-elements',
      // emit actual component JS files here
      dir: 'dist/components',
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
