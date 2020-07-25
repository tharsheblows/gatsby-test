import { circleText } from './circle-text'
import { codeHighlighting } from './code-highlighting'
import React from 'react'
import MJJCircleText from './circle-text/MJJCircleText'
import MJJCodeHighlighting from './code-highlighting/MJJCodeHighlighting'

export function getLocalBlock(block) {
  const { blockName, attrs } = block
  let html = ''
  switch (blockName) {
    case 'mjj-why/circle-text':
      html += circleText(attrs)
      break
    case 'mjj-why/code-highlighting':
      html += codeHighlighting(attrs)
      break
  }
  return html
}

export function getLocalBlockComponent(block) {
  const { blockName, attrs } = block
  let component = ''

  switch (blockName) {
    case 'mjj-why/circle-text':
	  component = "MJJCircleText"
      break
    case 'mjj-why/code-highlighting':
	 component = "MJJCodeHighlighting"
      break
  }


  return {
	  component: component,
	  attributes: attrs
  }
}