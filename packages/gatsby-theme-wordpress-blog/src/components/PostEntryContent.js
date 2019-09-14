/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const PostEntryContent = ({ post, location }) => {
  const content = location === 'single' ? post.content : post.excerpt
  return (
    <Styled.root
      sx={{
        a: {
          variant: 'links.decorated',
        },
      }}
      className="entry-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostEntryContent
