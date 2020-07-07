import React from 'react'
import { Row, Col } from 'react-grid-system'
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  1600: 3,
  1100: 3,
  992: 2,
  768: 1,
  500: 1
}

const PostList = ({
  articles,
  compact,
  col,
  cardComponent: Component,
  masonry
}) => {
  return (
    <div className={compact ? 'compact list' : 'list'}>
      {masonry ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {articles.map((article) => (
              <Component article={article} key={article.id}/>
          ))}
        </Masonry>
      ) : (
        <Row>
          {articles.map((article) => (
            <Col sm={12} md={6} lg={col} key={article.id}>
              <Component article={article} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default PostList
