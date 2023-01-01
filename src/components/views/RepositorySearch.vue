<template>
  <div class="d-flex flex-column align-center">
    <h2>Search</h2>
    <v-divider class="my-5"></v-divider>
    <v-text-field
      block
      max-width="600"
      v-model="keyword"
      solo
      label="Enter the keyword for search repositories"
      clearable
    ></v-text-field>
    <v-card class="mx-auto" max-width="600" tile>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Single-line item</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
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
      keyword: ''
    }
  },
  watch: {
    keyword(newKeyword, prevKeyword) {
      console.log(newKeyword)
    }
  }
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
