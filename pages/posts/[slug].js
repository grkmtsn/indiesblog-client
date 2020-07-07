import { useRouter } from 'next/router'
import Query from '../../components/Query'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { ARTICLE_QUERY } from '../../apollo/queries/article'

const Post = () => {
  const router = useRouter();
  return (
    router.query &&
    router.query.slug ? (
      <Query query={ARTICLE_QUERY} variables={{ slug: router.query.slug }}>
        {({ data: { articleBySlug } }) => {
          return (
            <div>
              <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={process.env.API_URL + articleBySlug.image.url}
                data-srcset={process.env.API_URL + articleBySlug.image.url}
                data-uk-img
              >
                <h1>{articleBySlug.title} - {articleBySlug.view_count}</h1>
              </div>
              <div className="uk-section">
                <div className="uk-container uk-container-small">
                  <ReactMarkdown source={articleBySlug.content} transformImageUri={(uri) => `${process.env.API_URL}${uri}`}/>
                  <p>
                    <Moment format="DD.MM.YYYY">
                      {articleBySlug.published_at}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    ) : ''
  )
}

export default Post
