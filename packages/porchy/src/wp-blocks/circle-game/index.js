import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Game from './Game'

export const codeHighlighting = attributes => {
  const html = ReactDOMServer.renderToString(
    <Game attributes={attributes} />
  )
  return html
}
