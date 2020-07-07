import React from 'react'
import Link from 'next/link'
import Query from '../Query'
import { TAGS_QUERY } from '../../apollo/queries/tags'

const TagLits = () => {
  return (
    <div>
      <Query query={TAGS_QUERY} variables={null}>
        {({ data: { categories } }) => (
          <div>
            <ul>
              {categories.map((tag) => (
                <li key={tag.id}>
                  <Link href="/tags/[slug]" as={`/tags/${tag.slug}`}>
                    <a>
                      {tag.name} - {tag.articles.length}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Query>
    </div>
  )
}

export default TagLits
