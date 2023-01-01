import { Octokit } from 'octokit'

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
})

interface SearchRepositoriesRequest {
  q: string
  language?: string
  sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated'
  order?: 'desc' | 'asc'
  perPage?: number
  page?: number
}

interface GetRepositoryRequest {
  owner: string
  repo: string
}

const searchRepositories = async (props: SearchRepositoriesRequest) => {
  return await octokit.request('GET /search/repositories', {
    ...props,
    per_page: props.perPage
  })
}

const getRepository = async ({ owner, repo }: GetRepositoryRequest) => {
  return await octokit.request(`GET /repos/${owner}/${repo}`, {})
}

export { searchRepositories, getRepository }
