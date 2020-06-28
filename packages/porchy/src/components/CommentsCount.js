/** @jsx jsx */
import { jsx } from 'theme-ui'

const CommentsCount = ( { post } ) => {
  const commentCount = post.commentCount || 0
  return (
    <div sx={{ mb: 2 }}>
		Comments: { commentCount }
	</div>
  )
}

export default CommentsCount
