import { is, object, string, number, Infer, optional } from 'superstruct'

const UserRuntimeType = object({
  // login: string(),
  name: optional(string()),
  id: number(),
  node_id: string(),
  avatar_url: string(),
  e_mail: optional(string()),
  // gravatar_id: optional(string()),
  url: string(),
  // received_events_url: string(),
  type: string(),
  html_url: string()
  // followers_url: string(),
  // following_url: string(),
  // gists_url: string(),
  // starred_url: string(),
  // subscriptions_url: string(),
  // organizations_url: string(),
  // repos_url: string(),
  // events_url: string(),
  // site_admin: boolean()
})

type User = Infer<typeof UserRuntimeType>

const isUser = (object: unknown): object is User => {
  return is(object, UserRuntimeType)
}

export { isUser, UserRuntimeType }
export type { User }
