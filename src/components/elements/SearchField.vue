<template>
  <v-text-field
    :value="value"
    :loading="isFetching"
    @input="handleInput"
    prepend-inner-icon="mdi-magnify"
    block
    max-width="600"
    solo
    label="Enter the keyword for search repositories"
    clearable
  ></v-text-field>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: String,
    isFetching: Boolean
  },
  methods: {
    handleInput(value: string) {
      this.$emit('input', value)
    }
  }
})
</script>

<style scoped></style>
