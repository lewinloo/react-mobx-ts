import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import injectExternals from 'vite-plugin-inject-externals';
import Inspect from 'vite-plugin-inspect';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname);
  const prodMode = mode === 'production';
  const prodPlugins = prodMode
    ? [
        createHtmlPlugin({
          minify: true
        }),
        injectExternals.default({
          command: 'build',
          modules: [
            {
              name: 'react',
              global: 'React',
              path: 'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js'
            },
            {
              name: 'react-dom',
              global: 'ReactDOM',
              path: 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js'
            },
            {
              name: 'react-router-dom',
              global: 'ReactRouterDOM',
              path: 'https://cdn.bootcdn.net/ajax/libs/react-router-dom/6.3.0/react-router-dom.production.min.js'
            },
            {
              name: 'ahooks',
              global: 'ahooks',
              path: 'https://cdn.jsdelivr.net/npm/ahooks@3.6.2/dist/ahooks.js'
            }
          ]
        })
      ]
    : [];
  return {
    plugins: [
      react(),
      AutoImport({
        include: [/\.[t]sx?$/],
        imports: ['ahooks', 'mobx-react-lite', 'mobx'],
        dts: './src/auto-imports.d.ts'
      }),
      Inspect(),
      ...prodPlugins
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
    },
    css: {
      preprocessorOptions: {
        less: {}
      }
    },
    esbuild: {
      jsxInject: "import React from 'react';"
    },
    server: {
      host: 'localhost',
      port: 8080,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true
        }
      }
    },
    build: {
      // outDir: 'xxx',
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          // manualChunks: {}
        }
      },
      minify: 'terser',
      // 取消计算文件大小，加快打包速度
      brotliSize: false
    },
    base: './'
  };
});
