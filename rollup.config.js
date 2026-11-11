import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const loadingIndicatorAsset = (fileName) => ({
  name: 'loading-indicator-asset',
  buildStart() {
    this.emitFile({
      type: 'asset',
      fileName,
      source: readFileSync(
        new URL('./components/loading-indicator/assets/img/loading-indicator.svg', import.meta.url)
      )
    });
  },
  renderChunk(code, chunk) {
    const componentAssetUrl = './assets/img/loading-indicator.svg';

    if (!code.includes(componentAssetUrl)) {
      return null;
    }

    const relativeAssetUrl = path.posix.relative(
      path.posix.dirname(chunk.fileName),
      fileName
    );

    return {
      code: code.replaceAll(componentAssetUrl, relativeAssetUrl),
      map: null
    };
  }
});

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
      loadingIndicatorAsset('assets/img/loading-indicator.svg'),
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
      loadingIndicatorAsset('assets/img/loading-indicator.svg'),
      postcss({
        extensions: ['.css', '.scss'],
        inject: true, // Bundles all CSS directly inside this single JS file
        minimize: true,
      }),
    ],
  }
]);
