/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

const WithLink = ({ post, location, children, postsPrefix }) =>
  location === 'single' ? (
    children
  ) : (
    <Link to={`/${postsPrefix}/${post.uri}`} aria-label="View the entire post">
      {children}
    </Link>
  )

const PostEntryMedia = ({ post, location, postsPrefix }) => {
  const img = post.featuredImage

  return (
    <>
      {img && (
        <WithLink location={location} post={post} postsPrefix={postsPrefix}>
          <div
            className="entry-media"
            sx={{
              background: `url(${img.sourceUrl}) 50% 50% / cover`,
              height: [200, 300, 500],
              borderRadius: `10px 10px 0 0`,
            }}
          />
        </WithLink>
      )}
    </>
  )
}

export default PostEntryMedia
