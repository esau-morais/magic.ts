import { gql } from "@apollo/client";

export const QUERY = gql`
  query {
    assets {
      id
      url
    }
  }
`