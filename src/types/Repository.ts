import {
  is,
  object,
  string,
  number,
  optional,
  nullable,
  Infer,
  array
} from 'superstruct'

const RepositoryRuntimeType = object({
  id: number(),
  name: string(),
  full_name: string(),
  html_url: string(),
  description: nullable(string()),
  url: string(),
  created_at: string(),
  updated_at: string(),
  homepage: nullable(string()),
  language: nullable(string()),
  stargazers_count: number(),
  watchers: number(),
  license: nullable(
    object({
      key: string(),
      name: string(),
      url: nullable(string()),
      spdx_id: nullable(string()),
      node_id: string(),
      html_url: optional(string())
    })
  ),
  topics: optional(array(string()))
})

type Repository = Infer<typeof RepositoryRuntimeType>

const isRepository = (object: unknown): object is Repository => {
  return is(object, RepositoryRuntimeType)
}

export { isRepository }
export type { Repository }
