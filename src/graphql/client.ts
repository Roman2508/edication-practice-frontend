import { GraphQLClient } from "graphql-request"

import { getSdk } from "./__generated__"

const client = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_API_URL || "http://localhost:1337/graphql"
)

export const gql = getSdk(client)
export * from "./__generated__"
