import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Beata | Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            "Hi! I'm Beata. I craft responsive, visually engaging web experiences with a love for intuitive UI and clean code."
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
});

