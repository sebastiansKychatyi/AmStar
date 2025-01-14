import { defineNuxtConfig } from 'nuxt/config';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  plugins: [
    '~/plugins/pinia',  // Убедитесь, что плагин добавлен сюда
    '~/plugins/vuetify',
  ],
  app: {
    baseURL: process.env.BASE_URL || '', // Добавление гибкости для baseURL
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0',
        },
      ],
    },
  },

  css: [
    '@mdi/font/css/materialdesignicons.css',
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation',
    'quill/dist/quill.snow.css',
    'remixicon/fonts/remixicon.css',
    'vuetify/styles',
    '@/assets/scss/styles.scss',
  ],

  plugins: [
    '~/plugins/vuetify',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  components: true,

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.toLowerCase() === 'script',
    },
  },

  nitro: {
    output: {
      dir: 'dist',
      serverDir: 'dist/server',
    },
  },

  compatibilityDate: '2024-08-18',
});
