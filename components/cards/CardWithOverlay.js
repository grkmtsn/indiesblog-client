import React from 'react'
import Link from 'next/link';

const CardWithOverlay = ({ article }) => {
  return (
    <div className="item with-overlay">
      <div className="image-wrapper">
        <Link href="/posts/[slug]" as={`/posts/${article.slug}`}>
          <a>
            <div
              className="img"
              style={{
                backgroundImage: `url(${process.env.API_URL}${article.image.url})`
              }}
            />
            <div className="overlay"></div>
          </a>
        </Link>
      </div>
      <div className="text">
        <Link href="/posts/[slug]" as={`/posts/${article.slug}`}>
          <a>{article.title}</a>
        </Link>
      </div>
    </div>
  )
}

export default CardWithOverlay
