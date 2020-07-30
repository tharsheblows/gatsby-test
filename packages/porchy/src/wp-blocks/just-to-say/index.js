import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MJJJustToSay from './MJJJustToSay'

export const codeHighlighting = attributes => {
  const html = ReactDOMServer.renderToString(
    <MJJJustToSay attributes={attributes} />
  )
  return html
}
