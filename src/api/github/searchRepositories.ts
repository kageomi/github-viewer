import { Octokit } from 'octokit'
import { RepositoryHeader } from '../../types/RepositoryHeader'

interface SearchRepositoriesRequest {
  q: string
  language?: string
  sort?: 'stars' | 'forks' | 'help-wanted-issues' | 'updated'
  order?: 'desc' | 'asc'
  perPage?: number
  page?: number
  signal?: AbortSignal
}

// type SearchRepositoriesResult = OctokitResponse<'GET /search/repositories'>
// type SearchRepositoriesResult = ReturnType<typeof Octokit.request>

const searchRepositories =
  (octokit: Octokit) =>
  async ({ signal, ...props }: SearchRepositoriesRequest) => {
    return await octokit.request('GET /search/repositories', {
      ...props,
      per_page: props.perPage,
      request: {
        signal
      }
    })
  }

export { searchRepositories }