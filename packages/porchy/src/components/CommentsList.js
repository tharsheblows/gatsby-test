/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'

import Comment from './Comment'

const CommentsList = ({ post }) => {
  const commentCount = post.commentCount
  const commentHeading =
    commentCount > 1 ? 'Comments' : commentCount < 1 ? 'No comments' : 'Comment'
  const comments = post.comments.nodes
  return (
    <>
      <Styled.h2
        sx={{ textTransform: `uppercase`, fontSize: [3, 4, 5], mt: 4 }}
        className="comments-title"
      >
        {commentCount} {commentHeading}
      </Styled.h2>
      <div sx={{ mb: 2 }}>
        {comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </div>
    </>
  )
}

export default CommentsList
