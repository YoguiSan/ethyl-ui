import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default defineConfig([
  // 1. MODULES BUILD (For npm, local linking, and modern bundlers)
  {
    input: 'index.js',
    output: {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true, // Keeps individual component files separate
      preserveModulesRoot: 'src',
      entryFileNames: '[name].js',
    },
    plugins: [
      resolve(),
      postcss({
        extensions: ['.css', '.scss'],
        inject: true, // Automatically injects CSS into the document <head> on import
        minimize: true,
      }),
    ],
  },
  // 2. CDN BUILD (Single file for raw script tags)
  {
    input: 'index.js',
    output: {
      file: 'dist/cdn/index.global.js',
      format: 'umd', // Universal Module Definition works anywhere
      name: 'MyComponentLibrary', // Global variable name for CDN users
    },
    plugins: [
      resolve({
        // Forces Rollup to resolve directory imports by looking for index.js
        extensions: ['.js', '/index.js'] 
      }),
      postcss({
        extensions: ['.css', '.scss'],
        inject: true, // Bundles all CSS directly inside this single JS file
        minimize: true,
      }),
    ],
  }
]);
