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
export default Vue.extend({
  data() {
    return {
      msg: 'Hello + Vue 2 :)'
    }
  },
  mounted() {}
})
</script>

<style scoped></style>
