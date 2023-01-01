<template>
  <div>
    <div class="d-flex flex-column align-center" v-if="repository">
      <h2>{{ repository?.full_name }}</h2>
      <v-divider class="my-5" style="min-width: 80%"></v-divider>
      <v-card class="mx-auto rounded px-5 py-5">
        <div class="d-flex flex-column align-start">
          <div class="d-flex justify-end mb-5" style="min-width: 100%">
            <a
              :href="repository.homepage ? repository.homepage : ''"
              alt="home page"
              style="text-decoration: none"
              target="_blank"
            >
              <v-btn class="mx-2" fab dark small>
                <v-icon>mdi-home</v-icon>
              </v-btn>
            </a>
            <a
              :href="repository.html_url ? repository.html_url : ''"
              alt="github page"
              style="text-decoration: none"
              target="_blank"
            >
              <v-btn class="mx-2" fab dark small>
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </a>
          </div>
          <div class="mb-5">language: {{ repository?.language }}</div>
          <div class="mb-5">
            <div>updated at: {{ repository?.updated_at }}</div>
            <div>created at: {{ repository?.created_at }}</div>
          </div>
          <div class="d-flex" style="gap: 10px">
            <p>
              star:
              <v-chip
                ><v-icon>mdi-star</v-icon
                >{{ repository?.stargazers_count }}</v-chip
              >
            </p>
            <p>
              watcher:
              <v-chip
                ><v-icon>mdi-eye</v-icon>{{ repository?.watchers }}</v-chip
              >
            </p>
          </div>
          <div
            class="d-flex align-center mb-5"
            style="gap: 10px"
            v-if="repository?.topics"
          >
            <span>topics:</span>
            <v-spacer></v-spacer>
            <v-chip :key="topic" v-for="topic in repository?.topics">{{
              topic
            }}</v-chip>
          </div>
          <div class="">{{ repository?.description }}</div>
        </div>
      </v-card>
    </div>
    <v-text-field loading disabled v-else></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import api from '../../api/github'
import { Repository } from '../../types/Repository'

export default Vue.extend({
  data() {
    return {
      repository: null as Repository | null
    }
  },
  mounted() {
    const { owner, repo } = this.$route.params
    this.getRepository(owner, repo)
  },
  methods: {
    async getRepository(owner: string, repo: string) {
      const { data } = await api.getRepository({ owner, repo })
      this.repository = {
        id: data.id,
        name: data.name,
        full_name: data.full_name,
        description: data.description,
        url: data.url,
        html_url: data.html_url,
        watchers: data.watchers,
        homepage: data.homepage,
        language: data.language,
        license: data.license,
        stargazers_count: data.stargazers_count,
        topics: data.topics,
        created_at: data.created_at,
        updated_at: data.updated_at
      }
    }
  }
})
</script>
