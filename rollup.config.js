import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { sveltePreprocess } from 'svelte-preprocess';

export default {
  input: './src/main.js',
  output: {
    file: 'bundle/bundle.js',
    format: 'iife',
    name: 'MyCounter',
    inlineDynamicImports: true
  },
  plugins: [
    svelte({
      emitCss: true,
      preprocess: sveltePreprocess({
        postcss: true, // Use PostCSS to process TailwindCSS
      }),
      compilerOptions: {
        customElement: true
      }
    }),
    postcss(),
    resolve({
      browser: true,
      dedupe: ['svelte', 'flowbite-svelte']
    }),
    commonjs(),
    terser()
  ]
};