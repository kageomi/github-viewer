<template>
  <div class="d-flex flex-column align-center">
    <h2>Search Repositories</h2>
    <v-divider class="my-5"></v-divider>
    <v-text-field
      block
      max-width="600"
      v-model="keyword"
      solo
      :loading="isFetching"
      label="Enter the keyword for search repositories"
      clearable
    ></v-text-field>
    <v-card
      class="mx-auto rounded"
      max-width="600"
      tile
      v-if="repositories.length"
    >
      <div :key="repo.id" v-for="repo in repositories">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ repo.full_name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import api from '../../api/github/index'
import { RepositoryHeader } from '../../types/RepositoryHeader'
import { User } from '../../types/User'

interface State {
  keyword: string
  isFetching: boolean
  abortController: AbortController
  repositories: RepositoryHeader[]
}

export default Vue.extend({
  props: {
    msg: String
  },
  data() {
    const state: State = {
      keyword: '',
      isFetching: false,
      abortController: new AbortController(),
      repositories: []
    }
    return state
  },

  methods: {
    async search() {
      if (this.abortController) this.abortController.abort()
      this.abortController = new AbortController()
      const { signal } = this.abortController
      this.isFetching = true
      const { data } = await api.searchRepositories({ q: this.keyword, signal })
      console.log(data)
      const { items } = data
      this.repositories = items.map(item => ({
        id: item.id,
        name: item.name,
        full_name: item.full_name,
        description: item.description,
        url: item.url,
        homepage: item.homepage,
        language: item.language
      }))
      this.isFetching = false
    }
  },
  watch: {
    keyword(newKeyword, prevKeyword) {
      console.log(newKeyword)
      this.search()
    }
  }
})
</script>

<style scoped></style>
