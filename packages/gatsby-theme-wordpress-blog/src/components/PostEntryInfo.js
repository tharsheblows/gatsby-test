/** @jsx jsx */
import { jsx } from 'theme-ui'
import Date from './Date'
import Author from './Author'

const PostEntryInfo = ({ post }) => {
  return (
    <div className="entry-info" sx={{ fontSize: 1, mb: 1 }}>
        Posted on: <Date post={post} /> by{' '}
      <Author post={post} />
    </div>
  )
}

export default PostEntryInfo
