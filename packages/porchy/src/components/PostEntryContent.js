/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { parseContent, getComponents } from '../utils'

const PostEntryContent = ({ post, location, wordPressUrl }) => {
  const content = location === 'single' ? post.content : post.excerpt
  const localLinkContent = parseContent(content, wordPressUrl, `posts`)

  const blockComponents = getComponents(content)

  // OK trying this: https://www.storyblok.com/tp/react-dynamic-component-from-json
  console.log(blockComponents)

  return <div>'hey there'</div>
}

export default PostEntryContent
