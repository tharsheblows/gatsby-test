import { circleText } from './circle-text'
import MJJCircleText from './circle-text/MJJCircleText'
import React from 'react'

export function getLocalBlock(block) {
  const { blockName, attrs } = block
  let html = ''
  switch (blockName) {
    case 'mjj-why/circle-text':
      html += circleText(attrs)
      break
  }
  return html
}
