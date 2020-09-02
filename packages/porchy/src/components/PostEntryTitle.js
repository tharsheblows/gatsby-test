/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

const PostEntryTitle = ({ post, location, postsPrefix }) => {
  const { title, uri } = post

  return (
    <>
      {location === 'single' ? (
        <Styled.h1
          sx={{ textTransform: `uppercase` }}
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <Styled.h1
          as="h2"
          className="entry-title"
          sx={{ textTransform: `uppercase` }}
        >
          <Styled.a
            as={Link}
            to={`/${postsPrefix}/${uri}/`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Styled.h1>
      )}
    </>
  )
}

export default PostEntryTitle
