import { parse } from '@wordpress/block-serialization-default-parser'

import { getLocalBlock } from '../wp-blocks'

export const parseContent = (html, wordPressUrl, prefix = '') => {
  //Is there a better way to do this? Rather than sequentially?
  // First clean up the links.
  let finalHtml = ''
  const blocks = html ? parse(html) : {}
  for (const block in blocks) {
    if (blocks.hasOwnProperty(block)) {
      // This probably doesn't handle inner blocks.
      const { blockName, attrs, innerBlocks, innerHTML } = blocks[block]
      if (blockName && blockName.startsWith('core')) {
        finalHtml += createLocalLinks(innerHTML, wordPressUrl, prefix)
      } else if (blockName) {
        finalHtml += createLocalLinks(getLocalBlock(blocks[block]))
      } else if (!blockName && innerHTML) {
        finalHtml += createLocalLinks(innerHTML, wordPressUrl, prefix)
      }
    }
  }

  return finalHtml
}

let createLocalLinks = (html, wordPressUrl, prefix = '') => {
  const regex = /href\s*=\s*(['"])(https?:\/\/.+?)\1/gi
  let link
  while ((link = regex.exec(html)) !== null) {
    if (link[2].includes(wordPressUrl)) {
      html = html.replace(wordPressUrl, `/${prefix}`)
    }
  }
  return html
}

export const createLocalLink = (url, wordPressUrl, prefix = '') => {
  if (`#` === url) {
    return null
  }
  return url.replace(wordPressUrl, prefix)
}
