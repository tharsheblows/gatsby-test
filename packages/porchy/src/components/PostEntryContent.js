/** @jsx jsx */
import { jsx } from 'theme-ui'
import { getComponents } from '../utils'
import makeElement from '../wp-blocks/components'
import React from 'react'

const PostEntryContent = ({ post, location, wordPressUrl }) => {

  const content = location === 'single' ? post.content : post.excerpt

  const blockComponents = getComponents(content)

  // OK trying this: https://www.storyblok.com/tp/react-dynamic-component-from-json
  return <>{blockComponents.map(block => makeElement(block))}</>
}

export default PostEntryContent
