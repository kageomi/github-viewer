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
        <v-chip><v-icon>mdi-eye</v-icon>{{ repo.watchers }}</v-chip>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { RepositoryHeader } from '../../types/RepositoryHeader'

interface State {
  keyword: string
  isFetching: boolean
  abortController: AbortController
  repositories: RepositoryHeader[]
}

export default Vue.extend({
  props: {
    repo: Object as PropType<RepositoryHeader>
  }
})
</script>

<style scoped></style>
