import { Octokit } from 'octokit'

interface GetRepositoryRequest {
  owner: string
  repo: string
}

const getRepository =
  (octokit: Octokit) =>
  async ({ owner, repo }: GetRepositoryRequest) => {
    return await octokit.request(`GET /repos/${owner}/${repo}`, {})
  }

export { getRepository }
