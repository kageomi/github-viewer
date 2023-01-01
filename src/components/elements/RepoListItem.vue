<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ repo.full_name }}</v-list-item-title>
      <v-list-item-subtitle
        class="d-flex justify-end align-center mt-2"
        style="gap: 10px"
      >
        <div>{{ repo.license && repo.license.name }}</div>
        <v-chip v-if="repo.language">{{ repo.language }}</v-chip>
        <v-chip><v-icon>mdi-star</v-icon>{{ repo.stargazers_count }}</v-chip>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Repository } from '../../types/Repository'

interface State {
  keyword: string
  isFetching: boolean
  abortController: AbortController
  repositories: Repository[]
}

export default Vue.extend({
  props: {
    repo: Object as PropType<Repository>
  }
})
</script>

<style scoped></style>
