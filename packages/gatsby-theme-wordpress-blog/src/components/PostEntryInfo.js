/** @jsx jsx */
import { jsx } from 'theme-ui'
import Date from './Date'
import Author from './Author'

const PostEntryInfo = ({ post }) => {
  return (
    <div className="entry-info" sx={{ fontSize: 1, mb: 2 }}>
      <span sx={{ color: `text` }}>
        Posted on: <Date post={post} /> by{' '}
      </span>
      <Author post={post} />
    </div>
  )
}

export default PostEntryInfo
