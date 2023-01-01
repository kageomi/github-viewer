import {
  is,
  object,
  string,
  number,
  optional,
  nullable,
  boolean,
  Infer
} from 'superstruct'
import { UserRuntimeType } from './User'

const RepositoryHeaderRuntimeType = object({
  id: number(),
  // node_id: string(),
  name: string(),
  full_name: string(),
  // owner: UserRuntimeType,
  // private: boolean(),
  // html_url: string(),
  description: nullable(string()),
  // fork: boolean(),
  url: string(),
  // created_at: string(),
  // created_at: '2012-01-01T00:31:50Z',
  // updated_at: string(),
  // pushed_at: string(),
  homepage: nullable(string()),
  // size: number(),
  // stargazers_count: number(),
  // watchers_count: number(),
  language: nullable(string()),
  // forks_count: number(),
  // open_issues_count: number(),
  // master_branch: string(),
  // default_branch: string(),
  // score: number(),
  // archive_url: string(),
  // assignees_url: string(),
  // blobs_url: string(),
  // branches_url: string(),
  // collaborators_url: string(),
  // comments_url: string(),
  // commits_url: string(),
  // compare_url: string(),
  // contents_url: string(),
  // contributors_url: string(),
  // deployments_url: string(),
  // downloads_url: string(),
  // events_url: string(),
  // forks_url: string(),
  // git_commits_url: string(),
  // git_refs_url: string(),
  // git_tags_url: string(),
  // git_url: string(),
  // issue_comment_url: string(),
  // issue_events_url: string(),
  // issues_url: string(),
  // keys_url: string(),
  // labels_url: string(),
  // languages_url: string(),
  // merges_url: string(),
  // milestones_url: string(),
  // notifications_url: string(),
  // pulls_url: string(),
  // releases_url: string(),
  // ssh_url: string(),
  stargazers_count: number(),
  // stargazers_url: string(),
  // statuses_url: string(),
  // subscribers_url: string(),
  // subscription_url: string(),
  // tags_url: string(),
  // teams_url: string(),
  // trees_url: string(),
  // clone_url: string(),
  // mirror_url: string(),
  // hooks_url: string(),
  // svn_url: string(),
  // forks: number(),
  // open_issues: number(),
  watchers: number(),
  // has_issues: boolean(),
  // has_projects: boolean(),
  // has_pages: boolean(),
  // has_wiki: boolean(),
  // has_downloads: boolean(),
  // archived: boolean(),
  // disabled: boolean(),
  // visibility: string(),
  license: nullable(
    object({
      key: string(),
      name: string(),
      url: nullable(string()),
      spdx_id: nullable(string()),
      node_id: string(),
      html_url: optional(string())
    })
  )
  // roman: optional(string())
})

type RepositoryHeader = Infer<typeof RepositoryHeaderRuntimeType>

const isRepositoryHeader = (object: unknown): object is RepositoryHeader => {
  return is(object, RepositoryHeaderRuntimeType)
}

export { isRepositoryHeader }
export type { RepositoryHeader }
