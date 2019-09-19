// https://docs.wpgraphql.com/getting-started/comments
//createComment(input:
// {author: "me",
//  content: "This is a comment ",
// authorEmail: "jjjay@mac.com",
//  commentOn: 2074,
// clientMutationId: "weoriuwqeoiu"}) {
  //   success
  //   clientMutationId
  // }

import gql from 'graphql-tag'

const CREATE_COMMENT = gql`
  # Define our query variables
	mutation CREATE_COMMENT($input: CreateCommentInput!) {
      createComment(input: $input) {
        success
        clientMutationId
        comment {
          author {
            ... on CommentAuthor {
              name
            }
          }
          content
          date
        }
      }
    }
`
export default CREATE_COMMENT
