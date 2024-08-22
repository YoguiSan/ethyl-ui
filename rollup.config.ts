import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default [{
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    babel({
      exclude: ['node_modules/**, !node_modules/pure-ui-react/**'],
      presets: ['@babel/env', '@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    })
  ],
  external: [
    'react',
    'prop-types',
  ],
  globals: {
    react: "React"
  },
},
];
