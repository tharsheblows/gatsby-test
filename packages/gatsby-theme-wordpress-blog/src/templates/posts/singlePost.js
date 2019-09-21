import React from 'react'
import { graphql } from 'gatsby'
import PostEntry from '../../components/PostEntry'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'

const SinglePost = ({ data, pageContext }) => {
  const { title, excerpt } = data.wpgraphql.post
  const { options } = pageContext

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PostEntry
        post={data.wpgraphql.post}
        location="single"
        options={options}
      />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        content(format: RAW)
        comments {
          nodes {
            commentId
            content
            date
            author {
              ... on WPGraphQL_CommentAuthor {
                id
                name
              }
            }
          }
        }
        ...PostTemplateFragment
      }
    }
  }
`
