import { useRouter } from 'next/router'
import Link from 'next/link'
import Query from '../../components/Query'
import Moment from 'react-moment'
import { TAG_QUERY } from '../../apollo/queries/tag'

const PostListByTag = () => {
  const router = useRouter()
  return router.query && router.query.slug ? (
    <div>
      <Query query={TAG_QUERY} variables={{ slug: router.query.slug }}>
        {({ data: { tagBySlug } }) => (
          <div>
            {tagBySlug.articles.map((article) => (
              <div>
                <Link href="/posts/[slug]" as={`/posts/${article.slug}`}>
                  <a>{article.title}</a>
                </Link>
              </div>
            ))}
          </div>
        )}
      </Query>
    </div>
  ) : (
    ''
  )
}

export default PostListByTag
