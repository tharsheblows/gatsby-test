/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { parseContent } from '../utils'

const PostEntryContent = ({ post, location, wordPressUrl }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const localLinkContent = parseContent(content, wordPressUrl, `posts`)

  return (
    <Styled.root
      sx={{
        a: {
          variant: 'links.decorated',
          color: `primaryLight`,
        },
      }}
      className="entry-content"
      dangerouslySetInnerHTML={{ __html: localLinkContent }}
    />
  )
}

export default PostEntryContent
