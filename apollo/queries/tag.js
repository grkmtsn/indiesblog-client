import gql from 'graphql-tag'

export const TAG_QUERY = gql`
  query Tag($slug: String!) {
    tagBySlug(slug: $slug) {
      articles {
        title
        slug
        image {
          url
        }
      }
    }
  }
`
