<template>
  <div class="d-flex flex-column align-center">
    <h2>Search Repositories</h2>
    <v-divider class="my-5" style="min-width: 80%"></v-divider>
    <div class="d-flex" style="gap: 20px; min-width: 80%">
      <search-field
        class="flex-grow-1"
        v-model="keyword"
        :isFetching="isFetching"
      />
      <v-switch v-model="onlyMIT" :label="`only MIT License`"></v-switch>
    </div>
    <v-card
      class="mx-auto rounded"
      max-width="600"
      tile
      v-if="filteredRepositories.length"
    >
      <router-link
        :to="`repo/${repo.full_name}`"
        :key="repo.id"
        v-for="repo in filteredRepositories"
        style="text-decoration: none"
      >
        <repo-list-item :repo="repo" />
        <v-divider></v-divider>
      </router-link>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import api from '../../api/github/index'
import { Repository } from '../../types/Repository'
import RepoListItem from '../elements/RepoListItem.vue'
import SearchField from '../elements/SearchField.vue'

interface State {
  keyword: string
  isFetching: boolean
  abortController: AbortController
  repositories: Repository[]
  onlyMIT: boolean
}

const PER_PAGE = 100

export default Vue.extend({
  components: {
    RepoListItem,
    SearchField
  },
  data() {
    const state: State = {
      keyword: '',
      isFetching: false,
      abortController: new AbortController(),
      repositories: [],
      onlyMIT: false
    }
    return state
  },
  methods: {
    async search(keyword: string) {
      if (this.abortController) this.abortController.abort()
      this.abortController = new AbortController()
      const { signal } = this.abortController

      this.isFetching = true
      const { data } = await api.searchRepositories({
        q: keyword,
        perPage: PER_PAGE,
        signal
      })
      const { items } = data

      this.repositories = items.map(item => ({
        id: item.id,
        name: item.name,
        full_name: item.full_name,
        description: item.description,
        url: item.url,
        html_url: item.html_url,
        watchers: item.watchers,
        homepage: item.homepage,
        language: item.language,
        license: item.license,
        stargazers_count: item.stargazers_count,
        topics: item.topics,
        created_at: item.created_at,
        updated_at: item.updated_at
      }))
      this.isFetching = false
    }
  },
  computed: {
    filteredRepositories() {
      if (this.repositories == null) return []
      return this.repositories.filter(repo => {
        if (!this.onlyMIT) return true
        return repo.license && repo.license.key === 'mit'
      })
    }
  },
  watch: {
    keyword(newKeyword) {
      this.search(newKeyword)
    }
  }
})
</script>

<style scoped></style>
