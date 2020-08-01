import React from 'react'
import { circleText } from './circle-text'
import { codeHighlighting } from './code-highlighting'
import { v4 as uuidv4 } from 'uuid'

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
      component = 'MJJCircleText'
      break
    case 'mjj-why/code-highlighting':
      component = 'MJJCodeHighlighting'
      break
    case 'mjj-why/just-to-say':
      component = 'MJJJustToSay'
      break
  }
  return {
    component: component,
    attributes: attrs,
    key: uuidv4(),
  }
}