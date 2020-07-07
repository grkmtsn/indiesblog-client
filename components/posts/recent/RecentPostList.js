import React from 'react'
import { Row, Col } from 'react-grid-system'
import CardWithOverlay from '../../cards/CardWithOverlay'

const RecentPostList = ({ articles }) => {
  return (
    <div className="list">
      <Row>
        {articles.map((article) => (
          <Col sm={12} md={4} lg={4}>
            <CardWithOverlay article={article} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default RecentPostList
