/**
 * BLOCK: mjj-why-code-highlighting
 *
 * The render bit is taken from https://github.com/pantheon-systems/code-highlighting-gutenberg-block by Daniel Bachhuber
 */

import React, { useState, useEffect } from 'react'
// importing copied style so I can edit it
import './styles.css'
//import 'prismjs/themes/prism.css'
import './styles-header.css' // separate from the code styles because I'm happy with these.

import Prism from 'prismjs'
import 'prismjs/components/prism-css.js'
import 'prismjs/components/prism-git.js'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-markup.js'
import 'prismjs/components/prism-nginx.js'
import 'prismjs/components/prism-php.js'
import 'prismjs/components/prism-python.js'
import 'prismjs/components/prism-sass.js'
import 'prismjs/components/prism-scss.js'
import 'prismjs/components/prism-sql.js'

import 'prismjs/components/prism-markup-templating'

// Themes to play with:
// prism.css
// prism-twilight.css
// prism-tomorrow.css
// prism-solarizedlight.css
// prism-okaidia.css
// prism-funky.css
// prism-dark.css
// prism-coy.css

// this approach is from https://www.ibenic.com/create-gutenberg-block-displaying-post/
const MJJCodeHighlighting = attributes => {
  const { language, code } = attributes
  const languageType = language || 'css'

  const [show, setShow] = useState(false)

  const createHighlighting = () => {
    let html = Prism.highlight(
      code,
      Prism.languages[languageType],
      languageType
    )
    return { __html: html }
  }
  console.log(show)
  useEffect(() => {
    console.log('in use effect')
    const toggleShow = () => {
      console.log('toggling')
      setShow(!show)
    }
    const toggleButton = document.getElementById('mjj-code-toggle')
    toggleButton.addEventListener('click', toggleShow)

    return () => {
      // clean up the event handler when the component unmounts
      toggleButton.removeEventListener('click', toggleShow)
    }
  }, [show])

  const languageClassName = 'language-' + languageType
  const headerClassName = 'language-header ' + languageType
  const languageHeading = languageType.toUpperCase()

  const codeDiv = show ? (
    <div>
      <button id="mjj-code-toggle">hide code</button>
      <div className={headerClassName}>{languageHeading}</div>
      <pre className={languageClassName}>
        <code
          //id={this.id}
          className={languageClassName}
          dangerouslySetInnerHTML={createHighlighting()}
        ></code>
      </pre>
    </div>
  ) : (
    <button id="mjj-code-toggle">show code</button>
  )
  return <div className="mjj-code-highlighting">{codeDiv}</div>
}

export default MJJCodeHighlighting
