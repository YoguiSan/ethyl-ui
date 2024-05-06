import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'ethyl-ui',
  globalStyle: 'src/global/app.css',
  // globalScript: 'src/global/app.ts',
  // taskQueue: 'async',
  commonjs: {
    namedExports: {
      'node_modules/pure-ui-react/dist/index.js': [
        'Button',
        'Grid',
        'Row',
        'Column',
      ],
    },
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      // baseUrl: 'https://myapp.local/',
    },
    {
      type: 'dist-hydrate-script',
    },
  ],
};
