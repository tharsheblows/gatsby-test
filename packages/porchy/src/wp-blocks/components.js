import React from 'react'
import MJJContentHolder from './content-holder'
import MJJCircleText from './circle-text/MJJCircleText'
import MJJCodeHighlighting from './code-highlighting/MJJCodeHighlighting'


const Components = {
  MJJCircleText: MJJCircleText,
  MJJCodeHighlighting: MJJCodeHighlighting,
  MJJContentHolder: MJJContentHolder
}

const makeElement = ( block ) => {
  // component does exist
  if (typeof Components[block.component] !== 'undefined') {
    return React.createElement(Components[block.component], {
      key: block.key,
      block: block,
    })
  }
  // component doesn't exist yet
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block.key }
  )
}

export default makeElement
