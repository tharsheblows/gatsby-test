/** @jsx jsx */
import { jsx } from 'theme-ui'
import PostEntryTitle from './PostEntryTitle'
import PostEntryMedia from './PostEntryMedia'
import PostEntryContent from './PostEntryContent'
import PostEntryMeta from './PostEntryMeta'
import PostEntryInfo from './PostEntryInfo'

const PostEntry = ({ post, location, options }) => {
  const { postsPrefix, wordPressUrl } = options
  return (
    <article sx={{ variant: `cards.muted`, mb: 5 }}>
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
        <PostEntryContent
          location={location}
          post={post}
          wordPressUrl={wordPressUrl}
        />
        <div className="entry-footer" sx={{ color: `gray` }}>
          <PostEntryInfo className="entry-info" post={post} />
          <PostEntryMeta post={post} location={location} />
        </div>
      </div>
    </article>
  )
}

export default PostEntry
