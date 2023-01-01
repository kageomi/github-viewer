<template>
  <div>
    <h1>Search</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
