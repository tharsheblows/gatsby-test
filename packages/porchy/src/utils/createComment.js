import gql from 'graphql-tag'
// https://docs.wpgraphql.com/getting-started/comments
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
