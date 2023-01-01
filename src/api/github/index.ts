import { Octokit } from 'octokit'
import { searchRepositories } from './searchRepositories'
import { getRepository } from './getRepository'

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN
})

const github = {
  searchRepositories: searchRepositories(octokit),
  getRepository: getRepository(octokit)
}

export default github
