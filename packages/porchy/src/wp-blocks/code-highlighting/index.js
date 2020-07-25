import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MJJCodeHighlighting from './MJJCodeHighlighting'

export const codeHighlighting = attributes => {
  const html = ReactDOMServer.renderToString(
    <MJJCodeHighlighting attributes={attributes} />
  )
  return html
}
