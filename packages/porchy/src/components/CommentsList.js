/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'

import Comment from './Comment'

const CommentsList = ({ comments }) => {
  const commentCount = ( comments ) ? `${comments.length} ` : ''
  const commentHeading =
    commentCount > 1 ? 'Comments' : commentCount < 1 ? 'No comments' : 'Comment'
  const commentsList = comments ? (
    <>
      <div sx={{ mb: 2 }}>
        {comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </>
  ) : null

  return (
    <>
      <Styled.h2
        sx={{ textTransform: `uppercase`, fontSize: [3, 4, 5], mt: 4 }}
        className="comments-title"
      >
        {commentCount}{commentHeading}
      </Styled.h2>
      {commentsList}
    </>
  )
}

export default CommentsList
