import React from 'react'
import Link from 'next/link'

const PostCard = ({ article }) => {
  return (
    <div className="item post-card">
      <Link href="/posts/[slug]" as={`/posts/${article.slug}`}>
        <a>
          <div
            className="img"
            style={{
              backgroundImage: `url(${process.env.API_URL}${article.image.url})`
            }}
          />
        </a>
      </Link>
      <div className="description">
        <div className="titles">
          <h1>
            <Link href="/posts/[slug]" as={`/posts/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </h1>
          <h6>{article.title}</h6>
        </div>
        <div className="details">
          <div className="tags">
            {article.tags.map((tag) => (
              <Link key={tag.id} href="/tags/[slug]" as={`/tags/${tag.slug}`}>
                <a>
                  <div className="tag">{tag.name}</div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
