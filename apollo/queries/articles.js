import gql from 'graphql-tag'
export const ARTICLES_QUERY = gql`
  query Articles($limit: Int) {
    articles(limit: $limit) {
      id
      title
      slug
      view_count
      created_at
      tags {
        id
        name
        slug
      }
      image {
        url
      }
    }
  }
`