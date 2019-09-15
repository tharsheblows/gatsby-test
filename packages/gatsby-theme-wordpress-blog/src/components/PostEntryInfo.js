/** @jsx jsx */
import { jsx } from 'theme-ui'
import Date from './Date'
import Author from './Author'

const PostEntryInfo = ({ post }) => {
  const { date } = post
  return (
    <div className="entry-info" sx={{ fontSize: 1, mb: 1 }}>
        Posted on: <Date date={date} /> by{' '}
      <Author post={post} />
    </div>
  )
}

export default PostEntryInfo
