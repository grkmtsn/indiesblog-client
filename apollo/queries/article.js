import gql from "graphql-tag";
export const ARTICLE_QUERY = gql`  
  query ArticleBySlug($slug: String!) {
    articleBySlug(slug: $slug) {
      id
      title
      content
      view_count
      image {
        url
      }
      tags {
        id
        name
      }
      publish_at
    }
  }
`;