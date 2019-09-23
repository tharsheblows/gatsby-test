import { parse } from '@wordpress/block-serialization-default-parser'

export const createLocalLinksInContent = (html, wordPressUrl, prefix = '') => {
  //Is there a better way to do this? Rather than sequentially?
  // First clean up the links.
  const regex = /href\s*=\s*(['"])(https?:\/\/.+?)\1/gi
  let link
  while ((link = regex.exec(html)) !== null) {
    if (link[2].includes(wordPressUrl)) {
      html = html.replace(wordPressUrl, `/${prefix}`)
    }
  }
  //console.log(parse(html))
  return html
}

export const createLocalLink = (url, wordPressUrl, prefix = '') => {
  if (`#` === url) {
    return null
  }
  return url.replace(wordPressUrl, prefix)
}
