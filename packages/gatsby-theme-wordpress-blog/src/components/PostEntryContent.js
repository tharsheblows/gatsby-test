/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

const PostEntryContent = ({ post, location }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const localLinkContent = createLocalLink( content, wordPressUrl )

  return (
    <Styled.root
      sx={{
        a: {
          variant: 'links.decorated',
        },
      }}
      className="entry-content"
      dangerouslySetInnerHTML={{ __html: localLinkContent }}
    />
  )
}

export default PostEntryContent
