import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      include: [/\.[t]sx?$/],
      imports: ['react', 'ahooks', 'mobx-react-lite', 'mobx'],
      dts: './src/auto-imports.d.ts'
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
});
