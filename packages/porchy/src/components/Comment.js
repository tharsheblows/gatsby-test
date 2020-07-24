/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import sanitizeHtml from 'sanitize-html'

import Date from './Date'

const Comment = ({ comment }) => {
  const {
    date,
    content,
    author_name,
  } = comment
  const commentContent = sanitizeHtml(content.rendered, { allowedTags: ['p', 'br'] })
  return (
    <>
      <div
        sx={{
          variant: `cards.white`,
          padding: [1, 2, 3],
          mb: 1,
          border: t => `1px solid ${t.colors.shadePink}`,
          borderRadius: `5px`,
          color: `text`,
        }}
      >
        From {author_name} on <Date date={date} />
        <div dangerouslySetInnerHTML={{ __html: commentContent }} />
      </div>
    </>
  )
}

export default Comment
