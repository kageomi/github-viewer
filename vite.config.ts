import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [
        // Vuetify
        VuetifyResolver()
      ]
    })
  ],
  // https://stackoverflow.com/questions/73095592/octokit-js-not-working-with-vite-module-externalized-and-cannot-be-accessed-in/73095593#73095593
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch'
    }
  }
})
