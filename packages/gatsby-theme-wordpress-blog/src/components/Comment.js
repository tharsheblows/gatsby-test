/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import sanitizeHtml from 'sanitize-html'

import Date from './Date'

const Comment = ({ comment }) => {
  const { date, content, author: { name } } = comment
  const commentContent = sanitizeHtml( content, { allowedTags: ['p','br'] } )
  return (
    <>
      <div
        sx={{
          variant: `cards.lessMuted`,
          padding: [1, 2, 3],
          mb: 1,
          color: `white`,
        }}
      >
        From {name} on <Date date={date} />
        <div dangerouslySetInnerHTML={{ __html: commentContent }} />
      </div>
    </>
  )
}

export default Comment
