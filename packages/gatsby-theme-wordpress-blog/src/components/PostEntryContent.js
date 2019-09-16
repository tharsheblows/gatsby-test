/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { createLocalLinksInContent } from '../utils'

const PostEntryContent = ({ post, location, wordPressUrl }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const localLinkContent = createLocalLinksInContent(
    content,
    wordPressUrl,
    `posts`
  )

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
