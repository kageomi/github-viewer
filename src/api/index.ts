import { Octokit } from 'octokit'

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
})

const get = async () => {
  return await octokit.request('GET /search/repositories?q=react', {})
}

export { get }
