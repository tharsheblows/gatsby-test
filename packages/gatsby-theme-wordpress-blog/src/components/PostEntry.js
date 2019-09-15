/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import PostEntryTitle from './PostEntryTitle'
import PostEntryMedia from './PostEntryMedia'
import PostEntryContent from './PostEntryContent'
import PostEntryMeta from './PostEntryMeta'
import PostEntryInfo from './PostEntryInfo'

const PostEntry = ({ post, location, options }) => {
  const { postsPrefix, wordPressUrl } = options
  return (
    <article sx={{ variant: `cards.dark`, mb: 5 }}>
      <PostEntryMedia
        location={location}
        post={post}
        postsPrefix={postsPrefix}
      />
      <div className="content">
        <PostEntryTitle
          location={location}
          post={post}
          postsPrefix={postsPrefix}
        />
        <PostEntryInfo className="entry-info" post={post} />
        <PostEntryContent location={location} post={post} wordPressUrl={wordPressUrl} />
        <div className="entry-footer">
          <PostEntryMeta post={post} />
          {location !== 'single' && (
            <Link
              sx={{
                variant: `buttons.secondary`,
                py: `15px`,
                display: `inline-block`,
              }}
              to={`${postsPrefix}/${post.uri}`}
              aria-label="Read More from this post"
            >
              Read More
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default PostEntry
