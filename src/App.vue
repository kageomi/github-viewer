<template>
  <v-app>
    <v-app-bar app> Github Viewer </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { searchRepositories, getRepository } from './api/github'

export default Vue.extend({
  data() {
    return {
      msg: 'Hello + Vue 2 :)'
    }
  },
  mounted() {
    searchRepositories({ q: 'react' }).then(data => console.log(data))
    getRepository({ owner: 'kageomi', repo: 'japaoke' }).then(data =>
      console.log(data)
    )
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
