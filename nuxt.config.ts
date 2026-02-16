import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Portfolio | Nuxt 3',
      meta: [
        { name: 'description', content: 'Clean and professional portfolio built with Nuxt 3 and Vue 3.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
});

