import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin, loadEnv } from 'electron-vite';
import vue from '@vitejs/plugin-vue';
// renderer
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode);
  return {
    main: {
      plugins: [externalizeDepsPlugin()],
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
    },
    renderer: {
      resolve: {
        alias: {
          '@renderer': resolve('src/renderer/src'),
          '@pages': resolve('src/renderer/src/pages'),
        },
      },
      plugins: [
        vue(),
        UnoCSS(),

        // auto import components in templates
        Components({
          dts: 'src/types/components.d.ts',
          dirs: ['src/components'],
          resolvers: [NaiveUiResolver()],
        }),

        AutoImport({
          dts: 'src/types/auto-imports.d.ts',
          eslintrc: {
            enabled: true,
          },
          imports: [
            // presets
            'vue',
            'vue-router',
            'pinia',
            '@vueuse/core',
          ],
        }),
      ],
      server: {
        port: Number(env.VITE_APP_PORT) || 14514,
        proxy: {
          '/api/v1': {
            target: env.VITE_APP_API_URL,
            changeOrigin: true,
            ws: true,
            // rewrite: (path) => path.replace(new RegExp(`^/api/v1`), '')
          },
        },
      },
    },
  };
});
