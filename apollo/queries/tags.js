import gql from 'graphql-tag'

export const TAGS_QUERY = gql`
  query Categories {
    categories {
      id
      name
      icon
      slug
      articles {
        id
      }
    }
  }
`
