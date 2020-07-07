import Head from 'next/head'
import Link from 'next/link'
import { Row, Col } from 'react-grid-system'
import { adopt } from 'react-adopt'

import { ARTICLES_QUERY } from '../apollo/queries/articles'
import { TAGS_QUERY } from '../apollo/queries/tags'

import TagLits from '../components/tags/TagList'
import Query from '../components/Query'
import RecentPostList from '../components/posts/recent/RecentPostList'
import PostCard from '../components/cards/PostCard'
import Section from '../components/Section'
import PostList from '../components/PostList'
import CardWithOverlay from '../components/cards/CardWithOverlay'

import { getMostRecentArticles, getPopularArticles } from '../utils/select'

const ComposedQueries = adopt({
  articles: <Query query={ARTICLES_QUERY} />,
  tags: <Query query={TAGS_QUERY} />
})

const Home = ({ deviceType }) => {
  console.log(deviceType)
  return (
    <ComposedQueries>
      {({
        articles: {
          data: { articles }
        },
        tags: {
          data: { categories }
        }
      }) => {
        const mostRecentArticles = getMostRecentArticles(articles)
        const popularArticles = getPopularArticles(articles)
        return (
          <div className="main">
            <Section title="Son Eklenenler">
              <PostList
                articles={mostRecentArticles}
                col={3}
                cardComponent={CardWithOverlay}
              />
            </Section>
            <section className="section">
              <Row>
                <Col sm={12} md={12} lg={9}>
                  <Section title="Popüler Yazılar">
                    <PostList
                      articles={popularArticles}
                      cardComponent={PostCard}
                      masonry
                    />
                  </Section>
                </Col>
                <Col sm={12} md={12} lg={3}>
                  <div className="tags">
                    <h3 className="title">Kategoriler</h3>
                    <div className="list">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href="/tags/[slug]"
                          as={`/tags/${category.slug}`}
                        >
                          <a>
                            <div className="item">
                              <div className="texts">
                                <div className="name">{category.name}</div>
                                <div className="post-count">
                                  {category.articles.length} Yazı
                                </div>
                              </div>
                              <div className="icon">
                                <img
                                  src={`/images/icons/${category.icon}.png`}
                                />
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </section>
          </div>
        )
      }}
    </ComposedQueries>
  )
}

export default Home
